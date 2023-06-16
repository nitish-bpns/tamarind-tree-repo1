import React, { useRef } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";

export function Gpdl1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/gazebo/gpdl1.gltf')
  const { actions } = useAnimations(animations, group);

  const { gpdOneTexture, gazeboPillarDrapeOne } = useConfigurator();


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

      {gazeboPillarDrapeOne === true && (
        <>
          <group name="Scene">
            <group name="gpd1007" position={[-14.59, -1.54, -9.95]} rotation={[Math.PI / 2, 0, 1.53]} scale={[0.54, 0.54, 0.58]}>
              <mesh name="gpd1007_1" geometry={nodes.gpd1007_1.geometry} material={materials['curtainnn.007']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_2" geometry={nodes.gpd1007_2.geometry} material={materials['da.007']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_3" geometry={nodes.gpd1007_3.geometry} material={materials.curtainnn} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_4" geometry={nodes.gpd1007_4.geometry} material={materials.da} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_5" geometry={nodes.gpd1007_5.geometry} material={materials['curtainnn.001']} />
              <mesh name="gpd1007_6" geometry={nodes.gpd1007_6.geometry} material={materials['da.001']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_7" geometry={nodes.gpd1007_7.geometry} material={materials['curtainnn.002']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_8" geometry={nodes.gpd1007_8.geometry} material={materials['da.002']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_9" geometry={nodes.gpd1007_9.geometry} material={materials['curtainnn.003']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_10" geometry={nodes.gpd1007_10.geometry} material={materials['da.003']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_11" geometry={nodes.gpd1007_11.geometry} material={materials['curtainnn.004']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_12" geometry={nodes.gpd1007_12.geometry} material={materials['da.004']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_13" geometry={nodes.gpd1007_13.geometry} material={materials['curtainnn.005']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_14" geometry={nodes.gpd1007_14.geometry} material={materials['da.005']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_15" geometry={nodes.gpd1007_15.geometry} material={materials['curtainnn.006']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_16" geometry={nodes.gpd1007_16.geometry} material={materials['da.006']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_17" geometry={nodes.gpd1007_17.geometry} material={materials['curtainnn.010']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_18" geometry={nodes.gpd1007_18.geometry} material={materials['da.010']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_19" geometry={nodes.gpd1007_19.geometry} material={materials['curtainnn.011']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_20" geometry={nodes.gpd1007_20.geometry} material={materials['da.011']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_21" geometry={nodes.gpd1007_21.geometry} material={materials['curtainnn.009']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1007_22" geometry={nodes.gpd1007_22.geometry} material={materials['da.009']} >
                <meshStandardMaterial {...gpdOneTexture === 0 ? materialTextureProps
                  : gpdOneTexture === 1 ? gcdRedTextureProps
                    : gpdOneTexture === 2 ? gcdYellowTextureProps
                      : gpdOneTexture === 3 ? fourTextureProps
                        : gpdOneTexture === 4 ? fiveTextureProps
                          : gpdOneTexture === 5 ? sixTextureProps
                            : gpdOneTexture === 6 ? sevenTextureProps
                              : gpdOneTexture === 7 ? eightTextureProps
                                : gpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
            </group>
          </group>

        </>
      )}
    </group>
  )
}

useGLTF.preload('./models/gazebo/gpdl1.gltf')
