// src/pages/Home.jsx
import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Loader = React.lazy(() => import("./Loader"));
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
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <h1>Byte Squad Software Engineers</h1>
          <p>Innovating the future, one line of code at a time.</p>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
