
import { Link } from "react-router-dom";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Model = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/smol_ame_in_an_upcycled_terrarium_hololiveen.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      action.reset().fadeIn(0.5).play();
      return () => { action.fadeOut(0.5) };
    }
  }, [actions, names]);

  const [x, setX] = useState(Number);
  const [y, sety] = useState(Number);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setX(clientX);
      sety(clientY);
      console.log("Mouse position:", { x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
      //   rotation={[0, Math.PI / 6, 0]}
      rotation={[
        0.5 * ((y / window.innerHeight) - 0.5), // rotate X slightly by mouse Y
        -Math.PI / 6 + 0.8 * ((x / window.innerWidth) - 0.5), // rotate Y by mouse X
        0
      ]}
    />
  );
};

// ✅ Preload model once outside component
useGLTF.preload("/models/smol_ame_in_an_upcycled_terrarium_hololiveen.glb");

export const CallToAction: React.FC = () => {
  const handleContactClick = () => {
    setTimeout(() => {
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div data-aos="zoom-in" className="relative flex flex-col-reverse overflow-hidden rounded-3xl bg-black shadow-2xl lg:flex-row lg:items-center lg:gap-x-16">
          {/* --- Background Gradient --- */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 z-0 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7c3aed" />
                <stop offset={1} stopColor="#a855f7" />
              </radialGradient>
            </defs>
          </svg>

          {/* --- Text Content --- */}
          <div data-aos="fade-right" data-aos-delay="200" className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-10 lg:mx-0 lg:w-1/2 lg:items-start lg:py-24 lg:text-left">
            <h2 className="text-3xl font-bold font-heading tracking-tight text-white sm:text-4xl md:text-5xl">
              Have a project in mind?
              <br />
              Let’s build something great together.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              I'm always excited to hear about new ideas. Whether you're a startup or an
              established company, I'd love to learn how I can help you achieve your goals.
            </p>
            <div className="mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6 lg:justify-start z-50">
              <Link
                to="/about"
                onClick={handleContactClick}
                className="rounded-2xl text-white py-3 hover:scale-[0.98] hover:translate-y-[-3px]  px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out shadow-[0px_3px_0px_0px_#6E50D1,0px_5px_6px_0px_#7558FC80] active:shadow-none"
                style={{
                  background: "linear-gradient(180deg, #7F61FB 0%, #7558FC 100%)",
                }}
              >
                Get in touch
              </Link>
              <Link
                to="/projects"
                className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-500 hover:text-gray-100 active:shadow-none"
              // style={{
              //   background: "linear-gradient(180deg, #ffffff62 0%, #ffffff44 100%)",
              //   border: "2px solid #ffffff55",
              //   color: "white",
              // }}
              >
                View my work
                <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
              </Link>
            </div>
          </div>

          {/* --- 3D Model Canvas --- */}
          <div data-aos="fade-left" data-aos-delay="200" className="relative h-72 w-full sm:h-96 lg:h-[32rem] lg:w-1/2">
            <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              <OrbitControls enableDamping dampingFactor={0.05} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};
