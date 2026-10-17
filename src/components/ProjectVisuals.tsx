import React from 'react';
import { Activity, ShieldCheck, Database, Cpu, Wifi, CheckCircle2, ArrowRight, Layers, BarChart3, Lock, Zap, Clock, QrCode } from 'lucide-react';

// 1. ResiliNet: Decentralized 6G Social Protocol
export const ResiliNetVisuals = {
  // Column 1 Top: 4-Tier Social Urgency Taxonomy (SUT) Allocation
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F4ECE1]" />
          4-Tier Social Urgency Taxonomy
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
          DPI Port 104 Verified
        </span>
      </div>

      <div className="py-2 space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300 font-semibold">T1 Critical (τ=1.00)</span>
          <span className="text-[#F4ECE1]">DICOM Telesurgery · 800 Mbps (100%)</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300 font-semibold">T2 High (τ=0.75)</span>
          <span className="text-[#D7E2EA]">Heartbeat & Management · 120 Mbps (100%)</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300 font-semibold">T3 Medium (τ=0.50)</span>
          <span className="text-zinc-400">Enterprise & Web · 68 Mbps (100%)</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/60 border border-[#D6C3B0]/30">
          <span className="text-zinc-300 font-semibold">T4 Low (τ=0.25)</span>
          <span className="text-[#D6C3B0]">UDP Gaming · 360 → 144 Mbps (α=0.40)</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/5">
        <span>Tiers 1-3 strictly protected</span>
        <span className="text-[#F4ECE1] font-semibold">T4 Dynamic Compression</span>
      </div>
    </div>
  ),

  // Column 1 Bottom: M/M/1 Latency vs Utilization (Congestion Cliff)
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#F4ECE1]" />
          M/M/1 Congestion Cliff (ρ = 85%)
        </span>
        <span className="text-[10px] text-[#F4ECE1] font-bold">-89.8% Latency Drop</span>
      </div>

      <div className="space-y-2.5 my-auto">
        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>Blind QoS at 86% Load (Buffer Saturation)</span>
            <span className="text-zinc-400 font-semibold">365 ms (Failure)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[94%] h-full bg-zinc-600 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>ResiliNet Social Slice (α = 0.40 Compression)</span>
            <span className="text-[#F4ECE1] font-semibold">37 ms (Stabilized)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[18%] h-full bg-[#F4ECE1] rounded-full shadow-[0_0_12px_rgba(244,236,225,0.4)]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/5">
        <span>Little's Law: E[W] delay triples past 85%</span>
        <span className="text-[#D7E2EA]">Effective Load: 46.4%</span>
      </div>
    </div>
  ),

  // Column 2 Hero: Autonomous AI Sentinel & DePIN Staking Telemetry
  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4ECE1] animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">ResiliNet AI Sentinel & 3D Digital Twin</span>
        </div>
        <span className="text-[11px] text-[#D7E2EA] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
          Proof of Guardian (PoG) Web3
        </span>
      </div>

      {/* Real-time Sentinel event logs from paper */}
      <div className="space-y-1.5 py-3 text-xs">
        <div className="text-zinc-500">
          [10:00:01] 1Hz Telemetry: Bimodal morning rush breaches 85% safety ceiling (Peak: 97%).
        </div>
        <div className="text-[#D7E2EA]">
          [10:00:02] Deep Packet Inspection (DPI): Life-critical DICOM port 104 streams detected.
        </div>
        <div className="text-[#F4ECE1]">
          [10:00:03] Social Slice triggered: Tier 4 low-priority traffic compressed to α = 0.40.
        </div>
        <div className="text-zinc-400">
          [10:00:04] Smart Contract executed: +50 $RNET yield reward committed to yielding node.
        </div>
        <div className="text-white font-semibold">
          [10:00:05] Latency stabilized at 37ms (-89.8%). Packet loss: 0.00%. Critical TP: 800 Mbps.
        </div>
      </div>

      {/* KPI Matrix Table */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/10 text-center">
        <div className="p-2 rounded-xl bg-black/60 border border-white/5">
          <span className="text-[10px] text-zinc-500 block">Peak Latency</span>
          <span className="text-xs font-bold text-[#F4ECE1]">37 ms (-89.8%)</span>
        </div>
        <div className="p-2 rounded-xl bg-black/60 border border-white/5">
          <span className="text-[10px] text-zinc-500 block">Jitter</span>
          <span className="text-xs font-bold text-[#D7E2EA]">2.0 ms (-83.3%)</span>
        </div>
        <div className="p-2 rounded-xl bg-black/60 border border-white/5">
          <span className="text-[10px] text-zinc-500 block">Packet Loss</span>
          <span className="text-xs font-bold text-white">0.00% (-100%)</span>
        </div>
        <div className="p-2 rounded-xl bg-black/60 border border-white/5">
          <span className="text-[10px] text-zinc-500 block">DICOM Throughput</span>
          <span className="text-xs font-bold text-[#D6C3B0]">800 Mbps (100%)</span>
        </div>
      </div>
    </div>
  ),
};

