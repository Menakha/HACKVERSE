import { Canvas } from '@react-three/fiber';
import { townTheme } from '../styles/townTheme';

export default function TownRenderer({ children }) {
    return (
        <Canvas
            camera={{ position: [0, 5, 10], fov: 60 }}
            gl={{ antialias: true, alpha: false }}
            dpr={[1, 2]} // Responsive pixel ratio
        >
            <color attach="background" args={[townTheme.colors.background]} />
            {/* Fog for depth */}
            <fog attach="fog" args={[townTheme.colors.background, 10, 30]} />

            {children}
        </Canvas>
    );
}
