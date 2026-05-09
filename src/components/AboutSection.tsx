"use client";

import React from 'react';
import Image from 'next/image';
import { BookOpen, Code2, Cpu, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const skillCategories = [
  {
    name: 'Languages',
    icon: <Code2 size={24} />,
    items: ['JavaScript (ES6+)', 'Java', 'C/C++', 'Python', 'PHP']
  },
  {
    name: 'Frontend',
    icon: <Layout size={24} />,
    items: ['React.js', 'Ionic', 'TypeScript', 'Tailwind', 'Bootstrap 5', 'Vite']
  },
  {
    name: 'Backend',
    icon: <Server size={24} />,
    items: ['Node.js', 'Express.js', 'Laravel', 'Flask', 'Django']
  },
  {
    name: 'Databases',
    icon: <Database size={24} />,
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'MongoDB']
  },
  {
    name: 'Mobile / Hybrid',
    icon: <Smartphone size={24} />,
    items: ['Ionic & Capacitor', 'React Native (CLI)', 'Electron.js']
  },
  {
    name: 'Core Concepts',
    icon: <BookOpen size={24} />,
    items: ['DSA', 'OOP', 'OS', 'Networking', 'Security']
  },
  {
    name: 'Tools',
    icon: <Wrench size={24} />,
    items: ['Git', 'Postman', 'VS Code', 'Axios', 'cPanel', 'SFTP']
  },
  {
    name: 'Other',
    icon: <Cpu size={24} />,
    items: ['REST APIs', 'JWT Auth', 'Performance Opt.', 'Software Testing']
  },
];

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.title}>About <span className="gradient-text">Me</span></h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.mainGrid}>
          <motion.div
            className={styles.imageSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/profile-imgs.png"
                alt="Vineet Krishna Gupta"
                width={400}
                height={500}
                className={styles.featuredImage}
              />
              <div className={styles.imageBorder}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className={styles.text}>
              I'm a passionate Full Stack Developer with over 3 years of experience crafting beautiful and performant web applications.
              I love turning complex problems into simple, elegant solutions.
            </p>
            <p className={styles.text}>
              Adept at delivering clean, maintainable code and intuitive user experiences, I focus on leveraging technology
              to solve real-world problems and continuously enhancing development practices.
            </p>

            <p className={styles.techTitle}>Technologies I work with:</p>
            <ul className={styles.techList}>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Supabase</li>
              <li>Bootstrap 5</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className={styles.skillsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`card ${styles.skillCard}`}
              variants={fadeIn}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.skillIcon}>{category.icon}</div>
                <h3 className={styles.skillName}>{category.name}</h3>
              </div>
              <div className={styles.skillItems}>
                {category.items.map((skill, i) => (
                  <span key={i} className={styles.skillPill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
