import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LampContainer } from "../../ui/lamp";
import { Button } from "../../ui/moving-border";
export default function Projects2() {
  const navigate = useNavigate();
  // console.log(navigate);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/proj2", {
        method: "POST", // Change to POST method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prize: 1 }), // Include prize value in the request body
      });
      console.log(res.body);
      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const responseData = await res.json();
      console.log({ responseData });
      navigate("/project-2/sentiment-analysis", {
        state: { data: responseData },
      });
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center bg-black">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Workers <br /> Tweet Analysis
        </motion.h1>
        <Button
          onClick={handleClick}
          borderRadius="1.75rem"
          className="bg-custom-blue/60 hover:bg-[#024D87] text-white border-[5px] border-white-500 antialiased"
        >
          Generate
        </Button>
      </LampContainer>

      {/* <button className="bg-blue-500 hover:bg-custom-blue text-white font-bold py-2 px-4 rounded"></button> */}
    </div>
  );
}
