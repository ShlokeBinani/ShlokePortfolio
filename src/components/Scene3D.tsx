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

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      const t = Math.random();
      const originX = 5.5 + (Math.random() - 0.5) * 4;
      const originY = 7.5 + (Math.random() - 0.5) * 3;
      const originZ = 4.0 + (Math.random() - 0.5) * 3;

      const targetX = -2.5 + (Math.random() - 0.5) * 6;
      const targetY = -3.5 + (Math.random() - 0.5) * 4;
      const targetZ = 0.5 + (Math.random() - 0.5) * 4;

      return {
        x: THREE.MathUtils.lerp(originX, targetX, t),
        y: THREE.MathUtils.lerp(originY, targetY, t),
        z: THREE.MathUtils.lerp(originZ, targetZ, t),
        speed: 0.18 + Math.random() * 0.4,
        driftX: -0.25 - Math.random() * 0.25,
        driftY: -0.25 - Math.random() * 0.3,
        driftZ: (Math.random() - 0.5) * 0.15,
        scale: 0.02 + Math.random() * 0.035,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedMultiplier = 1 + Math.min(vel * 0.08, 3.5);

    particles.forEach((p, i) => {
      p.x += p.driftX * delta * p.speed * speedMultiplier;
      p.y += p.driftY * delta * p.speed * speedMultiplier;
      p.z += p.driftZ * delta * p.speed * speedMultiplier;

      // Wrap around within spotlight beam bounds
      if (p.x < -5.0 || p.y < -5.0) {
        p.x = 5.0 + Math.random() * 3;
        p.y = 7.0 + Math.random() * 2.5;
        p.z = 3.0 + Math.random() * 2;
      }

      const pulse = 1 + Math.sin(time * 2.5 + p.phase) * 0.35;
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
      <meshBasicMaterial color="#F4ECE1" transparent opacity={0.45} />
    </instancedMesh>
  );
};

// -------------------------------------------------------------
// 2. Hero 3D Centerpiece: Luminous Quantum Torus Knot & Orbital Gimbals
// -------------------------------------------------------------
const HeroQuantumCore = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const knotRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const beacon1Ref = useRef<THREE.Mesh>(null);
  const beacon2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.05, 3.0);

    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.35 * speedBoost;
      knotRef.current.rotation.y += delta * 0.5 * speedBoost;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.4 * speedBoost;
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.6) * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.3 * speedBoost;
      ring2Ref.current.rotation.y = Math.PI / 3 + Math.cos(t * 0.5) * 0.15;
    }
    if (beacon1Ref.current) {
      const angle = t * 1.2;
      beacon1Ref.current.position.set(Math.cos(angle) * 1.55, Math.sin(angle) * 1.55, 0);
    }
    if (beacon2Ref.current) {
      const angle = -t * 1.0;
      beacon2Ref.current.position.set(Math.cos(angle) * 1.25, 0, Math.sin(angle) * 1.25);
    }
  });

  return (
    <group ref={ref}>
      {/* Central Luminous Torus Knot */}
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[0.95, 0.22, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#F4ECE1"
          emissive="#D6C3B0"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Hologram Ghost Shell */}
      <mesh>
        <torusKnotGeometry args={[0.98, 0.23, 64, 16, 2, 3]} />
        <meshBasicMaterial color="#D6C3B0" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Outer Gimbal Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.55, 0.02, 16, 96]} />
        <meshStandardMaterial color="#F4ECE1" metalness={0.9} roughness={0.2} />
        <mesh ref={beacon1Ref}>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshBasicMaterial color="#F4ECE1" />
        </mesh>
      </mesh>

      {/* Inner Inclined Gimbal Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.25, 0.018, 16, 80]} />
        <meshStandardMaterial color="#D6C3B0" metalness={0.8} roughness={0.3} />
        <mesh ref={beacon2Ref}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color="#D6C3B0" />
        </mesh>
      </mesh>

      {/* Internal Core Spotlight */}
      <pointLight color="#F4ECE1" intensity={2.8} distance={4.5} />
    </group>
  );
});

