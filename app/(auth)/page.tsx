"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import { ArrowBigUp, AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const user = useUser();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-gray-900 text-black dark:text-gray-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full grid grid-cols-12 gap-4 opacity-10 dark:opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-gray-300 dark:border-gray-700" />
            ))}
          </div>
        </div>

        <div className="relative z-10" data-aos="fade-up">
          <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Sela Resume{" "}
            <span className="text-primary-700 max-sm:block dark:text-gold-400">
              — Pause. Impress. Get Hired.
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-700 dark:text-gray-300">
            Effortlessly craft a professional resume with our AI-powered builder under Kratos Labs.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 dark:before:bg-gold-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">Get Started</span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 dark:before:bg-gray-700 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-gold-400">Learn more</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
        <h2 className="font-bold text-3xl" id="learn-more" data-aos="fade-up">
          How it Works?
        </h2>
        <h2 className="text-md text-gray-500 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
          Generate your resume in just 3 steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center md:text-start md:grid-cols-2 lg:grid-cols-3 md:px-4 lg:px-24">
          {[{
            icon: <AtomIcon className="h-8 w-8" />,
            title: "Create Your Template",
            description: "Start by selecting the color scheme for your resume template. Our single, professionally designed template ensures a clean and consistent look for all users."
          },{
            icon: <Edit className="h-8 w-8" />,
            title: "Update Your Information",
            description: "Enter your personal details, work experience, education, and skills into the provided form. Our AI assists you in filling out each section accurately and effectively."
          },{
            icon: <Share2 className="h-8 w-8" />,
            title: "Share Your Resume",
            description: "Save your resume securely and generate a shareable link. Update anytime and share with potential employers or download in your preferred format."
          }].map((step, i) => (
            <div
              key={i}
              className="flex flex-col cursor-pointer p-8 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-xl max-md:shadow-md shadow-gray-600/10 dark:shadow-gray-900/20 hover:shadow-gray-600/15 dark:hover:shadow-gray-900/40 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {step.icon}
              <h2 className="mt-4 text-xl font-bold">{step.title}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 md:text-justify">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <Link
            href="#get-started"
            className="inline-block rounded-full bg-primary-700 dark:bg-gold-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-800 dark:hover:bg-gold-600 focus:outline-none focus:ring focus:ring-primary-400"
          >
            <div className="flex items-center justify-center">
              <ArrowBigUp className="h-6 w-6 mr-2" />
              Get Started Today
            </div>
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-6 mx-auto max-w-screen-xl text-center lg:px-12 md:px-10">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative group" data-aos="fade-right">
            <img
              src="/profile-placeholder.jpg"
              alt="Richard Princewill"
              className="rounded-3xl shadow-lg w-full object-cover max-h-[400px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <Link href="https://github.com/Mahmud0808" className="text-white hover:text-gold-400">GitHub</Link>
                <Link href="https://linkedin.com/in/your-linkedin" className="text-white hover:text-gold-400">LinkedIn</Link>
              </div>
            </div>
          </div>
          <div className="text-left" data-aos="fade-left">
            <p className="mb-4">
              Hi, I’m <span className="font-bold">Richard Princewill</span>, founder of <span className="font-bold">Sela Resume</span>, a project under <span className="font-bold">Kratos Labs</span>. I’m passionate about helping people build professional resumes effortlessly using AI technology.
            </p>
            <p>
              Join me on this journey and experience seamless resume creation designed with both style and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md w-full py-4">
        <div className="w-full mx-auto text-center max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}
            <span className="hover:text-primary-500 dark:hover:text-gold-400 cursor-pointer">
              Sela Resume™
            </span>
            . All Rights Reserved. — Under Kratos Labs
          </span>
          <Link href="https://github.com/Mahmud0808" className="mt-2 md:mt-0">
            <span className="hover:text-primary-500 dark:hover:text-gold-400 text-sm font-medium">
              Authored by Richard Princewill
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Page;
