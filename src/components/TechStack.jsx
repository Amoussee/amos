import React from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function TechStack({ skills, onSelectProjectById }) {
  
  const getCategoryIcon = (category) => {
    if (category.includes('Frontend') || category.includes('UX')) return <Code2 size={20} color="var(--accent-cyan)" />;
    if (category.includes('Backend') || category.includes('Analytics')) return <Server size={20} color="var(--accent-violet)" />;
    if (category.includes('Cloud') || category.includes('Technical')) return <Cloud size={20} color="var(--accent-emerald)" />;
    return <Sparkles size={20} color="var(--accent-amber)" />;
  };

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'var(--accent-cyan)',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Technical Competencies & Ecosystem
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Skills Matrix
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Core competencies and technical capabilities linked to real-world product case studies.
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
          gap: '1.75rem' 
        }}>
          {skills.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '0.5rem',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex'
                }}>
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>{cat.category}</h3>
              </div>

              {/* Point Form Skills List with Direct Skill Hyperlinks */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0, margin: 0 }}>
                {cat.items.map((item, j) => {
                  const hasProject = Boolean(item.projectId);
                  return (
                    <li 
                      key={j}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: item.highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: item.highlight ? 600 : 400
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: item.highlight ? 'var(--accent-cyan)' : 'var(--text-muted)',
                        boxShadow: item.highlight ? '0 0 8px var(--accent-cyan)' : 'none',
                        flexShrink: 0
                      }} />
                      
                      {hasProject ? (
                        <a
                          href={`#${item.projectId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (onSelectProjectById) onSelectProjectById(item.projectId);
                          }}
                          title={`Related Project: ${item.projectTitle} (Click to view case study)`}
                          className="skill-hyperlink"
                          style={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            paddingBottom: '1px'
                          }}
                        >
                          <span>{item.name}</span>
                          <ExternalLink size={12} style={{ opacity: 0.85 }} />
                        </a>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
