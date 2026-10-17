import React, { useState } from 'react';
import { Activity, ShieldCheck, Database, Cpu, CheckCircle2, Lock, Clock, QrCode, AlertTriangle, Layers, BarChart3, Zap } from 'lucide-react';

const getProjectImg = (filename: string) => `${import.meta.env.BASE_URL}images/projects/${filename}`;

// 1. ResiliNet: Decentralized 6G Social Protocol
export const ResiliNetVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E0E14] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-white/10">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Activity className="w-3.5 h-3.5 text-red-400" />
          Empirical Result: M/M/1 Congestion Cliff
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 font-bold">
          ρ = 85% Cliff
        </span>
      </div>

      {/* Real Figure 2 Latency vs Link Utilization Curve from PDF */}
      <div className="relative my-2 rounded-xl overflow-hidden bg-white border border-white/20 p-1 flex items-center justify-center group shadow-md">
        <img
          src={getProjectImg('resilinet_fig2_latency.png')}
          alt="Fig. 2 End-to-end latency vs link utilization"
          className="w-full h-auto max-h-[140px] sm:max-h-[160px] object-contain filter contrast-125"
          loading="lazy"
        />
        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-200 border border-white/15">
          Empirical Latency vs Load
        </div>
      </div>

      {/* High-Contrast Legend */}
      <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/10">
        <span className="text-red-400 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-red-500" />
          Red: Blind QoS Failure (365 ms)
        </span>
        <span className="text-sky-300 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          Blue: ResiliNet (37 ms, -89.8%)
        </span>
      </div>

      {/* 4-Tier SUT Priority Allocation Breakdown */}
      <div className="py-2 space-y-1 text-[10px]">
        <div className="flex items-center justify-between px-2 py-1 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
          <span className="font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            T1 Life-Critical (DICOM)
          </span>
          <span className="font-bold text-emerald-300">800 Mbps (100% Protected)</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded bg-red-950/30 border border-red-500/30 text-red-200">
          <span className="font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            T4 Low Priority (UDP Gaming)
          </span>
          <span className="font-bold text-red-400">Compressed to α = 0.40 (144 Mbps)</span>
        </div>
      </div>

      {/* Verified KPI Matrix */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-black/60 border border-sky-500/30">
          <span className="text-zinc-400 block text-[9px]">Peak Latency</span>
          <span className="font-bold text-sky-300">37 ms (-89.8%)</span>
        </div>
        <div className="p-1.5 rounded-lg bg-black/60 border border-emerald-500/30">
          <span className="text-zinc-400 block text-[9px]">Packet Loss</span>
          <span className="font-bold text-emerald-400">0.00% (-100%)</span>
        </div>
        <div className="p-1.5 rounded-lg bg-black/60 border border-purple-500/30">
          <span className="text-zinc-400 block text-[9px]">Jitter</span>
          <span className="font-bold text-purple-300">2.0 ms (-83.3%)</span>
        </div>
      </div>
    </div>
  );
};

