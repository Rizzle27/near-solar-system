import { useRef, useEffect } from "react";
import * as THREE from 'three';
import { Tween } from "three/examples/jsm/libs/tween.module.js";

export function Sphere({ body, size, rotSpeed }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, planetMesh;

    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      THREE.MeshBasicMaterial.prototype.lights = false;
  
      camera = new THREE.PerspectiveCamera(45, 800 / 800, 0.1, 1000);
      // camera.position.set(-1, 0, 2);
      // camera.lookAt(0,0,0)
      scene.add(camera);
  
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
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
    }

    const setLights = () => {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      const pointerLight = new THREE.PointLight(0xffffff, 0.9);
      pointerLight.position.set(5,3,5);
      scene.add(pointerLight);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      planetMesh.rotation.y -= rotSpeed
      camera.position.set(0,0,2)
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
      // Clear resources if necessary
    };
  }, [canvasRef]);

  return <canvas ref={canvasRef}></canvas>;
}
