import React, { useState, useRef } from 'react';
import NextImage from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Environment variables for EmailJS
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  // Initialize EmailJS with Public Key
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  } else {
    console.error("EmailJS Public Key is missing! Check your .env file.");
  }

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          time: new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        PUBLIC_KEY
      );
      toast.success('Message sent successfully!', { id: loadingToast });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#FF6B35] text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white">Contact Us</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-b border-white/20 pb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full"><MapPin className="text-white" size={24} /></div>
              <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Address</h4><p className="text-white/80">SLIIT Campus, New Kandy Road, Malabe, Sri Lanka</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Phone className="text-white" size={24} /></div>
              <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Phone</h4><p className="text-white/80">+94 76 605 0012</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Mail className="text-white" size={24} /></div>
              <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Email</h4><p className="text-white/80">nextstopproject52@gmail.com</p></div>
            </div>
          </div>

          {/* Form Box */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold text-[#1F2937] mb-6">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#F7F8FA] border ${errors.name ? 'border-red-500' : 'border-gray-200'} text-[#1F2937] rounded-lg p-4 focus:outline-none focus:border-[#FF6B35] transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#F7F8FA] border ${errors.email ? 'border-red-500' : 'border-gray-200'} text-[#1F2937] rounded-lg p-4 focus:outline-none focus:border-[#FF6B35] transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#F7F8FA] border ${errors.message ? 'border-red-500' : 'border-gray-200'} text-[#1F2937] rounded-lg p-4 focus:outline-none focus:border-[#FF6B35] transition-colors`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#FF6B35] text-white px-10 py-5 cursor-pointer rounded-full font-bold text-lg hover:bg-[#E6521F] transition-all shadow-xl hover:shadow-[#FF6B35]/30 hover:-translate-y-1 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>



            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 py-12 text-sm text-white/80">
          <div className="col-span-1 md:col-span-2">
            <div className="font-extrabold text-3xl text-white mb-4 flex items-center gap-3 tracking-tight">
              NextStop
            </div>
            <p className="max-w-md text-base leading-relaxed">Redefining smart public transit with dynamic fare calculations, live IoT integrations, and deep learning predictions for a seamless commuter experience.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#domain" className="hover:text-white transition">Domain</a></li>
              <li><a href="#technologies" className="hover:text-white transition">Technologies</a></li>
              <li><a href="#documents" className="hover:text-white transition">Documents</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Newsletter</h4>
            <p className="mb-4">Subscribe to receive updates on our project progress.</p>
            <div className="flex bg-white rounded-lg p-1">
              <input type="email" placeholder="Email Address" className="p-3 w-full focus:outline-none text-[#1F2937] bg-transparent" />
              <button className="bg-[#1F2937] px-6 rounded-md font-bold text-white hover:bg-black transition">Go</button>
            </div>
          </div>
        </div>

        <div className="text-center text-white/60 text-sm mt-8 font-medium">
          © 2026 NextStop - All Rights Reserved | Research Project IT4010 - SLIIT
        </div>
      </div>
    </footer>
  );
};

export default Footer;
