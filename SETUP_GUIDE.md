# 🎓 ASIFUNDE CHOMMIE - Complete Setup Guide

## Current Status: ~20% Complete

The core infrastructure is ready! Firebase, authentication, services, and routing are fully implemented.

---

## 📋 IMMEDIATE SETUP STEPS

### 1. Firebase Project Setup (REQUIRED)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "asifunde-chommie"
3. Enable the following services:
   - **Authentication** → Enable Email/Password and Google providers
   - **Firestore Database** → Create in production mode
   - **Storage** → Enable (for profile pictures)
   - **Functions** → Upgrade to Blaze plan (pay-as-you-go)

4. Get your Firebase config:
   - Project Settings → General → Your apps → Web app
   - Copy the firebaseConfig object

5. Create `.env` file in project root:
```bash
cp .env.example .env
```

6. Fill in your Firebase credentials in `.env`:
```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=asifunde-chommie.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=asifunde-chommie
VITE_FIREBASE_STORAGE_BUCKET=asifunde-chommie.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc123
```

### 2. Google Gemini API Key (for AI Quiz Generation)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create API key
3. Add to `.env`:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Install Dependencies (Already Done!)

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The app should now run at `http://localhost:5173`

---

## 🔥 FIREBASE SECURITY RULES

Create these rules in Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    function hasRole(role) {
      return isAuthenticated() &&
             get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == role;
    }

    function isPremium() {
      let user = get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
      return user.subscriptionStatus == 'premium' &&
             user.subscriptionExpiry.toMillis() > request.time.toMillis();
    }

    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated() && isOwner(userId);
      allow update: if isOwner(userId);
      allow delete: if hasRole('admin');
    }

    // Learner profiles
    match /learners/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId) || hasRole('admin') || hasRole('parent');
    }

    // Parent profiles
    match /parents/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId) || hasRole('admin');
    }

    // Teacher profiles
    match /teachers/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId) || hasRole('admin');
    }

    // Videos
    match /videos/{videoId} {
      allow read: if isAuthenticated() && (resource.data.isPremium == false || isPremium());
      allow create: if hasRole('teacher') || hasRole('admin');
      allow update, delete: if hasRole('admin') ||
                             (hasRole('teacher') && resource.data.uploadedBy == request.auth.uid);
    }

    // Video Progress
    match /videoProgress/{progressId} {
      allow read: if isAuthenticated() &&
                  resource.data.learnerId == request.auth.uid ||
                  hasRole('parent') || hasRole('teacher') || hasRole('admin');
      allow write: if isAuthenticated() && request.resource.data.learnerId == request.auth.uid;
    }

    // Quizzes
    match /quizzes/{quizId} {
      allow read: if isAuthenticated() && (resource.data.isPremium == false || isPremium());
      allow create: if hasRole('teacher') || hasRole('admin');
      allow update, delete: if hasRole('admin') ||
                             (hasRole('teacher') && resource.data.createdBy == request.auth.uid);
    }

    // Quiz Attempts
    match /quizAttempts/{attemptId} {
      allow read: if isAuthenticated() &&
                  (resource.data.learnerId == request.auth.uid ||
                   hasRole('parent') || hasRole('teacher') || hasRole('admin'));
      allow create: if isAuthenticated() && request.resource.data.learnerId == request.auth.uid;
    }

    // Subscription Transactions
    match /subscriptionTransactions/{transactionId} {
      allow read: if isAuthenticated() &&
                  (resource.data.parentId == request.auth.uid || hasRole('admin'));
      allow create: if isAuthenticated();
      allow update: if hasRole('admin');
    }
  }
}
```

---

## 🚀 WHAT'S NEXT TO BUILD

### High Priority (Core Functionality):

1. **Learner Dashboard** (CRITICAL)
   - Video progress cards
   - Quiz scores
   - Recent activity
   - Subject breakdown
   - Premium upgrade prompt for free users

2. **Parent Dashboard** (CRITICAL)
   - Link child account
   - View child's progress
   - Weekly reports
   - PayFast payment integration

3. **Video Player** (CRITICAL)
   - YouTube embed with YouTube API
   - Progress tracking (save every 10 seconds)
   - Watermark overlay with user email
   - Disable right-click & downloads
   - Mark complete at 90%

4. **Quiz Taking Interface** (CRITICAL)
   - Display questions
   - Timer
   - Instant grading
   - Show correct answers with explanations
   - Save attempt to Firestore

5. **Password Reset Page**
   - Email input
   - Firebase password reset
   - Confirmation message

### Medium Priority:

6. **Teacher Content Upload**
   - YouTube URL input form
   - Metadata fields (grade, subject, topic, etc.)
   - AI quiz generation button
   - Manual quiz creation

7. **PayFast Integration**
   - Payment form
   - Webhook handling (requires Cloud Functions)
   - Subscription management

8. **Subject Overview Page**
   - Filter by grade/subject
   - Display videos and quizzes
   - Search functionality

9. **Career Guidance**
   - Career profiles
   - University requirements
   - Bursary information
   - Career matching quiz

10. **Profile Settings**
    - Update profile
    - Change password
    - Subscription management
    - Parent-child linking

### Lower Priority:

11. **Admin Tools**
    - User management table
    - Content moderation
    - Approve teachers
    - View payments

12. **Study Materials**
    - Google Drive embed
    - PDF viewer
    - Watermark overlay

13. **Search Page**
    - Full-text search
    - Filters
    - Results display

---

## 📦 FIREBASE CLOUD FUNCTIONS (Backend)

You'll need to create these Cloud Functions for:

1. **Payment Processing**
```javascript
// functions/index.js
exports.handlePayFastWebhook = functions.https.onRequest(async (req, res) => {
  // Verify PayFast signature
  // Update user subscription
  // Send confirmation email
});
```

2. **Email Notifications** (using Resend API)
```javascript
exports.sendWeeklyReport = functions.pubsub.schedule('every sunday 08:00').onRun(async (context) => {
  // Generate parent reports
  // Send via Resend API
});
```

3. **Subscription Management**
```javascript
exports.checkExpiredSubscriptions = functions.pubsub.schedule('every day 00:00').onRun(async (context) => {
  // Check for expired subscriptions
  // Downgrade to free tier
});
```

4. **Content Watermarking**
```javascript
exports.generateViewingToken = functions.https.onCall(async (data, context) => {
  // Verify user auth
  // Check subscription
  // Generate temporary token
  // Return token with user email for watermark
});
```

---

## 🎨 UI COMPONENTS TO BUILD

1. **VideoCard** - Display video thumbnails with metadata
2. **QuizCard** - Display quiz info with completion status
3. **ProgressChart** - Chart.js visualization of progress
4. **SubscriptionBanner** - Upgrade prompt for free users
5. **Watermark** - Overlay component with user email
6. **Loading** - Loading spinners and skeletons
7. **Modal** - Reusable modal for forms/confirmations

---

## 🔐 PAYFAST INTEGRATION

1. Create PayFast merchant account at [payfast.co.za](https://www.payfast.co.za)
2. Get Merchant ID, Merchant Key, and Passphrase
3. Add to `.env`:
```env
VITE_PAYFAST_MERCHANT_ID=your_merchant_id
VITE_PAYFAST_MERCHANT_KEY=your_merchant_key
VITE_PAYFAST_PASSPHRASE=your_passphrase
VITE_PAYFAST_MODE=sandbox  # Change to 'live' for production
```

4. Create Cloud Function for webhook handling
5. Configure PayFast dashboard with webhook URL

---

## 📱 TESTING CHECKLIST

### Authentication:
- [ ] Signup as learner
- [ ] Signup as parent
- [ ] Signup as teacher
- [ ] Sign in with email
- [ ] Sign in with Google
- [ ] Password reset
- [ ] Logout

### Learner Flow:
- [ ] View dashboard
- [ ] Browse videos (free)
- [ ] Watch video & track progress
- [ ] Take quiz
- [ ] View quiz results
- [ ] See premium content locked

### Parent Flow:
- [ ] Link child account
- [ ] View child progress
- [ ] Make payment
- [ ] Child gets premium access

### Teacher Flow:
- [ ] Upload video URL
- [ ] Generate AI quiz
- [ ] Create manual quiz
- [ ] View class analytics

### Admin Flow:
- [ ] Approve teacher
- [ ] Moderate content
- [ ] View all users
- [ ] View payments

---

## 🚀 DEPLOYMENT (When Ready)

### Frontend (Vercel):
```bash
npm run build
vercel deploy --prod
```

### Cloud Functions:
```bash
cd functions
firebase deploy --only functions
```

### Firestore Rules:
```bash
firebase deploy --only firestore:rules
```

---

## 📊 CURRENT FILE STRUCTURE

```
StitchApp/
├── src/
│   ├── components/
│   │   ├── DashboardLayout.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── ProtectedRoute.tsx ✅
│   ├── config/
│   │   └── firebase.ts ✅
│   ├── contexts/
│   │   └── AuthContext.tsx ✅
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx ✅
│   │   ├── SignupPage.tsx ✅
│   │   ├── ForgotPassword.tsx ⏳
│   │   ├── LearnerDashboard.tsx ⏳
│   │   ├── ParentDashboard.tsx ⏳
│   │   ├── TeacherDashboard.tsx ✅ (placeholder)
│   │   ├── AdminDashboard.tsx ✅ (placeholder)
│   │   ├── VideoPlayer.tsx ⏳
│   │   ├── QuizPage.tsx ⏳
│   │   ├── ProfileSettings.tsx ⏳
│   │   ├── SubjectOverview.tsx ⏳
│   │   ├── CareerGuidance.tsx ⏳
│   │   └── SearchResults.tsx ⏳
│   ├── services/
│   │   ├── auth.service.ts ✅
│   │   ├── video.service.ts ✅
│   │   └── quiz.service.ts ✅
│   ├── types/
│   │   └── index.ts ✅
│   ├── App.tsx ✅
│   └── main.tsx ✅
├── .env.example ✅
└── package.json ✅

