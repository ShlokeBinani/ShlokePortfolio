import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { webglState } from '../utils/webglState';

// -------------------------------------------------------------
// 1. Studio Spotlight Dust Particles (180 floating motes)
// -------------------------------------------------------------
const StudioSpotlightMotes: React.FC = () => {
  const count = 180;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize particles along the spotlight cone from [5, 7, 4] down towards [-1, -1, 0]
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      const t = Math.random();
      const originX = 5.5 + (Math.random() - 0.5) * 3;
      const originY = 7.5 + (Math.random() - 0.5) * 2;
      const originZ = 4.0 + (Math.random() - 0.5) * 3;

      const targetX = -1.5 + (Math.random() - 0.5) * 6;
      const targetY = -2.5 + (Math.random() - 0.5) * 4;
      const targetZ = 0.5 + (Math.random() - 0.5) * 4;

      return {
        x: THREE.MathUtils.lerp(originX, targetX, t),
        y: THREE.MathUtils.lerp(originY, targetY, t),
        z: THREE.MathUtils.lerp(originZ, targetZ, t),
        speed: 0.15 + Math.random() * 0.35,
        driftX: -0.2 - Math.random() * 0.2,
        driftY: -0.2 - Math.random() * 0.25,
        driftZ: (Math.random() - 0.5) * 0.1,
        scale: 0.018 + Math.random() * 0.035,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      p.x += p.driftX * delta * p.speed * 2;
      p.y += p.driftY * delta * p.speed * 2;
      p.z += p.driftZ * delta * p.speed * 2;

      // Wrap around within spotlight beam bounds
      if (p.x < -4.5 || p.y < -4.5) {
        p.x = 4.5 + Math.random() * 2;
        p.y = 6.5 + Math.random() * 2;
        p.z = 2.5 + Math.random() * 2;
      }

      const pulse = 1 + Math.sin(time * 2 + p.phase) * 0.3;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(p.scale * pulse);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#F4ECE1" transparent opacity={0.35} />
    </instancedMesh>
  );
};

// -------------------------------------------------------------
// 2. Harmonic Signal Ring (Hero Background)
// -------------------------------------------------------------
const HarmonicSignalRing: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.15;
      ring1Ref.current.rotation.y = t * 0.25;
      const s = 1 + Math.sin(t * 1.2) * 0.04;
      ring1Ref.current.scale.set(s, s, s);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.2;
      ring2Ref.current.rotation.z = t * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.18;
      ring3Ref.current.rotation.x = -t * 0.14;
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Outer subtle breathing torus */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.6, 0.02, 16, 96]} />
        <meshStandardMaterial
          color="#D6C3B0"
          wireframe
          transparent
          opacity={0.3}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Middle inclined harmonic ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.2, 0.015, 16, 80]} />
        <meshStandardMaterial
          color="#F4ECE1"
          wireframe
          transparent
          opacity={0.25}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Inner subtle core ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[0.8, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#D6C3B0"
          transparent
          opacity={0.2}
          roughness={0.5}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};

// -------------------------------------------------------------
// 3. Interlocking 3-Ring Gyroscope & Wave Tensor (About)
// -------------------------------------------------------------
const GyroscopeTensor: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ringX = useRef<THREE.Mesh>(null);
  const ringY = useRef<THREE.Mesh>(null);
  const ringZ = useRef<THREE.Mesh>(null);
  const tensorCore = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    if (ringX.current) ringX.current.rotation.x = t * 0.6;
    if (ringY.current) ringY.current.rotation.y = t * 0.45;
    if (ringZ.current) ringZ.current.rotation.z = t * 0.55;

    if (tensorCore.current) {
      tensorCore.current.rotation.x = -t * 0.7;
      tensorCore.current.rotation.y = t * 0.8;
      const pulse = 0.35 + Math.sin(t * 2.5) * 0.04;
      tensorCore.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Ring 1 (ECE Physical Signals / Hardware) */}
      <mesh ref={ringX}>
        <torusGeometry args={[1.4, 0.035, 16, 96]} />
        <meshStandardMaterial color="#F4ECE1" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Ring 2 (Scalable Distributed Backend) */}
      <mesh ref={ringY}>
        <torusGeometry args={[1.15, 0.03, 16, 80]} />
        <meshStandardMaterial color="#D6C3B0" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Ring 3 (Applied Machine Learning / Analytics) */}
      <mesh ref={ringZ}>
        <torusGeometry args={[0.9, 0.025, 16, 64]} />
        <meshStandardMaterial color="#A1A1AA" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Luminous Central Tensor Core (Octahedron) */}
      <mesh ref={tensorCore}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#F4ECE1"
          wireframe
          emissive="#F4ECE1"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Warm internal glow light */}
      <pointLight color="#F4ECE1" intensity={1.5} distance={3} />
    </group>
  );
};

