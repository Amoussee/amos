import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  themeVariables: {
    darkMode: true,
    background: '#080c14',
    primaryColor: '#1e293b',
    primaryTextColor: '#f8fafc',
    primaryBorderColor: '#38bdf8',
    lineColor: '#38bdf8',
    secondaryColor: '#0f172a',
    tertiaryColor: '#1e1b4b',
    nodeBorder: '#3b82f6',
    clusterBkg: '#0d1322',
    clusterBorder: '#334155',
    titleColor: '#38bdf8',
    edgeLabelBackground: '#0f172a'
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
    padding: 15
  }
});

export default function MermaidDiagram({ chart, id = 'mermaid-diagram' }) {
  const containerRef = useRef(null);
  const [svgHtml, setSvgHtml] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const renderMermaid = async () => {
      if (!chart) {
        setLoading(false);
        return;
      }

      try {
        const uniqueId = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;
        // Clean chart input if needed
        const cleanChart = chart.trim();
        const { svg } = await mermaid.render(uniqueId, cleanChart);
        
        if (isMounted) {
          setSvgHtml(svg);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setError(err.message || 'Failed to render Mermaid flowchart.');
          setLoading(false);
        }
      }
    };

    renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (loading) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)'
      }}>
        ⚡ Rendering architecture flowchart...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '1.25rem',
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: 'var(--radius-sm)',
        color: '#f87171',
        fontSize: '0.85rem'
      }}>
        <div style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Diagram Syntax Error</div>
        <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>{error}</pre>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="mermaid-chart-wrapper"
      style={{
        width: '100%',
        overflowX: 'auto',
        background: '#04060a',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-sm)',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}
