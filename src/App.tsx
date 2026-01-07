import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParentDashboard from './pages/ParentDashboard';
import LoginPage from './pages/LoginPage';
import LearnerDashboard from './pages/LearnerDashboard';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import ProfileSettings from './pages/ProfileSettings';
import SubjectOverview from './pages/SubjectOverview';
import SubjectDetail from './pages/SubjectDetail';
import VideoPlayer from './pages/VideoPlayer';
import QuizPage from './pages/QuizPage';
import CareerGuidance from './pages/CareerGuidance';
import SearchResults from './pages/SearchResults';
import ProtectedRoute from './components/ProtectedRoute';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
// New Admin Pages
import UserManagement from './pages/admin/UserManagement';
import ContentManagement from './pages/admin/ContentManagement';
import TeacherApprovals from './pages/admin/TeacherApprovals';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminReports from './pages/admin/Reports';
import AdminSubscriptions from './pages/admin/Subscriptions';
import AdminPayments from './pages/admin/Payments';
import AdminSettings from './pages/admin/Settings';
import SupportTickets from './pages/admin/SupportTickets';
import LearnerLanding from './pages/landing/LearnerLanding';
import ParentLanding from './pages/landing/ParentLanding';
import TeacherLanding from './pages/landing/TeacherLanding';
import CareerQuiz from './pages/CareerQuiz';
import CareerGuides from './pages/CareerGuides';
import PastPapers from './pages/PastPapers';
import StudyGuides from './pages/StudyGuides';
import CurriculumUpdates from './pages/CurriculumUpdates';
import CurriculumArticle from './pages/CurriculumArticle';
import VideoLessonsLanding from './pages/VideoLessonsLanding';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import About from './pages/About';
import Contact from './pages/Contact';

// New Learner Pages
import MySubjects from './pages/learner/MySubjects';
import Videos from './pages/learner/Videos';
import Library from './pages/learner/Library';
import Quizzes from './pages/learner/Quizzes';
import AITutor from './pages/learner/AITutor';
import Progress from './pages/learner/Progress';
import Profile from './pages/learner/Profile';
import DashboardLayout from './components/DashboardLayout';
import PlaceholderPage from './components/PlaceholderPage';

// New Parent Pages
// New Parent Pages
import MyChildren from './pages/parent/MyChildren';
import ProgressReports from './pages/parent/ProgressReports';
import Subscription from './pages/parent/Subscription';
import ContentPreview from './pages/parent/ContentPreview';
import ParentNotifications from './pages/parent/Notifications';
import ParentSupport from './pages/parent/Support';

// New Teacher Pages
// New Teacher Pages
import Upload from './pages/teacher/Upload';
import Assessments from './pages/teacher/Assessments';
import MyVideos from './pages/teacher/MyVideos';
import MyMaterials from './pages/teacher/MyMaterials';
import StudentPerformance from './pages/teacher/StudentPerformance';
import AssignedStudents from './pages/teacher/AssignedStudents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes - Learner */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <LearnerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/subjects" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <MySubjects />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/videos" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <Videos />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/library" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <Library />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/quizzes" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <Quizzes />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/ai-tutor" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <AITutor />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/progress" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <Progress />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/career-guidance" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <DashboardLayout userType="learner" headerTitle="Career Guidance">
              <PlaceholderPage
                title="Career Guidance"
                description="Explore careers and plan your future"
                icon="explore"
                features={[
                  "Browse careers requiring Maths and Science",
                  "View university requirements and programs",
                  "Explore bursary opportunities",
                  "Take career matching quiz",
                  "Link careers to platform content"
                ]}
              />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/dashboard/profile" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <Profile />
          </ProtectedRoute>
        } />

        {/* Protected Routes - Parent */}
        <Route path="/dashboard/parent" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ParentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/children" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <MyChildren />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/reports" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ProgressReports />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/subscription" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <Subscription />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/content-preview" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ContentPreview />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/notifications" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ParentNotifications />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/profile" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/parent/support" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ParentSupport />
          </ProtectedRoute>
        } />

        {/* Protected Routes - Teacher */}
        <Route path="/dashboard/teacher" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/upload" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Upload />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/videos" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <MyVideos />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/materials" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <MyMaterials />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/assessments" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Assessments />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/create-assessment" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Assessments />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/performance" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <StudentPerformance />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/students" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <AssignedStudents />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/teacher/profile" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <DashboardLayout userType="teacher" headerTitle="Profile" showSearch={false}>
              <PlaceholderPage
                title="Teacher Profile"
                description="Manage your teaching account"
                icon="person"
                features={[
                  "Update personal information",
                  "Set teaching subjects and grades",
                  "Change password and security",
                  "View teaching statistics",
                  "Manage notification preferences"
                ]}
              />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        {/* Protected Routes - Admin */}
        <Route path="/dashboard/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/users" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/content" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <ContentManagement />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/quizzes" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardLayout userType="admin" headerTitle="Quiz Management" showSearch={false}>
              <PlaceholderPage
                title="Quiz Management"
                description="Oversee all assessments and quizzes"
                icon="quiz"
                features={[
                  "View all quizzes platform-wide",
                  "Review AI-generated questions",
                  "Edit or delete any quiz",
                  "View quiz attempt statistics",
                  "Manage quiz settings"
                ]}
              />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/teacher-approvals" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <TeacherApprovals />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/subscriptions" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSubscriptions />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/payments" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPayments />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/analytics" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminAnalytics />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/settings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSettings />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/reports" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminReports />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/support" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <SupportTickets />
          </ProtectedRoute>
        } />

        {/* Legacy Routes - Redirect to new structure */}
        <Route path="/learner-dashboard" element={
          <ProtectedRoute allowedRoles={['learner']}>
            <LearnerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/parent-dashboard" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ParentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/teacher-dashboard" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute allowedRoles={['learner', 'parent', 'teacher', 'admin']}>
            <ProfileSettings />
          </ProtectedRoute>
        } />

        {/* Public Routes */}
        <Route path="/subjects" element={<SubjectOverview />} />
        <Route path="/subjects/:id" element={<SubjectDetail />} />
        <Route path="/video-player/:id" element={<VideoPlayer />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/career-quiz" element={<CareerQuiz />} />
        <Route path="/career-guides" element={<CareerGuides />} />
        <Route path="/career-guides" element={<CareerGuides />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/past-papers" element={<PastPapers />} />
        <Route path="/study-guides" element={<StudyGuides />} />
        <Route path="/video-lessons" element={<VideoLessonsLanding />} />

        <Route path="/curriculum" element={<CurriculumUpdates />} />
        <Route path="/curriculum/:slug" element={<CurriculumArticle />} />


        {/* Role Specific Landing Pages */}
        <Route path="/learners" element={<LearnerLanding />} />
        <Route path="/parents" element={<ParentLanding />} />
        <Route path="/teachers" element={<TeacherLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
