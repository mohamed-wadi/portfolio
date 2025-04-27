import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white pt-16 relative"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wadi Mohamed
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-400">
            Développeur Full Stack & Passionné de Cybersécurité
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            À la frontière entre le développement et la sécurité informatique. Je code des applications robustes tout en explorant le fascinant univers de la cybersécurité. Ma passion pour les techniques d'attaque et de défense me permet d'intégrer des pratiques de sécurité avancées dans mes projets de développement, créant ainsi des solutions à la fois fonctionnelles et sécurisées.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#skills" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Voir Mes Compétences
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