✅ = Complete
⏳ = Needs implementation
```

---

## 💡 DEVELOPMENT TIPS

1. **Test with Multiple Accounts**: Create learner, parent, teacher, and admin accounts to test all flows
2. **Use Firebase Emulator**: For local development without affecting production
3. **Content Protection**: Implement watermarks before launch to prevent sharing
4. **Mobile First**: Test responsive design on mobile devices
5. **Performance**: Lazy load components and optimize images
6. **SEO**: Add meta tags for better discovery
7. **Analytics**: Integrate Google Analytics to track usage

---

## 🆘 TROUBLESHOOTING

### Firebase connection errors:
- Check `.env` file has correct credentials
- Verify Firebase project has required services enabled

### Build errors:
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`

### Authentication not working:
- Check Firebase Auth is enabled
- Verify Google OAuth is configured with correct redirect URIs

---

## 📞 NEXT STEPS

1. ✅ **Firebase Setup** - Create project and add credentials to `.env`
2. ✅ **Test Authentication** - Run `npm run dev` and test signup/login
3. ⏳ **Build Learner Dashboard** - Most critical page for users
4. ⏳ **Build Video Player** - Core learning experience
5. ⏳ **Build Quiz Interface** - Assessment functionality
6. ⏳ **PayFast Integration** - Revenue generation
7. ⏳ **Deploy** - Go live!

---

**Estimated Time to Complete Phase 1**: 4-6 more weeks of development
**Current Progress**: ~20% complete (Infrastructure & Auth done)

Good luck building the rest! 🚀🎓