// 2. Paradox: Concurrency & Database Locking Visuals
export const ParadoxVisuals = {
  // Column 1 Top: Row-Level Concurrency Control
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-[#F4ECE1]" />
          PostgreSQL Row-Level Locking
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
          Strict ACID
        </span>
      </div>

      <div className="py-2 space-y-1.5 text-[11px]">
        <div className="p-2 rounded-lg bg-black/70 border border-white/5 text-zinc-300">
          <span className="text-[#F4ECE1] font-semibold">SELECT</span> * FROM seats{' '}
          <span className="text-[#D6C3B0] font-semibold">WHERE</span> id = $1{' '}
          <span className="text-[#F4ECE1] font-semibold">FOR UPDATE</span>;
        </div>
        <p className="text-[10px] text-zinc-400 leading-snug">
          Serializes concurrent requests for identical seats, preventing simultaneous checkout collisions.
        </p>
      </div>

      <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/5 flex justify-between">
        <span>Neon Serverless PostgreSQL</span>
        <span className="text-white font-semibold">Zero Race Conditions</span>
      </div>
    </div>
  ),

  // Column 1 Bottom: 10-Minute Seat Hold TTL & Auto-Release
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#F4ECE1]" />
          Configurable TTL Hold Engine
        </span>
        <span className="text-[10px] text-[#F4ECE1] font-semibold">10-Min Expiry</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">Checkout Abandoned: Seat #B14</span>
          <span className="text-zinc-400">Auto-Released</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-[#F4ECE1]/20">
          <span className="text-zinc-300">Waitlist Head: User #904</span>
          <span className="text-[#F4ECE1] font-semibold">Claim Link Sent</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1 flex justify-between border-t border-white/5">
        <span>Real-time seat map synchronization</span>
        <span className="text-[#D7E2EA]">FIFO Waitlist Queue</span>
      </div>
    </div>
  ),

  // Column 2 Hero: Visual Seat Map & Cryptographic QR Ticket Dispatch
  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4ECE1] animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">Paradox Live Booking Matrix & QR Engine</span>
        </div>
        <span className="text-[11px] text-zinc-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
          Render API · Vercel App
        </span>
      </div>

      {/* Seat booking grid preview */}
      <div className="py-3">
        <div className="text-xs text-zinc-400 mb-2.5 flex items-center justify-between">
          <span>Venue Map: Standard (S1-S16) & Premium (P1-P8)</span>
          <span className="text-[#F4ECE1] text-[11px] font-semibold">Active Transaction Isolation</span>
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
                    ? 'bg-[#F4ECE1] text-black border border-white shadow-[0_0_12px_rgba(244,236,225,0.4)] animate-pulse'
                    : isBooked
                    ? 'bg-white/5 border border-white/10 text-zinc-500'
                    : isPremium
                    ? 'bg-[#D6C3B0]/15 border border-[#D6C3B0]/40 text-[#D6C3B0]'
                    : 'bg-white/10 border border-white/20 text-[#D7E2EA]'
                }`}
              >
                {isLocking ? 'HELD' : isPremium ? `P${i - 15}` : `S${i + 1}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* QR Confirmation Bar */}
      <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <QrCode className="w-4 h-4 text-[#F4ECE1]" />
          <span className="text-zinc-300">Ticket Encrypted QR: Ref #PDX-8941-CONFIRMED</span>
        </div>
        <span className="text-[#F4ECE1] font-semibold">Delivered via Email</span>
      </div>
    </div>
  ),
};

