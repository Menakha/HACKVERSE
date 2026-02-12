import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

export default function TownCamera() {
    const controlsRef = useRef();

    return (
        <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={Math.PI / 4} // Limit vertical angle
            maxPolarAngle={Math.PI / 2} // Don't allow going below ground
        />
    );
}
