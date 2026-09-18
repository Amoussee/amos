import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  Check, 
  Send, 
  MessageSquare
} from 'lucide-react';

export default function ContactSection({ personal }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
            Recruiter & Employer Touchpoint
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Get In Touch
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Looking to discuss APM, Product Manager, or Product Analyst roles? Let's connect.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Direct Contact Methods */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Availability Card */}
            <div className="glass-card" style={{ 
              padding: '1.5rem', 
              background: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="pulse-dot"></span>
                <span style={{ fontWeight: 700, color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>
                  {personal.statusBadge}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Currently considering full-time Associate Product Manager (APM), PM, and Product Analyst opportunities in Singapore & globally.
              </p>
            </div>

            {/* Direct Email Card */}
            <div 
              className="glass-card" 
              onClick={() => handleCopy(personal.email, 'email')}
              style={{ 
                padding: '1.25rem 1.5rem', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--bg-tertiary)', borderRadius: '8px', display: 'flex' }}>
                  <Mail size={20} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Email</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{personal.email}</div>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {copiedType === 'email' ? <Check size={18} color="var(--accent-emerald)" /> : "Copy"}
              </span>
            </div>

            {/* Direct Phone Card */}
            <div 
              className="glass-card" 
              onClick={() => handleCopy(personal.phone, 'phone')}
              style={{ 
                padding: '1.25rem 1.5rem', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--bg-tertiary)', borderRadius: '8px', display: 'flex' }}>
                  <Phone size={20} color="var(--accent-emerald)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{personal.phone}</div>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {copiedType === 'phone' ? <Check size={18} color="var(--accent-emerald)" /> : "Copy"}
              </span>
            </div>

            {/* LinkedIn Card */}
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="glass-card"
              style={{ 
                padding: '1.25rem 1.5rem', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--bg-tertiary)', borderRadius: '8px', display: 'flex' }}>
                  <Linkedin size={20} color="#0a66c2" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn Network</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>linkedin.com/in/amos-chan-yi-kang</div>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>→</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.65rem 0.9rem',
  background: 'var(--bg-tertiary)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none'
};
