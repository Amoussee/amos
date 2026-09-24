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
import MermaidDiagram from './MermaidDiagram';

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

  const renderInlineText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) {
      return (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
          {renderInlineText(text)}
        </p>
      );
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {lines.map((line, idx) => (
          <p key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            {renderInlineText(line)}
          </p>
        ))}
      </div>
    );
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
            <ExternalLink size={16} /> View more 
          </a>
        </div>

        {/* Section 1: Problem */}
        {project.problem && (
          <div style={{ marginBottom: '1.5rem', background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-amber)', fontSize: '1.05rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚠️ Problem
            </h4>
            {renderFormattedText(project.problem)}
          </div>
        )}

        {/* Section 2: My Solution */}
        {(project.mySolution || project.solution) && (
          <div style={{ marginBottom: '1.5rem', background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1.05rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💡 My Solution
            </h4>
            {renderFormattedText(project.mySolution || project.solution)}
          </div>
        )}

        {/* Section 3: Technical Implementations */}
        {(project.technicalImplementation || project.technicalImplementations || project.architectureDiagram || project.mermaidDiagram || project.codeSnippet) && (
          <div style={{ marginBottom: '2rem', background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚙️ Technical Implementations
            </h4>

            {/* Technical Pipeline / Specs Overview */}
            {(project.technicalImplementation || project.technicalImplementations) && (
              <div style={{ marginBottom: '1.5rem' }}>
                {renderFormattedText(project.technicalImplementation || project.technicalImplementations)}
              </div>
            )}

            {/* System Architecture Flow Diagram */}
            {(project.architectureDiagram || project.mermaidDiagram) && (() => {
              const diagramText = project.mermaidDiagram || project.architectureDiagram;
              const isMermaid = diagramText && (
                diagramText.includes('flowchart') || 
                diagramText.includes('graph ') || 
                diagramText.includes('sequenceDiagram') ||
                diagramText.includes('subgraph')
              );

              return (
                <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
                  <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Layers size={16} color="var(--accent-cyan)" /> System Architecture Flow
                  </h5>

                  {isMermaid ? (
                    <MermaidDiagram chart={diagramText} id={`modal-mermaid-${project.id}`} />
                  ) : (
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
                        lineHeight: 1.45,
                        margin: 0
                      }}>
                        {diagramText}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Section 4: Key Decisions Made Table */}
        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '0.85rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}>
              <CheckCircle2 size={18} color="var(--accent-violet)" /> Key Decisions Made
            </h3>

            <div style={{ 
              overflowX: 'auto', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid var(--glass-border)',
              background: 'var(--bg-tertiary)' 
            }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse', 
                textAlign: 'left',
                fontSize: '0.86rem'
              }}>
                <thead>
                  <tr style={{ 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    borderBottom: '1px solid var(--glass-border)' 
                  }}>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--accent-cyan)', fontWeight: 600, minWidth: '170px' }}>
                      Strategic Decision
                    </th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--accent-amber)', fontWeight: 600, minWidth: '190px' }}>
                      The Dilemma
                    </th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: 600, minWidth: '230px' }}>
                      Solution &amp; Technical Implementation
                    </th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--accent-emerald)', fontWeight: 600, minWidth: '170px' }}>
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.keyDecisions.map((dec, idx) => {
                    const isObj = typeof dec === 'object' && dec !== null;
                    const strategicDecision = isObj ? dec.strategicDecision : `Decision #${idx + 1}`;
                    const dilemma = isObj ? dec.dilemma : '—';
                    const solution = isObj ? dec.solution : (typeof dec === 'string' ? dec : '—');
                    const impact = isObj ? dec.impact : '—';

                    return (
                      <tr 
                        key={idx} 
                        style={{ 
                          borderBottom: idx === project.keyDecisions.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--text-primary)', verticalAlign: 'top', lineHeight: 1.45 }}>
                          {strategicDecision}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', lineHeight: 1.5, verticalAlign: 'top' }}>
                          {dilemma}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', lineHeight: 1.5, verticalAlign: 'top' }}>
                          {solution}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--accent-emerald)', fontWeight: 500, lineHeight: 1.45, verticalAlign: 'top' }}>
                          {impact}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
