import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'var(--accent-cyan)',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Track Record & Career Progression
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Work Experience
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Proven record of delivering quantifiable business impact and scaling engineering infrastructure.
          </p>
        </div>

        {/* Timeline Stack */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experience.map((exp, idx) => (
            <div key={exp.id} className="glass-card" style={{ padding: '2rem' }}>
              
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.85rem', 
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)' 
                  }}>
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} /> {exp.location}
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              {/* Achievements List */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Key Impact Highlights:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.achievements.map((ach, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <CheckCircle size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                {exp.skills.map((skill, k) => (
                  <span key={k} className="tag-pill" style={{ fontSize: '0.78rem' }}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
