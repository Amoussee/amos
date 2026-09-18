import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowUpRight,
  Cpu
} from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div 
      className="glass-card" 
      style={{ 
        padding: '1.75rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={() => onSelectProject(project)}
    >
      {/* Featured Badge / Metric Tag */}
      <div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <span className="tag-pill" style={{ 
            borderColor: 'rgba(6, 182, 212, 0.4)', 
            color: 'var(--accent-cyan)',
            fontWeight: 600 
          }}>
            {project.category}
          </span>

          <span style={{ 
            fontSize: '0.78rem', 
            background: 'rgba(139, 92, 246, 0.12)', 
            border: '1px solid rgba(139, 92, 246, 0.25)', 
            color: 'var(--accent-violet)',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 600
          }}>
            {project.metrics.split('|')[0]}
          </span>
        </div>

        {/* Project Title */}
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {project.title}
          <ArrowUpRight size={18} style={{ opacity: 0.5, transition: 'transform 0.2s ease' }} />
        </h3>

        {/* Tagline / Short Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {project.shortDescription}
        </p>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill" style={{ fontSize: '0.75rem' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer / Actions */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderTop: '1px solid var(--glass-border)',
        paddingTop: '1rem',
        marginTop: '0.5rem'
      }}>
        <button 
          onClick={(e) => { e.stopPropagation(); onSelectProject(project); }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-cyan)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <Layers size={15} /> Architecture Deep Dive
        </button>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            title="View GitHub Code"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            title="View Live Demo"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
