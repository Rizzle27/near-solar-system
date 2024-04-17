import { useRef, useEffect } from "react";
import * as THREE from 'three';
import { Tween } from "three/examples/jsm/libs/tween.module.js";

export function Sphere({ body, size, rotSpeed, clouds }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, planetMesh, cloudsMesh;

    const init = () => {
      scene = new THREE.Scene();
      THREE.MeshBasicMaterial.prototype.lights = false;
  
      camera = new THREE.PerspectiveCamera(45, 800 / 800, 0.1, 1000);
      scene.add(camera);
  
      renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current, antialias: true });
      renderer.setSize(800, 800);
      renderer.autoClear = false;
      renderer.setClearColor(0x000000, 0.0);
    }

    const createPlanet = () => {
      const planetGeometry = new THREE.SphereGeometry(size, 64, 64);
      const planetMaterial = new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(`/assets/${body}/2k_${body}.jpg`),
      });
      planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planetMesh);

      createClouds();
    }

    const createClouds = () => {
      if(clouds === true) {
        const cloudsGeometry = new THREE.SphereGeometry(size * 1.002, 64, 64);
        
        const cloudsMaterial = new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(`/assets/${body}/2k_${body}_clouds.png`),
          transparent: true,
          side: THREE.FrontSide,
        });
        
        cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
        
        cloudsMesh.position.copy(planetMesh.position);
        
        scene.add(cloudsMesh);
      }
    };

    const setLights = () => {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
      directionalLight.position.set(-20, 0, 20);
      scene.add(directionalLight);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      planetMesh.rotation.y -= rotSpeed;

      if(clouds === true) {cloudsMesh.rotation.y -= rotSpeed * 0.5}

      camera.position.set(0,0,2);

      render();
    }

    const render = () => {
      renderer.render(scene, camera);
    }

    const start = () => {
      init();
      createPlanet();
      setLights();
      animate();
      render();
    }

    start();

    return () => {
      // Limpiar recursos si es necesario
    };
  }, [canvasRef]);

  return <canvas ref={canvasRef}></canvas>;
}