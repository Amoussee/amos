import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterView from './components/RecruiterView';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import CommandPalette from './components/CommandPalette';
import TerminalWidget from './components/TerminalWidget';
import ContactSection from './components/ContactSection';
import ContentStudioModal from './components/ContentStudioModal';
import Footer from './components/Footer';

import { initialPortfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(initialPortfolioData);
  const [viewMode, setViewMode] = useState('showcase'); // 'showcase' | 'recruiter'
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState(null);

  // Apply theme data attribute to body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectSkillFilter = (skillName) => {
    setActiveSkillFilter(skillName);
    // Smooth scroll to projects section
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommandPaletteAction = (action) => {
    if (action.type === 'mode') {
      setViewMode(action.value);
    } else if (action.type === 'scroll') {
      setViewMode('showcase');
      setTimeout(() => {
        const el = document.getElementById(action.value);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action.type === 'action') {
      if (action.value === 'toggle_theme') toggleTheme();
      if (action.value === 'open_studio') setStudioOpen(true);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Ambient background glow & grid pattern */}
      <div className="ambient-glow" />
      <div className="bg-grid-pattern" />

      {/* Main Navigation */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenStudio={() => setStudioOpen(true)}
        personal={data.personal}
      />

      {/* Dynamic View Mode Switching */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {viewMode === 'recruiter' ? (
          <RecruiterView
            personal={data.personal}
            skills={data.skills}
            experience={data.experience}
            education={data.education}
            certifications={data.certifications}
            projects={data.projects}
          />
        ) : (
          <>
            <Hero
              personal={data.personal}
              setViewMode={setViewMode}
            />

            <ProjectsSection
              projects={data.projects}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            <TechStack
              skills={data.skills}
              onSelectProjectById={(id) => {
                const proj = data.projects.find((p) => p.id === id);
                if (proj) {
                  setSelectedProject(proj);
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            <ExperienceTimeline
              experience={data.experience}
            />

            <TerminalWidget
              personal={data.personal}
              skills={data.skills}
              projects={data.projects}
            />

            <ContactSection
              personal={data.personal}
            />
          </>
        )}
      </main>

      {/* Footer */}
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Keyboard Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectAction={handleCommandPaletteAction}
      />

      {/* Live Content Studio Modal */}
      <ContentStudioModal
        isOpen={studioOpen}
        onClose={() => setStudioOpen(false)}
        currentData={data}
        onUpdateData={(newData) => setData(newData)}
        onResetData={() => setData(initialPortfolioData)}
      />

    </div>
  );
}