// -------------------------------------------------------------
// 4. Toroidal Data Conduit (Experience — Kofuku Tech)
// -------------------------------------------------------------
const DataConduit: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const conduitRef = useRef<THREE.Mesh>(null);
  const streamParticles = useRef<THREE.InstancedMesh>(null);

  const streamCount = 48;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    if (conduitRef.current) {
      conduitRef.current.rotation.x = 0.4 + Math.sin(t * 0.4) * 0.1;
      conduitRef.current.rotation.y = t * 0.3;
    }

    if (streamParticles.current) {
      const R = 1.35;
      const r = 0.35;
      for (let i = 0; i < streamCount; i++) {
        const u = (t * 2.2 + (i / streamCount) * Math.PI * 2) % (Math.PI * 2);
        const v = (t * 4.5 + i * 0.8) % (Math.PI * 2);

        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);

        dummy.position.set(x, y, z);
        dummy.scale.setScalar(0.025);
        dummy.updateMatrix();
        streamParticles.current.setMatrixAt(i, dummy.matrix);
      }
      streamParticles.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Semi-transparent outer conduit tube */}
      <mesh ref={conduitRef}>
        <torusGeometry args={[1.35, 0.38, 24, 64]} />
        <meshStandardMaterial
          color="#0A0A0C"
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.7}
          wireframe
        />
      </mesh>

      {/* Energy Stream Particles */}
      <instancedMesh ref={streamParticles} args={[undefined, undefined, streamCount]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color="#F4ECE1" />
      </instancedMesh>

      <pointLight color="#F4ECE1" intensity={1.8} distance={3.5} />
    </group>
  );
};

// -------------------------------------------------------------
// 5. Project 1: MS-HQNet (Quantum Bloch Sphere & Wave Ribbons)
// -------------------------------------------------------------
const MSHQNetSculpture: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pointerSphere = useRef<THREE.Mesh>(null);
  const waveRibbon1 = useRef<THREE.Mesh>(null);
  const waveRibbon2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    groupRef.current.rotation.y = t * 0.25;

    // Precessing quantum state vector |ψ⟩
    const theta = Math.sin(t * 0.8) * 0.7 + 0.8;
    const phi = t * 1.4;
    const x = Math.sin(theta) * Math.cos(phi) * 1.2;
    const y = Math.cos(theta) * 1.2;
    const z = Math.sin(theta) * Math.sin(phi) * 1.2;

    if (pointerSphere.current) {
      pointerSphere.current.position.set(x, y, z);
    }

    if (waveRibbon1.current) {
      waveRibbon1.current.rotation.z = t * 0.5;
      waveRibbon1.current.rotation.x = Math.sin(t * 0.6) * 0.3;
    }
    if (waveRibbon2.current) {
      waveRibbon2.current.rotation.z = -t * 0.4;
      waveRibbon2.current.rotation.y = Math.cos(t * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Wireframe Bloch Sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 24, 18]} />
        <meshStandardMaterial
          color="#D6C3B0"
          wireframe
          transparent
          opacity={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Coordinate Axes (Z-axis polar) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 2.8, 12]} />
        <meshBasicMaterial color="#F4ECE1" opacity={0.6} transparent />
      </mesh>
      {/* Equator Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.015, 12, 64]} />
        <meshBasicMaterial color="#D6C3B0" opacity={0.5} transparent />
      </mesh>

      {/* State Vector |ψ⟩ Tip */}
      <mesh ref={pointerSphere}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#F4ECE1" />
      </mesh>

      {/* Orbiting Multi-Channel Wave Ribbons */}
      <mesh ref={waveRibbon1}>
        <torusGeometry args={[1.5, 0.012, 12, 80]} />
        <meshBasicMaterial color="#F4ECE1" opacity={0.6} transparent />
      </mesh>
      <mesh ref={waveRibbon2}>
        <torusGeometry args={[1.65, 0.01, 12, 80]} />
        <meshBasicMaterial color="#D6C3B0" opacity={0.4} transparent />
      </mesh>

      <pointLight color="#F4ECE1" intensity={1.5} distance={3} />
    </group>
  );
};

