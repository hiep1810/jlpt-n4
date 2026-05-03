import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import Lessons from '@/pages/Lessons';
import LessonPage from '@/pages/LessonPage';
import Flashcards from '@/pages/Flashcards';
import DailyReviewPage from '@/pages/DailyReviewPage';
import ListeningPage from '@/pages/ListeningPage';
import VocabularyPage from '@/pages/VocabularyPage';
import KanjiPage from '@/pages/KanjiPage';
import GrammarPage from '@/pages/GrammarPage';
import GrammarComparePage from '@/pages/GrammarComparePage';
import ProgressPage from '@/pages/ProgressPage';
import QuizPage from '@/pages/QuizPage';
import SettingsPage from '@/pages/SettingsPage';
import Celebration from '@/components/Celebration';

export default function App() {
  return (
    <BrowserRouter>
      <Celebration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lesson/:lessonId" element={<LessonPage />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="review" element={<DailyReviewPage />} />
          <Route path="listening" element={<ListeningPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="vocabulary" element={<VocabularyPage />} />
          <Route path="kanji" element={<KanjiPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="grammar/compare" element={<GrammarComparePage />} />
          <Route path="grammar/compare/:id" element={<GrammarComparePage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
