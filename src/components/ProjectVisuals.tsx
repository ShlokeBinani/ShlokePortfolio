import React from 'react';
import { Activity, ShieldCheck, Database, Cpu, Wifi, CheckCircle2, ArrowRight, Layers, BarChart3, Lock, Zap } from 'lucide-react';

// 1. ResiliNet: 6G Network Topology Visuals
export const ResiliNetVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          6G Mesh Topology
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          0% Packet Loss
        </span>
      </div>

      {/* SVG Network Graph */}
      <div className="relative py-2 flex items-center justify-around">
        <div className="flex flex-col items-center gap-1">
          <div className="w-9 h-9 rounded-xl bg-black border border-emerald-500/40 flex items-center justify-center text-xs text-[#F4ECE1] font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            N1
          </div>
          <span className="text-[9px] text-zinc-400">Source</span>
        </div>

        <div className="flex-1 flex flex-col items-center px-2">
          <div className="w-full h-[2px] bg-gradient-to-r from-emerald-500/50 via-emerald-400 to-emerald-500/50 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400 font-semibold">
              Dynamic Re-route
            </span>
          </div>
          <span className="text-[8px] text-zinc-500 mt-1">SUT Priority Bandwidth</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-9 h-9 rounded-xl bg-black border border-white/20 flex items-center justify-center text-xs text-zinc-300 font-bold">
            N2
          </div>
          <span className="text-[9px] text-zinc-400">Failover</span>
        </div>

        <div className="flex-1 flex flex-col items-center px-2">
          <div className="w-full h-[2px] bg-white/20" />
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-9 h-9 rounded-xl bg-black border border-white/20 flex items-center justify-center text-xs text-zinc-300 font-bold">
            N3
          </div>
          <span className="text-[9px] text-zinc-400">Sink</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/5">
        <span>Testbed: 3-Node Decentralized Mesh</span>
        <span className="text-[#D6C3B0]">Web3 DePIN Protocol</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider">
          Latency Benchmark
        </span>
        <span className="text-[10px] text-emerald-400 font-bold">-89.8% Latency Drop</span>
      </div>

      <div className="space-y-2.5 my-auto">
        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>Static Shortest Path (Baseline)</span>
            <span className="text-rose-400 font-semibold">142 ms (Heavy Loss)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[85%] h-full bg-rose-500/80 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>ResiliNet Autonomous Re-route</span>
            <span className="text-emerald-400 font-semibold">14.5 ms (0% Loss)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[15%] h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </div>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1">
        Simulated node failure recovery under burst traffic
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">ResiliNet 6G Simulation Console</span>
        </div>
        <span className="text-[11px] text-zinc-400 bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
          Python / SimPy Engine
        </span>
      </div>

      {/* Real-time routing log representation */}
      <div className="space-y-2 py-4 text-xs">
        <div className="text-zinc-500">
          [0.00s] Initializing 6G decentralized topology across 3 heterogeneous test nodes...
        </div>
        <div className="text-emerald-400/90">
          [0.12s] Node contention detected. Applying Social Urgency Taxonomy (SUT) heuristics.
        </div>
        <div className="text-[#D6C3B0]">
          [0.34s] DePIN smart contract initiated: Non-essential bandwidth yielded autonomously.
        </div>
        <div className="text-zinc-300">
          [0.48s] Simulated node dropout injected on Primary Link 1-2.
        </div>
        <div className="text-emerald-400 font-semibold">
          [0.51s] Autonomous failover converged in 31ms. 0 dropped packets. Route stabilized.
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-400">
          <span>Simulation Mode: Adversarial Knockout</span>
        </div>
        <span className="text-emerald-400 font-semibold">Status: Test Passed</span>
      </div>
    </div>
  ),
};

// 2. Paradox: Concurrency & Database Locking Visuals
export const ParadoxVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          Row-Level Locks
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
          PostgreSQL Strict
        </span>
      </div>

      <div className="py-2 space-y-1.5 text-[11px]">
        <div className="p-2 rounded-lg bg-black/70 border border-white/5 text-zinc-300">
          <span className="text-purple-400 font-semibold">SELECT</span> * FROM seats{' '}
          <span className="text-amber-400 font-semibold">FOR UPDATE</span>;
        </div>
        <p className="text-[10px] text-zinc-400 leading-snug">
          Serializes concurrent requests for identical seats to prevent double bookings.
        </p>
      </div>

      <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/5 flex justify-between">
        <span>Neon Serverless PostgreSQL</span>
        <span className="text-emerald-400">Zero Race Conditions</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider">
          ACID Waitlist Queue
        </span>
        <span className="text-[10px] text-cyan-400 font-semibold">Atomic Reallocation</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">User Cancels Seat #42</span>
          <span className="text-rose-400">Release Lock</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-cyan-500/20">
          <span className="text-zinc-300">Queue Head Notified</span>
          <span className="text-cyan-400 font-semibold">60s Hold Window</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1">
        Stateless backend deployed on Render with Vercel frontend
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">Paradox High-Concurrency Booking Matrix</span>
        </div>
        <span className="text-[11px] text-zinc-400 bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
          Stateless Architecture
        </span>
      </div>

      {/* Seat booking grid preview */}
      <div className="py-4">
        <div className="text-xs text-zinc-400 mb-2.5 flex items-center justify-between">
          <span>Row 4 Seat Availability: High Concurrency Load</span>
          <span className="text-emerald-400 text-[11px]">Race Prevention Active</span>
        </div>
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const isBooked = [2, 5, 8, 9, 14, 18, 21].includes(i);
            const isLocking = i === 11;
            return (
              <div
                key={i}
                className={`h-7 rounded-md flex items-center justify-center text-[10px] font-bold transition-all ${
                  isLocking
                    ? 'bg-amber-500/20 border border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)] animate-pulse'
                    : isBooked
                    ? 'bg-white/5 border border-white/10 text-zinc-500'
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                }`}
              >
                {isLocking ? 'LOCK' : i + 1}
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Serialized Checkouts: 100% Reliable</span>
        <span className="text-cyan-400 font-semibold">PostgreSQL ACID Guarantee</span>
      </div>
    </div>
  ),
};

