import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Check, 
  Award
} from 'lucide-react';

export default function Hero({ personal, setViewMode }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '850px' }}>
          
          {/* Status Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div className="status-pill">
              <span className="pulse-dot"></span>
              <span>{personal.statusBadge}</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              📍 {personal.location}
            </div>
          </div>

          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.15, 
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em'
          }}>
            Hi, I'm <span className="text-gradient">{personal.name}</span>. <br />
            {personal.role}.
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: 'var(--text-secondary)', 
            marginBottom: '2rem',
            lineHeight: 1.6,
            maxWidth: '750px'
          }}>
            {personal.tagline}
          </p>

          {/* Quick CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              Explore PM Case Studies <ArrowRight size={18} />
            </button>

            <button 
              onClick={() => setViewMode('recruiter')}
              className="btn btn-secondary"
            >
              <FileText size={18} color="var(--accent-cyan)" /> Recruiter TL;DR View
            </button>

            <button 
              onClick={copyEmail}
              className="btn btn-secondary"
              title="Copy Email Address"
            >
              {copied ? <Check size={18} color="var(--accent-emerald)" /> : <Mail size={18} />}
              {copied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem'
          }}>
            {personal.stats.map((stat, idx) => {
              const valFontSize = stat.value.length > 12 ? '1.25rem' : stat.value.length > 8 ? '1.55rem' : '1.85rem';
              return (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '1.25rem 1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minWidth: 0
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: valFontSize, 
                      fontWeight: 800, 
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                      lineHeight: 1.2,
                      overflowWrap: 'break-word',
                      wordBreak: 'break-word'
                    }} 
                    className="text-gradient"
                  >
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-secondary)', 
                    fontWeight: 500,
                    lineHeight: 1.35,
                    overflowWrap: 'break-word'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
