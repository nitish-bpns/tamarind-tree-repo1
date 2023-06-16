import React, { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as THREE from "three";

export function Lcdl4(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/lawn/lcdl4.gltf')
  const { actions } = useAnimations(animations, group);

  const { lcdFourTexture, lawnCeilingDrapeFour } = useConfigurator();


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
      {lawnCeilingDrapeFour === true && (
        <>

          <group name="Scene">
            <group name="lcdl412" position={[6.23, 0.91, 0.35]} rotation={[1.57, 0, -1.09]} scale={[5.56, 5.56, 3.1]}>
              <mesh name="lcdl4011" geometry={nodes.lcdl4011.geometry} material={materials['curtain_rode.011']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_1" geometry={nodes.lcdl4011_1.geometry} material={materials['curtain.011']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_2" geometry={nodes.lcdl4011_2.geometry} material={materials['FrontColor.011']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_3" geometry={nodes.lcdl4011_3.geometry} material={materials.curtain_rode} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_4" geometry={nodes.lcdl4011_4.geometry} material={materials.curtain} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_5" geometry={nodes.lcdl4011_5.geometry} material={materials.FrontColor} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_6" geometry={nodes.lcdl4011_6.geometry} material={materials['curtain_rode.001']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_7" geometry={nodes.lcdl4011_7.geometry} material={materials['curtain.001']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_8" geometry={nodes.lcdl4011_8.geometry} material={materials['FrontColor.001']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_9" geometry={nodes.lcdl4011_9.geometry} material={materials['curtain_rode.002']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_10" geometry={nodes.lcdl4011_10.geometry} material={materials['curtain.002']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_11" geometry={nodes.lcdl4011_11.geometry} material={materials['FrontColor.002']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_12" geometry={nodes.lcdl4011_12.geometry} material={materials['curtain_rode.003']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_13" geometry={nodes.lcdl4011_13.geometry} material={materials['curtain.003']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_14" geometry={nodes.lcdl4011_14.geometry} material={materials['FrontColor.003']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_15" geometry={nodes.lcdl4011_15.geometry} material={materials['curtain_rode.004']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_16" geometry={nodes.lcdl4011_16.geometry} material={materials['curtain.004']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_17" geometry={nodes.lcdl4011_17.geometry} material={materials['FrontColor.004']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_18" geometry={nodes.lcdl4011_18.geometry} material={materials['curtain_rode.005']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_19" geometry={nodes.lcdl4011_19.geometry} material={materials['curtain.005']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_20" geometry={nodes.lcdl4011_20.geometry} material={materials['FrontColor.005']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_21" geometry={nodes.lcdl4011_21.geometry} material={materials['curtain_rode.006']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_22" geometry={nodes.lcdl4011_22.geometry} material={materials['curtain.006']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_23" geometry={nodes.lcdl4011_23.geometry} material={materials['FrontColor.006']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_24" geometry={nodes.lcdl4011_24.geometry} material={materials['curtain_rode.007']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_25" geometry={nodes.lcdl4011_25.geometry} material={materials['curtain.007']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_26" geometry={nodes.lcdl4011_26.geometry} material={materials['FrontColor.007']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_27" geometry={nodes.lcdl4011_27.geometry} material={materials['curtain_rode.008']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_28" geometry={nodes.lcdl4011_28.geometry} material={materials['curtain.008']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_29" geometry={nodes.lcdl4011_29.geometry} material={materials['FrontColor.008']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_30" geometry={nodes.lcdl4011_30.geometry} material={materials['curtain_rode.009']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_31" geometry={nodes.lcdl4011_31.geometry} material={materials['curtain.009']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_32" geometry={nodes.lcdl4011_32.geometry} material={materials['FrontColor.009']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_33" geometry={nodes.lcdl4011_33.geometry} material={materials['curtain_rode.010']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_34" geometry={nodes.lcdl4011_34.geometry} material={materials['curtain.010']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
              <mesh name="lcdl4011_35" geometry={nodes.lcdl4011_35.geometry} material={materials['FrontColor.010']} >
                <meshStandardMaterial {...lcdFourTexture === 0 ? materialTextureProps
                  : lcdFourTexture === 1 ? gcdRedTextureProps
                    : lcdFourTexture === 2 ? gcdYellowTextureProps
                      : lcdFourTexture === 3 ? fourTextureProps
                        : lcdFourTexture === 4 ? fiveTextureProps
                          : lcdFourTexture === 5 ? sixTextureProps
                            : lcdFourTexture === 6 ? sevenTextureProps
                              : lcdFourTexture === 7 ? eightTextureProps
                                : lcdFourTexture === 8 ? nineTextureProps
                                  : tenTextureProps} />
              </mesh>
            </group>
          </group>

        </>
      )}
    </group>
  )
}

useGLTF.preload('./models/lawn/lcdl4.gltf')
