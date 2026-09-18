import React from 'react';
import { 
  Printer, 
  Mail, 
  Phone,
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award,
  Briefcase,
  Code,
  GraduationCap
} from 'lucide-react';

export default function RecruiterView({ personal, skills, experience, education, certifications }) {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <section style={{ padding: '2rem 0 5rem 0' }} className="recruiter-container">
      <div className="container">
        
        {/* Recruiter Header Bar */}
        <div className="glass-card no-print" style={{ 
          padding: '1.25rem 1.75rem', 
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(6, 182, 212, 0.08)',
          borderColor: 'rgba(6, 182, 212, 0.25)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              padding: '0.4rem',
              background: 'var(--accent-cyan)',
              color: '#000',
              borderRadius: '8px',
              display: 'flex'
            }}>
              <Briefcase size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>
                Executive Recruiter Mode (High Signal)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                1-page PM resume overview optimized for APM & Product Analyst screening and PDF export.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={16} /> Print / Export PDF Resume
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="glass-card" style={{ padding: '2.5rem 3rem', background: 'var(--bg-secondary)' }}>
          
          {/* Candidate Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            borderBottom: '2px solid var(--glass-border)',
            paddingBottom: '1.75rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', marginBottom: '0.3rem' }}>{personal.name}</h1>
              <div style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {personal.role}
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                <span><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />{personal.location}</span>
                <span><Mail size={14} style={{ display: 'inline', marginRight: '4px' }} />{personal.email}</span>
                <span><Phone size={14} style={{ display: 'inline', marginRight: '4px' }} />{personal.phone}</span>
              </div>
            </div>

            <div style={{ textAlign: 'right', minWidth: '200px' }} className="hide-mobile">
              <div className="status-pill" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                <span className="pulse-dot"></span>
                <span>{personal.statusBadge}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Targeting APM / PM / Product Analyst Roles
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              color: 'var(--accent-cyan)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle2 size={18} /> Executive Summary & High-Impact Metrics
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              {personal.recruiterSummary}
            </p>

            {/* Metric Callouts */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              background: 'var(--bg-tertiary)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--glass-border)'
            }}>
              {personal.stats.map((s, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-violet)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical & PM Matrix */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Code size={18} /> Core Skills & Competencies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {skills.map((cat, i) => (
                <div key={i} style={{ 
                  background: 'var(--bg-tertiary)', 
                  padding: '1rem 1.25rem', 
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--glass-border)'
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                    {cat.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cat.items.map((item, j) => (
                      <span key={j} className="tag-pill" style={{
                        borderColor: item.highlight ? 'rgba(139, 92, 246, 0.4)' : undefined,
                        color: item.highlight ? 'var(--accent-violet)' : undefined,
                        fontWeight: item.highlight ? 600 : 400
                      }}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              color: 'var(--accent-cyan)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Briefcase size={18} /> Product Management Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ 
                  borderLeft: '3px solid var(--accent-violet)', 
                  paddingLeft: '1.25rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                      {exp.role} <span style={{ color: 'var(--accent-cyan)', fontWeight: 500 }}>@ {exp.company}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                    {exp.description}
                  </p>

                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                    {exp.skills.map((s, k) => (
                      <span key={k} className="tag-pill" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ 
                fontSize: '1.05rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                color: 'var(--accent-cyan)',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <GraduationCap size={18} /> Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)', marginBottom: '0.75rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{edu.degree}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{edu.institution} ({edu.period})</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{edu.highlights}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ 
                fontSize: '1.05rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                color: 'var(--accent-cyan)',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Award size={18} /> Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {certifications.map((cert, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cert.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cert.issuer} ({cert.year})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
