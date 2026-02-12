import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

const LineFlowMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color(0.2, 0.5, 1.0)
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      float dash = sin(vUv.x * 20.0 - uTime * 5.0);
      float alpha = step(0.5, dash); 
      
      // Simple glow effect
      vec3 color = uColor + vec3(0.2 * sin(uTime));
      
      gl_FragColor = vec4(color, alpha * 0.8);
      
      if (alpha < 0.1) discard;
    }
  `
);

extend({ LineFlowMaterial });

export { LineFlowMaterial };
