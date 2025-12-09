import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { TreeMode } from './types';
import { Experience } from './components/Experience';

const App: React.FC = () => {
  const [mode, setMode] = useState<TreeMode>(TreeMode.TREE_SHAPE);

  const toggleMode = () => {
    setMode((prev) => (prev === TreeMode.TREE_SHAPE ? TreeMode.SCATTERED : TreeMode.TREE_SHAPE));
  };

  return (
    <div className="relative w-full h-screen bg-[#050a08] overflow-hidden text-white">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 12], fov: 45 }}
          gl={{ antialias: false, stencil: false, alpha: false }}
        >
          <Suspense fallback={null}>
            <Experience mode={mode} />
          </Suspense>
        </Canvas>
        <Loader 
          dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
          containerStyles={{ background: '#050a08' }}
          innerStyles={{ border: '1px solid #d4af37', width: '200px' }}
          barStyles={{ background: '#d4af37' }}
          dataStyles={{ color: '#d4af37', fontFamily: 'Playfair Display' }}
        />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12">
        {/* Header */}
        <header className="flex flex-col items-start space-y-2 pointer-events-auto">
          <h1 className="font-serif-display text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#cfb53b] via-[#fcf6ba] to-[#aa8e28] drop-shadow-lg filter">
            Arix Signature
          </h1>
          <h2 className="font-sans-body text-sm md:text-base tracking-[0.3em] text-emerald-100/80 uppercase">
            Interactive Holiday Experience
          </h2>
        </header>

        {/* Footer / Controls */}
        <footer className="flex flex-col md:flex-row items-end md:items-center justify-between pointer-events-auto w-full">
          <div className="hidden md:block text-xs text-emerald-200/40 font-mono max-w-xs">
            RENDER_ENGINE: R3F_V8 <br />
            STATUS: {mode === TreeMode.TREE_SHAPE ? 'CONVERGED' : 'ENTROPY'}
          </div>

          <button
            onClick={toggleMode}
            className="group relative px-8 py-4 bg-transparent overflow-hidden transition-all duration-500 ease-out"
          >
            {/* Button Background & Border */}
            <div className="absolute inset-0 border border-[#d4af37]/50 group-hover:border-[#d4af37] transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-[#022b1c]/80 backdrop-blur-sm group-hover:bg-[#022b1c] transition-colors duration-500"></div>
            
            {/* Button Text */}
            <span className="relative z-10 font-sans-body text-sm tracking-[0.2em] text-[#d4af37] uppercase group-hover:text-white transition-colors duration-300">
              {mode === TreeMode.TREE_SHAPE ? 'Release Entropy' : 'Assemble Form'}
            </span>
            
            {/* Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;