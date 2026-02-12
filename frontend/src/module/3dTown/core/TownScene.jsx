import TownRenderer from './TownRenderer';
import TownLights from './TownLights';
import TownCamera from './TownCamera';
import NodeManager from '../nodes/NodeManager';
import ConnectionLines from '../lines/ConnectionLines';
import { Grid } from '@react-three/drei';

export default function TownScene() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <TownRenderer>
                <TownLights />
                <TownCamera />

                {/* Floor Grid */}
                <Grid
                    infiniteGrid
                    fadeDistance={30}
                    sectionColor="#444444"
                    cellColor="#222222"
                />

                <group position={[0, 0, 0]}>
                    <ConnectionLines />
                    <NodeManager />
                </group>

            </TownRenderer>
        </div>
    );
}
