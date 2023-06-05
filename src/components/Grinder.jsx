import React, { useRef } from 'react'
import { useGLTF, TransformControls } from '@react-three/drei'
import { useConfigurator } from '../contexts/Configurator';

export function Grinder(props) {

  const { nodes, materials } = useGLTF('./models/grinder.gltf');
  const { ball } = useConfigurator();


  return (
    <group {...props} dispose={null}>
      <group position={[-1.05, 1.21, 0.79]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.TexturedMeshSimplified_1.geometry} material={materials['0000']} />
        <mesh geometry={nodes.TexturedMeshSimplified_2.geometry} material={materials['0001']} />
        <mesh geometry={nodes.TexturedMeshSimplified_3.geometry} material={materials['0002']} />
        <mesh geometry={nodes.TexturedMeshSimplified_4.geometry} material={materials['0003']} />
        <mesh geometry={nodes.TexturedMeshSimplified_5.geometry} material={materials['0004']} />
        <mesh geometry={nodes.TexturedMeshSimplified_6.geometry} material={materials['0005']} />
        <mesh geometry={nodes.TexturedMeshSimplified_7.geometry} material={materials['0006']} />
        <mesh geometry={nodes.TexturedMeshSimplified_8.geometry} material={materials['0007']} />
        <mesh geometry={nodes.TexturedMeshSimplified_9.geometry} material={materials['0008']} />
        <mesh geometry={nodes.TexturedMeshSimplified_10.geometry} material={materials['0009']} />
      </group>

      {ball === 'ballA' && (
        <>
          <TransformControls position={[-3, 1, 0]} mode="translate">
            <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.002']} position={[3, 0, 0]} rotation={[-0.01, 0.58, -0.08]} scale={0.08} />
          </TransformControls>
        </>
      )}

      {ball === 'ballB' && (
        <>
          <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.003']} position={[0.13, -0.07, -0.55]} rotation={[-2.15, 1.08, 2.35]} scale={0.08} />
        </>
      )}

      {ball === 'ballC' && (
        <>
          <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.004']} position={[0.15, 0.74, 0.18]} rotation={[-0.91, -0.4, -2.94]} scale={0.08} />
        </>
      )}
    </group>
  )
}

useGLTF.preload('./models/grinder.gltf');
