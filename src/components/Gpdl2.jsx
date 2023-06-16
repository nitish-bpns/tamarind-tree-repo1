import React, { useRef } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";

export function Gpdl2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/gazebo/gpdl2.gltf')
  const { actions } = useAnimations(animations, group);
  const { gpdTwoTexture, gazeboPillarDrapeTwo } = useConfigurator();


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


  return (
    <group ref={group} {...props} dispose={null}>


      {gazeboPillarDrapeTwo === true && (
        <>

          <group name="Scene">
            <group name="gpd1029" position={[-11.09, -0.14, -13.54]} rotation={[Math.PI / 2, 0, -3.09]} scale={[0.71, 0.65, 0.88]}>
              <mesh name="gpd1029_1" geometry={nodes.gpd1029_1.geometry} material={materials['curtainnn.029']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_2" geometry={nodes.gpd1029_2.geometry} material={materials['da.029']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_3" geometry={nodes.gpd1029_3.geometry} material={materials['curtainnn.025']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_4" geometry={nodes.gpd1029_4.geometry} material={materials['da.025']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_5" geometry={nodes.gpd1029_5.geometry} material={materials['curtainnn.026']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_6" geometry={nodes.gpd1029_6.geometry} material={materials['da.026']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_7" geometry={nodes.gpd1029_7.geometry} material={materials['curtainnn.027']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_8" geometry={nodes.gpd1029_8.geometry} material={materials['da.027']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_9" geometry={nodes.gpd1029_9.geometry} material={materials['curtainnn.028']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_10" geometry={nodes.gpd1029_10.geometry} material={materials['da.028']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_11" geometry={nodes.gpd1029_11.geometry} material={materials['curtainnn.030']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_12" geometry={nodes.gpd1029_12.geometry} material={materials['da.030']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_13" geometry={nodes.gpd1029_13.geometry} material={materials['curtainnn.031']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_14" geometry={nodes.gpd1029_14.geometry} material={materials['da.031']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_15" geometry={nodes.gpd1029_15.geometry} material={materials['curtainnn.032']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_16" geometry={nodes.gpd1029_16.geometry} material={materials['da.032']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_17" geometry={nodes.gpd1029_17.geometry} material={materials['curtainnn.033']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_18" geometry={nodes.gpd1029_18.geometry} material={materials['da.033']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_19" geometry={nodes.gpd1029_19.geometry} material={materials['curtainnn.035']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_20" geometry={nodes.gpd1029_20.geometry} material={materials['da.035']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_21" geometry={nodes.gpd1029_21.geometry} material={materials['curtainnn.036']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1029_22" geometry={nodes.gpd1029_22.geometry} material={materials['da.036']} >
                <meshStandardMaterial {...gpdTwoTexture === 0 ? materialTextureProps
                  : gpdTwoTexture === 1 ? gcdRedTextureProps
                    : gpdTwoTexture === 2 ? gcdYellowTextureProps
                      : gpdTwoTexture === 3 ? fourTextureProps
                        : gpdTwoTexture === 4 ? fiveTextureProps
                          : gpdTwoTexture === 5 ? sixTextureProps
                            : gpdTwoTexture === 6 ? sevenTextureProps
                              : gpdTwoTexture === 7 ? eightTextureProps
                                : gpdTwoTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
            </group>
          </group>

        </>
      )}

    </group>
  )
}

useGLTF.preload('./models/gazebo/gpdl2.gltf')