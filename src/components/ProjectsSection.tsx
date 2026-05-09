"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Vyfoo (Restaurant POS)',
    description: 'A full-featured Restaurant POS system that streamlines order management, billing, and operations. Includes dynamic cart handling with variants and addons, real-time order tracking, and GST calculations.',
    tags: ['React.js', 'Node.js', 'Supabase', 'Bootstrap', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/vineetkrishnagupta',
    liveUrl: 'https://vyfoo.com',
  },
  {
    title: 'AI Content Generator',
    description: 'A full-stack AI-powered content generation platform built using ChatGPT API. Enables real-time content creation with scalable APIs, cloud storage, and an intuitive interface.',
    tags: ['React.js', 'Node.js', 'OpenAI API', 'Supabase', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/vineetkrishnagupta',
    liveUrl: '#',
  },
  {
    title: 'Test Easy (Quiz System)',
    description: 'A scalable quiz management platform with automated scheduling, time-based execution, and instant result generation. Features student management and performance tracking.',
    tags: ['React.js', 'Node.js', 'Supabase', 'Dashboard', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/vineetkrishnagupta',
    liveUrl: '#',
  },
  {
    title: 'QR Code Generator',
    description: 'A dynamic QR code generation tool supporting multiple formats like UPI, contact, and email. Includes customization options and multi-format export with real-time preview.',
    tags: ['React.js', 'JavaScript', 'QR API', 'UI/UX'],
    imageUrl: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/vineetkrishnagupta',
    liveUrl: '#',
  },
  {
    title: 'Map My Location',
    description: 'A map-based location management system with real-time updates, address autocomplete, and interactive markers. Built for smooth geolocation experiences.',
    tags: ['React.js', 'Google Maps API', 'Vite', 'Geolocation'],
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop',
    githubUrl: 'https://github.com/vineetkrishnagupta',
    liveUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', whiteSpace: 'nowrap' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div style={{ height: '1px', background: 'var(--border)', flexGrow: 1, maxWidth: '300px' }}></div>
        </motion.div>

        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
