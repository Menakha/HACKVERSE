import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { townMap } from '../config/townMap';
import * as THREE from 'three';
import { LineFlowMaterial } from './LineFlowShader'; // Ensure this is imported to register it, though we use <lineFlowMaterial>

// We need to register the material so R3F knows about it.
// The file LineFlowShader.js does the extend().

const Lines = () => {
    const materialRef = useRef();

    // Create lines connecting center (0,0,0) to all other nodes
    // Or connect nodes in a specific graph if defined.
    // For MVP, connecting dashboard (0,0,0) to others.

    const centerNode = townMap.find(n => n.id === 'dashboard') || { position: [0, 0, 0] };
    const others = townMap.filter(n => n.id !== 'dashboard');

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uTime += delta;
        }
    });

    return (
        <group>
            {others.map((node, index) => {
                const start = new THREE.Vector3(...centerNode.position);
                const end = new THREE.Vector3(...node.position);

                // Basic line geometry
                const points = [start, end];
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

                return (
                    <line key={`line-${index}`}>
                        <bufferGeometry attach="geometry" {...lineGeometry} />
                        {/* @ts-ignore */}
                        <lineFlowMaterial ref={materialRef} attach="material" uColor={new THREE.Color(node.color)} />
                    </line>
                );
            })}
        </group>
    );
};

export default Lines;
