import React, { useRef } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";

export function Lpdl1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/lawn/lpdl1.gltf')
  const { actions } = useAnimations(animations, group);

  const { lpdOneTexture, lawnPillarDrapeOne } = useConfigurator();


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


      {lawnPillarDrapeOne === true && (
        <>

          <group name="Scene">
            <group name="gpd1015" position={[-12.21, -1.76, -0.31]} rotation={[Math.PI / 2, 0, -2.65]} scale={0.52}>
              <mesh name="gpd1015_1" geometry={nodes.gpd1015_1.geometry} material={materials['curtainnn.015']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_2" geometry={nodes.gpd1015_2.geometry} material={materials['da.015']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_3" geometry={nodes.gpd1015_3.geometry} material={materials['curtainnn.012']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_4" geometry={nodes.gpd1015_4.geometry} material={materials['da.012']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_5" geometry={nodes.gpd1015_5.geometry} material={materials['curtainnn.013']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_6" geometry={nodes.gpd1015_6.geometry} material={materials['da.013']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_7" geometry={nodes.gpd1015_7.geometry} material={materials['curtainnn.014']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_8" geometry={nodes.gpd1015_8.geometry} material={materials['da.014']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_9" geometry={nodes.gpd1015_9.geometry} material={materials['curtainnn.016']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_10" geometry={nodes.gpd1015_10.geometry} material={materials['da.016']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_11" geometry={nodes.gpd1015_11.geometry} material={materials['curtainnn.017']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_12" geometry={nodes.gpd1015_12.geometry} material={materials['da.017']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_13" geometry={nodes.gpd1015_13.geometry} material={materials['curtainnn.018']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_14" geometry={nodes.gpd1015_14.geometry} material={materials['da.018']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_15" geometry={nodes.gpd1015_15.geometry} material={materials['curtainnn.019']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_16" geometry={nodes.gpd1015_16.geometry} material={materials['da.019']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_17" geometry={nodes.gpd1015_17.geometry} material={materials['curtainnn.020']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_18" geometry={nodes.gpd1015_18.geometry} material={materials['da.020']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_19" geometry={nodes.gpd1015_19.geometry} material={materials['curtainnn.021']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_20" geometry={nodes.gpd1015_20.geometry} material={materials['da.021']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_21" geometry={nodes.gpd1015_21.geometry} material={materials['curtainnn.022']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_22" geometry={nodes.gpd1015_22.geometry} material={materials['da.022']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_23" geometry={nodes.gpd1015_23.geometry} material={materials['curtainnn.023']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_24" geometry={nodes.gpd1015_24.geometry} material={materials['da.023']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_25" geometry={nodes.gpd1015_25.geometry} material={materials['curtainnn.024']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="gpd1015_26" geometry={nodes.gpd1015_26.geometry} material={materials['da.024']} >
                <meshStandardMaterial {...lpdOneTexture === 0 ? materialTextureProps
                  : lpdOneTexture === 1 ? gcdRedTextureProps
                    : lpdOneTexture === 2 ? gcdYellowTextureProps
                      : lpdOneTexture === 3 ? fourTextureProps
                        : lpdOneTexture === 4 ? fiveTextureProps
                          : lpdOneTexture === 5 ? sixTextureProps
                            : lpdOneTexture === 6 ? sevenTextureProps
                              : lpdOneTexture === 7 ? eightTextureProps
                                : lpdOneTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
            </group>
          </group>

        </>
      )}
    </group>
  )
}

useGLTF.preload('./models/lawn/lpdl1.gltf')
