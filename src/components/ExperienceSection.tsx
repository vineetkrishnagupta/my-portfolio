"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './ExperienceSection.module.css';

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Vyqda Technologies',
    location: 'Agra',
    period: 'May, 2023 — Present',
    highlights: [
      'Implemented real-time order management system with cart, billing, GST & printing features',
      'Developed and maintained a restaurant POS web application using React.js and Node.js',
      'Built variant & addon selection system with dynamic pricing and state management',
      'Designed and integrated REST APIs for product, staff roles, and order handling',
      'Implemented staff role & permission management system with secure access control',
      'Integrated SQLite/MySQL databases for efficient data storage and retrieval',
      'Built Google Maps-based location system with autocomplete and live coordinates',
      'Optimized UI/UX for mobile responsiveness and performance improvements',
      'Worked with Capacitor plugins (File System, SQLite) for hybrid app functionality',
    ],
  },
  {
    role: 'Laravel Developer',
    company: 'Raidlayer Webhost',
    location: 'Ahmedabad, Gujarat',
    period: '2022 — Nov, 2022',
    highlights: [
      'Developed and optimized robust APIs using Laravel 9.0',
      'Achieved a 40% reduction in response time through code optimization and efficient database queries',
      'Improved overall system performance and backend stability',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'The Sparks Foundation',
    location: 'Remote',
    period: 'Jul, 2022 — Aug, 2022',
    highlights: [
      'Successfully completed the Graduate Rotational Internship Program (GRIP)',
      'Built web projects focusing on frontend and backend integration',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Professional <span className="gradient-text">Experience</span></h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className={`card ${styles.experienceCard}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company} • {exp.location}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.highlights}>
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
