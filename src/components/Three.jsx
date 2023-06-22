
import React, { useRef } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";
import { useControls } from 'leva';

export function Three(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/lawn/lcdl1.gltf')
  const { actions } = useAnimations(animations, group);
  const { lcdOneTexture, lawnCeilingDrapeOne } = useConfigurator();

  const materialTextureProps = useTexture({
    map: './gcdTextures/tex/m.jpg',
    displacementMap: './gcdTextures/tex/h.png',
    normalMap: './gcdTextures/tex/n.jpg',
    roughnessMap: './gcdTextures/tex/rh.jpg',
    aoMap: './gcdTextures/tex/ao.jpg',
  })

  materialTextureProps.map.repeat.set(30, 30);
  materialTextureProps.normalMap.repeat.set(30, 30);
  materialTextureProps.roughnessMap.repeat.set(30, 30);
  materialTextureProps.aoMap.repeat.set(30, 30);

  materialTextureProps.map.wrapS =
    materialTextureProps.map.wrapT =
    materialTextureProps.normalMap.wrapS =
    materialTextureProps.normalMap.wrapT =
    materialTextureProps.roughnessMap.wrapS =
    materialTextureProps.roughnessMap.wrapT =
    materialTextureProps.aoMap.wrapS =
    materialTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  // materialTextureProps.wrapS = THREE.RepeatWrapping;
  // materialTextureProps.wrapT = THREE.TextureLoader;


  const { displacementScale, aoMapIntensity } = useControls({
    displacementScale: {
      value: 1,
      min: -2,
      max: 2,
    },
    aoMapIntensity: {
      value: 1,
      min: 0,
      max: 10,
    }
  });


  return (
    <group ref={group} {...props} dispose={null}>

      <group name="Scene">
        <group name="lcdl15" position={[-4.13, 2.3, -6.82]} rotation={[1.55, 0.03, 0.49]} scale={[0.67, 6.34, 1.25]} >
          {/* <mesh name="curtain4005" geometry={nodes.curtain4005.geometry} material={materials['Color_000.005']} >


          </mesh>
          <mesh name="curtain4005_1" geometry={nodes.curtain4005_1.geometry} material={materials.Color_000} >

          </mesh>
          <mesh name="curtain4005_2" geometry={nodes.curtain4005_2.geometry} material={materials['Color_000.002']} >

          </mesh>
          <mesh name="curtain4005_3" geometry={nodes.curtain4005_3.geometry} material={materials['Color_000.003']} >
        </mesh> */}
          <sphereBufferGeometry />
          <mesh name="curtain4005_4" geometry={nodes.curtain4005_4.geometry} material={materials['Color_000.004']}  >
            <meshStandardMaterial {...materialTextureProps}
              // wireframe color={"white"}
              // normalMap-encoding={THREE.LinearEncoding}
              displacementScale={displacementScale}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>


    </group >
  )
}

useGLTF.preload('./models/lawn/lcdl1.gltf')
