// import { TextureLoader } from '@expo-three';
import { TextureLoader } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
// useThree is used to get scene reference
// import { useThree } from 'react-three-fiber';
import { useThree } from '@react-three/fiber';

const textureLoader = new TextureLoader();
const mapImage = textureLoader.load('./models/base.png')
const normalMapImage = textureLoader.load('./models/normal.png');

const loaderObj = new OBJLoader();
const loaderMtl = new MTLLoader();

export function Abc(props) {
  const { scene } = useThree();

  loaderMtl.load(
    './models/sample.mtl',
    mtl => {
      mtl.preload();

      loaderObj.setMaterials(mtl);
      loaderObj.load(
        './models/sample.obj',
        obj => {
          // simple logic for an obj with single child
          obj.children[0].material.map = mapImage;
          obj.children[0].material.normalMap = normalMapImage;

          scene.add(obj)
        }
      )
    }
  )

  return null;
}