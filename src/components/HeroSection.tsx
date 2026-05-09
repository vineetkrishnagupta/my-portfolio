"use client";

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.pulse}></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Crafting digital <span className="gradient-text">excellence</span> with every line of code.
          </motion.h1>

          <motion.div variants={itemVariants} className={styles.profileWrapper}>

            <div className={styles.nameWrapper}>
              <span className={styles.introText}>Hi, I'm</span>
              <span className={styles.name}>Vineet Krishna Gupta</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            A Full Stack Developer dedicated to building fast, accessible, and delightful web experiences that balance clean UI with pragmatic engineering.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <Button href="#projects" className={styles.btnPrimary}>
              Explore Projects <ArrowRight size={20} />
            </Button>
            <Button variant="outline" href="#contact" className={styles.btnOutline}>
              Get In Touch <Mail size={20} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.glow}></div>
          <div className={styles.cardContainer}>
            <div className={`glass ${styles.codeCard}`}>
              <div className={styles.windowHeader}>
                <div className={styles.dots}>
                  <div className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></div>
                  <div className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div className={styles.dot} style={{ backgroundColor: '#27c93f' }}></div>
                </div>
                <div className={styles.windowTitle}>vineet.ts</div>
              </div>
              <div className={styles.codeContent}>
                <pre>
                  <code>
                    <span className={styles.keyword}>interface</span> <span className={styles.type}>Developer</span> {'{'}{'\n'}
                    {'  '}name: <span className={styles.string}>string</span>;{'\n'}
                    {'  '}role: <span className={styles.string}>string</span>;{'\n'}
                    {'  '}focus: <span className={styles.string}>string[]</span>;{'\n'}
                    {'}'}{'\n\n'}
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>vineet</span>: <span className={styles.type}>Developer</span> = {'{'}{'\n'}
                    {'  '}name: <span className={styles.string}>'Vineet K. Gupta'</span>,{'\n'}
                    {'  '}role: <span className={styles.string}>'Full Stack Dev'</span>,{'\n'}
                    {'  '}focus: [<span className={styles.string}>'React'</span>, <span className={styles.string}>'Node'</span>]{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