// 2. Paradox: High-Throughput Ticket Booking & Database Locking
export const ParadoxVisual: React.FC = () => {
  // Interactive seat state to allow users to click and test row-locking!
  const [lockedSeat, setLockedSeat] = useState<number>(11);

  return (
    <div className="w-full h-full bg-[#0E0E14] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-white/10">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-[#F4ECE1] font-bold">Interactive Seat Mutex Simulator</span>
        </div>
        <span className="text-[9px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/25 font-bold">
          Click any seat to lock
        </span>
      </div>

      {/* Live Seat Matrix */}
      <div className="py-2">
        <div className="text-[10px] text-zinc-300 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-sky-500/40 border border-sky-400" /> Standard (S1-S16)
            <span className="w-2 h-2 rounded bg-amber-500/30 border border-amber-400 ml-2" /> Premium (P1-P8)
          </span>
          <span className="text-red-400 font-bold text-[10px] flex items-center gap-1">
            <span className="w-2 h-2 rounded bg-red-600 animate-pulse" />
            Active Lock: Seat #{lockedSeat >= 16 ? `P${lockedSeat - 15}` : `S${lockedSeat + 1}`}
          </span>
        </div>

        <div className="grid grid-cols-8 gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => {
            const isBooked = [2, 5, 8, 9, 14, 18, 21].includes(i);
            const isLocking = i === lockedSeat;
            const isPremium = i >= 16;
            const seatLabel = isPremium ? `P${i - 15}` : `S${i + 1}`;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  if (!isBooked) setLockedSeat(i);
                }}
                disabled={isBooked}
                title={isBooked ? 'Already Sold' : isLocking ? 'Active Hold' : 'Click to Reserve'}
                className={`h-7 rounded-md flex items-center justify-center text-[10px] font-bold transition-all ${
                  isLocking
                    ? 'bg-red-600 text-white border-2 border-red-400 shadow-[0_0_14px_rgba(239,68,68,0.7)] animate-pulse scale-105 z-10'
                    : isBooked
                    ? 'bg-white/5 border border-white/10 text-zinc-600 cursor-not-allowed'
                    : isPremium
                    ? 'bg-amber-950/30 border border-amber-500/40 text-amber-300 hover:border-amber-400 hover:scale-105'
                    : 'bg-sky-950/30 border border-sky-500/30 text-sky-200 hover:border-sky-400 hover:scale-105'
                }`}
              >
                {isLocking ? 'LOCKED' : seatLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* SQL Atomic Row Lock Showcase */}
      <div className="p-2.5 rounded-xl bg-black/80 border border-red-500/30 space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">PostgreSQL Atomic Transaction</span>
          <span className="text-red-400 font-bold">Mutex Acquired</span>
        </div>
        <div className="text-[11px] text-zinc-200 font-mono">
          <span className="text-red-400 font-bold">SELECT</span> * FROM seats{' '}
          <span className="text-amber-300 font-semibold">WHERE</span> id = {lockedSeat + 1}{' '}
          <span className="text-red-400 font-bold bg-red-500/20 px-1 py-0.5 rounded border border-red-500/30">FOR UPDATE</span>;
        </div>
        <div className="text-[9px] text-zinc-400 leading-snug">
          Serializes concurrent requests for identical seats, completely preventing race conditions.
        </div>
      </div>

      {/* Bottom Status Row */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-amber-300">
          <Clock className="w-3.5 h-3.5" />
          <span>10-Minute Hold TTL Active</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <QrCode className="w-3.5 h-3.5" />
          <span>HMAC QR Dispatch on Payment</span>
        </div>
      </div>
    </div>
  );
};

// 3. MS-HQNet: Multi-Stream Hybrid Quantum Framework
export const MSHQNetVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E0E14] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-white/10">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          Empirical Result: Barren Plateau Mitigation
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
          600 Biosignals
        </span>
      </div>

      {/* Real Figure 4 Training and Validation Dynamics from PDF */}
      <div className="relative my-2 rounded-xl overflow-hidden bg-white border border-white/20 p-1 flex items-center justify-center group shadow-md">
        <img
          src={getProjectImg('mshqnet_p4_img1_10.png')}
          alt="Fig. 4 Training vs Validation Dynamics"
          className="w-full h-auto max-h-[140px] sm:max-h-[160px] object-contain filter contrast-125"
          loading="lazy"
        />
        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[8px] font-mono text-zinc-200 border border-white/15">
          Convergence vs Standard QCNN
        </div>
      </div>

      {/* High-Contrast Legend */}
      <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/10">
        <span className="text-red-400 font-bold flex items-center gap-1">
          <span className="w-2 h-0.5 bg-red-500" />
          Red: Standard QCNN Stalling
        </span>
        <span className="text-sky-300 font-bold flex items-center gap-1">
          <span className="w-2 h-0.5 bg-sky-400" />
          Blue: MS-HQNet Rapid Convergence
        </span>
      </div>

      {/* Baseline Comparison Bars */}
      <div className="py-2 space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-400">Standard LSTM Baseline:</span>
          <span className="font-bold text-red-400">75.00%</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-400">Standard 1D-CNN Baseline:</span>
          <span className="font-bold text-amber-400">93.33%</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-zinc-400">Cubic SVM Baseline:</span>
          <span className="font-bold text-sky-300">97.50%</span>
        </div>
        <div className="flex justify-between items-center px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-bold text-xs">
          <span>MS-HQNet Hybrid Architecture:</span>
          <span className="text-emerald-400">99.17% (SOTA)</span>
        </div>
      </div>

      {/* Architecture Badges */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-[10px]">
        <div className="p-1 rounded-lg bg-black/60 border border-amber-500/30">
          <span className="text-zinc-400 block text-[9px]">Quantum Circuit</span>
          <span className="font-bold text-amber-300">6 Qubits</span>
        </div>
        <div className="p-1 rounded-lg bg-black/60 border border-sky-500/30">
          <span className="text-zinc-400 block text-[9px]">Classical Bypass</span>
          <span className="font-bold text-sky-300">Mish MLP</span>
        </div>
        <div className="p-1 rounded-lg bg-black/60 border border-purple-500/30">
          <span className="text-zinc-400 block text-[9px]">Dominant Features</span>
          <span className="font-bold text-purple-300">64 NCA</span>
        </div>
      </div>
    </div>
  );
};

