
import React, { useState } from 'react';
import { ProjectFormat } from './types';
import FormatSelector from './components/FormatSelector';
import Editor from './components/Editor';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import DonatePage from './components/DonatePage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'app' | 'about' | 'donate'>('landing');
  const [previousView, setPreviousView] = useState<'landing' | 'app'>('landing');
  const [format, setFormat] = useState<ProjectFormat | null>(null);

  const handleStartApp = () => {
    setView('app');
  };

  const handleGoToAbout = () => {
    if (view !== 'about' && view !== 'donate') {
      setPreviousView(view as 'landing' | 'app');
    }
    setView('about');
  };

  const handleGoToDonate = () => {
    if (view !== 'about' && view !== 'donate') {
      setPreviousView(view as 'landing' | 'app');
    }
    setView('donate');
  };

  const handleBackFromSubPage = () => {
    setView(previousView);
  };

  const handleGoToLanding = () => {
    setView('landing');
    setFormat(null); // Reset format when going back to landing
  };

  const handleFormatSelect = (selectedFormat: ProjectFormat) => {
    setFormat(selectedFormat);
  };

  const handleBackFromEditor = () => {
    setFormat(null);
  };

  if (view === 'about') {
    return <AboutPage onBack={handleBackFromSubPage} onGoToDonate={handleGoToDonate} />;
  }

  if (view === 'donate') {
    return <DonatePage onBack={handleBackFromSubPage} onGoToAbout={handleGoToAbout} />;
  }

  if (view === 'landing') {
    return <LandingPage onStart={handleStartApp} onGoToAbout={handleGoToAbout} onGoToDonate={handleGoToDonate} />;
  }

  // view === 'app'
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#1e1b4b] text-white font-sans">
      {format ? (
        <Editor format={format} onBack={handleBackFromEditor} onGoToAbout={handleGoToAbout} onGoToDonate={handleGoToDonate} />
      ) : (
        <FormatSelector onSelectFormat={handleFormatSelect} onBack={handleGoToLanding} />
      )}
    </div>
  );
};

export default App;