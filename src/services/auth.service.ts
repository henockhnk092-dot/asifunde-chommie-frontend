import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import type { UserProfile, UserRole, LearnerProfile, ParentProfile, TeacherProfile } from '../types';

// Sign up with email and password
export const signUpWithEmail = async (
  email: string,
  password: string,
  displayName: string,
  role: UserRole,
  additionalData?: Partial<UserProfile>
): Promise<User> => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, { displayName });

    // Send email verification
    await sendEmailVerification(user);

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      displayName,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      subscriptionStatus: 'free',
      ...additionalData,
    };

    await setDoc(doc(db, 'users', user.uid), {
      ...userProfile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Create role-specific profile
    if (role === 'learner') {
      const learnerProfile: Partial<LearnerProfile> = {
        grade: (additionalData as any)?.grade || 10,
        subjects: (additionalData as any)?.subjects || [],
        language: (additionalData as any)?.language || 'en',
      };
      await setDoc(doc(db, 'learners', user.uid), learnerProfile);
    } else if (role === 'parent') {
      await setDoc(doc(db, 'parents', user.uid), {
        linkedChildren: [],
      });
    } else if (role === 'teacher') {
      await setDoc(doc(db, 'teachers', user.uid), {
        approved: false,
        subjects: (additionalData as any)?.subjects || [],
      });
    }

    return user;
  } catch (error: any) {
    console.error('Error signing up:', error);
    throw new Error(error.message || 'Failed to sign up');
  }
};

// Sign in with email and password
export const signInWithEmail = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error('Error signing in:', error);
    throw new Error(error.message || 'Failed to sign in');
  }
};

// Sign in with Google
export const signInWithGoogle = async (): Promise<User> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user profile exists
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await createUserProfile(user);
      }
    } catch (firestoreError: any) {
      // If we get a permission error, it might be because we can't read a non-existent doc
      // due to strict security rules. Try to create/merge the profile anyway.
      if (firestoreError.code === 'permission-denied' || firestoreError.message.includes('Missing or insufficient permissions')) {
        console.warn('Permission denied reading user profile. Attempting to create/merge profile...');
        try {
          await createUserProfile(user, true);
        } catch (createError: any) {
          console.error('Failed to create/merge profile after permission denied:', createError);
          // Allow sign-in to proceed even if profile creation fails
          // The UI might need to handle missing profile data gracefully
        }
      } else {
        throw firestoreError;
      }
    }

    return user;
  } catch (error: any) {
    console.error('Error signing in with Google:', error);
    throw new Error(error.message || 'Failed to sign in with Google');
  }
};

// Helper to create user profile
const createUserProfile = async (user: User, merge: boolean = false) => {
  const userProfile: UserProfile = {
    uid: user.uid,
    email: user.email!,
    displayName: user.displayName || 'User',
    role: 'learner', // Default role
    createdAt: new Date(),
    updatedAt: new Date(),
    subscriptionStatus: 'free',
    photoURL: user.photoURL || undefined,
  };

  await setDoc(doc(db, 'users', user.uid), {
    ...userProfile,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }, { merge });

  // Only create role profiles if we're not merging (fresh create) or if we want to ensure they exist
  if (!merge) {
    await setDoc(doc(db, 'learners', user.uid), {
      grade: 10,
      subjects: [],
      language: 'en',
    });
  }
};

// Sign out
export const logOut = async (): Promise<void> => {
  try {
    // Clear localStorage tokens and user data
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userProfile');

    // Note: Backend logout endpoint is optional since we're using JWT tokens
    // The token invalidation happens on the client side by removing the token
    console.log('✅ Logged out successfully');
  } catch (error: any) {
    console.error('Error signing out:', error);
    throw new Error(error.message || 'Failed to sign out');
  }
};

// Send password reset email
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    console.error('Error sending password reset email:', error);
    throw new Error(error.message || 'Failed to send password reset email');
  }
};

// Get user profile
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error: any) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

// Update user profile
export const updateUserProfile = async (uid: string, data: Partial<UserProfile>): Promise<void> => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (error: any) {
    console.error('Error updating user profile:', error);
    throw new Error(error.message || 'Failed to update profile');
  }
};

// Get learner profile
export const getLearnerProfile = async (uid: string): Promise<LearnerProfile | null> => {
  try {
    const [userDoc, learnerDoc] = await Promise.all([
      getDoc(doc(db, 'users', uid)),
      getDoc(doc(db, 'learners', uid)),
    ]);

    if (userDoc.exists() && learnerDoc.exists()) {
      return {
        ...userDoc.data(),
        ...learnerDoc.data(),
      } as LearnerProfile;
    }
    return null;
  } catch (error: any) {
    console.error('Error getting learner profile:', error);
    return null;
  }
};

// Get parent profile
export const getParentProfile = async (uid: string): Promise<ParentProfile | null> => {
  try {
    const [userDoc, parentDoc] = await Promise.all([
      getDoc(doc(db, 'users', uid)),
      getDoc(doc(db, 'parents', uid)),
    ]);

    if (userDoc.exists() && parentDoc.exists()) {
      return {
        ...userDoc.data(),
        ...parentDoc.data(),
      } as ParentProfile;
    }
    return null;
  } catch (error: any) {
    console.error('Error getting parent profile:', error);
    return null;
  }
};

// Get teacher profile
export const getTeacherProfile = async (uid: string): Promise<TeacherProfile | null> => {
  try {
    const [userDoc, teacherDoc] = await Promise.all([
      getDoc(doc(db, 'users', uid)),
      getDoc(doc(db, 'teachers', uid)),
    ]);

    if (userDoc.exists() && teacherDoc.exists()) {
      return {
        ...userDoc.data(),
        ...teacherDoc.data(),
      } as TeacherProfile;
    }
    return null;
  } catch (error: any) {
    console.error('Error getting teacher profile:', error);
    return null;
  }
};

// Check subscription status
export const checkSubscriptionStatus = async (uid: string): Promise<'free' | 'premium'> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      const data = userDoc.data() as UserProfile;
      if (data.subscriptionStatus === 'premium' && data.subscriptionExpiry) {
        if (new Date(data.subscriptionExpiry) > new Date()) {
          return 'premium';
        } else {
          // Subscription expired, update to free
          await updateDoc(doc(db, 'users', uid), {
            subscriptionStatus: 'free',
            updatedAt: serverTimestamp(),
          });
          return 'free';
        }
      }
      return data.subscriptionStatus || 'free';
    }
    return 'free';
  } catch (error: any) {
    console.error('Error checking subscription status:', error);
    return 'free';
  }
};
