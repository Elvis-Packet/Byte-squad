import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader"; // Adjust path if needed
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="home">
      {/* Background Video */}
      <video
        className="background-video"
        src="https://cdn.pixabay.com/video/2022/07/16/124333-730771399_tiny.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <AnimatePresence>
        {loading && (
          <Suspense fallback={<div>Loading Animation...</div>}>
            <Loader setLoading={setLoading} key="loader" />
          </Suspense>
        )}
      </AnimatePresence>
      
      {!loading && (
        <>
          <motion.div
            className="home-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            <h1>Byte Squad Software Engineers</h1>
            <p>Innovating the future, one line of code at a time.</p>
          </motion.div>
          
          <motion.div
            className="additional-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
          >
            <section className="about">
              <h2>About Us</h2>
              <p>
                We are a team of experienced software engineers dedicated to building innovative solutions for modern challenges.
                Our expertise spans web development, mobile applications, and cutting-edge technologies.
              </p>
            </section>
            <section className="services">
              <h2>Our Services</h2>
              <ul>
                <li>Custom Software Development</li>
                <li>Web & Mobile App Design</li>
                <li>Cloud Solutions & DevOps</li>
                <li>Consulting & Strategy</li>
              </ul>
            </section>
            <section className="projects">
              <h2>Featured Projects</h2>
              <p>
                Explore our portfolio of innovative projects that showcase our ability to deliver high-quality solutions.
              </p>
              {/* Optionally, add images or links to project pages here */}
            </section>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Home;