// 3. MS-HQNet: Multi-Stream Hybrid Quantum Framework Visuals
export const MSHQNetVisuals = {
  // Column 1 Top: 6-Qubit Quantum Circuit with Classical MLP Bypass
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#F4ECE1]" />
          6-Qubit Quantum Circuit + MLP Bypass
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
          Barren Plateau Proof
        </span>
      </div>

      {/* Quantum Wire Schematic */}
      <div className="py-2 space-y-1.5">
        {['|q0⟩', '|q1⟩', '|q2⟩', '|q3⟩'].map((wire, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="text-[#D7E2EA] font-bold">{wire}</span>
            <div className="flex-1 h-[1px] bg-[#D7E2EA]/30 relative flex items-center justify-around">
              <span className="w-4 h-4 rounded bg-black border border-[#D7E2EA] text-[8px] flex items-center justify-center text-white">
                Ry
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F4ECE1]" />
              <span className="w-4 h-4 rounded bg-black border border-[#D6C3B0] text-[8px] flex items-center justify-center text-[#D6C3B0]">
                Rz
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] text-zinc-500 pt-1 border-t border-white/5 flex justify-between">
        <span>Classical MLP: Mish + LayerNorm</span>
        <span className="text-[#D6C3B0]">Circular CNOT Entanglement</span>
      </div>
    </div>
  ),

  // Column 1 Bottom: SM-SSA & Temporal Amplitude Profiling
  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#F4ECE1]" />
          SM-SSA & Temporal Profiling
        </span>
        <span className="text-[10px] text-[#F4ECE1] font-semibold">260 → 64 NCA Features</span>
      </div>

      {/* Biological EMG/EOG Waveform */}
      <div className="py-2">
        <svg viewBox="0 0 200 40" className="w-full h-10 text-[#F4ECE1] stroke-current fill-none">
          <path
            d="M 0 20 Q 20 5, 40 20 T 80 20 T 100 5 T 120 35 T 140 10 T 160 25 T 200 20"
            strokeWidth="1.8"
          />
        </svg>
        <div className="flex justify-between text-[9px] text-zinc-400">
          <span>600 EOM Signals (120Hz, 2-Ch)</span>
          <span className="text-[#D6C3B0]">RMS · Waveform Length · MAV</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1 border-t border-white/5 flex justify-between">
        <span>Quantile Gaussian Normalization</span>
        <span className="text-[#D7E2EA]">6 Eye Movement Classes</span>
      </div>
    </div>
  ),

  // Column 2 Hero: Accuracy Benchmark Showcase & SOTA Baseline Comparison
  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4ECE1] animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">MS-HQNet SOTA Benchmark Evaluation</span>
        </div>
        <span className="text-[11px] text-[#D7E2EA] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
          IEEE TETCI Research
        </span>
      </div>

      {/* Accuracy Metric Showcase */}
      <div className="py-4 flex flex-col sm:flex-row items-center justify-around gap-6">
        <div className="text-center sm:text-left">
          <div className="text-4xl sm:text-5xl font-black text-[#F4ECE1] font-kanit">
            99.17<span className="text-[#D6C3B0]">%</span>
          </div>
          <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
            Average Testing Accuracy (5-Fold CV)
          </div>
        </div>

        <div className="w-full sm:w-auto space-y-1.5 text-xs">
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Standard LSTM Baseline:</span>
            <span className="text-zinc-500">75.00%</span>
          </div>
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Standard 1D-CNN:</span>
            <span className="text-zinc-500">93.33%</span>
          </div>
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Cubic SVM Baseline:</span>
            <span className="text-zinc-500">97.50%</span>
          </div>
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Standard MLP Baseline:</span>
            <span className="text-zinc-500">98.33%</span>
          </div>
          <div className="flex justify-between gap-6 text-white font-bold border-t border-white/10 pt-1">
            <span>MS-HQNet Hybrid Architecture:</span>
            <span className="text-[#F4ECE1]">99.17% (Top SOTA)</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Evaluated on 600 EOG/EMG Muscle Signals</span>
        <span className="text-[#D6C3B0] font-semibold">SHAP Feature Importance Verified</span>
      </div>
    </div>
  ),
};

