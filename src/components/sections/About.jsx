import React from 'react';
import backgroundImage from '../../assets/images/Background.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-700 p-2 rounded-lg shadow-xl">
              <div 
                className="aspect-square rounded-lg overflow-hidden flex items-center justify-center relative"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
                <img 
                  src="/images/logo.jpeg" 
                  alt="Wadi Mohamed" 
                  className="object-cover w-36 h-36 rounded-full border-4 border-blue-400 shadow-lg z-10 relative" 
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Wadi Mohamed</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Étudiant en 3ème année à l'EMSI Casablanca (3IIR), passionné par la cybersécurité et le développement web. Je suis à la recherche d'un stage pour approfondir mes connaissances en sécurité informatique et développer mes compétences en programmation dans un contexte professionnel.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Expérience en développement full-stack (React, Django, Symfony, C++), connaissance des techniques de cybersécurité, des bases de données (MySQL, PL/SQL, TSQL), et des systèmes Linux. Particulièrement intéressé par les aspects offensifs et défensifs de la sécurité informatique.
            </p>
            <ul className="text-gray-400 mb-6 text-md space-y-2">
              <li><span className="font-bold text-blue-400">Date de naissance :</span> 27-07-2004</li>
              <li><span className="font-bold text-blue-400">Adresse :</span> Casablanca, Hay Lalla Meriem</li>
              <li><span className="font-bold text-blue-400">E-mail :</span> mohamedwadi2004@gmail.com</li>
              <li><span className="font-bold text-blue-400">Téléphone :</span> +212 688 076617</li>
              <li><span className="font-bold text-blue-400">Formation actuelle :</span> 3ème année EMSI Casablanca (3IIR)</li>
            </ul>
            <a href="/cv-wadi-mohamed.pdf" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors" download>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
