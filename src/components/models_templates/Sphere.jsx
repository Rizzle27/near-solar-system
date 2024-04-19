import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";

function Animation({body, size, rotSpeed, clouds}) {
  const planetRef = useRef()
  const cloudsRef = useRef()

  useFrame(() => {
    planetRef.current.rotation.y -= rotSpeed
    if(clouds) {
      cloudsRef.current.rotation.y -= rotSpeed * 0.9
    }
  })

  return(
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshPhongMaterial map={new TextureLoader().load(`/assets/${body}/2k_${body}.jpg`)} />
      </mesh>
      {clouds && 
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[size * 1.01, 64, 64]} />
          <meshBasicMaterial map={new TextureLoader().load(`/assets/${body}/2k_${body}_clouds.png`)} transparent={true} />
        </mesh>
      }
    </>
  )
}

export function Sphere({ body, size, rotSpeed, clouds, camPos }) {

  return(
    <Canvas className="rounded-full w-[800px]" camera={{fov: 47, near: 0.6, far: 10, position: [0,0,2]}}>
      <ambientLight intensity={0.5}/>
      {
        <Animation body={body} size={size} rotSpeed={rotSpeed} clouds={clouds} />
      }
    </Canvas>
  )
}
