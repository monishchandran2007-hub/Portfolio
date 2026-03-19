import React from 'react';
import { FadeInSection } from '../components/UI';

const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-primary)" style={{ flexShrink: 0, marginRight: '8px' }}><path d="M5 4.34v15.32a.5.5 0 0 0 .76.42l13.62-7.66a.5.5 0 0 0 0-.84L5.76 3.92A.5.5 0 0 0 5 4.34z"/></svg>;

export const Internships = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <FadeInSection>
          <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Internships</h2>
        </FadeInSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          <FadeInSection delay={0}>
            <div className="hover-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>
                  <a href="https://planzr.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>Planzr</a>
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Aug 2025 - Dec 2025</span>
              </div>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px', fontSize: '1.125rem' }}>Frontend & Android Developer</h4>
              <a href="https://planzr.com/" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'underline' }}>Visit the site: https://planzr.com/</a>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.8 }}>
                <li>Developing high-performance React interfaces.</li>
                <li>Successfully deployed 4 Production Android apps:</li>
              </ul>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingLeft: '10px' }}>
                {['Planzr Parent', 'Planzr Desk', 'Planzr SchoolBus', 'Planzr GroomUp'].map((app, idx) => (
                  <a key={idx} href="#" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }} className="nav-link">
                    <PlayIcon /> {app}
                  </a>
                ))}
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={90}>
            <div className="hover-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>
                  <a href="http://www.roboaiq.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>RoboAiQ</a>
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Jan 2026 - Feb 2026</span>
              </div>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px', fontSize: '1.125rem' }}>Full Stack Developer | SEO Analyst | Android App Developer</h4>
              <a href="http://www.roboaiq.com" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'underline' }}>Visit the site: http://www.roboaiq.com</a>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li>Engineered complete full-stack web architecture.</li>
                <li>Currently leading Android application development.</li>
                <li>Optimized backend queries for 40% faster load times.</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
