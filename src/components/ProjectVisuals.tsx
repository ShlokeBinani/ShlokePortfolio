import React from 'react';
import { Activity, ShieldCheck, Database, Cpu, Wifi, CheckCircle2, ArrowRight, Layers, BarChart3, Lock, Zap, Clock, QrCode, AlertTriangle } from 'lucide-react';

const getProjectImg = (filename: string) => `${import.meta.env.BASE_URL}images/projects/${filename}`;

// 1. ResiliNet: Decentralized 6G Social Protocol
export const ResiliNetVisuals = {
  // Column 1 Top: 4-Tier Social Urgency Taxonomy (SUT) with Dynamic Compression
  Col1Top: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          4-Tier SUT Priority Allocation
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
          DPI Port 104 Verified
        </span>
      </div>

      <div className="py-1 space-y-1 text-[10px]">
        {/* Tier 1: Life-Critical DICOM */}
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
          <span className="font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            T1 Critical (τ=1.00)
          </span>
          <span className="font-bold text-emerald-300">DICOM Telesurgery · 800 Mbps (100%)</span>
        </div>

        {/* Tier 2: Management Heartbeat */}
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-sky-950/25 border border-sky-500/25 text-sky-200">
          <span className="font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            T2 High (τ=0.75)
          </span>
          <span className="text-sky-300">Heartbeat & Telemetry · 120 Mbps (100%)</span>
        </div>

        {/* Tier 3: Medium Enterprise */}
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-slate-900/40 border border-slate-700/40 text-slate-300">
          <span className="font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            T3 Medium (τ=0.50)
          </span>
          <span className="text-zinc-400">Enterprise & Web · 68 Mbps (100%)</span>
        </div>

        {/* Tier 4: Low Priority Gaming Throttled (Crimson Red Accent) */}
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-red-950/40 border border-red-500/40 text-red-200 shadow-[0_0_10px_rgba(239,68,68,0.15)]">
          <span className="font-bold text-red-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            T4 Low (τ=0.25)
          </span>
          <span className="font-bold text-red-300">UDP Gaming · 360 → 144 Mbps (α=0.40)</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] text-zinc-400 pt-1 border-t border-white/5">
        <span className="text-emerald-400/90 font-medium">T1-T3 Zero Packet Drop</span>
        <span className="text-red-400 font-semibold">T4 Dynamic Compression Active</span>
      </div>
    </div>
  ),

  // Column 1 Bottom: Real IEEE Paper Fig. 2 Latency vs Link Utilization Graph
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3 sm:p-3.5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <span className="text-[10px] sm:text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5 font-bold">
          <Activity className="w-3.5 h-3.5 text-red-400" />
          Empirical Result: M/M/1 Latency Cliff
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-bold">
          ρ = 85% Cliff
        </span>
      </div>

      {/* Real Screenshot from User's Research Paper */}
      <div className="relative flex-1 my-1.5 rounded-xl overflow-hidden bg-white border border-white/20 p-1 flex items-center justify-center group">
        <img
          src={getProjectImg('resilinet_fig2_latency.png')}
          alt="Fig. 2 End-to-end latency vs link utilization"
          className="w-full h-full object-contain max-h-[110px] filter contrast-125"
          loading="lazy"
        />
        {/* Subtle lab HUD badge overlaid */}
        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[8px] font-mono text-zinc-200 border border-white/15">
          Fig. 2: IEEE Paper Telemetry
        </div>
      </div>

      {/* High-Contrast Red vs Blue Curve Legend */}
      <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/5">
        <span className="text-red-400 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-red-500" />
          Red: Blind QoS Failure (365 ms)
        </span>
        <span className="text-sky-300 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          Blue: ResiliNet (37 ms, -89.8%)
        </span>
      </div>
    </div>
  ),

  // Column 2 Hero: 3-Layer Decentralized Architecture + AI Sentinel Telemetry
  Col2Hero: () => (
    <div className="w-full h-full bg-[#08080C] p-4 sm:p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">ResiliNet Decentralized 6G Protocol</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/25 font-semibold">
            Congestion Sentinel
          </span>
          <span className="text-[10px] text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/25">
            PoG Web3
          </span>
        </div>
      </div>

      {/* Middle Grid: Architecture Diagram Plate + Real-Time Telemetry Stream */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 my-auto py-2 items-center">
        {/* Authentic Fig. 1 Architecture Diagram from PDF */}
        <div className="md:col-span-6 rounded-2xl overflow-hidden bg-white border border-white/20 p-2 flex flex-col items-center justify-center relative shadow-lg group">
          <img
            src={getProjectImg('resilinet_p1_img1_40.png')}
            alt="ResiliNet 3-Layer Architecture Diagram"
            className="w-full h-auto max-h-[145px] object-contain filter contrast-110"
            loading="lazy"
          />
          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-300 border border-white/10">
            Fig. 1: 3-Layer Protocol Architecture
          </div>
        </div>

        {/* Real-time Sentinel event logs with contrasting colors */}
        <div className="md:col-span-6 space-y-1.5 text-[10px]">
          <div className="p-1.5 rounded-lg bg-black/70 border border-red-500/30 text-red-300 flex items-start gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-red-400">[10:00:01] CRITICAL BREACH:</span> Traffic exceeds 85% ceiling (Peak 97% load).
            </div>
          </div>
          <div className="p-1.5 rounded-lg bg-black/70 border border-sky-500/20 text-sky-200">
            <span className="font-bold text-sky-400">[10:00:02] DPI INGEST:</span> Life-critical DICOM Port 104 verified.
          </div>
          <div className="p-1.5 rounded-lg bg-black/70 border border-amber-500/25 text-amber-200">
            <span className="font-bold text-amber-400">[10:00:03] SOCIAL SLICE:</span> Tier 4 UDP Gaming throttled to α = 0.40.
          </div>
          <div className="p-1.5 rounded-lg bg-black/70 border border-emerald-500/30 text-emerald-200">
            <span className="font-bold text-emerald-400">[10:00:05] RESTORED:</span> Latency drops from 365ms to 37ms (-89.8%).
          </div>
        </div>
      </div>

      {/* KPI Matrix Table with high contrast color badges */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center text-[10px]">
        <div className="p-1.5 rounded-xl bg-black/60 border border-sky-500/30">
          <span className="text-zinc-400 block text-[9px]">Peak Latency</span>
          <span className="font-bold text-sky-300">37 ms (-89.8%)</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-emerald-500/30">
          <span className="text-zinc-400 block text-[9px]">Packet Loss</span>
          <span className="font-bold text-emerald-400">0.00% (-100%)</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-purple-500/30">
          <span className="text-zinc-400 block text-[9px]">Jitter</span>
          <span className="font-bold text-purple-300">2.0 ms (-83.3%)</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-red-500/30">
          <span className="text-zinc-400 block text-[9px]">DICOM Stream</span>
          <span className="font-bold text-red-400">800 Mbps (100%)</span>
        </div>
      </div>
    </div>
  ),
};

// 2. Paradox: High-Throughput Ticket Booking & Database Locking
export const ParadoxVisuals = {
  // Column 1 Top: Row-Level Concurrency Control with Crimson Red Mutex
  Col1Top: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Lock className="w-3.5 h-3.5 text-red-400" />
          Row-Level Concurrency Mutex
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-semibold">
          Strict ACID Locks
        </span>
      </div>

      <div className="py-1.5 space-y-1.5 text-[11px]">
        <div className="p-2 rounded-lg bg-black/80 border border-red-500/30 text-zinc-300">
          <span className="text-red-400 font-bold">SELECT</span> * FROM seats{' '}
          <span className="text-amber-300 font-semibold">WHERE</span> id = $1{' '}
          <span className="text-red-400 font-bold bg-red-500/20 px-1 py-0.5 rounded border border-red-500/30">FOR UPDATE</span>;
        </div>
        <p className="text-[10px] text-zinc-400 leading-snug">
          Serializes concurrent requests for identical seats, completely eliminating double-booking collisions under flash sales.
        </p>
      </div>

      <div className="text-[9px] text-zinc-400 pt-1 border-t border-white/5 flex justify-between">
        <span className="text-zinc-400">PostgreSQL Transaction Isolation</span>
        <span className="text-red-400 font-bold">Zero Race Conditions</span>
      </div>
    </div>
  ),

  // Column 1 Bottom: 10-Minute Seat Hold TTL Engine with Warning Pulse
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5 font-bold">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          Configurable TTL Hold Engine
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
          10-Min Expiry
        </span>
      </div>

      <div className="my-auto space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-red-500/30 text-red-200">
          <span className="font-semibold text-red-300">Abandoned Checkout: Seat #B14</span>
          <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-bold text-[9px]">Auto-Released</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-emerald-500/30 text-emerald-200">
          <span className="font-semibold text-emerald-300">Waitlist Head: User #904</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">Link Dispatched</span>
        </div>
      </div>

      <div className="text-[9px] text-zinc-400 pt-1 flex justify-between border-t border-white/5">
        <span>Real-time Redis / PostgreSQL synchronization</span>
        <span className="text-emerald-400 font-semibold">FIFO Waitlist Active</span>
      </div>
    </div>
  ),

  // Column 2 Hero: Live Seat Booking Matrix & Encrypted QR Dispatch
  Col2Hero: () => (
    <div className="w-full h-full bg-[#08080C] p-4 sm:p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">Paradox Real-Time Booking Matrix</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/25 font-bold">
            Red: Active Mutex Lock
          </span>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/25">
            Render API · Vercel
          </span>
        </div>
      </div>

      {/* Interactive Seat Grid Preview with contrasting red lock */}
      <div className="py-2.5">
        <div className="text-[11px] text-zinc-300 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-sky-500/40 border border-sky-400" /> Standard (S1-S16)
            <span className="w-2 h-2 rounded bg-amber-500/30 border border-amber-400 ml-2" /> Premium (P1-P8)
            <span className="w-2 h-2 rounded bg-red-500 border border-red-400 ml-2 animate-pulse" /> Held Lock
          </span>
          <span className="text-red-400 font-bold text-[10px]">Row-Level Locked</span>
        </div>

        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const isBooked = [2, 5, 8, 9, 14, 18, 21].includes(i);
            const isLocking = i === 11;
            const isPremium = i >= 16;
            return (
              <div
                key={i}
                className={`h-7 rounded-md flex items-center justify-center text-[10px] font-bold transition-all ${
                  isLocking
                    ? 'bg-red-600 text-white border-2 border-red-400 shadow-[0_0_14px_rgba(239,68,68,0.7)] animate-pulse'
                    : isBooked
                    ? 'bg-white/5 border border-white/10 text-zinc-500'
                    : isPremium
                    ? 'bg-amber-950/30 border border-amber-500/40 text-amber-300'
                    : 'bg-sky-950/30 border border-sky-500/30 text-sky-200'
                }`}
              >
                {isLocking ? 'LOCKED' : isPremium ? `P${i - 15}` : `S${i + 1}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* QR Confirmation Bar */}
      <div className="p-2.5 rounded-xl bg-black/70 border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <QrCode className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-300 text-[11px]">HMAC Encrypted QR: Ref #PDX-8941-CONFIRMED</span>
        </div>
        <span className="text-emerald-400 font-semibold text-[11px]">Instant Email Dispatch</span>
      </div>
    </div>
  ),
};

// 3. MS-HQNet: Multi-Stream Hybrid Quantum Framework Visuals
export const MSHQNetVisuals = {
  // Column 1 Top: Real IEEE Paper Fig. 4 Barren Plateau Mitigation Plot
  Col1Top: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3 sm:p-3.5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <span className="text-[10px] sm:text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Cpu className="w-3.5 h-3.5 text-red-400" />
          Barren Plateau Mitigation Dynamics
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-bold">
          IEEE Paper Fig. 4
        </span>
      </div>

      {/* Real Screenshot from User's Research Paper */}
      <div className="relative flex-1 my-1.5 rounded-xl overflow-hidden bg-white border border-white/20 p-1 flex items-center justify-center group">
        <img
          src={getProjectImg('mshqnet_p4_img1_10.png')}
          alt="Fig. 4 Training vs Validation Dynamics (Barren Plateau Mitigation)"
          className="w-full h-full object-contain max-h-[110px] filter contrast-125"
          loading="lazy"
        />
        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-200 border border-white/15">
          Convergence vs Standard QCNN
        </div>
      </div>

      {/* High-Contrast Legend */}
      <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/5">
        <span className="text-red-400 font-bold flex items-center gap-1">
          <span className="w-2 h-0.5 bg-red-500" />
          Red Dashed: Standard QCNN Stalling
        </span>
        <span className="text-sky-300 font-bold flex items-center gap-1">
          <span className="w-2 h-0.5 bg-sky-400" />
          Blue Solid: MS-HQNet Rapid Convergence
        </span>
      </div>
    </div>
  ),

  // Column 1 Bottom: Real IEEE Paper Fig. 3 2D t-SNE Feature Clustering
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3 sm:p-3.5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <span className="text-[10px] sm:text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5 font-bold">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          t-SNE Clustering: 260 → 64 NCA Features
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">
          IEEE Paper Fig. 3
        </span>
      </div>

      {/* Real Screenshot from User's Research Paper */}
      <div className="relative flex-1 my-1.5 rounded-xl overflow-hidden bg-white border border-white/20 p-1 flex items-center justify-center group">
        <img
          src={getProjectImg('mshqnet_p3_img1_6.png')}
          alt="Fig. 3 t-SNE feature space before and after NCA"
          className="w-full h-full object-contain max-h-[110px] filter contrast-125"
          loading="lazy"
        />
        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-200 border border-white/15">
          (a) Raw Overlap vs (b) 6 Isolated Clusters
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/5">
        <span className="text-zinc-400">SM-SSA Temporal Deconstruction</span>
        <span className="text-purple-300 font-bold">6 Distinct Color Classes</span>
      </div>
    </div>
  ),

  // Column 2 Hero: Full System Pipeline Architecture + 99.17% Benchmark Showcase
  Col2Hero: () => (
    <div className="w-full h-full bg-[#08080C] p-4 sm:p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">MS-HQNet Multi-Stream Quantum Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30 font-semibold">
            IEEE TETCI Research
          </span>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
            99.17% SOTA
          </span>
        </div>
      </div>

      {/* Authentic Full System Architecture Diagram from User's Research Paper */}
      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
        {/* Full Architecture Diagram Plate */}
        <div className="md:col-span-6 rounded-2xl overflow-hidden bg-white border border-white/20 p-2 flex flex-col items-center justify-center relative shadow-lg">
          <img
            src={getProjectImg('mshqnet_p1_img1_42.png')}
            alt="MS-HQNet Full System Architecture Pipeline"
            className="w-full h-auto max-h-[145px] object-contain filter contrast-110"
            loading="lazy"
          />
          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-300 border border-white/10">
            Fig. 1: Full Architecture Pipeline
          </div>
        </div>

        {/* High-Contrast Benchmark Metrics Comparison with Red / Amber / Cyan */}
        <div className="md:col-span-6 space-y-1.5 text-xs">
          <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Baseline Comparison</span>
            <span className="text-amber-300 font-bold">5-Fold CV (600 Signals)</span>
          </div>

          <div className="flex justify-between items-center px-2 py-1 rounded bg-black/60 border border-red-500/30 text-red-300 text-[11px]">
            <span>Standard LSTM Baseline:</span>
            <span className="font-bold text-red-400">75.00%</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1 rounded bg-black/60 border border-amber-500/30 text-amber-200 text-[11px]">
            <span>Standard 1D-CNN Baseline:</span>
            <span className="font-bold text-amber-400">93.33%</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1 rounded bg-black/60 border border-sky-500/30 text-sky-200 text-[11px]">
            <span>Cubic SVM Baseline:</span>
            <span className="font-bold text-sky-300">97.50%</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1 rounded bg-black/60 border border-slate-700/40 text-slate-300 text-[11px]">
            <span>Standard Classical MLP:</span>
            <span className="text-slate-400">98.33%</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs font-bold shadow-[0_0_12px_rgba(16,185,129,0.25)]">
            <span className="text-emerald-300">MS-HQNet Hybrid Architecture:</span>
            <span className="text-emerald-400 text-sm">99.17% (SOTA)</span>
          </div>
        </div>
      </div>

      {/* KPI Matrix Table */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center text-[10px]">
        <div className="p-1.5 rounded-xl bg-black/60 border border-emerald-500/30">
          <span className="text-zinc-400 block text-[9px]">Peak Accuracy</span>
          <span className="font-bold text-emerald-400">99.17%</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-amber-500/30">
          <span className="text-zinc-400 block text-[9px]">F1-Score</span>
          <span className="font-bold text-amber-300">0.9917</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-sky-500/30">
          <span className="text-zinc-400 block text-[9px]">Quantum Circuit</span>
          <span className="font-bold text-sky-300">6 Qubits</span>
        </div>
        <div className="p-1.5 rounded-xl bg-black/60 border border-purple-500/30">
          <span className="text-zinc-400 block text-[9px]">NCA Feature Set</span>
          <span className="font-bold text-purple-300">64 Features</span>
        </div>
      </div>
    </div>
  ),
};

// 4. Customer Attrition Modeling: Data & Power BI Visuals with High-Contrast Red Alert
export const CustomerAttritionVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Database className="w-3.5 h-3.5 text-sky-400" />
          SQL ETL Pipeline & Telemetry
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
          7,000+ Records
        </span>
      </div>

      <div className="py-2 space-y-1.5 text-[11px]">
        <div className="p-2 rounded-lg bg-black/80 border border-white/10 text-zinc-300">
          Cleaned missing values, removed duplicate billing telemetry, and engineered RFM customer lifetime features.
        </div>
      </div>

      <div className="text-[9px] text-zinc-400 pt-2 border-t border-white/5 flex justify-between">
        <span>PostgreSQL & Python Cleaners</span>
        <span className="text-sky-300 font-semibold">Data Auditing Complete</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider font-bold">
          Hypothesis Testing & Validation
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
          p &lt; 0.05
        </span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-white/10">
          <span className="text-zinc-300">Chi-Square Statistical Test</span>
          <span className="text-sky-300 font-semibold">Contract Type Correlation</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-white/10">
          <span className="text-zinc-300">ANOVA Variance Test</span>
          <span className="text-amber-300 font-semibold">Monthly Charges Variance</span>
        </div>
      </div>

      <div className="text-[9px] text-zinc-400 pt-1">
        Validated critical features prior to supervised model training
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#08080C] p-4 sm:p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">Power BI Churn Analytics & Random Forest</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30 font-bold">
          80.0% Precision
        </span>
      </div>

      <div className="py-3 space-y-2.5">
        {/* Contrasting Red High-Risk Segment Alert */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-4 h-4 text-red-400" />
            <div>
              <span className="text-xs font-bold text-red-300 block">Identified Peak Attrition Cohort</span>
              <span className="text-[10px] text-red-400">Month-to-Month + Fiber Optic + Electronic Check</span>
            </div>
          </div>
          <span className="text-red-400 font-black text-base">42% Churn Peak</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/70 border border-emerald-500/30">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-300">Random Forest Classifier Precision</span>
          </div>
          <span className="text-emerald-400 font-bold text-sm">80.0% / ROC-AUC 0.84</span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Executive Dashboard: Power BI & Python</span>
        <span className="text-[#D6C3B0] font-semibold">Targeted Retention Strategy</span>
      </div>
    </div>
  ),
};

// 5. E-Commerce Value Maximization: Unsupervised ML & LTV Analytics Visuals
export const EcommerceVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          PCA Dimensionality Reduction
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
          85% Variance
        </span>
      </div>

      <div className="my-auto space-y-2">
        <div>
          <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
            <span>Principal Component 1 (PC1)</span>
            <span className="text-sky-300 font-bold">58% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[58%] h-full bg-sky-400 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
            <span>Principal Component 2 (PC2)</span>
            <span className="text-amber-300 font-bold">27% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[27%] h-full bg-amber-400 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] text-zinc-400 pt-1 border-t border-white/5">
        <span>Removed multi-collinear features</span>
        <span className="text-sky-300">Scikit-Learn & NumPy</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#0D0D12] p-3.5 sm:p-4 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5 font-bold">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          Hybrid DBSCAN + K-Means
        </span>
        <span className="text-[9px] text-emerald-400 font-bold">4 Distinct Cohorts</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        {/* Outlier noise flagged in contrasting red/coral */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-red-950/30 border border-red-500/30 text-red-200">
          <span className="font-semibold text-red-300">DBSCAN Noise Filter</span>
          <span className="text-red-400 font-bold">12% Margin Leakage Outliers</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
          <span className="font-semibold text-emerald-300">K-Means Customer Clusters</span>
          <span className="text-emerald-400 font-bold">Optimal Silhouette Score</span>
        </div>
      </div>

      <div className="text-[9px] text-zinc-400 pt-1">
        Segmented purchasing frequency, ticket size & recency
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#08080C] p-4 sm:p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">Power BI LTV Dashboard & A/B Testing</span>
        </div>
        <span className="text-[10px] text-sky-300 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/30 font-semibold">
          Sample Size Validated
        </span>
      </div>

      <div className="py-3 space-y-2.5">
        <div className="flex items-center justify-between p-3 rounded-xl bg-black/70 border border-amber-500/30">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-zinc-300">VIP High-LTV Shopper Segment</span>
          </div>
          <span className="text-amber-300 font-bold text-sm">Top 24% Generating 68% Revenue</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/70 border border-emerald-500/30">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-300">A/B Testing Retention Framework</span>
          </div>
          <span className="text-emerald-400 font-bold text-sm">+18.4% LTV Lift (p &lt; 0.05)</span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Executive BI: Power BI, Pandas & SQL</span>
        <span className="text-[#D6C3B0] font-semibold">Data-Driven Merchandising</span>
      </div>
    </div>
  ),
};