// 4. Customer Attrition Modeling: Data Science & ML
export const CustomerAttritionVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E0E14] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-white/10">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Database className="w-3.5 h-3.5 text-sky-400" />
          Power BI Churn & Random Forest
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
          80.0% Precision
        </span>
      </div>

      {/* High-Risk Churn Alert Card */}
      <div className="my-auto p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 shadow-md space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            Peak Churn Cohort Identified
          </span>
          <span className="text-red-400 font-black text-lg">42% Churn</span>
        </div>
        <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
          Exploratory analysis in Power BI proved subscribers on month-to-month contracts paying via electronic check churn at 42%, compared to under 8% for 2-year contracts.
        </p>
      </div>

      {/* Model & Validation Metrics */}
      <div className="space-y-2 py-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-white/10 text-xs">
          <span className="text-zinc-300">Random Forest Ensemble:</span>
          <span className="text-emerald-400 font-bold">80.0% Precision · 0.84 ROC-AUC</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-black/70 border border-white/10 text-xs">
          <span className="text-zinc-300">Hypothesis Testing:</span>
          <span className="text-sky-300 font-bold">Chi-Square & ANOVA (p &lt; 0.05)</span>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
        <span>7,000+ Records Cleaned in SQL</span>
        <span className="text-[#D6C3B0] font-semibold">Targeted Retention Roadmap</span>
      </div>
    </div>
  );
};

// 5. E-Commerce Value Maximization: Unsupervised ML & LTV Analytics
export const EcommerceVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E0E14] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-white/10">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="text-[11px] text-[#D6C3B0] tracking-wider uppercase flex items-center gap-1.5 font-bold">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          Unsupervised Clustering & LTV
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold">
          85% Variance
        </span>
      </div>

      {/* PCA Variance Extraction */}
      <div className="my-auto space-y-2.5">
        <div>
          <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
            <span>Principal Component 1 (PC1 - Purchasing Frequency)</span>
            <span className="text-sky-300 font-bold">58% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[58%] h-full bg-sky-400 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
            <span>Principal Component 2 (PC2 - Average Ticket Value)</span>
            <span className="text-amber-300 font-bold">27% Variance</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
            <div className="w-[27%] h-full bg-amber-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* DBSCAN & K-Means Cohort Card */}
      <div className="space-y-1.5 py-2 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-red-950/30 border border-red-500/30 text-red-200">
          <span className="font-semibold text-red-300">DBSCAN Outlier Filter:</span>
          <span className="text-red-400 font-bold">12% Margin Leakage Filtered</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-200">
          <span className="font-semibold text-amber-300">VIP Shopper Cohort:</span>
          <span className="text-amber-300 font-bold">Top 24% Generating 68% Revenue</span>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
        <span>NumPy, Scikit-Learn & SQL</span>
        <span className="text-emerald-400 font-semibold">A/B Testing Framework</span>
      </div>
    </div>
  );
};
