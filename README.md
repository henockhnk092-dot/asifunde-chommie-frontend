# 🎓 ASIFUNDE CHOMMIE

> **Educational streaming platform for South African high school learners (Grades 8-12)**

A comprehensive Learning Management System focusing on Mathematics and Physical Sciences, combining video lessons, AI-powered quizzes, study materials, and career guidance.

---

## 🚀 Quick Start

1. **Clone and Install**
```bash
cd "C:\Users\Dell\Documents\Visual Studio 2022\Stitch\StitchApp"
npm install
```

2. **Setup Firebase** (See [SETUP_GUIDE.md](./SETUP_GUIDE.md))
   - Create Firebase project
   - Enable Auth, Firestore, Storage, Functions
   - Copy credentials to `.env`

3. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 📁 Project Structure

```
StitchApp/
├── src/
│   ├── components/       # Reusable UI components
│   ├── config/          # Firebase configuration
│   ├── contexts/        # React contexts (Auth, etc.)
│   ├── pages/           # Route pages
│   ├── services/        # API services (Auth, Video, Quiz)
│   └── types/           # TypeScript type definitions
├── .env.example         # Environment variables template
├── SETUP_GUIDE.md       # Complete setup instructions
└── IMPLEMENTATION_STATUS.md  # Development progress tracker
```

---

## ✅ Completed Features

### Infrastructure
- ✅ Firebase SDK integration
- ✅ TypeScript setup with comprehensive types
- ✅ Tailwind CSS styling
- ✅ React Router with protected routes

### Authentication System
- ✅ Email/Password signup & login
- ✅ Google OAuth integration
- ✅ Role-based access control (Learner, Parent, Teacher, Admin)
- ✅ Auth context for global state
- ✅ Protected route component

### Services
- ✅ Authentication service (signup, login, profile management)
- ✅ Video service (CRUD, progress tracking, search)
- ✅ Quiz service (CRUD, AI generation with Gemini, grading)

### Pages
- ✅ Landing page with hero section
- ✅ Complete signup page with role selection
- ✅ Complete login page with Google auth
- ✅ Teacher dashboard (placeholder)
- ✅ Admin dashboard (placeholder)

---

## ⏳ In Progress / To-Do

See [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) for detailed progress.

### High Priority
- ⏳ Learner Dashboard (video progress, quiz scores, analytics)
- ⏳ Parent Dashboard (child monitoring, payment)
- ⏳ Video Player (YouTube embed, progress tracking, watermark)
- ⏳ Quiz Interface (take quizzes, instant grading)
- ⏳ Password Reset functionality

### Medium Priority
- ⏳ Teacher Content Upload (videos, quizzes, AI generation)
- ⏳ PayFast Payment Integration
- ⏳ Subject Overview & Filtering
- ⏳ Career Guidance Section
- ⏳ Profile Settings & Subscription Management

### Lower Priority
- ⏳ Admin User Management
- ⏳ Study Materials Viewer
- ⏳ Search Functionality
- ⏳ Firebase Cloud Functions
- ⏳ Email Notifications (Resend API)

---

## 🛠 Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation

### Backend
- **Firebase Authentication** (Email/Password, Google OAuth)
- **Firestore** for NoSQL database
- **Firebase Storage** for file uploads
- **Firebase Cloud Functions** for serverless backend

### AI & External Services
- **Google Gemini API** for AI quiz generation
- **YouTube API** for video embedding
- **PayFast** for payment processing
- **Resend API** for email notifications
- **Google Drive/OneDrive** for study materials

---

## 🔐 Security Features

### Content Protection
- YouTube videos with domain restrictions
- Google Drive preview mode (no downloads)
- Watermark overlay with user email
- Right-click disabled
- Firestore security rules for access control

### Payment Security
- PayFast webhook verification
- Server-side subscription validation
- Secure payment flow

---

## 💰 Business Model

**Freemium Model**: R99/month for premium

### Free Tier
- 30% of video content (stream-only)
- Limited quizzes
- Basic study materials (view-only)
- Ads displayed

### Premium Tier (R99/month)
- 100% video access (stream-only)
- Unlimited quizzes
- Complete study material library
- Ad-free experience
- Detailed progress analytics
- Priority support

---

## 👥 User Roles

### 1. Learner (Student)
- Watch video lessons
- Take quizzes
- Track progress
- Browse career guidance
- View study materials

### 2. Parent
- Link child's account
- Monitor child's progress
- Manage subscription payments
- Receive weekly progress reports
- View same content as child (online only)

### 3. Teacher
- Upload video URLs (YouTube unlisted)
- Create quizzes (manual or AI-generated)
- Upload study materials (Drive links)
- View class analytics
- Assign content to grades/students

### 4. Admin
- Approve teacher applications
- User management
- Content moderation
- Payment oversight
- Platform analytics

---

## 📊 Firebase Collections

```
users/                  # User profiles
├── learners/          # Learner-specific data
├── parents/           # Parent-specific data
└── teachers/          # Teacher-specific data

videos/                # Video content
videoProgress/         # User video progress
quizzes/               # Quiz questions
quizAttempts/          # Quiz submissions
studyMaterials/        # Study material links
careers/               # Career profiles
subscriptionTransactions/  # Payment records
linkRequests/          # Parent-child link requests
```

---

## 🚀 Deployment

### Prerequisites
- Firebase project configured
- Vercel account
- PayFast merchant account
- Google Gemini API key

### Steps
1. Build production bundle: `npm run build`
2. Deploy to Vercel: `vercel deploy --prod`
3. Deploy Cloud Functions: `firebase deploy --only functions`
4. Set up PayFast webhooks
5. Configure domain (asifundechommie.co.za)

---

## 📈 Development Roadmap

### Phase 1 (6-8 weeks) - CURRENT
- Core authentication ✅
- Video streaming with progress tracking
- AI-powered quiz system
- Basic progress tracking
- Parent dashboard
- PayFast integration
- Career guidance
- Content protection

### Phase 2 (Future)
- Comments & Q&A sections
- Advanced gamification (badges, leaderboards)
- Additional languages (isiXhosa, Afrikaans, etc.)
- Mobile apps (iOS, Android)
- Enhanced analytics with ML predictions
- Live streaming classes
- Community forums

---

## 🤝 Contributing

This is a private educational project. For collaboration inquiries, please contact the project team.

---

## 📄 License

Proprietary - All rights reserved

---

## 📞 Support

For setup help, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

For implementation status, see [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md)

---

**Built with ❤️ for South African learners**

**Empowering the next generation through education** 🎓🚀

---

## 🔗 Quick Links

- [Firebase Console](https://console.firebase.google.com/)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google AI Studio](https://makersuite.google.com/)
- [PayFast](https://www.payfast.co.za/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [React Documentation](https://react.dev/)

---

**Current Progress**: ~20% Complete (Infrastructure & Auth System)
**Next Milestone**: Complete Learner & Parent Dashboards
**Target Launch**: 6-8 weeks from now
