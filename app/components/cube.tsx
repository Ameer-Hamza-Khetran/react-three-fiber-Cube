'use client'

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Box } from "@chakra-ui/react";

export function Cube() {
    const meshRef = useRef<Mesh>(null!);

    useEffect(() => {
        console.log(Boolean(meshRef.current))
    },[])

    return (
        <Box width={'full'} height={'100vh'}>
            <Canvas>
                <mesh>
                    <boxGeometry args={[1.2, 1.2, 1.1]}/>
                    <meshStandardMaterial />
                </mesh>
                <ambientLight intensity={0.1}/>
                <directionalLight color={'red'} position={[0, 0, 10]}/>
            </Canvas>
        </Box>
    );
}