// 4. Customer Attrition Modeling: Data & Power BI Visuals
export const CustomerAttritionVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-[#F4ECE1]" />
          SQL ETL Pipeline
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
          7,000+ Records
        </span>
      </div>

      <div className="py-2 space-y-1.5 text-[11px]">
        <div className="p-2 rounded-lg bg-black/70 border border-white/5 text-zinc-300">
          Cleaned missing values, removed duplicate billing telemetry, and engineered RFM features.
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/5 flex justify-between">
        <span>PostgreSQL & Python</span>
        <span className="text-[#D7E2EA]">Data Auditing Complete</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider">
          Hypothesis Testing
        </span>
        <span className="text-[10px] text-[#F4ECE1] font-semibold">p &lt; 0.05 Validated</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">Chi-Square Test</span>
          <span className="text-[#D7E2EA]">Contract Type Correlation</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">ANOVA Test</span>
          <span className="text-[#D6C3B0]">Monthly Charges Variance</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1">
        Guided retention decisions for customer-facing teams
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4ECE1] animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">Power BI Churn Analytics & Random Forest</span>
        </div>
        <span className="text-[11px] text-[#D7E2EA] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
          80% Accuracy
        </span>
      </div>

      <div className="py-4 space-y-3">
        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/10">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-4 h-4 text-[#D6C3B0]" />
            <span className="text-xs text-zinc-300">Identified Peak Churn Segment</span>
          </div>
          <span className="text-[#F4ECE1] font-bold text-sm">42% Attrition Rate</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/5">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D7E2EA]" />
            <span className="text-xs text-zinc-300">Random Forest Ensemble Accuracy</span>
          </div>
          <span className="text-white font-bold text-sm">80.0% Precision</span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Executive Dashboard: Power BI & Python</span>
        <span className="text-[#D6C3B0] font-semibold">Actionable Retention Strategy</span>
      </div>
    </div>
  ),
};

// 5. E-Commerce Value Maximization: Unsupervised ML & LTV Analytics Visuals
export const EcommerceVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#F4ECE1]" />
          PCA Dimensionality Reduction
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
          85% Variance
        </span>
      </div>

      <div className="my-auto space-y-2">
        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>Principal Component 1 (PC1)</span>
            <span className="text-[#D7E2EA] font-semibold">58% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[58%] h-full bg-[#D7E2EA] rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>Principal Component 2 (PC2)</span>
            <span className="text-[#D6C3B0] font-semibold">27% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[27%] h-full bg-[#F4ECE1] rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/5">
        <span>Reduced feature noise</span>
        <span className="text-[#D6C3B0]">NumPy & Scikit-Learn</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          Hybrid DBSCAN + K-Means
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold">4 Cohorts</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">DBSCAN Noise Filter</span>
          <span className="text-emerald-400">12% Outliers Reconciled</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">K-Means Customer Clusters</span>
          <span className="text-emerald-400">Optimal Silhouette Score</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1">
        Segmented purchasing frequency, ticket size & recency
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4ECE1] animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">Power BI LTV Dashboard & A/B Testing</span>
        </div>
        <span className="text-[11px] text-[#D7E2EA] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
          Sample Size Validated
        </span>
      </div>

      <div className="py-4 space-y-3">
        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/10">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-4 h-4 text-[#D6C3B0]" />
            <span className="text-xs text-zinc-300">High-LTV Shopper Segment</span>
          </div>
          <span className="text-[#F4ECE1] font-bold text-sm">Top 24% Generating 68% Revenue</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/5">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D7E2EA]" />
            <span className="text-xs text-zinc-300">A/B Testing Retention Framework</span>
          </div>
          <span className="text-[#F5F5F7] font-bold text-sm">p &lt; 0.05 Significance</span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Executive BI: Power BI, Pandas & SQL</span>
        <span className="text-[#D6C3B0] font-semibold">Data-Driven Merchandising</span>
      </div>
    </div>
  ),
};