// -------------------------------------------------------------
// 3. About: Interlocking 3-Ring Gyroscope & Wave Tensor
// -------------------------------------------------------------
const GyroscopeTensor = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const ringX = useRef<THREE.Mesh>(null);
  const ringY = useRef<THREE.Mesh>(null);
  const ringZ = useRef<THREE.Mesh>(null);
  const tensorCore = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.06, 3.0);

    if (ringX.current) ringX.current.rotation.x += delta * 0.65 * speedBoost;
    if (ringY.current) ringY.current.rotation.y += delta * 0.5 * speedBoost;
    if (ringZ.current) ringZ.current.rotation.z += delta * 0.6 * speedBoost;

    if (tensorCore.current) {
      tensorCore.current.rotation.x += delta * 0.8 * speedBoost;
      tensorCore.current.rotation.y += delta * 0.9 * speedBoost;
      const pulse = 0.42 + Math.sin(t * 3.0) * 0.06;
      tensorCore.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={ref}>
      {/* Ring 1 (ECE Signals / Hardware) */}
      <mesh ref={ringX}>
        <torusGeometry args={[1.45, 0.035, 16, 96]} />
        <meshStandardMaterial color="#F4ECE1" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Ring 2 (Distributed Backend Systems) */}
      <mesh ref={ringY}>
        <torusGeometry args={[1.18, 0.03, 16, 80]} />
        <meshStandardMaterial color="#D6C3B0" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Ring 3 (Machine Learning & AI) */}
      <mesh ref={ringZ}>
        <torusGeometry args={[0.92, 0.025, 16, 64]} />
        <meshStandardMaterial color="#A1A1AA" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Luminous Central Tensor Core (Octahedron) */}
      <mesh ref={tensorCore}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#F4ECE1"
          emissive="#F4ECE1"
          emissiveIntensity={0.8}
          wireframe={false}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Octahedron Wireframe Cage */}
      <mesh>
        <octahedronGeometry args={[0.45, 0]} />
        <meshBasicMaterial color="#D6C3B0" wireframe />
      </mesh>

      <pointLight color="#F4ECE1" intensity={2.2} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 4. Experience: Toroidal Data Conduit (Kofuku Tech)
