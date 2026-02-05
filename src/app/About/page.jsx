"use client";
import { useState } from 'react';
import Image from 'next/image';

import therapy1 from '../../assets/1.webp';
import therapy2 from '../../assets/2.webp';
import therapy3 from '../../assets/3.webp';
import therapy4 from '../../assets/4.webp';
import therapy from '../../assets/therapy.jpg';
import meditate from '../../assets/meditation.png';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
const About = () => {
  const images = [therapy4, therapy1, therapy2, therapy3];
  const [activeImage, setActiveImage] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <main className="about-page bg-[var(--color-accent)]">
      <Navbar />
      <Reveal>
        {/* 1️⃣ HERO SECTION */}
        <section className="flex flex-row p-30 pb-45" id='hero'>
          <div className="about-hero-content">
            <h1 className='text-6xl'><b>Let's Connect</b></h1>
            <p className="mt-20  text-lg about-hero-subtitle">
              Starting therapy is courageous.<br /><br />Get in touch for questions, or to book a free 15-minute consultation.
            </p>
            <div className="relative w-full mt-6 max-w flex justify-left mx-12 items-end">

              {/* Therapy Image (arched top) */}
              <div className="relative z-0">
                <Image
                  src={therapy}
                  alt="Therapy"
                  className="rounded-t-full w-60 h-90 object-cover"
                />
              </div>

              {/* Meditation Image (smaller, perfectly bottom-aligned & overlapping) */}
              <div className="absolute bottom-0 left-1/6 z-10 -translate-x-1/2 translate-x-20">
                <Image
                  src={meditate}
                  alt="Meditation"
                  className="rounded-full w-45 h-45 border-4 border-white"
                />
              </div>

            </div>
          </div>
          <div className='flex align-middle p-8'>
            {/* <p className="bg-black  text-[#c2bfca] text-lg w-2xl"><b>PLEASE NOTE:</b> If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.</p> */}
          </div>
        </section>
        <section id="contact" className="bg-[var(--color-accent)] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
              Book Your Initial Consultation
            </h1>

            {/* Form */}
            <form className="mt-14 bg-white p-10 space-y-6 text-gray-700">

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">First Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Last Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Phone Number*</label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email*</label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-2 font-medium">Your Gender</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" className="accent-[var(--color-secondary)]" />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" className="accent-[var(--color-secondary)]" />
                    Female
                  </label>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block mb-2 font-medium">Your Age*</label>
                <input
                  type="number"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>

              {/* Problem Description */}
              <div>
                <label className="block mb-2 font-medium">
                  Describe your major problem
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b8a89a]"
                ></textarea>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" required className="mt-1 accent-[var(--color-secondary)]" />
                <p>
                  *By filling out this form, you agree to our{" "}
                  <span className="underline font-medium cursor-pointer">
                    Informed Consent for Therapy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#a29285] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        <section className="bg-[var(--color-secondary)] py-24 px-6">
          <div className="max-w-8xl mx-10 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">

            {/* Left Content */}
            <div className="text-white space-y-10">
              <h1 className="text-3xl md:text-4xl font-semibold">
                My Office
              </h1>

              <p className="text-lg leading-relaxed space-y-10">
                123 W 45th Street,<br />
                Santa Monica, CA 90401
              </p>

              <div>
                <h2 className="text-2xl font-semibold mt-6 mb-6">
                  Hours
                </h2>
                <p className="text-lg space-y-10">
                  Monday – Friday <br />
                  10am – 6pm
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[330px] md:h-[400px] overflow-hidden grayscale contrast-125 brightness-95">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16773.348521226086!2d-118.50350899841834!3d34.01374850853727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1770214044211!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>

        {/* 4️⃣ WHO I WORK WITH */}
        {/* <section className="mx-auto max-w bg-[#FBF7F0] py-26 px-6">
        <h2 className="mb-8 text-left text-3xl font-semibold text-[#2E3D1F]">
          Find me on Social Media
        </h2>

        {/* thumbnails 
        <div className="flex justify-center gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative h-84 w-84 cursor-pointer overflow-hidden rounded-md"
              onClick={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt="Social media"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* modal 
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FBF7F0]/80">
            
            {/* ❌ close button 
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-[#E5E0DA] text-3xl font-light transition hover:opacity-70"
            >
              ×
            </button>

            <Image
              src={activeImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </section> */}
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
};

export default About;
