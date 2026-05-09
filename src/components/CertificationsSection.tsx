"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import styles from './CertificationsSection.module.css';

const certifications = [
  {
    title: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Coursera (Duke University)',
    link: '#',
  },
  {
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    issuer: 'Coursera (IBM)',
    link: '#',
  },
  {
    title: 'Front-End Developer Capstone',
    issuer: 'Coursera (Meta)',
    link: '#',
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL (IIT Kharagpur)',
    link: '#',
  },
  {
    title: 'Java Programming: Solving Problems with Software',
    issuer: 'Coursera (Duke University)',
    link: '#',
  },
];

export default function CertificationsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.title}>Licenses & <span className="gradient-text">Certifications</span></h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className={`card ${styles.certCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: index * 0.1 } }
              }}
            >
              <div className={styles.iconWrapper}>
                <Award size={24} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
              <a href={cert.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
