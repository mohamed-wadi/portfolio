import React from 'react';
import { FaLinux, FaReact, FaPython, FaPhp, FaDatabase, FaNetworkWired, FaCodeBranch, FaLock, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiSymfony, SiJavascript, SiMysql, SiPostgresql, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiKalilinux, SiWireshark } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      title: 'Cybersécurité',
      icon: <FaLock size={40} />,
      description: 'Techniques d\'attaque et de défense, pentesting, analyse de vulnérabilités, sécurité des applications web',
      technologies: ['Pentesting', 'Kali Linux', 'Wireshark', 'OWASP', 'Audit de sécurité']
    },
    {
      title: 'Développement Web',
      icon: <FaReact size={40} />,
      description: 'Développement web moderne avec React, Django, Symfony, PHP, Bootstrap, TailwindCSS',
      technologies: ['React', 'Django', 'Symfony', 'PHP', 'Bootstrap', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Systèmes & Réseaux',
      icon: <FaLinux size={40} />,
      description: 'Administration Linux, Protocoles TCP/IP, OSI, Sécurité réseau, analyse de trafic',
      technologies: ['Linux', 'TCP/IP', 'OSI', 'Cisco Packet Tracer', 'Sécurité réseau']
    },
    {
      title: 'Programmation',
      icon: <SiCplusplus size={40} />,
      description: 'Programmation avancée en C, C++, Java, Python, scripts d\'automatisation',
      technologies: ['C', 'C++', 'Java', 'Python']
    },
    {
      title: 'Bases de Données',
      icon: <FaDatabase size={40} />,
      description: 'Conception, gestion de bases de données relationnelles',
      technologies: ['MySQL', 'TSQL', 'PL/SQL']
    },
    {
      title: 'Sécurité Offensive',
      icon: <FaUserSecret size={40} />,
      description: 'Techniques d\'intrusion éthique, reconnaissance, exploitation de vulnérabilités',
      technologies: ['Ethical Hacking', 'Reconnaissance', 'Exploitation', 'Social Engineering']
    },
    {
      title: 'Langues',
      icon: <FaNetworkWired size={40} />,
      description: 'Arabe (maternelle), Français (très bien), Anglais (bien)',
      technologies: ['Arabe', 'Français', 'Anglais']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Un aperçu de mes compétences en développement, cybersécurité, techniques d'attaque et défense, et programmation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1 border border-gray-800"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-sm px-3 py-1 rounded-full border border-blue-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
