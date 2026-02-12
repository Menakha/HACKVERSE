import gsap from 'gsap';

export const animateLineFlow = (material) => {
    if (!material || !material.uniforms) return;

    // Animate the 'time' uniform of the shader
    // We can loop this or trigger it. 
    // For continuous flow, we might just update time in useFrame.
    // This helper might be useful for one-off effects.

    // Example for a burst effect if needed
    const obj = { value: 0 };
    gsap.to(obj, {
        value: 1,
        duration: 2,
        onUpdate: () => {
            material.uniforms.uTime.value += 0.05; // increments
        }
    });
};
