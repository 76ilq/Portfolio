import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "./Component/Variants";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const App = () => {
  return (
    <div className="h-full overflow-y-scroll snap-mandatory">
      <Parallax pages={4}>
        <ParallaxLayer 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-500"
        >
          <h1>ParallaxLayer 1</h1>
          <p>This is the first ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-600"
        >
          <h1>ParallaxLayer 2</h1>
          <p>This is the second ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-700"
        >
          <h1>ParallaxLayer 3</h1>
          <p>This is the third ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-800"
        >
          <h1>ParallaxLayer 4</h1>
          <p>This is the fourth ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-900"
        >
          <h1>ParallaxLayer 5</h1>
          <p>This is the fifth ParallaxLayer.</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
