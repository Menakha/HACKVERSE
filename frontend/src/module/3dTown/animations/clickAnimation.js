import gsap from 'gsap';

export const animateClick = (mesh, camera, targetPosition, onComplete) => {
    if (!mesh) return;

    // 1. Pulse the node
    gsap.to(mesh.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    });

    // 2. Camera Zoom (basic implementation)
    // This assumes camera is a Three.js camera object which has position
    /*
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y + 2, // Slight offset
      z: targetPosition.z + 5,
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: onComplete
    });
    */
    // For now, we will just rely on the onComplete callback to trigger routing 
    // after a short delay to let the pulse animation finish.

    setTimeout(() => {
        if (onComplete) onComplete();
    }, 500);
};