// -------------------------------------------------------------
// 6. Project 2: ResiliNet (3D Geodesic 6G Mesh Network Sphere)
// -------------------------------------------------------------
const ResiliNetSculpture: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshLinesRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, lineGeometry } = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(1.3, 1);
    const posAttr = ico.attributes.position;
    const positions: [number, number, number][] = [];
    for (let i = 0; i < posAttr.count; i++) {
      positions.push([posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)]);
    }

    const wireframe = new THREE.WireframeGeometry(ico);
    return { nodePositions: positions, lineGeometry: wireframe };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.15;
    groupRef.current.rotation.y = t * 0.22;
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 6G Mesh Edge Connections */}
      <lineSegments ref={meshLinesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#F4ECE1" transparent opacity={0.35} />
      </lineSegments>

      {/* Mesh Nodes (Instanced vertices) */}
      {nodePositions.slice(0, 32).map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={idx % 3 === 0 ? '#F4ECE1' : '#D6C3B0'} />
        </mesh>
      ))}

      {/* Autonomous Packet Pulses (Internal Core) */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial
          color="#F4ECE1"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <pointLight color="#F4ECE1" intensity={1.2} distance={3} />
    </group>
  );
};

// -------------------------------------------------------------
// 7. Project 3: Customer Attrition (Hierarchical Decision Lattice)
// -------------------------------------------------------------
const CustomerAttritionSculpture: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);

  const levels = useMemo(() => {
    const nodes: { pos: [number, number, number]; retained: boolean }[] = [];
    nodes.push({ pos: [0, 1.2, 0], retained: true });
    nodes.push({ pos: [-0.6, 0.4, 0], retained: true });
    nodes.push({ pos: [0.6, 0.4, 0], retained: false });
    nodes.push({ pos: [-1.0, -0.4, -0.2], retained: true });
    nodes.push({ pos: [-0.3, -0.4, 0.2], retained: true });
    nodes.push({ pos: [0.3, -0.4, -0.2], retained: false });
    nodes.push({ pos: [1.0, -0.4, 0.2], retained: false });
    nodes.push({ pos: [-1.2, -1.2, 0], retained: true });
    nodes.push({ pos: [-0.8, -1.2, 0], retained: true });
    nodes.push({ pos: [-0.4, -1.2, 0], retained: true });
    nodes.push({ pos: [0.4, -1.2, 0], retained: false });
    nodes.push({ pos: [0.8, -1.2, 0], retained: false });
    nodes.push({ pos: [1.2, -1.2, 0], retained: false });
    return nodes;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.4;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.05;
  });

  return (
    <group ref={groupRef} visible={active}>
      {levels.map((node, idx) => (
        <mesh key={idx} position={node.pos}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial
            color={node.retained ? '#F4ECE1' : '#D6C3B0'}
            emissive={node.retained ? '#F4ECE1' : '#D6C3B0'}
            emissiveIntensity={node.retained ? 0.7 : 0.4}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Decision Boundary Plane */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 4, 0, 0]}>
        <planeGeometry args={[2.8, 1.8]} />
        <meshBasicMaterial
          color="#F4ECE1"
          wireframe
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      <pointLight color="#F4ECE1" intensity={1.2} distance={3} />
    </group>
  );
};

