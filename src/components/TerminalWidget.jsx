import React, { useState } from 'react';
import { Terminal as TerminalIcon, ChevronDown, ChevronUp, CornerDownLeft } from 'lucide-react';

export default function TerminalWidget({ personal, skills, projects }) {
  const [collapsed, setCollapsed] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Amos Chan Product CLI (v3.0.0)' },
    { type: 'system', text: 'Type "help" to see available product terminal commands.' }
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available commands:
  • bio       : Print background summary & SMU degree
  • skills    : List PM competencies & analytics stack
  • projects  : List award-winning product case studies
  • contact   : Get email, phone & LinkedIn
  • clear     : Clear terminal screen
  • sudo hire : Trigger APM/PM priority contact protocol`
      });
    } else if (cmd === 'bio') {
      newHistory.push({ type: 'output', text: personal.recruiterSummary });
    } else if (cmd === 'skills') {
      const allSkills = skills.flatMap(c => c.items.map(i => i.name)).join(', ');
      newHistory.push({ type: 'output', text: `PM Skills: ${allSkills}` });
    } else if (cmd === 'projects') {
      const projTitles = projects.map(p => `• ${p.title} (${p.category}): ${p.metrics}`).join('\n');
      newHistory.push({ type: 'output', text: projTitles });
    } else if (cmd === 'contact') {
      newHistory.push({ type: 'output', text: `Email: ${personal.email}\nPhone: ${personal.phone}\nLinkedIn: ${personal.linkedin}\nStatus: ${personal.statusBadge}` });
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'sudo hire' || cmd === 'hire') {
      newHistory.push({ 
        type: 'output', 
        text: `🎉 Priority PM Recruiter access granted! Connecting with Amos Chan (${personal.email})...\nStatus: High Priority — Open for Product Management & Analysis Roles!` 
      });
    } else {
      newHistory.push({ type: 'output', text: `Command not found: "${cmd}". Type "help" for options.` });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="container" style={{ margin: '2rem auto 0 auto' }}>
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        
        {/* Terminal Top Bar */}
        <div 
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'var(--bg-tertiary)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            borderBottom: collapsed ? 'none' : '1px solid var(--glass-border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
              amos-chan-pm-cli ~ zsh
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>{collapsed ? 'Click to Open PM Terminal' : 'Hide Terminal'}</span>
            {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </div>
        </div>

        {/* Terminal Body */}
        {!collapsed && (
          <div style={{ 
            background: '#05070c', 
            padding: '1.25rem', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem',
            color: '#38bdf8',
            maxHeight: '260px',
            overflowY: 'auto'
          }}>
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '0.5rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                {item.type === 'user' ? (
                  <span style={{ color: '#a7f3d0' }}>{item.text}</span>
                ) : item.type === 'system' ? (
                  <span style={{ color: '#94a3b8' }}>{item.text}</span>
                ) : (
                  <span style={{ color: '#e2e8f0' }}>{item.text}</span>
                )}
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
              <span style={{ color: '#10b981' }}>$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              />
              <CornerDownLeft size={14} style={{ color: '#64748b' }} />
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