// -------------------------------------------------------------
const DataConduit = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const conduitRef = useRef<THREE.Mesh>(null);
  const streamParticles = useRef<THREE.InstancedMesh>(null);
  const streamCount = 56;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.08, 4.0);

    if (conduitRef.current) {
      conduitRef.current.rotation.x = 0.4 + Math.sin(t * 0.4) * 0.12;
      conduitRef.current.rotation.y += delta * 0.4 * speedBoost;
    }

    if (streamParticles.current) {
      const R = 1.35;
      const r = 0.35;
      for (let i = 0; i < streamCount; i++) {
        const u = (t * 2.5 * speedBoost + (i / streamCount) * Math.PI * 2) % (Math.PI * 2);
        const v = (t * 5.0 * speedBoost + i * 0.9) % (Math.PI * 2);

        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);

        dummy.position.set(x, y, z);
        dummy.scale.setScalar(0.03);
        dummy.updateMatrix();
        streamParticles.current.setMatrixAt(i, dummy.matrix);
      }
      streamParticles.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={ref}>
      {/* Semi-transparent outer conduit tube */}
      <mesh ref={conduitRef}>
        <torusGeometry args={[1.35, 0.38, 24, 64]} />
        <meshStandardMaterial
          color="#D6C3B0"
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>

      {/* Inner Glowing Core Torus */}
      <mesh>
        <torusGeometry args={[1.35, 0.1, 16, 64]} />
        <meshStandardMaterial
          color="#F4ECE1"
          emissive="#F4ECE1"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Energy Stream Particles */}
      <instancedMesh ref={streamParticles} args={[undefined, undefined, streamCount]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#F4ECE1" />
      </instancedMesh>

      <pointLight color="#F4ECE1" intensity={2.5} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 5. Project 1: MS-HQNet (Quantum Bloch Sphere & Wave Ribbons)
// -------------------------------------------------------------
const MSHQNetSculpture = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const pointerSphere = useRef<THREE.Mesh>(null);
  const waveRibbon1 = useRef<THREE.Mesh>(null);
  const waveRibbon2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.05, 3.0);

    // Precessing quantum state vector |ψ⟩
    const theta = Math.sin(t * 0.9) * 0.7 + 0.8;
    const phi = t * 1.5 * speedBoost;
    const x = Math.sin(theta) * Math.cos(phi) * 1.3;
    const y = Math.cos(theta) * 1.3;
    const z = Math.sin(theta) * Math.sin(phi) * 1.3;

    if (pointerSphere.current) {
      pointerSphere.current.position.set(x, y, z);
    }

    if (waveRibbon1.current) {
      waveRibbon1.current.rotation.z += delta * 0.6 * speedBoost;
      waveRibbon1.current.rotation.x = Math.sin(t * 0.6) * 0.35;
    }
    if (waveRibbon2.current) {
      waveRibbon2.current.rotation.z -= delta * 0.5 * speedBoost;
      waveRibbon2.current.rotation.y = Math.cos(t * 0.5) * 0.35;
    }
  });

  return (
    <group ref={ref}>
      {/* Wireframe Bloch Sphere */}
      <mesh>
        <sphereGeometry args={[1.3, 28, 20]} />
        <meshStandardMaterial
          color="#D6C3B0"
          wireframe
          transparent
          opacity={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Coordinate Axes (Z-axis polar) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 3.0, 12]} />
        <meshBasicMaterial color="#F4ECE1" opacity={0.7} transparent />
      </mesh>
      {/* Equator Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.02, 16, 80]} />
        <meshBasicMaterial color="#D6C3B0" opacity={0.6} transparent />
      </mesh>

      {/* State Vector |ψ⟩ Tip */}
      <mesh ref={pointerSphere}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#F4ECE1" emissive="#F4ECE1" emissiveIntensity={0.9} />
      </mesh>

      {/* Orbiting Multi-Channel Wave Ribbons */}
      <mesh ref={waveRibbon1}>
        <torusGeometry args={[1.65, 0.016, 16, 96]} />
        <meshBasicMaterial color="#F4ECE1" opacity={0.7} transparent />
      </mesh>
      <mesh ref={waveRibbon2}>
        <torusGeometry args={[1.8, 0.014, 16, 96]} />
        <meshBasicMaterial color="#D6C3B0" opacity={0.5} transparent />
      </mesh>

      <pointLight color="#F4ECE1" intensity={2.2} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 6. Project 2: ResiliNet (3D Geodesic 6G Mesh Network Sphere)
