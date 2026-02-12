import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useTownInteractions } from '../interactions/useTownInteractions';
import { townTheme } from '../styles/townTheme';

export default function NodeMesh({ node }) {
    const meshRef = useRef();
    const { camera } = useThree();
    const { handlePointerOver, handlePointerOut, handleClick } = useTownInteractions();

    return (
        <group position={node.position}>
            {/* The Glowy Node */}
            <mesh
                ref={meshRef}
                onPointerOver={(e) => handlePointerOver(e, node.id, node.color)}
                onPointerOut={(e) => handlePointerOut(e, node.id)}
                onClick={(e) => handleClick(e, node.id, node.route, camera)}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color={0x444444}
                    emissive={node.color}
                    emissiveIntensity={0.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Label */}
            <Text
                position={[0, 1.2, 0]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {node.label}
            </Text>
        </group>
    );
}