// -------------------------------------------------------------
// 8. Project 4: E-Commerce Value (Unsupervised Cluster Galaxy)
// -------------------------------------------------------------
const ECommerceGalaxySculpture: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 420;
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const centroids = useMemo(() => [
    { x: -0.8, y: 0.5, z: 0.2, color: '#F4ECE1' },
    { x: 0.7, y: 0.6, z: -0.3, color: '#D6C3B0' },
    { x: -0.5, y: -0.6, z: 0.4, color: '#A1A1AA' },
    { x: 0.8, y: -0.5, z: -0.2, color: '#71717A' },
  ], []);

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, idx) => {
      const c = centroids[idx % centroids.length];
      const r = 0.15 + Math.random() * 0.45;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      return {
        cx: c.x,
        cy: c.y,
        cz: c.z,
        r,
        speed: 0.4 + Math.random() * 0.8,
        theta,
        phi,
        scale: 0.02 + Math.random() * 0.02,
      };
    });
  }, [particleCount, centroids]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;

    if (particlesRef.current) {
      particles.forEach((p, i) => {
        const curTheta = p.theta + t * p.speed;
        const x = p.cx + p.r * Math.cos(curTheta) * Math.cos(p.phi);
        const y = p.cy + p.r * Math.sin(p.phi);
        const z = p.cz + p.r * Math.sin(curTheta) * Math.cos(p.phi);

        dummy.position.set(x, y, z);
        dummy.scale.setScalar(p.scale);
        dummy.updateMatrix();
        particlesRef.current?.setMatrixAt(i, dummy.matrix);
      });
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 4 Centroid Spheres */}
      {centroids.map((c, idx) => (
        <mesh key={idx} position={[c.x, c.y, c.z]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={c.color}
            emissive={c.color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Instanced Swarm Particles */}
      <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.65} />
      </instancedMesh>

      {/* DBSCAN Outlier Boundary */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.7, 0.012, 16, 96]} />
        <meshBasicMaterial color="#D6C3B0" transparent opacity={0.25} />
      </mesh>

      <pointLight color="#F4ECE1" intensity={1.4} distance={3.5} />
    </group>
  );
};

// -------------------------------------------------------------
// 9. Keyframe 5: Rest Orbital Rings (Arsenal, Leadership & Contact)
// -------------------------------------------------------------
const OrbitalRestRings: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.08;
    groupRef.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.2) * 0.05;
  });

  return (
    <group ref={groupRef} visible={active}>
      <mesh>
        <torusGeometry args={[2.4, 0.015, 16, 96]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.2} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.8, 0.012, 16, 80]} />
        <meshBasicMaterial color="#D6C3B0" transparent opacity={0.25} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.2, 0.01, 16, 64]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// -------------------------------------------------------------
