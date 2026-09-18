import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  Moon, 
  Sun, 
  Menu, 
  X,
  Compass,
  FolderGit2,
  Briefcase,
  Mail
} from 'lucide-react';

export default function Navbar({ 
  viewMode, 
  setViewMode, 
  theme, 
  toggleTheme, 
  personal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'var(--glass-bg)',
      borderBottom: '1px solid var(--glass-border)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'var(--gradient-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
          }}>
            AC
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
              {personal.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Product Portfolio & Resume
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {viewMode === 'showcase' && (
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              style={navLinkStyle}
            >
              <FolderGit2 size={16} /> Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              style={navLinkStyle}
            >
              <Compass size={16} /> PM Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              style={navLinkStyle}
            >
              <Briefcase size={16} /> Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              style={navLinkStyle}
            >
              <Mail size={16} /> Contact
            </button>
          </div>
        )}

        {/* Control Actions & Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mode Switcher */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-tertiary)',
            padding: '3px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--glass-border)'
          }}>
            <button
              onClick={() => setViewMode('showcase')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: viewMode === 'showcase' ? 'var(--gradient-accent)' : 'transparent',
                color: viewMode === 'showcase' ? '#fff' : 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              title="Interactive Product Showcase Mode"
            >
              <Sparkles size={14} /> <span className="hide-mobile">Case Studies</span>
            </button>

            <button
              onClick={() => setViewMode('recruiter')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: viewMode === 'recruiter' ? 'var(--accent-cyan)' : 'transparent',
                color: viewMode === 'recruiter' ? '#000' : 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              title="Quick Recruiter High-Signal TL;DR Mode"
            >
              <FileText size={14} /> <span className="hide-mobile">Recruiter View</span>
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem' }}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={16} color="var(--accent-amber)" /> : <Moon size={16} color="var(--accent-violet)" />}
          </button>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm mobile-only"
            style={{ padding: '0.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle Navigation Menu"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-only"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {viewMode === 'showcase' && (
            <>
              <button 
                onClick={() => scrollToSection('projects')}
                style={mobileNavLinkStyle}
              >
                <FolderGit2 size={18} color="var(--accent-cyan)" /> Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                style={mobileNavLinkStyle}
              >
                <Compass size={18} color="var(--accent-violet)" /> PM Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                style={mobileNavLinkStyle}
              >
                <Briefcase size={18} color="var(--accent-emerald)" /> Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                style={mobileNavLinkStyle}
              >
                <Mail size={18} color="var(--accent-amber)" /> Contact
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  transition: 'color 0.2s ease',
  outline: 'none'
};

const mobileNavLinkStyle = {
  background: 'var(--bg-tertiary)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-sm)',
  padding: '0.75rem 1rem',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  textAlign: 'left',
  width: '100%',
  transition: 'background 0.2s ease'
};
