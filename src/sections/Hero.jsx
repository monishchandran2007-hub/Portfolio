import React from 'react';
import { Mail, Linkedin, Phone, Github, ArrowRight, Download } from 'lucide-react';
import { FadeInSection } from '../components/UI';

export const Hero = ({ theme }) => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '100px' }}>
      {/* Background Aura */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        right: '5%', 
        width: 'clamp(200px, 50vw, 400px)', 
        height: 'clamp(200px, 50vw, 400px)', 
        background: `radial-gradient(circle, var(--accent-primary) ${theme === 'dark' ? '0.08' : '0.05'}, transparent 70%)`, 
        zIndex: -1,
        transition: 'var(--transition-smooth)'
      }}></div>

      <div className="container">
        <div className="hero-container">
          {/* Text Content */}
          <div className="hero-text">
            <FadeInSection stagger="stagger-1">
              <h1 className="hero-title" style={{ marginBottom: '12px' }}>
                Monish Mani P
              </h1>
            </FadeInSection>

            <FadeInSection stagger="stagger-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                <div style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.1rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Computer Science Engineer
                </div>
                <div style={{ fontSize: 'clamp(1.05rem, 2.6vw, 1.4rem)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  Full-Stack Developer • AI Automation Engineer (n8n) • Cybersecurity Enthusiast
                </div>
              </div>
            </FadeInSection>

            <FadeInSection stagger="stagger-3">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: 'clamp(0.95rem, 2.4vw, 1.05rem)' }}>
                Intern @ RoboAiQ &nbsp;|&nbsp; Ex-Intern @ Planzr &nbsp;|&nbsp; Full stack developer &nbsp;|&nbsp; Automation &nbsp;|&nbsp; Programming
              </p>
            </FadeInSection>

            <FadeInSection stagger="stagger-4">
              <p className="hero-description">
                I'm Monish, a Full-Stack Developer & Automation Engineer building scalable AI workflows using n8n, APIs, and LLMs, with a focus on secure and efficient digital systems.
              </p>
            </FadeInSection>

            <FadeInSection stagger="stagger-5">
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">
                  Explore Projects <ArrowRight size={18} />
                </a>
                <a href={`${import.meta.env.BASE_URL}Monish_Mani_P_Resume.pdf`} download="Monish_Mani_P_Resume.pdf" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                  Download Resume <Download size={18} />
                </a>
                <div className="social-icons">
                  <a
                    href="https://github.com/monishchandran2007-hub"
                    className="btn-outline"
                    style={{ padding: '10px', borderRadius: '50%', minWidth: 'auto' }}
                    title="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/monishmanip/"
                    className="btn-outline"
                    style={{ padding: '10px', borderRadius: '50%', minWidth: 'auto' }}
                    title="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:monishmaniwork@gmail.com"
                    className="btn-outline"
                    style={{ padding: '10px', borderRadius: '50%', minWidth: 'auto' }}
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="tel:9025870244"
                    className="btn-outline"
                    style={{ padding: '10px', borderRadius: '50%', minWidth: 'auto' }}
                    title="Phone"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Profile Image */}
          <div className="hero-image">
            <FadeInSection stagger="stagger-5">
              <div className="profile-glow">
                <img
                  src={`${import.meta.env.BASE_URL}header.jpeg`}
                  alt="Monish Mani P"
                  style={{
                    border: `4px solid ${theme === 'dark' ? '#0A0A0A' : '#FFFFFF'}`,
                  }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