// Central Scrollytelling Rig: Camera & Artifact Keyframing
// -------------------------------------------------------------
const ScrollytellingRig: React.FC = () => {
  const artifactGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const p = webglState.scrollProgress;
    const mx = webglState.mouseX;
    const my = webglState.mouseY;
    const isDrawerOpen = Boolean(webglState.activeDrawerProject);

    let targetCamX = 0;
    let targetCamY = 0;
    let targetCamZ = 7;

    let targetArtX = 0;
    let targetArtY = 0;
    let targetArtZ = 0;
    let targetArtScale = 1;

    if (isDrawerOpen) {
      // Dolly in when editorial case study drawer is open
      targetCamX = -0.5;
      targetCamY = 0;
      targetCamZ = 4.2;
      targetArtX = -1.65;
      targetArtY = 0.0;
      targetArtZ = 0.8;
      targetArtScale = 1.15;
    } else if (p < 0.15) {
      // Keyframe 1: Hero (scroll 0.00 – 0.15)
      // Sculpture sits deep in background left-of-center so it never collides with right portrait video
      targetCamX = mx * 0.3;
      targetCamY = my * 0.3;
      targetCamZ = 7.0;
      targetArtX = -2.1;
      targetArtY = 0.2;
      targetArtZ = -3.8;
      targetArtScale = 1.0;
    } else if (p >= 0.15 && p < 0.32) {
      // Keyframe 2: About (scroll 0.15 – 0.32)
      // Camera banks right; artifact moves to right column
      targetCamX = 0.5 + mx * 0.25;
      targetCamY = my * 0.25;
      targetCamZ = 5.8;
      targetArtX = 2.4;
      targetArtY = 0.0;
      targetArtZ = 0.2;
      targetArtScale = 1.05;
    } else if (p >= 0.32 && p < 0.48) {
      // Keyframe 3: Experience (scroll 0.32 – 0.48)
      // Camera orbits left; artifact aligns with Experience timeline
      targetCamX = -0.4 + mx * 0.25;
      targetCamY = my * 0.25;
      targetCamZ = 5.4;
      targetArtX = -2.3;
      targetArtY = 0.1;
      targetArtZ = 0.8;
      targetArtScale = 1.0;
    } else if (p >= 0.48 && p < 0.80) {
      // Keyframe 4: Selected Work (scroll 0.48 – 0.80)
      // Positions opposite the left project HUD
      targetCamX = 0.2 + mx * 0.2;
      targetCamY = my * 0.2;
      targetCamZ = 5.0;
      targetArtX = 1.85;
      targetArtY = 0.0;
      targetArtZ = 1.0;
      targetArtScale = 1.1;
    } else {
      // Keyframe 5: Arsenal, Leadership & Contact (scroll 0.80 – 1.00)
      targetCamX = 0;
      targetCamY = 2.8;
      targetCamZ = 6.4;
      targetArtX = 0.0;
      targetArtY = -0.8;
      targetArtZ = -1.0;
      targetArtScale = 1.0;
    }

    const lerpSpeed = delta * 3.5;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, lerpSpeed);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, lerpSpeed);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCamZ, lerpSpeed);

    if (p >= 0.80 && !isDrawerOpen) {
      state.camera.lookAt(0, -0.4, 0);
    } else {
      state.camera.lookAt(targetCamX * 0.3, targetCamY * 0.3, 0);
    }

    if (artifactGroup.current) {
      artifactGroup.current.position.x = THREE.MathUtils.lerp(artifactGroup.current.position.x, targetArtX, lerpSpeed);
      artifactGroup.current.position.y = THREE.MathUtils.lerp(artifactGroup.current.position.y, targetArtY, lerpSpeed);
      artifactGroup.current.position.z = THREE.MathUtils.lerp(artifactGroup.current.position.z, targetArtZ, lerpSpeed);

      const s = THREE.MathUtils.lerp(artifactGroup.current.scale.x, targetArtScale, lerpSpeed);
      artifactGroup.current.scale.set(s, s, s);

      artifactGroup.current.rotation.y = THREE.MathUtils.lerp(
        artifactGroup.current.rotation.y,
        mx * 0.25,
        lerpSpeed
      );
      artifactGroup.current.rotation.x = THREE.MathUtils.lerp(
        artifactGroup.current.rotation.x,
        -my * 0.2,
        lerpSpeed
      );
    }
  });

  const p = webglState.scrollProgress;
  const isDrawerOpen = Boolean(webglState.activeDrawerProject);
  const activeProj = webglState.activeDrawerProject;

  const isHero = !isDrawerOpen && p < 0.15;
  const isAbout = !isDrawerOpen && p >= 0.15 && p < 0.32;
  const isExperience = !isDrawerOpen && p >= 0.32 && p < 0.48;
  const isProjectsRange = isDrawerOpen || (p >= 0.48 && p < 0.80);

  const projectIdx = isDrawerOpen
    ? activeProj === 'ms-hqnet'
      ? 0
      : activeProj === 'resilinet'
      ? 1
      : activeProj === 'customer-attrition'
      ? 2
      : 3
    : p < 0.56
    ? 0
    : p < 0.64
    ? 1
    : p < 0.72
    ? 2
    : 3;

  const isRest = !isDrawerOpen && p >= 0.80;

  return (
    <group ref={artifactGroup}>
      <HarmonicSignalRing active={isHero} />
      <GyroscopeTensor active={isAbout} />
      <DataConduit active={isExperience} />

      {isProjectsRange && (
        <>
          <MSHQNetSculpture active={projectIdx === 0} />
          <ResiliNetSculpture active={projectIdx === 1} />
          <CustomerAttritionSculpture active={projectIdx === 2} />
          <ECommerceGalaxySculpture active={projectIdx === 3} />
        </>
      )}

      <OrbitalRestRings active={isRest} />
    </group>
  );
};

// -------------------------------------------------------------
// Main Export: Scene3D
// -------------------------------------------------------------
export const Scene3D: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 w-screen h-screen overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Studio Spotlight Continuity (Top-right keylight matching hero-video.mp4) */}
          <spotLight
            position={[6, 8, 5]}
            intensity={4.5}
            angle={0.45}
            penumbra={0.7}
            color="#F4ECE1"
          />

          {/* Rim light (Muted bronze opposite fill) */}
          <pointLight position={[-6, -4, -2]} intensity={1.5} color="#D6C3B0" />

          {/* Ambient studio fill */}
          <ambientLight intensity={0.4} color="#18181B" />

          {/* 180 Studio Spotlight Dust Particles */}
          <StudioSpotlightMotes />

          {/* Dynamic Keyframed 3D Camera & Morphing Artifact Rig */}
          <ScrollytellingRig />
        </Suspense>
      </Canvas>
    </div>
  );
};
