import React, { useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // Adjust rotation speed as needed
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

export default function ModelViewer() {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      const controls = new OrbitControls(controlsRef.current);
      controls.enablePan = false; // Disable pan
      controls.autoRotate = true; // Enable auto rotation
      controls.enableRotate = false; // Enable rotation (necessary for auto rotation)
      controls.autoRotateSpeed = 0.5;
      controls.update();
      return () => {
        controls.dispose(); // Cleanup
      };
    }
  }, []);

  return (
    <Canvas
      style={{
        width: "650px",
        height: "600px",
        position: "relative",
        top: "0px",
        left: "0px",
        backgroundImage:
          "url(https://imgcdn.stablediffusionweb.com/2024/3/23/ace50a5e-4d61-4589-a2f3-5ad7db404f50.jpg)",
        backgroundSize: "cover",
      }}
      camera={{ position: [0, 2, -6] }}
      onCreated={({ gl, camera }) => {
        controlsRef.current = new OrbitControls(camera, gl.domElement);
      }}
    >
      <ambientLight color="gold" intensity={0.5} position={[0, 0, 10]} />
      <directionalLight color="gold" intensity={4.5} position={[20, 200, 10]} />
      <Model url="src/components/models/Ram-Mandir.gltf" />{" "}
      {/* Replace with the actual URL */}
    </Canvas>
  );
}
