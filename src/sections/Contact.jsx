import { FadeInSection } from '../components/UI';
import { Mail, Linkedin, Phone, Github, CalendarCheck, Sparkles } from 'lucide-react';
import { TextArcEffect } from '../components/ui/text-arc-effect';

export const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <FadeInSection>
              <h2 className="contact-title">Get In Touch</h2>
            </FadeInSection>

            <FadeInSection delay={90}>
              <p className="contact-desc">
                Have a project in mind or want to collaborate? I build automation systems, AI solutions, and scalable applications. Feel free to reach out.
              </p>
            </FadeInSection>

            <div className="contact-cards">
              <FadeInSection delay={0}>
                <a className="contact-card" href="mailto:monishmaniwork@gmail.com">
                  <span className="contact-icon">
                    <Mail size={20} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">monishmaniwork@gmail.com</span>
                  </span>
                </a>
              </FadeInSection>

              <FadeInSection delay={90}>
                <a className="contact-card" href="tel:9025870244">
                  <span className="contact-icon">
                    <Phone size={20} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 9025870244</span>
                  </span>
                </a>
              </FadeInSection>

              <FadeInSection delay={180}>
                <a className="contact-card" href="https://www.linkedin.com/in/monishmanip/" target="_blank" rel="noreferrer">
                  <span className="contact-icon">
                    <Linkedin size={20} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">linkedin.com/in/monishmanip</span>
                  </span>
                </a>
              </FadeInSection>

              <FadeInSection delay={225}>
                <a className="contact-card" href="https://github.com/monishchandran2007-hub" target="_blank" rel="noreferrer">
                  <span className="contact-icon">
                    <Github size={20} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">monishchandran2007-hub</span>
                  </span>
                </a>
              </FadeInSection>

              <FadeInSection delay={270}>
                <div className="contact-card" role="note" aria-label="Availability">
                  <span className="contact-icon">
                    <CalendarCheck size={20} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">Availability</span>
                    <span className="contact-value">Open to internships & collaborations</span>
                  </span>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={320}>
              <div className="contact-tags-wrap">
                <div className="contact-tags-title">
                  <Sparkles size={18} />
                  Interested In
                </div>
                <div className="contact-tags">
                  {['Internships', 'Technical Research', 'Open Source', 'Collaborations'].map((t) => (
                    <span key={t} className="contact-tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* RIGHT */}
          <div className="contact-arc">
            <FadeInSection delay={120}>
              <TextArcEffect
                text=" MONISH MANI P • AUTOMATION ENGINEER • AI WORKFLOW DEVELOPER • "
                imageSrc="/footer.jpeg"
                imageAlt="Monish Mani P"
              />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
