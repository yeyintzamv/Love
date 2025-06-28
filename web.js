import React, { useState } from 'react'; import { Canvas } from '@react-three/fiber'; import { OrbitControls, Stars } from '@react-three/drei'; import { motion } from 'framer-motion'; import { Card, CardContent } from '@/components/ui/card'; import { Button } from '@/components/ui/button';

const LoveLetter = ({ image, position }) => { return ( <motion.mesh position={position} animate={{ rotateY: [0, Math.PI * 2] }} transition={{ duration: 10, loop: Infinity }} > <planeBufferGeometry attach="geometry" args={[3, 3]} /> <meshStandardMaterial> <textureLoader attach="map" url={image} /> </meshStandardMaterial> </motion.mesh> ); };

const LoveLetterWebsite = () => { const [letters, setLetters] = useState([ { image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Letter+1', position: [0, 0, -5], }, { image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Letter+2', position: [3, 3, -5], }, ]);

const addLetter = () => { const newLetter = { image: https://via.placeholder.com/150/FF0000/FFFFFF?text=Letter+${letters.length + 1}, position: [ (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, ], }; setLetters([...letters, newLetter]); };

return ( <div className="h-screen w-full bg-gradient-to-b from-blue-300 to-purple-700 relative overflow-hidden"> <Canvas> <ambientLight intensity={0.5} /> <pointLight position={[10, 10, 10]} /> <Stars /> {letters.map((letter, idx) => ( <LoveLetter key={idx} {...letter} /> ))} <OrbitControls /> </Canvas> <div className="absolute top-0 left-0 w-full p-4 text-white text-center"> <h1 className="text-4xl font-bold">Love Letter Wonderland</h1> <Button onClick={addLetter} variant="outline"> Add New Letter </Button> </div> </div> ); };

export default LoveLetterWebsite;

  
