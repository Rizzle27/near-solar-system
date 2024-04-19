import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Sphere({ body, size, rotSpeed, clouds, camPos }) {
  const canvasRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);

  let scene, camera, renderer;
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, 800/800, 0.5, 10);
  camera.position.set(camPos.x, camPos.y, camPos.z);
  camera.lookAt(0, 0, 0);

  const ambientalLight = new THREE.AmbientLight(0xffffff, 0.2);

  scene.add(camera);
  scene.add(ambientalLight);

  useEffect(() => {
    if (!firstRender) {
      console.log("Ejecutando animación GSAP");
      console.log("camPos:", camPos);
      
      gsap.to(camera.position, {
        x: camPos.x,
        y: camPos.y,
        z: camPos.z,
        duration: 2,
        onUpdate: function() {
          camera.lookAt(0, 0, 2);
        },
      });
    } else {
      setFirstRender(false);
      console.log("Primera renderización, no se ejecuta la animación GSAP");
    }
  }, [camPos]);

  useEffect(() => {
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current, antialias: true });
    renderer.setSize(800, 800);
    
    const planetGeometry = new THREE.SphereGeometry(size, 64, 64);
    const planetMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(`/assets/${body}/2k_${body}.jpg`),
    });
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planetMesh);

    if (clouds) {
      const cloudsGeometry = new THREE.SphereGeometry(size * 1.01, 64, 64);
      const cloudsMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(`/assets/${body}/2k_${body}_clouds.png`),
        transparent: true,
        side: THREE.FrontSide,
      });
      const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      scene.add(cloudsMesh);

      function animateClouds() {
        if (clouds && cloudsMesh) {
          requestAnimationFrame(animateClouds);
          cloudsMesh.rotation.y -= rotSpeed * 0.8;
        }
      }

      animateClouds();
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      
      planetMesh.rotation.y -= rotSpeed;
    }; 
    animate();
  }, [body]);

  return <canvas className='rounded-full' ref={canvasRef}></canvas>;
}
