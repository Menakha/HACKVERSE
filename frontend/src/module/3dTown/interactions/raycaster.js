import * as THREE from 'three';

export const setupRaycaster = (camera, scene, pointer) => {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);

    // Basic implementation - likely consumed inside useTownInteractions via useThree()
    return raycaster;
};
