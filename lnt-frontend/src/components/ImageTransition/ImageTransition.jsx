import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://www.lntecc.com/media/vntfdrnx/yashobhoomi-phase-1-of-india-international-convention-and-expo-centre.jpg?anchor=center&mode=crop&rnd=133396973516430000",
  "https://www.lntecc.com/media/1t1lxdrw/worlds-tallest-statue-l-t-construction.jpg?anchor=center&mode=crop&rnd=133052054987670000",
  "https://www.lntecc.com/media/0gsasqar/shri-ram-janmbhoomi-mandir.jpg?anchor=center&mode=crop&rnd=133504955637700000",
];

const ImageTransition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const transition = {
    duration: 0.25, // Transition duration in seconds
    ease: "easeInOut", // Easing function
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []); // Run only once when the component mounts

  // const textVariants = {
  //   initial: { x: 30 },
  //   animate: { x: 0 },
  // };

  return (
    <div className="relative w-full h-[80vh] flex items-start justify-center overflow-hidden">
      {/* <motion.div
        className="absolute top-0 left-0 z-10"
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-color-green">Labor Productivity Prediction</h1>
      </motion.div> */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          className={`absolute top-0 left-0 z-10 w-full h-[100%] object-fill ${
            index !== currentImageIndex && "opacity-0 pointer-events-none"
          }`}
          alt={`Image ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={transition}
          style={{ objectFit: "cover" }} // Set object-fit property
        />
      ))}
    </div>
  );
};

export default ImageTransition;