// 3. MS-HQNet: Quantum Circuit & EMG Signal Visuals
export const MSHQNetVisuals = {
  Col1Top: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          6-Qubit Quantum Circuit
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
          QCNN Framework
        </span>
      </div>

      {/* Quantum Wire Schematic */}
      <div className="py-2 space-y-1.5">
        {['|q0⟩', '|q1⟩', '|q2⟩', '|q3⟩'].map((wire, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="text-purple-300 font-bold">{wire}</span>
            <div className="flex-1 h-[1px] bg-purple-500/30 relative flex items-center justify-around">
              <span className="w-4 h-4 rounded bg-black border border-purple-400 text-[8px] flex items-center justify-center text-white">
                Ry
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/5 flex justify-between">
        <span>Classical MLP Bypass</span>
        <span className="text-purple-300">Variational QCNN</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider">
          EMG Feature Extraction
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold">SM-SSA & NCA</span>
      </div>

      {/* Signal Waveform representation */}
      <div className="py-2">
        <svg viewBox="0 0 200 40" className="w-full h-10 text-emerald-400 stroke-current fill-none">
          <path
            d="M 0 20 Q 20 5, 40 20 T 80 20 T 100 5 T 120 35 T 140 10 T 160 25 T 200 20"
            strokeWidth="1.8"
          />
        </svg>
        <div className="flex justify-between text-[9px] text-zinc-500">
          <span>Biological Muscle Signal</span>
          <span className="text-emerald-400">Filtered & Encoded</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-500 pt-1">
        Predicting subtle eye movements across 600 EMG signals
      </div>
    </div>
  ),

  Col2Hero: () => (
    <div className="w-full h-full bg-[#0E0E13] p-6 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">MS-HQNet Benchmark Evaluation</span>
        </div>
        <span className="text-[11px] text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
          Research Co-Author
        </span>
      </div>

      {/* Accuracy Metric Showcase */}
      <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6">
        <div className="text-center sm:text-left">
          <div className="text-4xl sm:text-5xl font-black text-[#F4ECE1] font-kanit">
            99.17<span className="text-purple-400">%</span>
          </div>
          <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
            MS-HQNet Classification Accuracy
          </div>
        </div>

        <div className="w-full sm:w-auto space-y-2 text-xs">
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Cubic SVM Baseline:</span>
            <span className="text-zinc-500">88.40%</span>
          </div>
          <div className="flex justify-between gap-6 text-zinc-400">
            <span>Standard CNN:</span>
            <span className="text-zinc-500">92.15%</span>
          </div>
          <div className="flex justify-between gap-6 text-emerald-400 font-bold border-t border-white/10 pt-1">
            <span>MS-HQNet (6-Qubit + MLP):</span>
            <span>99.17% (Top)</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Evaluated on 600 EMG Biological Signals</span>
        <span className="text-purple-300 font-semibold">Outperformed Traditional ML Baselines</span>
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
          <Database className="w-3.5 h-3.5 text-blue-400" />
          SQL ETL Pipeline
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
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
        <span className="text-blue-400">Data Auditing Complete</span>
      </div>
    </div>
  ),

  Col1Bottom: () => (
    <div className="w-full h-full bg-[#111116] p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#D6C3B0] uppercase tracking-wider">
          Hypothesis Testing
        </span>
        <span className="text-[10px] text-amber-400 font-semibold">p &lt; 0.05 Validated</span>
      </div>

      <div className="my-auto space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">Chi-Square Test</span>
          <span className="text-emerald-400">Contract Type Correlation</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/60 border border-white/5">
          <span className="text-zinc-300">ANOVA Test</span>
          <span className="text-emerald-400">Monthly Charges Variance</span>
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
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-semibold">Power BI Churn Analytics & Random Forest</span>
        </div>
        <span className="text-[11px] text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
          80% Accuracy
        </span>
      </div>

      <div className="py-4 space-y-3">
        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-rose-500/20">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-4 h-4 text-rose-400" />
            <span className="text-xs text-zinc-300">Identified Peak Churn Segment</span>
          </div>
          <span className="text-rose-400 font-bold text-sm">42% Attrition Rate</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/5">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-300">Random Forest Ensemble Accuracy</span>
          </div>
          <span className="text-emerald-400 font-bold text-sm">80.0% Precision</span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
        <span>Executive Dashboard: Power BI & Python</span>
        <span className="text-blue-400 font-semibold">Actionable Retention Strategy</span>
      </div>
    </div>
  ),
};
