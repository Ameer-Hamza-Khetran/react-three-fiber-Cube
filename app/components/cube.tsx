'use client'

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Box, background } from "@chakra-ui/react";

function Cube() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.008;
            meshRef.current.rotation.y += 0.008;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1.2, 1.2, 1.1]} />
            <meshStandardMaterial />
        </mesh>
    );
}

export default function MyCanvas() {
    useEffect(() => {
       
    }, []);
    return (
        <Box width={'full'} height={'100vh'}>
            <Canvas 
                camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}
                style={{background: "#1e1e1e"}}
            >
                <ambientLight intensity={0.1} />
                <directionalLight color={'#5A5A5A'} position={[0, 0, 10]} />
                <Cube />
            </Canvas>
        </Box>
    );
}