import { Stage, OrbitControls, Environment, PresentationControls, TransformControls } from '@react-three/drei'
// import { Table } from './Table';
import { React, useRef } from 'react'
import { useConfigurator } from "../contexts/Configurator";
// import { Grinder } from './Grinder';
import { Gazebo2 } from './Gazebo2';
import { GCD } from './Gcd';
import { Lcd } from './Lcd';
import { Gpd } from './Gpd';
import { Lpd } from './Lpd';
import { TestFlowers } from './TestFlowers';
import { Gfsl } from './Gfsl';
// import { Bandstand } from './Bandstand';
// import { Curtain1 } from './Curtain1';
// import { Curtain2 } from './Curtain2';
// import { HangingBells } from './HangingBells';

export const Experience = ({ env = './scene/field.hdr' }) => {

  // export const Experience = () => {

  const { legs } = useConfigurator();



  return (
    <>
      {/* <Stage
        intensity={1.5}
        environment="city"
        shadows={{ type: 'accumulative', color: '#d9afd9', colorBlend: 2, opacity: 2 }}
        adjustCamera={2}> */}

      {/* <PresentationControls
        speed={1.5}
        global={false}
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
        azimuth={[-1, 1]}

      > */}

      <Environment files={env} ground={{ height: 5, radius: 40, scale: 20 }} />
      {/* <Setup> */}
      {/* <TransformControls ref={ref}> */}
      {/* <Box> */}
      {/* <meshBasicMaterial wireframe /> */}
      {/* </Box> */}
      {/* </TransformControls> */}
      {/* </Setup> */}
      {/* <TransformControls mode="scale"> */}
      {/* <TransformControls mode="translate"> */}
      {/* <TransformControls mode="rotate"> */}
      {/* <Table /> */}
      {/* </TransformControls> */}
      {/* </TransformControls> */}
      {/* </TransformControls> */}
      {/* </Stage> */}

      {/* <TransformControls position={[3, 0, 0]} mode="translate"> */}
      {/* <Gazebo2 position={[0, 0, 0]} /> */}
      {/* <Curtain1 position={[0, 0, 0]} /> */}
      {/* <Curtain2 position={[0, 0, 0]} /> */}
      {/* <HangingBells position={[0, 0, 8]} /> */}
      {/* <Gazebo2 position={[0, 0, 1]} /> */}

      <GCD position={[0, 0.5, 0]} />
      <Lcd position={[0, 0.5, 0]} />
      <Gpd position={[0, 0.5, 0]} />
      <Lpd position={[0, 0.5, 0]} />
      {/* <TestFlowers position={[0, 0.5, 0]} /> */}
      <Gfsl position={[0, 0.5, 0]} />

      {/* <Bandstand position={[0, 0, 1]} /> */}
      {/* <Grinder position={[0, 0, 0]} /> */}
      {/* </TransformControls> */}


      <OrbitControls
        makeDefault
        minPolarAngle={0}
        minDistance={1}
        maxDistance={19}
        maxPolarAngle={Math.PI / 1.8} />
      {/* </PresentationControls> */}
    </>


  );
};
