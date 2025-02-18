import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "./Trash/Variants";
import Home from "./Component/Home"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const App = () => {
  return (
    <div 
    // className="h-full overflow-y-scroll snap-mandatory

    >
      <Parallax pages={5}
      >
        <ParallaxLayer 
        speed={1}
        offset={0}>
          <Home></Home>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={1}
        speed={1}
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-600"
        >
          <h1>ParallaxLayer 2</h1>
          <p>This is the second ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer
      offset={2}
      factor={2} 
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-700"
        >
          <h1>ParallaxLayer 3</h1>
          <p>This is the third ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={3}
        speed={1}
        factor={2}
        // className="h-screen snap-start flex justify-center items-center flex-col text-center bg-slate-800"
        >
          <h1>ParallaxLayer 4</h1>
          <p>This is the fourth ParallaxLayer.</p>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={4}
        speed={1}
        factor={2}
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
