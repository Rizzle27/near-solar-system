import gsap from 'gsap/all';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export function Sphere({ body, size, rotSpeed, clouds, camPos }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    let scene, camera, renderer
  
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, 800/800, 0.1, 100)
    camera.position.set(0,0,2);
    camera.lookAt(0,0,0)
    scene.add(camera)
  
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current, antialias: true });
    renderer.setSize(800,800)
    renderer.setClearColor(0x000000, 0.0);

    // Orbital controls
    const controls = new OrbitControls(camera, renderer.domElement)

    // // Función para obtener y mostrar la posición de la cámara
    // function obtenerPosicionCamara() {
    //   var cameraPosition = camera.position.clone(); // Clonamos para evitar modificaciones no deseadas
    //   console.log('Posición de la cámara:', cameraPosition);
    // }

    // // Llama a la función para obtener la posición de la cámara cada 1 segundo
    // var intervalo = setInterval(obtenerPosicionCamara, 1000);


    const planetGeometry = new THREE.SphereGeometry(size, 64, 64)
    const planetMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(`/assets/${body}/2k_${body}.jpg`),
    });
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(planetMesh)

    let cloudsMesh; // Define cloudsMesh outside the if statement

    if (clouds) {
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

    const ambientalLight = new THREE.AmbientLight(0xffffff, 0.2)
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    // directionalLight.position.set(-20, 0, 20);
    // scene.add(directionalLight);
    scene.add(ambientalLight);
  
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      // planetMesh.rotation.y -= rotSpeed;

      if(clouds && cloudsMesh) { // Check if cloudsMesh is defined before accessing it
        cloudsMesh.rotation.y -= (rotSpeed * 0.8)
      }
    };

    animate();

    var camPastPos = (0,0,0);

    gsap.to(camera.position, {
      x: camPos.x,
      y: camPos.y,
      z: camPos.z,
      duration: 2,
      onUpdate: function() {
        camera.lookAt(0,0,0)
      },
    })

    camPastPos = ({
      x: camPos.x,
      y: camPos.y,
      z: camPos.z,
    })

  }, [body, size, rotSpeed, clouds, camPos])

  return <canvas className='rounded-full' ref={canvasRef}></canvas>;
}
