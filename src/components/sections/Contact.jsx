import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mode temporaire de simulation en attendant la configuration d'EmailJS
    setTimeout(() => {
      console.log('Simulation d\'envoi de message:', formData);
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Merci pour votre message ! Je vous répondrai dès que possible.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
    
    /* 
    // Décommentez ce bloc et remplacez les valeurs après avoir créé votre compte EmailJS
    
    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID'; // Exemple: 'service_abc123'
    const templateId = 'YOUR_TEMPLATE_ID'; // Exemple: 'template_xyz789'
    const publicKey = 'YOUR_PUBLIC_KEY'; // Exemple: 'AbCdEfGhIjKlMnOp'
    
    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Merci pour votre message ! Je vous répondrai dès que possible.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          text: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.'
        });
      });
    */
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. Je suis toujours ouvert à discuter de nouvelles opportunités.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg text-white">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">mohamedwadi2004@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg text-white">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">+212 688076617</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg text-white">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">Casablanca</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/samira.elhafidi.140" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="https://wa.me/212688076617" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/wadi_mehmet?igshid=c20wYzJmYnlpNTR4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-wadi-79b4a1228/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
