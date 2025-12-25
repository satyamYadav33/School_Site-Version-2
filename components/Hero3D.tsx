
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create knowledge elements: Cube (Structure), Sphere (Wholeness), Pyramid (Growth)
    const geometry1 = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material1 = new THREE.MeshPhongMaterial({ color: 0x1e3a8a, wireframe: true });
    const cube = new THREE.Mesh(geometry1, material1);
    
    const geometry2 = new THREE.SphereGeometry(1, 32, 32);
    const material2 = new THREE.MeshPhongMaterial({ color: 0xd97706, flatShading: true });
    const sphere = new THREE.Mesh(geometry2, material2);
    sphere.position.x = 2.5;

    const geometry3 = new THREE.ConeGeometry(1, 2, 4);
    const material3 = new THREE.MeshPhongMaterial({ color: 0x059669 });
    const cone = new THREE.Mesh(geometry3, material3);
    cone.position.x = -2.5;

    scene.add(cube);
    scene.add(sphere);
    scene.add(cone);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      sphere.rotation.y += 0.02;
      cone.rotation.y += 0.01;
      cone.position.y = Math.sin(Date.now() * 0.002) * 0.5;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[400px] md:h-[600px]" />;
};

export default Hero3D;
