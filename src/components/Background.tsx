"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.noise}></div>
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.blob1}`}
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.blob2}`}
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${styles.blob} ${styles.blob3}`}
      />
    </div>
  );
}