// -------------------------------------------------------------
const ResiliNetSculpture = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const meshLinesRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, lineGeometry } = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(1.35, 1);
    const posAttr = ico.attributes.position;
    const positions: [number, number, number][] = [];
    for (let i = 0; i < posAttr.count; i++) {
      positions.push([posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)]);
    }
    const wireframe = new THREE.WireframeGeometry(ico);
    return { nodePositions: positions, lineGeometry: wireframe };
  }, []);

  useFrame((_state, delta) => {
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.06, 3.0);
    if (ref && 'current' in ref && ref.current) {
      ref.current.rotation.x += delta * 0.25 * speedBoost;
      ref.current.rotation.y += delta * 0.35 * speedBoost;
    }
  });

  return (
    <group ref={ref}>
      {/* 6G Mesh Edge Connections */}
      <lineSegments ref={meshLinesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#F4ECE1" transparent opacity={0.55} />
      </lineSegments>

      {/* Mesh Nodes (Instanced vertices) */}
      {nodePositions.slice(0, 36).map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshStandardMaterial
            color={idx % 3 === 0 ? '#F4ECE1' : '#D6C3B0'}
            emissive={idx % 3 === 0 ? '#F4ECE1' : '#D6C3B0'}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}

      {/* Autonomous Packet Pulses (Internal Core) */}
      <mesh>
        <sphereGeometry args={[0.7, 20, 20]} />
        <meshStandardMaterial
          color="#F4ECE1"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      <pointLight color="#F4ECE1" intensity={2.0} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 7. Project 3: Customer Attrition (Hierarchical Decision Lattice)
// -------------------------------------------------------------
const CustomerAttritionSculpture = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const levels = useMemo(() => {
    const nodes: { pos: [number, number, number]; retained: boolean }[] = [];
    nodes.push({ pos: [0, 1.3, 0], retained: true });
    nodes.push({ pos: [-0.65, 0.45, 0], retained: true });
    nodes.push({ pos: [0.65, 0.45, 0], retained: false });
    nodes.push({ pos: [-1.1, -0.4, -0.2], retained: true });
    nodes.push({ pos: [-0.35, -0.4, 0.2], retained: true });
    nodes.push({ pos: [0.35, -0.4, -0.2], retained: false });
    nodes.push({ pos: [1.1, -0.4, 0.2], retained: false });
    nodes.push({ pos: [-1.3, -1.25, 0], retained: true });
    nodes.push({ pos: [-0.85, -1.25, 0], retained: true });
    nodes.push({ pos: [-0.4, -1.25, 0], retained: true });
    nodes.push({ pos: [0.4, -1.25, 0], retained: false });
    nodes.push({ pos: [0.85, -1.25, 0], retained: false });
    nodes.push({ pos: [1.3, -1.25, 0], retained: false });
    return nodes;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (ref && 'current' in ref && ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.4) * 0.5;
      ref.current.position.y = Math.sin(t * 0.7) * 0.08;
    }
  });

  return (
    <group ref={ref}>
      {levels.map((node, idx) => (
        <mesh key={idx} position={node.pos}>
          <sphereGeometry args={[0.085, 14, 14]} />
          <meshStandardMaterial
            color={node.retained ? '#F4ECE1' : '#D6C3B0'}
            emissive={node.retained ? '#F4ECE1' : '#D6C3B0'}
            emissiveIntensity={node.retained ? 0.8 : 0.5}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Decision Boundary Plane */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 4, 0, 0]}>
        <planeGeometry args={[3.0, 2.0]} />
        <meshBasicMaterial
          color="#F4ECE1"
          wireframe
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      <pointLight color="#F4ECE1" intensity={2.0} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 8. Project 4: E-Commerce Value (Unsupervised Cluster Galaxy)
// -------------------------------------------------------------
const ECommerceGalaxySculpture = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  const particleCount = 420;
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const centroids = useMemo(() => [
    { x: -0.85, y: 0.55, z: 0.2, color: '#F4ECE1' },
    { x: 0.75, y: 0.65, z: -0.3, color: '#D6C3B0' },
    { x: -0.55, y: -0.65, z: 0.4, color: '#A1A1AA' },
    { x: 0.85, y: -0.55, z: -0.2, color: '#71717A' },
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
        speed: 0.5 + Math.random() * 0.8,
        theta,
        phi,
        scale: 0.024 + Math.random() * 0.024,
      };
    });
  }, [particleCount, centroids]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.06, 3.0);

    if (ref && 'current' in ref && ref.current) {
      ref.current.rotation.y += delta * 0.25 * speedBoost;
    }

    if (particlesRef.current) {
      particles.forEach((p, i) => {
        const curTheta = p.theta + t * p.speed * speedBoost;
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
    <group ref={ref}>
      {/* 4 Centroid Spheres */}
      {centroids.map((c, idx) => (
        <mesh key={idx} position={[c.x, c.y, c.z]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial
            color={c.color}
            emissive={c.color}
            emissiveIntensity={0.9}
          />
        </mesh>
      ))}

      {/* Instanced Swarm Particles */}
      <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.75} />
      </instancedMesh>

      {/* DBSCAN Outlier Boundary */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.85, 0.015, 16, 96]} />
        <meshBasicMaterial color="#D6C3B0" transparent opacity={0.35} />
      </mesh>

      <pointLight color="#F4ECE1" intensity={2.0} distance={4} />
    </group>
  );
});

