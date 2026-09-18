import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects, onSelectProject }) {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'var(--accent-cyan)',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Proof of Work & Engineering Challenges
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Featured Technical Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Each project features quantifiable metrics, problem breakdowns, system architecture diagrams, and source code.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
