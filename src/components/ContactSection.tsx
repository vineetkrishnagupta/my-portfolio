import React from 'react';
import Button from './Button';

export default function ContactSection() {
  return (
    <section className="section" id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', marginBottom: '1rem' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          I'm currently open to new opportunities and collaborations. 
          Whether you have a project in mind or just want to say hi, feel free to reach out!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button href="mailto:vineetkrishnagupta@gmail.com" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Say Hello
          </Button>
          <Button variant="outline" href="https://wa.me/916394512899" target="_blank" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
