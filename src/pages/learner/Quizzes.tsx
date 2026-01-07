import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

interface Quiz {
  id: number;
  title: string;
  subject: string;
  grade: number;
  topic: string;
  questions: number;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  attempts: number;
  bestScore: number | null;
  isPremium: boolean;
  deadline?: string;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quizzes: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [isTakingQuiz, setIsTakingQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const quizzes: Quiz[] = [
    {
      id: 1,
      title: 'Algebra Fundamentals Quiz',
      subject: 'Mathematics',
      grade: 10,
      topic: 'Algebra',
      questions: 10,
      duration: 15,
      difficulty: 'Easy',
      attempts: 2,
      bestScore: 85,
      isPremium: false,
    },
    {
      id: 2,
      title: "Newton's Laws Assessment",
      subject: 'Physical Sciences',
      grade: 10,
      topic: 'Mechanics',
      questions: 15,
      duration: 20,
      difficulty: 'Medium',
      attempts: 1,
      bestScore: 73,
      isPremium: true,
      deadline: '2024-12-20',
    },
    {
      id: 3,
      title: 'Trigonometry Challenge',
      subject: 'Mathematics',
      grade: 11,
      topic: 'Trigonometry',
      questions: 20,
      duration: 30,
      difficulty: 'Hard',
      attempts: 0,
      bestScore: null,
      isPremium: false,
    },
  ];

  const sampleQuestions: Question[] = [
    {
      id: 1,
      question: 'What is the solution to the equation 2x + 5 = 15?',
      options: ['x = 3', 'x = 5', 'x = 7', 'x = 10'],
      correctAnswer: 1,
      explanation: 'Subtract 5 from both sides: 2x = 10. Then divide by 2: x = 5.',
    },
    {
      id: 2,
      question: 'Which of the following is a quadratic equation?',
      options: ['y = 2x + 3', 'y = x² + 3x + 2', 'y = 1/x', 'y = 2^x'],
      correctAnswer: 1,
      explanation: 'A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0.',
    },
  ];

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsTakingQuiz(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setTimeRemaining(quiz.duration * 60);
  };

  const selectAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitQuiz = () => {
    setShowResults(true);
    setIsTakingQuiz(false);
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / sampleQuestions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <DashboardLayout userType="learner" headerTitle="Quizzes">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Quiz Taking Interface */}
        {isTakingQuiz && selectedQuiz && (
          <div className="max-w-4xl mx-auto">
            {/* Quiz Header */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedQuiz.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Question {currentQuestionIndex + 1} of {sampleQuestions.length}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{formatTime(timeRemaining)}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Time Remaining</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestionIndex + 1) / sampleQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {sampleQuestions[currentQuestionIndex].question}
              </h3>

              {/* Answer Options */}
              <div className="space-y-3">
                {sampleQuestions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(sampleQuestions[currentQuestionIndex].id, index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${answers[sampleQuestions[currentQuestionIndex].id] === index
                        ? 'border-primary bg-primary/10 text-primary font-semibold'
                        : 'border-slate-300 dark:border-slate-700 hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[sampleQuestions[currentQuestionIndex].id] === index
                            ? 'border-primary bg-primary'
                            : 'border-slate-400'
                          }`}
                      >
                        {answers[sampleQuestions[currentQuestionIndex].id] === index && (
                          <span className="material-symbols-outlined text-white text-sm">check</span>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {currentQuestionIndex === sampleQuestions.length - 1 ? (
                <button
                  onClick={submitQuiz}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results View */}
        {showResults && selectedQuiz && (
          <div className="max-w-4xl mx-auto">
            {/* Score Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-6 text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold text-primary mb-2">{calculateScore()}%</div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Quiz Complete!</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  You answered {Object.keys(answers).length} out of {sampleQuestions.length} questions
                </p>
              </div>

              {calculateScore() >= 80 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-lg font-semibold">
                  <span className="material-symbols-outlined">celebration</span>
                  Excellent Work!
                </div>
              )}
            </div>

            {/* Detailed Results */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Review Answers</h3>

              <div className="space-y-6">
                {sampleQuestions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;

                  return (
                    <div key={question.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`p-2 rounded-full ${isCorrect ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                            }`}
                        >
                          <span
                            className={`material-symbols-outlined ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                              }`}
                          >
                            {isCorrect ? 'check_circle' : 'cancel'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 dark:text-white mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Your answer: <span className="font-semibold">{question.options[userAnswer]}</span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                              Correct answer: <span className="font-semibold">{question.options[question.correctAnswer]}</span>
                            </p>
                          )}
                          <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                              <span className="font-semibold">Explanation:</span> {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowResults(false);
                  setSelectedQuiz(null);
                }}
                className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                Back to Quizzes
              </button>
              <button
                onClick={() => startQuiz(selectedQuiz)}
                className="flex-1 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

        {/* Quiz List */}
        {!isTakingQuiz && !showResults && (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Available Quizzes</h1>
              <p className="text-slate-600 dark:text-slate-400">Take assessments and track your progress</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex-1">{quiz.title}</h3>
                    {quiz.isPremium && (
                      <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">Premium</span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">quiz</span>
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>{quiz.duration} minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">school</span>
                      <span>Grade {quiz.grade} • {quiz.subject}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${quiz.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : quiz.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                        }`}
                    >
                      {quiz.difficulty}
                    </span>
                    {quiz.bestScore !== null && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-semibold rounded">
                        Best: {quiz.bestScore}%
                      </span>
                    )}
                  </div>

                  {quiz.deadline && (
                    <div className="mb-4 p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                      <p className="text-xs text-orange-800 dark:text-orange-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">event</span>
                        Due: {quiz.deadline}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => startQuiz(quiz)}
                    className="w-full py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    {quiz.attempts > 0 ? 'Retake Quiz' : 'Start Quiz'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Quizzes;
