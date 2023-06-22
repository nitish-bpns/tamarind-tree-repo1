import { Stage, OrbitControls, Environment, PresentationControls, TransformControls } from '@react-three/drei'
// import { Table } from './Table';
import { React, useRef, Suspense } from 'react'
// import { useConfigurator } from "../contexts/Configurator";
// import { Grinder } from './Grinder';
// import { Gazebo2 } from './Gazebo2';
// import { GCD } from './Gcd';
// import { Lcd } from './Lcd';
// import { Gpd } from './Gpd';
// import { Lpd } from './Lpd';
// import { TestFlowers } from './TestFlowers';
import { Gfsl } from './Gfsl';
// import { Abc } from './Abc';
// import { BandModel } from './BandModel';


import { Gcdl1 } from './Gcdl1';
import { Gcdl2 } from './Gcdl2';
import { Gcdl3 } from './Gcdl3';
import { Gpdl1 } from './Gpdl1';
import { Gpdl2 } from './Gpdl2';
import { Gpdl3 } from './Gpdl3';
import { Lcdl1 } from './Lcdl1';
import { Lcdl2 } from './Lcdl2';
import { Lcdl3 } from './Lcdl3';
import { Lcdl4 } from './Lcdl4';
import { Lpdl1 } from './Lpdl1';
import { Lpdl2 } from './Lpdl2';


// import { GazeboRight } from './GazeboRight';
// import { One } from './1';
// import { Two } from './2';


// import { useLoader } from '@react-three/fiber';
// import { Suspense } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';
// import { Three } from './Three';


export const Experience = ({ env = './scene/forest.hdr' }) => {

  // export const Experience = () => {

  // const { legs } = useConfigurator();

  // const Band = useLoader(GLTFLoader, "./models/band.gltf");

  return (
    <>

      <Environment files={env} ground={{ height: 5, radius: 35, scale: 55 }}
      />

      {/* <Environment ground={{ height: 5, radius: 35, scale: 55 }}
      /> */}

      {/* </Stage> */}
      {/* <TransformControls position={[3, 0, 0]} mode="translate"> */}


      {/* <Three position={[0, 0, 0]} /> */}
      {/* <Suspense fallback={null}> */}
      {/* <primitive object={Ball.scene} position={[0, 0, 0]} /> */}
      {/* <primitive object={Band.scene} position={[0, 0, 0]} /> */}
      {/* </Suspense> */}

      {/* <GCD position={[0, 0.5, 0]} /> */}
      <Gcdl1 position={[0, 2.3, 0]} />
      <Gcdl2 position={[0, 2.3, 0]} />
      <Gcdl3 position={[0, 2.3, 0]} />

      <Gpdl1 position={[0, 2.3, 0]} />
      <Gpdl2 position={[0, 2.3, 0]} />
      <Gpdl3 position={[0, 2.3, 0]} />

      <Lcdl1 position={[0, 2.3, 0]} />
      <Lcdl2 position={[0, 2.3, 0]} />
      <Lcdl3 position={[0, 2.3, 0]} />
      <Lcdl4 position={[0, 2.3, 0]} />

      <Lpdl1 position={[0, 2.3, 0]} />
      <Lpdl2 position={[0, 2.3, 0]} />



      {/* <Lcd position={[0, 0.5, 0]} /> */}
      {/* <Gpd position={[0, 0.5, 0]} /> */}
      {/* <Lpd position={[0, 0.5, 0]} /> */}
      {/* <Gfsl position={[0, 2.3, 0]} /> */}
      {/* <spotLight intensity={5.5} angle={90} penumbra={1} position={[10, 15, 10]} castShadow /> */}

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        minDistance={0.001}
        maxDistance={50}
        maxPolarAngle={Math.PI / 1.5} />
      {/* </PresentationControls> */}
    </>


  );
};
