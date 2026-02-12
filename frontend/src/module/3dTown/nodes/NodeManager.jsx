import { townMap } from '../config/townMap';
import NodeMesh from './NodeMesh';

export default function NodeManager() {
    return (
        <group>
            {townMap.map((node) => (
                <NodeMesh key={node.id} node={node} />
            ))}
        </group>
    );
}
