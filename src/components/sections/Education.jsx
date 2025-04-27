import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    title: "3ème année EMSI Casablanca (3IIR)",
    date: "2024 — Présent",
    place: "Casablanca",
    icon: <FaUniversity className="text-blue-400" />,
    description: "École Marocaine des Sciences de l’Ingénieur, spécialité Ingénierie Informatique et Réseaux (cybersécurité, systèmes, réseaux, développement)."
  },
  {
    title: "Brevet de Technicien Supérieur BTS - Multimédia et Conception Web",
    date: "2022 — 2024",
    place: "Sidi Kacem",
    icon: <FaGraduationCap className="text-blue-400" />,
    description: "Formation en conception web, multimédia, développement, et gestion de projets numériques."
  },
  {
    title: "1ère année OFPPT - Électromécanique des Systèmes Automatisés",
    date: "2021 — 2022",
    place: "Casablanca",
    icon: <FaGraduationCap className="text-blue-400" />,
    description: "Compétences en systèmes automatisés, électronique, et maintenance industrielle."
  },
  {
    title: "Baccalauréat Science et Technologie Électrique",
    date: "Juin 2022",
    place: "Casablanca",
    icon: <FaGraduationCap className="text-blue-400" />,
    description: "Lycée Jaffar El Fassi El Fihri."
  },
  {
    title: "Baccalauréat Science Physique - biof",
    date: "2021 — 2022",
    place: "Casablanca",
    icon: <FaGraduationCap className="text-blue-400" />,
    description: "Lycée Jaffar El Fassi El Fihri."
  }
];

const Education = () => (
  <section id="education" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours Académique</h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-start gap-4 border-l-4 border-blue-400"
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

export default Education;
