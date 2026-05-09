"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import styles from './EducationSection.module.css';

const education = [
  {
    degree: 'B.Tech / B.E. (Computer Science & Engineering)',
    school: 'Kali Charan Nigam Institute of Technology (AKTU)',
    location: 'Banda',
    period: '2019 — 2023',
    details: ['CGPA: 7.4/10', 'Relevant coursework: DSA, DBMS, OS, Computer Network, Software Engineering'],
  },
  {
    degree: 'Senior Secondary School (12th)',
    school: 'Saraswati Vidya Mandir Inter College',
    location: 'Banda',
    period: '2017 — 2019',
    details: ['Percentage: 68%', 'Subjects: Physics, Chemistry, and Mathematics'],
  },
  {
    degree: 'Secondary School (10th)',
    school: 'Saraswati Vidya Mandir Inter College',
    location: 'Banda',
    period: '2015 — 2017',
    details: ['Percentage: 71.9%', 'Subjects: Hindi, English, Mathematics, Science, Social Science, Computer'],
  },
];

export default function EducationSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.title}>Academic <span className="gradient-text">Background</span></h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.grid}>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className={`card ${styles.eduCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { ...fadeIn.visible.transition, delay: index * 0.1 } }
              }}
            >
              <div className={styles.eduIcon}>
                <GraduationCap size={24} />
              </div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.meta}>{edu.location} • {edu.period}</p>
              <ul className={styles.details}>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
