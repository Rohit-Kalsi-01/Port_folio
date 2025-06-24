import React, { useState, useEffect } from 'react';
import { Footer } from './Components/footer';
import { Contantt } from './Components/ContectSection';
import { About } from './Components/About';
import { Project } from './Components/Project';
import {  Code, Menu, X, ChevronDown } from 'lucide-react';
import { Skill } from './Components/skill';
import { Hero } from './Components/herosection';

export const App = () => {
  

 
  const skills = [
    { category: "Frontend", items: ["React",  "HTML", "Tailwind css", "Responsive Design", "UI/UX"] },
    { category: "Backend", items: ["Node.js", "APIs", "Server Architecture"] },
    { category: "Tools", items: ["Git", "GitHub", "Vercel", "Netlify", "VS Code"] },
    { category: "Other", items: ["Image Processing", "Problem Solving"] }
  ];

 

  return (
    <div className="min-h-screen bg-gray-900 text-white">
     <Hero/>

      <About/>

      <Project/>

      <Skill skills={skills}/>

        <Contantt/>
      
      <Footer/>
    </div>
  );
};

