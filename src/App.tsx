import LandingPage from './components/landing-page'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SummarizePage from './components/summarize-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/summarize" element={<SummarizePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