// -------------------------------------------------------------
// 9. Rest: Orbital Dyson Rings (Skills, Leadership & Contact)
// -------------------------------------------------------------
const OrbitalRestRings = React.forwardRef<THREE.Group, { visible?: boolean }>((_props, ref) => {
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const vel = Math.abs(webglState.scrollVelocity || 0);
    const speedBoost = 1 + Math.min(vel * 0.05, 3.0);
    if (ref && 'current' in ref && ref.current) {
      ref.current.rotation.z += delta * 0.12 * speedBoost;
      ref.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.25) * 0.08;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[2.6, 0.02, 16, 96]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.0, 0.016, 16, 80]} />
        <meshBasicMaterial color="#D6C3B0" transparent opacity={0.45} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.4, 0.014, 16, 64]} />
        <meshBasicMaterial color="#F4ECE1" transparent opacity={0.5} />
      </mesh>
    </group>
  );
});

// -------------------------------------------------------------
// Central Scrollytelling Rig: Accurate DOM Telemetry Calibration
// -------------------------------------------------------------
const ScrollytellingRig: React.FC = () => {
  const masterGroup = useRef<THREE.Group>(null);

  // Direct refs to all 8 procedural sculptures
  const heroRef = useRef<THREE.Group>(null);
  const aboutRef = useRef<THREE.Group>(null);
  const expRef = useRef<THREE.Group>(null);
  const proj0Ref = useRef<THREE.Group>(null);
  const proj1Ref = useRef<THREE.Group>(null);
  const proj2Ref = useRef<THREE.Group>(null);
  const proj3Ref = useRef<THREE.Group>(null);
  const restRef = useRef<THREE.Group>(null);

  // Smooth lerp state weights
  const weights = useRef({
    hero: 1.0,
    about: 0.0,
    exp: 0.0,
    proj0: 0.0,
    proj1: 0.0,
    proj2: 0.0,
    proj3: 0.0,
    rest: 0.0,
  });

  useFrame((state, delta) => {
    const p = webglState.scrollProgress;
    const mx = webglState.mouseX;
    const my = webglState.mouseY;
    const isDrawerOpen = Boolean(webglState.activeDrawerProject);
    const activeDrawer = webglState.activeDrawerProject;
    const projIdx = webglState.currentProjectIndex;

    // 1. Precise Calibrated Section Coordinates
    let targetCamX = 0;
    let targetCamY = 0;
    let targetCamZ = 6.0;

    let targetArtX = 0;
    let targetArtY = 0;
    let targetArtZ = 0;
    let targetArtScale = 1.0;

    const isMobile = window.innerWidth < 1024;

    if (isDrawerOpen) {
      // Camera dolly when case study drawer is active
      targetCamX = -0.6;
      targetCamY = 0;
      targetCamZ = 3.8;
      targetArtX = isMobile ? 0 : -1.75;
      targetArtY = 0.0;
      targetArtZ = 0.9;
      targetArtScale = 1.25;
    } else if (p < 0.12) {
      // Keyframe 1: Hero (scroll 0.00 – 0.12)
      // Placed in the spotlight gap between left typography and right portrait video
      targetCamX = mx * 0.2;
      targetCamY = my * 0.2;
      targetCamZ = isMobile ? 6.5 : 5.8;
      targetArtX = isMobile ? 0.0 : 0.45;
      targetArtY = isMobile ? -0.2 : 0.05;
      targetArtZ = isMobile ? -1.0 : -0.2;
      targetArtScale = isMobile ? 0.75 : 0.95;
    } else if (p >= 0.12 && p < 0.22) {
      // Keyframe 2: About (scroll 0.12 – 0.22)
      // Sculpture floats in the right column behind the live telemetry bento card
      targetCamX = 0.3 + mx * 0.2;
      targetCamY = my * 0.2;
      targetCamZ = 5.4;
      targetArtX = isMobile ? 0.0 : 2.2;
      targetArtY = 0.1;
      targetArtZ = 0.4;
      targetArtScale = isMobile ? 0.8 : 1.05;
    } else if (p >= 0.22 && p < 0.32) {
      // Keyframe 3: Experience (scroll 0.22 – 0.32)
      // Sculpture glides to the left column behind Kofuku metrics
      targetCamX = -0.3 + mx * 0.2;
      targetCamY = my * 0.2;
      targetCamZ = 5.2;
      targetArtX = isMobile ? 0.0 : -2.2;
      targetArtY = 0.0;
      targetArtZ = 0.5;
      targetArtScale = isMobile ? 0.8 : 1.05;
    } else if (p >= 0.32 && p < 0.72) {
      // Keyframe 4: Selected Work Stage (scroll 0.32 – 0.72, 400vh section)
      // Sits right in the 3D telemetry stage window (right 6 cols)
      targetCamX = 0.2 + mx * 0.15;
      targetCamY = my * 0.15;
      targetCamZ = 4.8;
      targetArtX = isMobile ? 0.0 : 2.0;
      targetArtY = 0.0;
      targetArtZ = 1.0;
      targetArtScale = isMobile ? 0.85 : 1.25;
    } else {
      // Keyframe 5: Rest of site (Skills, Leadership, Contact, 0.72 – 1.00)
      targetCamX = 0;
      targetCamY = 1.0;
      targetCamZ = 5.5;
      targetArtX = 0.0;
      targetArtY = 0.3;
      targetArtZ = 0.2;
      targetArtScale = 1.05;
    }

    // 2. Smooth Camera Physics
    const lerpSpeed = Math.min(delta * 4.5, 0.25);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, lerpSpeed);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, lerpSpeed);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCamZ, lerpSpeed);

    state.camera.lookAt(targetCamX * 0.3, targetCamY * 0.3, 0);

    // 3. Smooth Artifact Position, Scale & Continuous Scroll Rotation
    if (masterGroup.current) {
      masterGroup.current.position.x = THREE.MathUtils.lerp(masterGroup.current.position.x, targetArtX, lerpSpeed);
      masterGroup.current.position.y = THREE.MathUtils.lerp(masterGroup.current.position.y, targetArtY, lerpSpeed);
      masterGroup.current.position.z = THREE.MathUtils.lerp(masterGroup.current.position.z, targetArtZ, lerpSpeed);

      // Continuous direct scroll rotation: every pixel of scroll visibly rotates the 3D scene
      const targetRotY = p * Math.PI * 6 + mx * 0.35;
      const targetRotX = Math.sin(p * Math.PI * 2.5) * 0.35 - my * 0.25;
      const targetRotZ = Math.cos(p * Math.PI * 2) * 0.15;

      masterGroup.current.rotation.y = THREE.MathUtils.lerp(masterGroup.current.rotation.y, targetRotY, lerpSpeed);
      masterGroup.current.rotation.x = THREE.MathUtils.lerp(masterGroup.current.rotation.x, targetRotX, lerpSpeed);
      masterGroup.current.rotation.z = THREE.MathUtils.lerp(masterGroup.current.rotation.z, targetRotZ, lerpSpeed);
    }

    // 4. Compute Dynamic Morphing Target Weights with Calibrated Breakpoints
    const targetWeights = {
      hero: !isDrawerOpen && p < 0.12 ? 1.0 : 0.0,
      about: !isDrawerOpen && p >= 0.12 && p < 0.22 ? 1.0 : 0.0,
      exp: !isDrawerOpen && p >= 0.22 && p < 0.32 ? 1.0 : 0.0,
      proj0: 0.0,
      proj1: 0.0,
      proj2: 0.0,
      proj3: 0.0,
      rest: !isDrawerOpen && p >= 0.72 ? 1.0 : 0.0,
    };

    if (isDrawerOpen) {
      if (activeDrawer === 'ms-hqnet') targetWeights.proj0 = 1.0;
      else if (activeDrawer === 'resilinet') targetWeights.proj1 = 1.0;
      else if (activeDrawer === 'customer-attrition') targetWeights.proj2 = 1.0;
      else targetWeights.proj3 = 1.0;
    } else if (p >= 0.32 && p < 0.72) {
      // 4 projects divided across 0.32 to 0.72
      const computedProjIdx = Math.min(3, Math.max(0, Math.floor(((p - 0.32) / 0.40) * 4)));
      const activeIdx = typeof projIdx === 'number' ? projIdx : computedProjIdx;
      if (activeIdx === 0) targetWeights.proj0 = 1.0;
      else if (activeIdx === 1) targetWeights.proj1 = 1.0;
      else if (activeIdx === 2) targetWeights.proj2 = 1.0;
      else targetWeights.proj3 = 1.0;
    }

    // 5. Update Sculpture Scales & Visibility smoothly at 60fps
    const morphSpeed = Math.min(delta * 6.5, 0.35);
    const updateSculpture = (
      groupRef: React.RefObject<THREE.Group | null>,
      currentWeightKey: keyof typeof weights.current,
      targetVal: number
    ) => {
      weights.current[currentWeightKey] = THREE.MathUtils.lerp(
        weights.current[currentWeightKey],
        targetVal,
        morphSpeed
      );
      const w = weights.current[currentWeightKey];
      if (groupRef.current) {
        if (w > 0.01) {
          groupRef.current.visible = true;
          groupRef.current.scale.setScalar(w * targetArtScale);
        } else {
          groupRef.current.visible = false;
        }
      }
    };

    updateSculpture(heroRef, 'hero', targetWeights.hero);
    updateSculpture(aboutRef, 'about', targetWeights.about);
    updateSculpture(expRef, 'exp', targetWeights.exp);
    updateSculpture(proj0Ref, 'proj0', targetWeights.proj0);
    updateSculpture(proj1Ref, 'proj1', targetWeights.proj1);
    updateSculpture(proj2Ref, 'proj2', targetWeights.proj2);
    updateSculpture(proj3Ref, 'proj3', targetWeights.proj3);
    updateSculpture(restRef, 'rest', targetWeights.rest);
  });

  return (
    <group ref={masterGroup}>
      <HeroQuantumCore ref={heroRef} />
      <GyroscopeTensor ref={aboutRef} />
      <DataConduit ref={expRef} />
      <MSHQNetSculpture ref={proj0Ref} />
      <ResiliNetSculpture ref={proj1Ref} />
      <CustomerAttritionSculpture ref={proj2Ref} />
      <ECommerceGalaxySculpture ref={proj3Ref} />
      <OrbitalRestRings ref={restRef} />
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
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Studio Spotlight Keylight matching hero-video.mp4 */}
          <spotLight
            position={[6, 8, 5]}
            intensity={5.0}
            angle={0.48}
            penumbra={0.7}
            color="#F4ECE1"
          />

          {/* Rim light (Muted bronze opposite fill) */}
          <pointLight position={[-6, -4, -2]} intensity={2.0} color="#D6C3B0" />

          {/* Ambient studio fill */}
          <ambientLight intensity={0.45} color="#18181B" />

          {/* 180 Studio Spotlight Dust Particles */}
          <StudioSpotlightMotes />

          {/* Dynamic Keyframed 3D Scrollytelling Choreography Rig */}
          <ScrollytellingRig />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
