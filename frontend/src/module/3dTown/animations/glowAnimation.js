import gsap from 'gsap';

export const animateNodeHover = (mesh, isHovered, color, originalScale = 1) => {
    if (!mesh) return;

    const targetScale = isHovered ? originalScale * 1.2 : originalScale;
    const targetEmissiveIntensity = isHovered ? 2 : 0.5;

    gsap.to(mesh.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.3,
        ease: "power2.out"
    });

    if (mesh.material) {
        gsap.to(mesh.material, {
            emissiveIntensity: targetEmissiveIntensity,
            duration: 0.3
        });

        if (isHovered) {
            gsap.to(mesh.material.color, {
                r: new THREE.Color(color).r,
                g: new THREE.Color(color).g,
                b: new THREE.Color(color).b,
                duration: 0.3
            });
        } else {
            // Reset color logic would go here if we were changing base color, 
            // but typically we just pulse emissive. 
            // For now keeping it simple as per MVP.
        }
    }
};

import * as THREE from 'three';
