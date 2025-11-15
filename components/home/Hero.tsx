import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DroneModel = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/animated_drone.glb");
  const { actions, names } = useAnimations(animations, group);

  // Detect mobile to scale and position model
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Play first animation
  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      const action = actions[names[0]];
      action.reset().fadeIn(0.5).play();
      return () => {
        action.fadeOut(0.5);
      };
    }
  }, [actions, names]);

  // Mouse position state
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setX(event.clientX);
      setY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={isMobile ? 15 : 15}
      position={isMobile ? [0, -1, 0] : [2.5 + x / 1000, -1.75 + y / 1000, 0]}
      rotation={
        isMobile
          ? [2 / 3, 0, 0]
          : [
              0.5 + ((y / window.innerHeight - 0.5) * 0.5 || 0),
              -1 + ((x / window.innerWidth - 0.5) * 1.2 || 0),
              0,
            ]
      }
    />
  );
};

useGLTF.preload("/models/animated_drone.glb");

export const Hero = () => (
  <section className="w-full max-w-[1550px] mx-auto bg-gray-50 py-16 md:py-24 flex flex-col md:flex-row items-center justify-start px-4 sm:px-6 lg:px-12 overflow-hidden">

    {/* Text Section */}
    <div className="w-full md:w-2/3 flex flex-col items-start mb-8 md:mb-0" data-aos="fade-right">
      <div
        className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
        AVAILABLE FOR WORK
      </div>

      <h1
        className="text-5xl md:text-6xl lg:text-[82px] font-bold uppercase text-black font-heading"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span>WEB DEVELOPER</span>
        <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
          _ FOCUSED ON USER-FIRST _
        </span>
        <span>
          DIGITAL EXPERIENCES
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>.</span>
        </span>
      </h1>

      <p
        className="mt-6 text-base sm:text-lg md:text-2xl text-gray-600 max-w-xl md:max-w-[80%]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Hi, I'm Abdul Manan. I build responsive, efficient, and visually appealing web applications with a focus on user experience first.
      </p>

      <Link
        to="mailto:abdulmanan.devs@gmail.com"
        className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out
                   text-gray-400 border-2 border-gray-400
                   shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)]
                   transform
                   hover:scale-[0.98] hover:translate-y-[-3px]
                   hover:bg-gray-700 hover:text-gray-100 active:shadow-none"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Contact Me
        <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl rotate-90" />
      </Link>
    </div>

    {/* 3D Model Section */}
    <div className="relative w-full md:absolute md:top-0 md:right-0 flex justify-center md:justify-end" data-aos="fade-left">
      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[800px]">
        <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <Suspense fallback={null}>
            <DroneModel />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Canvas>
      </div>
    </div>

  </section>
);
