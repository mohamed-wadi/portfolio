import React from 'react';
import { FaCode, FaUsers, FaBook, FaBriefcase } from 'react-icons/fa';

const experience = [
  {
    title: "Projet Fin d'Études (Développeur)",
    date: "Déc 2023 — Juin 2023",
    place: "Sidi Kacem",
    icon: <FaCode className="text-blue-400" />,
    description: "Développement d'un site web pour une bibliothèque en ligne, travail d'équipe, gestion de projet, conception et développement web."
  },
  {
    title: "Membre actif du club scolaire",
    date: "2022 — 2024",
    place: "Sidi Kacem",
    icon: <FaUsers className="text-blue-400" />,
    description: "Participation au club scolaire, organisation d'événements, projets collaboratifs."
  },
  {
    title: "Ourdigit (Stagiaire en Développement)",
    date: "2023",
    place: "Casablanca",
    icon: <FaBriefcase className="text-blue-400" />,
    description: "Stage en développement web front-end et backend : création d'interfaces utilisateur avec HTML, CSS, JavaScript,PHP."
  },
  {
    title: "Lydec (Stagiaire en maintenance)",
    date: "2022",
    place: "Casablanca",
    icon: <FaBriefcase className="text-blue-400" />,
    description: "Maintenance électrique et hydraulique, diagnostics et opérations préventives/correctives."
  },
  {
    title: "Magazine Designer",
    date: "2021",
    place: "Casablanca",
    icon: <FaBook className="text-blue-400" />,
    description: "Conception du design du magazine Casablanca The City Of Paradox durant le baccalauréat."
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-950 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Expériences Professionnelles</h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-lg p-6 shadow-lg flex items-start gap-4 border-l-4 border-blue-400"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <div className="text-gray-400 text-sm mb-1">{item.date} — {item.place}</div>
              <div className="text-gray-300 text-md">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
