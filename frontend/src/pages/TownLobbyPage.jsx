import React, { Suspense } from 'react';
import TownScene from '../module/3dTown/core/TownScene';

export default function TownLobbyPage() {
    return (
        <div className="w-full h-screen overflow-hidden bg-black relative">
            <Suspense fallback={<div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading 3D Town...</div>}>
                <TownScene />
            </Suspense>

            {/* UI Overlay can go here if needed (e.g. Exit button) */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h1 className="text-2xl font-bold text-white opacity-80">HACKVERSE 3D</h1>
            </div>
        </div>
    );
}
