/**
 * Test Accounts Setup Utility
 *
 * This file contains functions to create all test accounts for development and testing.
 * Run this once during initial setup.
 *
 * Test Account Credentials:
 *
 * Admin:
 * Email: admin@gmail.com
 * Password: Asifunde@2025
 *
 * Parent:
 * Email: parent@gmail.com
 * Password: Asifunde@2025
 *
 * Student:
 * Email: student@gmail.com
 * Password: Asifunde@2025
 *
 * Teacher:
 * Email: teacher@gmail.com
 * Password: Asifunde@2025
 */

import { signUpWithEmail } from '../services/auth.service';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { UserRole } from '../types';

interface TestAccount {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

const TEST_ACCOUNTS: TestAccount[] = [
  {
    email: 'admin@gmail.com',
    password: 'Asifunde@2025',
    name: 'Admin User',
    role: 'admin',
  },
  {
    email: 'parent@gmail.com',
    password: 'Asifunde@2025',
    name: 'Parent User',
    role: 'parent',
  },
  {
    email: 'student@gmail.com',
    password: 'Asifunde@2025',
    name: 'Student User',
    role: 'learner',
  },
  {
    email: 'teacher@gmail.com',
    password: 'Asifunde@2025',
    name: 'Teacher User',
    role: 'teacher',
  },
];

/**
 * Create a single test account
 */
const createTestAccount = async (account: TestAccount) => {
  try {
    console.log(`Creating ${account.role} account: ${account.email}...`);

    // Create user in Firebase Auth and Firestore
    const user = await signUpWithEmail(
      account.email,
      account.password,
      account.name,
      account.role,
      {
        role: account.role,
        subscriptionStatus: account.role === 'admin' ? 'premium' : 'free',
      }
    );

    // Create role-specific profile
    if (account.role === 'admin') {
      await setDoc(doc(db, 'admins', user.uid), {
        createdAt: new Date(),
        permissions: ['all'],
      });
    } else if (account.role === 'learner') {
      // Learner profile already created by signUpWithEmail
      // Optionally add additional test data
      await setDoc(doc(db, 'learners', user.uid), {
        grade: 10,
        subjects: ['Mathematics', 'Physical Sciences'],
        language: 'en',
      }, { merge: true });
    }

    console.log(`✅ ${account.role} account created successfully!`);
    return user;
  } catch (error: any) {
    if (error.message.includes('already-in-use')) {
      console.log(`ℹ️ ${account.role} account already exists: ${account.email}`);
    } else {
      console.error(`❌ Error creating ${account.role} account:`, error);
      throw error;
    }
  }
};

/**
 * Setup all test accounts
 */
export const setupAllTestAccounts = async () => {
  console.log('🚀 Setting up all test accounts...\n');

  for (const account of TEST_ACCOUNTS) {
    await createTestAccount(account);
  }

  console.log('\n✅ All test accounts setup complete!');
  console.log('\n📋 Test Credentials:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  TEST_ACCOUNTS.forEach(account => {
    console.log(`\n${account.role.toUpperCase()}:`);
    console.log(`  Email: ${account.email}`);
    console.log(`  Password: ${account.password}`);
  });
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n⚠️  Please change these passwords in production!');
};

/**
 * Setup only the admin account (legacy function)
 */
export const setupDefaultAdmin = async () => {
  const adminAccount = TEST_ACCOUNTS.find(acc => acc.role === 'admin');
  if (adminAccount) {
    await createTestAccount(adminAccount);
  }
};

/**
 * Instructions to run this setup:
 *
 * 1. Import this function in your App.tsx or a setup component
 * 2. Call setupAllTestAccounts() once during initialization
 * 3. Remove or comment out the call after successful setup
 *
 * Example:
 * import { setupAllTestAccounts } from './utils/setupAdmin';
 *
 * useEffect(() => {
 *   // Uncomment to run setup (run only once!)
 *   // setupAllTestAccounts();
 * }, []);
 *
 * To create only admin:
 * import { setupDefaultAdmin } from './utils/setupAdmin';
 *
 * useEffect(() => {
 *   // setupDefaultAdmin();
 * }, []);
 */
