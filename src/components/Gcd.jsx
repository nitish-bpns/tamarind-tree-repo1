/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/gazebo/gcd.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";

export function GCD(props) {
  const { nodes, materials } = useGLTF('./models/gazebo/gcd.gltf')

  const { gcdOneTexture, gcdTwoTexture, gcdThreeTexture, gazeboCeilingDrapeOne, gazeboCeilingDrapeTwo, gazeboCeilingDrapeThree } = useConfigurator();

  const materialTextureProps = useTexture({
    map: './gcdTextures/texOne/grey.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texOne/grey.jpg',
    roughnessMap: './gcdTextures/texOne/grey.jpg',
    aoMap: './gcdTextures/texOne/grey.jpg',
  })

  materialTextureProps.map.repeat.set(3, 3);
  materialTextureProps.normalMap.repeat.set(3, 3);
  materialTextureProps.roughnessMap.repeat.set(3, 3);
  materialTextureProps.aoMap.repeat.set(3, 3);

  materialTextureProps.map.wrapS =
    materialTextureProps.map.wrapT =
    materialTextureProps.normalMap.wrapS =
    materialTextureProps.normalMap.wrapT =
    materialTextureProps.roughnessMap.wrapS =
    materialTextureProps.roughnessMap.wrapT =
    materialTextureProps.aoMap.wrapS =
    materialTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const gcdRedTextureProps = useTexture({
    map: './gcdTextures/texTwo/red.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texTwo/red.jpg',
    roughnessMap: './gcdTextures/texTwo/red.jpg',
    aoMap: './gcdTextures/texTwo/red.jpg',
  })

  gcdRedTextureProps.map.repeat.set(3, 3);
  gcdRedTextureProps.normalMap.repeat.set(3, 3);
  gcdRedTextureProps.roughnessMap.repeat.set(3, 3);
  gcdRedTextureProps.aoMap.repeat.set(3, 3);

  gcdRedTextureProps.map.wrapS =
    gcdRedTextureProps.map.wrapT =
    gcdRedTextureProps.normalMap.wrapS =
    gcdRedTextureProps.normalMap.wrapT =
    gcdRedTextureProps.roughnessMap.wrapS =
    gcdRedTextureProps.roughnessMap.wrapT =
    gcdRedTextureProps.aoMap.wrapS =
    gcdRedTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const gcdYellowTextureProps = useTexture({
    map: './gcdTextures/texThree/yellow.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texThree/yellow.jpg',
    roughnessMap: './gcdTextures/texThree/yellow.jpg',
    aoMap: './gcdTextures/texThree/yellow.jpg',
  })

  gcdYellowTextureProps.map.repeat.set(3, 3);
  gcdYellowTextureProps.normalMap.repeat.set(3, 3);
  gcdYellowTextureProps.roughnessMap.repeat.set(3, 3);
  gcdYellowTextureProps.aoMap.repeat.set(3, 3);

  gcdYellowTextureProps.map.wrapS =
    gcdYellowTextureProps.map.wrapT =
    gcdYellowTextureProps.normalMap.wrapS =
    gcdYellowTextureProps.normalMap.wrapT =
    gcdYellowTextureProps.roughnessMap.wrapS =
    gcdYellowTextureProps.roughnessMap.wrapT =
    gcdYellowTextureProps.aoMap.wrapS =
    gcdYellowTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  const fourTextureProps = useTexture({
    map: './gcdTextures/texFour/cream.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texFour/cream.jpg',
    roughnessMap: './gcdTextures/texFour/cream.jpg',
    aoMap: './gcdTextures/texFour/cream.jpg',
  })

  fourTextureProps.map.repeat.set(3, 3);
  fourTextureProps.normalMap.repeat.set(3, 3);
  fourTextureProps.roughnessMap.repeat.set(3, 3);
  fourTextureProps.aoMap.repeat.set(3, 3);

  fourTextureProps.map.wrapS =
    fourTextureProps.map.wrapT =
    fourTextureProps.normalMap.wrapS =
    fourTextureProps.normalMap.wrapT =
    fourTextureProps.roughnessMap.wrapS =
    fourTextureProps.roughnessMap.wrapT =
    fourTextureProps.aoMap.wrapS =
    fourTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  const fiveTextureProps = useTexture({
    map: './gcdTextures/texFive/translucent.png',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texFive/translucent.png',
    roughnessMap: './gcdTextures/texFive/translucent.png',
    aoMap: './gcdTextures/texFive/translucent.png',
  })

  fiveTextureProps.map.repeat.set(3, 3);
  fiveTextureProps.normalMap.repeat.set(3, 3);
  fiveTextureProps.roughnessMap.repeat.set(3, 3);
  fiveTextureProps.aoMap.repeat.set(3, 3);

  fiveTextureProps.map.wrapS =
    fiveTextureProps.map.wrapT =
    fiveTextureProps.normalMap.wrapS =
    fiveTextureProps.normalMap.wrapT =
    fiveTextureProps.roughnessMap.wrapS =
    fiveTextureProps.roughnessMap.wrapT =
    fiveTextureProps.aoMap.wrapS =
    fiveTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const sixTextureProps = useTexture({
    map: './gcdTextures/texSix/lightGreen.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texSix/lightGreen.jpg',
    roughnessMap: './gcdTextures/texSix/lightGreen.jpg',
    aoMap: './gcdTextures/texSix/lightGreen.jpg',
  })

  sixTextureProps.map.repeat.set(3, 3);
  sixTextureProps.normalMap.repeat.set(3, 3);
  sixTextureProps.roughnessMap.repeat.set(3, 3);
  sixTextureProps.aoMap.repeat.set(3, 3);

  sixTextureProps.map.wrapS =
    sixTextureProps.map.wrapT =
    sixTextureProps.normalMap.wrapS =
    sixTextureProps.normalMap.wrapT =
    sixTextureProps.roughnessMap.wrapS =
    sixTextureProps.roughnessMap.wrapT =
    sixTextureProps.aoMap.wrapS =
    sixTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const sevenTextureProps = useTexture({
    map: './gcdTextures/texSeven/orange.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texSeven/orange.jpg',
    roughnessMap: './gcdTextures/texSeven/orange.jpg',
    aoMap: './gcdTextures/texSeven/orange.jpg',
  })

  sevenTextureProps.map.repeat.set(3, 3);
  sevenTextureProps.normalMap.repeat.set(3, 3);
  sevenTextureProps.roughnessMap.repeat.set(3, 3);
  sevenTextureProps.aoMap.repeat.set(3, 3);

  sevenTextureProps.map.wrapS =
    sevenTextureProps.map.wrapT =
    sevenTextureProps.normalMap.wrapS =
    sevenTextureProps.normalMap.wrapT =
    sevenTextureProps.roughnessMap.wrapS =
    sevenTextureProps.roughnessMap.wrapT =
    sevenTextureProps.aoMap.wrapS =
    sevenTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const eightTextureProps = useTexture({
    map: './gcdTextures/texEight/lightPink.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texEight/lightPink.jpg',
    roughnessMap: './gcdTextures/texEight/lightPink.jpg',
    aoMap: './gcdTextures/texEight/lightPink.jpg',
  })

  eightTextureProps.map.repeat.set(3, 3);
  eightTextureProps.normalMap.repeat.set(3, 3);
  eightTextureProps.roughnessMap.repeat.set(3, 3);
  eightTextureProps.aoMap.repeat.set(3, 3);

  eightTextureProps.map.wrapS =
    eightTextureProps.map.wrapT =
    eightTextureProps.normalMap.wrapS =
    eightTextureProps.normalMap.wrapT =
    eightTextureProps.roughnessMap.wrapS =
    eightTextureProps.roughnessMap.wrapT =
    eightTextureProps.aoMap.wrapS =
    eightTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;




  const nineTextureProps = useTexture({
    map: './gcdTextures/texNine/lightVelvet.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texNine/lightVelvet.jpg',
    roughnessMap: './gcdTextures/texNine/lightVelvet.jpg',
    aoMap: './gcdTextures/texNine/lightVelvet.jpg',
  })

  nineTextureProps.map.repeat.set(3, 3);
  nineTextureProps.normalMap.repeat.set(3, 3);
  nineTextureProps.roughnessMap.repeat.set(3, 3);
  nineTextureProps.aoMap.repeat.set(3, 3);

  nineTextureProps.map.wrapS =
    nineTextureProps.map.wrapT =
    nineTextureProps.normalMap.wrapS =
    nineTextureProps.normalMap.wrapT =
    nineTextureProps.roughnessMap.wrapS =
    nineTextureProps.roughnessMap.wrapT =
    nineTextureProps.aoMap.wrapS =
    nineTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;



  const tenTextureProps = useTexture({
    map: './gcdTextures/texTen/blue.jpg',
    // displacementMap: './textures/Catacomb_Wall_001_height.png',
    normalMap: './gcdTextures/texTen/blue.jpg',
    roughnessMap: './gcdTextures/texTen/blue.jpg',
    aoMap: './gcdTextures/texTen/blue.jpg',
  })

  tenTextureProps.map.repeat.set(3, 3);
  tenTextureProps.normalMap.repeat.set(3, 3);
  tenTextureProps.roughnessMap.repeat.set(3, 3);
  tenTextureProps.aoMap.repeat.set(3, 3);

  tenTextureProps.map.wrapS =
    tenTextureProps.map.wrapT =
    tenTextureProps.normalMap.wrapS =
    tenTextureProps.normalMap.wrapT =
    tenTextureProps.roughnessMap.wrapS =
    tenTextureProps.roughnessMap.wrapT =
    tenTextureProps.aoMap.wrapS =
    tenTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  // console.log(gcdOneTexture);

  return (
    <group {...props} dispose={null} scale={[0.3, 0.3, 0.3]} >

      {gazeboCeilingDrapeOne === true && (
        <>
          <group position={[-14.04, 2.39, -11.51]} rotation={[0, 1.12, 0]} scale={[0.74, 0.78, 0.39]} >

            <mesh geometry={nodes.Cloth_Shap005.geometry} material={materials['Material-_4Material850.005']} visible={true} >

              <meshStandardMaterial {...gcdOneTexture === 0 ? materialTextureProps
                : gcdOneTexture === 1 ? gcdRedTextureProps
                  : gcdOneTexture === 2 ? gcdYellowTextureProps
                    : gcdOneTexture === 3 ? fourTextureProps
                      : gcdOneTexture === 4 ? fiveTextureProps
                        : gcdOneTexture === 5 ? sixTextureProps
                          : gcdOneTexture === 6 ? sevenTextureProps
                            : gcdOneTexture === 7 ? eightTextureProps
                              : gcdOneTexture === 8 ? nineTextureProps
                                : tenTextureProps} />

            </mesh>

            <mesh geometry={nodes.Cloth_Shap005_1.geometry} material={materials['Material-_4Material850.003']} visible={true} >
              <meshStandardMaterial {...gcdOneTexture === 0 ? materialTextureProps
                : gcdOneTexture === 1 ? gcdRedTextureProps
                  : gcdOneTexture === 2 ? gcdYellowTextureProps
                    : gcdOneTexture === 3 ? fourTextureProps
                      : gcdOneTexture === 4 ? fiveTextureProps
                        : gcdOneTexture === 5 ? sixTextureProps
                          : gcdOneTexture === 6 ? sevenTextureProps
                            : gcdOneTexture === 7 ? eightTextureProps
                              : gcdOneTexture === 8 ? nineTextureProps
                                : tenTextureProps} />
            </mesh>


            <mesh geometry={nodes.Cloth_Shap005_2.geometry} material={materials['Material-_4Material850.004']} visible={true} >

              <meshStandardMaterial {...gcdOneTexture === 0 ? materialTextureProps
                : gcdOneTexture === 1 ? gcdRedTextureProps
                  : gcdOneTexture === 2 ? gcdYellowTextureProps
                    : gcdOneTexture === 3 ? fourTextureProps
                      : gcdOneTexture === 4 ? fiveTextureProps
                        : gcdOneTexture === 5 ? sixTextureProps
                          : gcdOneTexture === 6 ? sevenTextureProps
                            : gcdOneTexture === 7 ? eightTextureProps
                              : gcdOneTexture === 8 ? nineTextureProps
                                : tenTextureProps} />

            </mesh>
          </group>
        </>
      )}

      {gazeboCeilingDrapeTwo === true && (
        <>

          <mesh geometry={nodes.gcdl2.geometry} material={materials['Material-_4Material850.006']} position={[-11.9, 2.58, -10.23]} scale={0.14} visible={true} >
            <meshStandardMaterial {...gcdTwoTexture === 0 ? materialTextureProps
              : gcdTwoTexture === 1 ? gcdRedTextureProps
                : gcdTwoTexture === 2 ? gcdYellowTextureProps
                  : gcdTwoTexture === 3 ? fourTextureProps
                    : gcdTwoTexture === 4 ? fiveTextureProps
                      : gcdTwoTexture === 5 ? sixTextureProps
                        : gcdTwoTexture === 6 ? sevenTextureProps
                          : gcdTwoTexture === 7 ? eightTextureProps
                            : gcdTwoTexture === 8 ? nineTextureProps
                              : tenTextureProps} />
          </mesh>
        </>
      )}

      {gazeboCeilingDrapeThree === true && (
        <>
          <mesh geometry={nodes.gcdl3.geometry} material={materials['Material-_4Material850.007']} position={[-11.9, 2.58, -10.23]} scale={0.14} visible={true} >
            <meshStandardMaterial {...gcdThreeTexture === 0 ? materialTextureProps
              : gcdThreeTexture === 1 ? gcdRedTextureProps
                : gcdThreeTexture === 2 ? gcdYellowTextureProps
                  : gcdThreeTexture === 3 ? fourTextureProps
                    : gcdThreeTexture === 4 ? fiveTextureProps
                      : gcdThreeTexture === 5 ? sixTextureProps
                        : gcdThreeTexture === 6 ? sevenTextureProps
                          : gcdThreeTexture === 7 ? eightTextureProps
                            : gcdThreeTexture === 8 ? nineTextureProps
                              : tenTextureProps} />
          </mesh>
        </>
      )}

    </group>
  )
}

useGLTF.preload('./models/gazebo/gcd.gltf')
