import { useState, useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { animateNodeHover } from '../animations/glowAnimation';
import { animateClick } from '../animations/clickAnimation';

export const useTownInteractions = () => {
    const navigate = useNavigate();
    const [hoveredNode, setHoveredNode] = useState(null);

    const handlePointerOver = useCallback((e, nodeId, color) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        setHoveredNode(nodeId);
        animateNodeHover(e.object, true, color);
    }, []);

    const handlePointerOut = useCallback((e, nodeId) => {
        e.stopPropagation();
        document.body.style.cursor = 'auto';
        setHoveredNode(null);
        animateNodeHover(e.object, false);
    }, []);

    const handleClick = useCallback((e, nodeId, route, camera) => {
        e.stopPropagation();
        // Trigger animation
        animateClick(e.object, camera, e.object.position, () => {
            // Navigate after animation
            // React Router v1 syntax check
            navigate({ to: route });
        });
    }, [navigate]);

    return {
        hoveredNode,
        handlePointerOver,
        handlePointerOut,
        handleClick
    };
};
