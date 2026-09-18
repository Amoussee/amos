import React from 'react';
import { Command, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ personal, onOpenCommandPalette }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'var(--bg-primary)',
      padding: '3rem 0 2rem 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>
              {personal.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {personal.role} • Designed for recruiter clarity & engineering depth.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={onOpenCommandPalette}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.8rem' }}
            >
              <Command size={14} /> Quick Commands (⌘K)
            </button>

            <button 
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.45rem' }}
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
            <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
