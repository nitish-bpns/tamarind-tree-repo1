import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { Interface } from "../components/Interface";
// import { OrbitControls } from '@react-three/drei'
import './index.css'
// import { HangingBells } from "../components/HangingBells";

function Gazebo() {

    return (
        // <div className={styles.myapp} >
        <div className="myapp">
            {/* <div> */}

            <Canvas shadows camera={{ position: [4, 4, -12], fov: 20 }}>
                <Experience />
                {/* <HangingBells position={[0, -3, 5]} /> */}

            </Canvas>
            <Interface />
        </div >

    );
}

export default Gazebo;
