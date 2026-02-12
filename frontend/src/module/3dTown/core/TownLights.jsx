import { useRef } from 'react';
import { townTheme } from '../styles/townTheme';

export default function TownLights() {
    const lightRef = useRef();

    return (
        <>
            <ambientLight intensity={townTheme.intensities.ambient} color={townTheme.colors.ambient} />
            <pointLight
                position={[10, 10, 10]}
                intensity={townTheme.intensities.spotlight}
                color={townTheme.colors.spotlight}
            />
            <pointLight
                position={[-10, -10, -10]}
                intensity={townTheme.intensities.spotlight}
                color="#8888ff"
            />
        </>
    );
}
