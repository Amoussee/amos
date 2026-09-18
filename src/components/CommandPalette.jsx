import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Command as CommandIcon, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  FileText, 
  Sun, 
  Moon, 
  Mail, 
  X 
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onSelectAction }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectAction({ type: 'open_palette' });
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectAction]);

  if (!isOpen) return null;

  const actions = [
    { id: 'view-recruiter', label: 'Switch to Executive Recruiter Mode', icon: <FileText size={18} color="var(--accent-cyan)" />, group: 'Modes', type: 'mode', value: 'recruiter' },
    { id: 'view-showcase', label: 'Switch to Developer Showcase Mode', icon: <Code2 size={18} color="var(--accent-violet)" />, group: 'Modes', type: 'mode', value: 'showcase' },
    { id: 'nav-projects', label: 'Go to Technical Projects Section', icon: <FolderGit2 size={18} />, group: 'Navigation', type: 'scroll', value: 'projects' },
    { id: 'nav-skills', label: 'Go to Interactive Skills Matrix', icon: <Code2 size={18} />, group: 'Navigation', type: 'scroll', value: 'skills' },
    { id: 'nav-experience', label: 'Go to Work Experience Timeline', icon: <Briefcase size={18} />, group: 'Navigation', type: 'scroll', value: 'experience' },
    { id: 'nav-contact', label: 'Go to Contact & Booking Section', icon: <Mail size={18} />, group: 'Navigation', type: 'scroll', value: 'contact' },
    { id: 'toggle-theme', label: 'Toggle Light / Dark Theme', icon: <Sun size={18} color="var(--accent-amber)" />, group: 'Actions', type: 'action', value: 'toggle_theme' },
    { id: 'open-studio', label: 'Open Live Content Studio (Edit JSON)', icon: <CommandIcon size={18} />, group: 'Actions', type: 'action', value: 'open_studio' }
  ];

  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: 0,
          overflow: 'hidden',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          <Search size={18} style={{ color: 'var(--text-muted)', marginRight: '0.75rem' }} />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        {/* Action List */}
        <div style={{ maxHeight: '350px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => (
              <div
                key={action.id}
                onClick={() => {
                  onSelectAction(action);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                className="command-item"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {action.icon}
                  <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{action.label}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  {action.group}
                </span>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No commands matching "{query}"
            </div>
          )}
        </div>

        {/* Command Footer */}
        <div style={{
          padding: '0.6rem 1.25rem',
          background: 'var(--bg-tertiary)',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <span>Press <kbd style={{ padding: '2px 5px', background: 'var(--bg-primary)', borderRadius: '4px' }}>ESC</kbd> to exit</span>
          <span>Command Palette ⌘K</span>
        </div>
      </div>

      <style>{`
        .command-item:hover {
          background: var(--glass-hover);
        }
      `}</style>
    </div>
  );
}
