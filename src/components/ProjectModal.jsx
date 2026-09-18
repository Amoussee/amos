import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Code, 
  Layers, 
  Copy, 
  Check 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 2.5rem',
          position: 'relative',
          background: 'var(--bg-secondary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-pill" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(6,182,212,0.4)' }}>
              {project.category}
            </span>
            <span style={{
              background: 'rgba(16, 185, 129, 0.12)',
              color: 'var(--accent-emerald)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              {project.metrics}
            </span>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{project.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{project.tagline}</p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={16} /> Live Application Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
            <Github size={16} /> View Source Code
          </a>
        </div>

        {/* Problem & Solution Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-amber)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              ⚠️ The Engineering Problem
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              💡 Technical Solution
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Architectural Decisions */}
        {project.keyDecisions && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--accent-violet)" /> Key Architectural Decisions
            </h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {project.keyDecisions.map((dec, idx) => (
                <li key={idx} style={{ marginBottom: '0.4rem' }}>
                  {dec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* System Architecture Flow Diagram */}
        {project.architectureDiagram && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} color="var(--accent-cyan)" /> System Architecture Flow
            </h3>
            <div style={{
              background: '#04060a',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              overflowX: 'auto'
            }}>
              <pre style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.82rem', 
                color: 'var(--accent-cyan)',
                lineHeight: 1.45 
              }}>
                {project.architectureDiagram}
              </pre>
            </div>
          </div>
        )}

        {/* Code Snippet Preview */}
        {project.codeSnippet && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={18} color="var(--accent-amber)" /> Core Architecture Code
              </h3>
              <button 
                onClick={handleCopyCode}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
              >
                {copiedCode ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                {copiedCode ? "Copied" : "Copy Code"}
              </button>
            </div>

            <div style={{
              background: '#090d16',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              overflowX: 'auto'
            }}>
              <pre style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.82rem', 
                color: '#e5e7eb',
                lineHeight: 1.5 
              }}>
                {project.codeSnippet}
              </pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
