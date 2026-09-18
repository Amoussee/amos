import React, { useState } from 'react';
import { X, Sliders, Check, RefreshCw, Copy, Code2 } from 'lucide-react';

export default function ContentStudioModal({ isOpen, onClose, currentData, onUpdateData, onResetData }) {
  const [jsonText, setJsonText] = useState(JSON.stringify(currentData, null, 2));
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleApply = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onUpdateData(parsed);
      setErrorMsg(null);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 2500);
    } catch (err) {
      setErrorMsg(`JSON Syntax Error: ${err.message}`);
    }
  };

  const handleReset = () => {
    onResetData();
    setJsonText(JSON.stringify(currentData, null, 2));
    setErrorMsg(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          background: 'var(--bg-secondary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sliders size={22} color="var(--accent-cyan)" />
            <div>
              <h2 style={{ fontSize: '1.4rem' }}>Live Portfolio Content Studio</h2>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Customize bio, projects, metrics, and skills live without editing code.
              </div>
            </div>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.15)', 
            border: '1px solid rgba(239, 68, 68, 0.4)', 
            color: '#f87171', 
            padding: '0.6rem 1rem', 
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            marginBottom: '1rem',
            fontFamily: 'var(--font-mono)'
          }}>
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div style={{ 
            background: 'rgba(16, 185, 129, 0.15)', 
            border: '1px solid rgba(16, 185, 129, 0.4)', 
            color: 'var(--accent-emerald)', 
            padding: '0.6rem 1rem', 
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            marginBottom: '1rem'
          }}>
            ✓ Live portfolio content updated successfully!
          </div>
        )}

        {/* JSON Editor Textarea */}
        <div style={{ flex: 1, minHeight: '350px', marginBottom: '1.25rem' }}>
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              background: '#06080e',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              color: '#38bdf8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              outline: 'none',
              resize: 'none'
            }}
          />
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <button onClick={handleReset} className="btn btn-secondary btn-sm">
            <RefreshCw size={15} /> Reset to Defaults
          </button>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              Cancel
            </button>
            <button onClick={handleApply} className="btn btn-primary btn-sm">
              <Check size={16} /> Apply Live Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
