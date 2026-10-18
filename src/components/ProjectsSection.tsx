import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Activity,
  Cpu,
  Database,
  Layers,
  Clock,
  QrCode,
  AlertTriangle,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  Sparkles,
} from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { setActiveDrawerProject, webglState } from '../utils/webglState';
import { FadeIn } from './common/FadeIn';

const getProjectImg = (filename: string) => `${import.meta.env.BASE_URL}images/projects/${filename}`;

// 1. ResiliNet Bento Visuals (Empirical Latency + Queue Depth + Hero 4-Tier SUT Architecture)
const ResiliNetBento: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 w-full h-full items-stretch">
      {/* Left Column: Two Stacked Preview Cards */}
      <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
        {/* Top Preview: Figure 2 Latency vs Load */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-red-400">
              <Activity className="w-3.5 h-3.5" />
              M/M/1 Latency Cliff
            </span>
            <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 text-[9px] font-bold">
              ρ = 85% Cliff
            </span>
          </div>

          <div className="relative my-auto rounded-xl overflow-hidden bg-white/95 p-1 flex items-center justify-center shadow-md">
            <img
              src={getProjectImg('resilinet_fig2_latency.png')}
              alt="Fig. 2 Latency vs link utilization"
              className="w-full h-auto max-h-[110px] sm:max-h-[125px] object-contain filter contrast-125"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-zinc-400">Baseline: 365 ms</span>
            <span className="text-emerald-400 font-bold">ResiliNet: 37 ms (-89.8%)</span>
          </div>
        </div>

        {/* Bottom Preview: Figure 3 Throughput & Queue */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-sky-400">
              <Zap className="w-3.5 h-3.5" />
              Throughput Retention
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[9px] font-bold">
              0% Packet Loss
            </span>
          </div>

          <div className="relative my-auto rounded-xl overflow-hidden bg-white/95 p-1 flex items-center justify-center shadow-md">
            <img
              src={getProjectImg('resilinet_fig3_throughput.png')}
              alt="Fig. 3 Throughput curve"
              className="w-full h-auto max-h-[110px] sm:max-h-[125px] object-contain filter contrast-125"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-zinc-400">Load: 97% Morning Surge</span>
            <span className="text-sky-300 font-bold">100% Critical Throughput</span>
          </div>
        </div>
      </div>

      {/* Right Column: Large Full-Height Hero Visual */}
      <div className="md:col-span-7 h-[384px] sm:h-[444px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative group hover:border-white/20 transition-all">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            4-Tier Social Urgency Taxonomy (SUT) Pipeline
          </span>
          <span className="text-[10px] font-mono text-zinc-400">800 Mbps Protected</span>
        </div>

        {/* Priority Slices Visual */}
        <div className="space-y-2.5 my-auto">
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Tier 1: Life-Critical Emergency Telemetry (DICOM)
              </div>
              <div className="text-[10px] text-zinc-300">Unthrottled dedicated 6G network slice</div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300">100% Guaranteed</span>
          </div>

          <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-500/30 text-sky-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold">Tier 2 & 3: Mission-Critical Municipal Feeds</div>
              <div className="text-[10px] text-zinc-300">Traffic management & autonomous dispatch</div>
            </div>
            <span className="text-xs font-mono font-bold text-sky-300">Prioritized</span>
          </div>

          <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-red-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold">Tier 4: Recreational UDP Gaming & Video</div>
              <div className="text-[10px] text-zinc-300">Compressed by 60% (α = 0.40) during congestion</div>
            </div>
            <span className="text-xs font-mono font-bold text-red-400">Throttled</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10 text-center text-xs font-mono">
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Peak Latency</span>
            <span className="font-bold text-emerald-400">37 ms (-89.8%)</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Packet Loss</span>
            <span className="font-bold text-emerald-400">0.00%</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Jitter</span>
            <span className="font-bold text-purple-300">2.0 ms (-83%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Paradox Bento Visuals (Interactive Seat Mutex + Row-Level Locking SQL + Booking Pipeline)
const ParadoxBento: React.FC = () => {
  const [lockedSeat, setLockedSeat] = useState<number>(11);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 w-full h-full items-stretch">
      {/* Left Column: Two Stacked Preview Cards */}
      <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
        {/* Top Preview: Interactive Clickable Seat Mutex Simulator */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Interactive Seat Mutex
            </span>
            <span className="text-[9px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/25 font-bold">
              Click seat to test
            </span>
          </div>

          {/* Seat Grid */}
          <div className="grid grid-cols-8 gap-1 py-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const isBooked = [2, 5, 8, 9, 14, 18, 21].includes(i);
              const isLocking = i === lockedSeat;
              const isPremium = i >= 16;
              const seatLabel = isPremium ? `P${i - 15}` : `S${i + 1}`;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isBooked) setLockedSeat(i);
                  }}
                  disabled={isBooked}
                  className={`h-6 rounded flex items-center justify-center text-[9px] font-mono font-bold transition-all ${
                    isLocking
                      ? 'bg-red-600 text-white border border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] scale-105 z-10'
                      : isBooked
                      ? 'bg-white/5 border border-white/5 text-zinc-600 cursor-not-allowed'
                      : isPremium
                      ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300 hover:border-amber-400 hover:scale-105'
                      : 'bg-sky-950/40 border border-sky-500/30 text-sky-200 hover:border-sky-400 hover:scale-105'
                  }`}
                >
                  {isLocking ? 'LOCK' : seatLabel}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>Seat #{lockedSeat >= 16 ? `P${lockedSeat - 15}` : `S${lockedSeat + 1}`} Mutex</span>
            <span className="text-red-400 font-bold">Row-Locked</span>
          </div>
        </div>

        {/* Bottom Preview: SQL Row Lock Code Box */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-amber-300">
              <Database className="w-3.5 h-3.5" />
              PostgreSQL Atomic Lock
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
              ACID Serialized
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-black/80 border border-red-500/30 space-y-1 text-xs">
            <div className="text-zinc-200">
              <span className="text-red-400 font-bold">SELECT</span> * FROM seats{' '}
              <span className="text-amber-300 font-semibold">WHERE</span> id = {lockedSeat + 1}{' '}
              <span className="text-red-400 font-bold bg-red-500/20 px-1 py-0.5 rounded border border-red-500/30">
                FOR UPDATE
              </span>
              ;
            </div>
            <div className="text-[10px] text-zinc-400 leading-snug">
              Checkouts for the same seat run one at a time, so no seat is sold twice.
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400">
            <span>Neon DB Connection Pool</span>
            <span className="text-emerald-400 font-bold">Zero Race Conditions</span>
          </div>
        </div>
      </div>

      {/* Right Column: Large Full-Height Hero Visual */}
      <div className="md:col-span-7 h-[384px] sm:h-[444px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative group hover:border-white/20 transition-all">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] font-bold flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            10-Minute Hold TTL & Instant Cryptographic QR Dispatch
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">Live on Vercel</span>
        </div>

        {/* Interactive Architecture Timeline */}
        <div className="space-y-3 my-auto font-mono text-xs">
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-zinc-400 text-[10px] block">STEP 1: SEAT SELECTION</span>
              <span className="font-bold text-[#F5F5F7]">User Selects Seat & Claims Lock</span>
            </div>
            <span className="text-red-400 font-bold text-xs bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
              Mutex Acquired
            </span>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-zinc-400 text-[10px] block">STEP 2: TEMPORARY HOLD</span>
              <span className="font-bold text-amber-300">10-Minute Checkout Timer Starts</span>
            </div>
            <span className="text-amber-400 font-bold text-xs">Auto-Release on Expiry</span>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-zinc-400 text-[10px] block">STEP 3: TICKET DISPATCH</span>
              <span className="font-bold text-emerald-400">HMAC-Signed QR Code Generation</span>
            </div>
            <span className="text-emerald-400 font-bold text-xs flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" />
              Instant Email
            </span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10 text-center text-xs font-mono">
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Double Bookings</span>
            <span className="font-bold text-emerald-400">Zero (0)</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Lock Latency</span>
            <span className="font-bold text-sky-300">&lt; 15 ms</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Stack</span>
            <span className="font-bold text-amber-300">FastAPI & Neon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. MS-HQNet Bento Visuals (Barren Plateau Mitigation + SHAP Feature Importance + 6-Qubit Quantum Circuit)
const MSHQNetBento: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 w-full h-full items-stretch">
      {/* Left Column: Two Stacked Preview Cards */}
      <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
        {/* Top Preview: Figure 4 Convergence Plot */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-amber-400">
              <Cpu className="w-3.5 h-3.5" />
              Barren Plateau Mitigation
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[9px] font-bold">
              99.17% SOTA
            </span>
          </div>

          <div className="relative my-auto rounded-xl overflow-hidden bg-white/95 p-1 flex items-center justify-center shadow-md">
            <img
              src={getProjectImg('mshqnet_p4_img1_10.png')}
              alt="Fig. 4 Training and validation dynamics"
              className="w-full h-auto max-h-[110px] sm:max-h-[125px] object-contain filter contrast-125"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-red-400">Standard QCNN: Stalled</span>
            <span className="text-emerald-400 font-bold">MS-HQNet: 99.17%</span>
          </div>
        </div>

        {/* Bottom Preview: Figure 4b SHAP Beeswarm Feature Importance */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-purple-400">
              <Layers className="w-3.5 h-3.5" />
              SHAP Feature Importance
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[9px] font-bold">
              64 NCA Features
            </span>
          </div>

          <div className="relative my-auto rounded-xl overflow-hidden bg-white/95 p-1 flex items-center justify-center shadow-md">
            <img
              src={getProjectImg('mshqnet_p4_img2_11.png')}
              alt="Fig. 4b SHAP Feature Importance"
              className="w-full h-auto max-h-[110px] sm:max-h-[125px] object-contain filter contrast-125"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-zinc-400">600 EOG/EMG Biosignals</span>
            <span className="text-purple-300 font-bold">Amplitude RMS Dominant</span>
          </div>
        </div>
      </div>

      {/* Right Column: Large Full-Height Hero Visual */}
      <div className="md:col-span-7 h-[384px] sm:h-[444px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative group hover:border-white/20 transition-all">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            6-Qubit Quantum Circuit with Classical Mish Bypass
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">Benchmark Result</span>
        </div>

        {/* Quantum Circuit Architecture Image */}
        <div className="relative my-auto rounded-xl overflow-hidden bg-white/95 p-2 flex items-center justify-center shadow-md">
          <img
            src={getProjectImg('mshqnet_p1_img1_42.png')}
            alt="MS-HQNet Multi-Stream Quantum Circuit"
            className="w-full h-auto max-h-[210px] sm:max-h-[240px] object-contain filter contrast-125"
            loading="lazy"
          />
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/10 text-center text-xs font-mono">
          <div className="p-1.5 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[9px] text-zinc-400 block">LSTM</span>
            <span className="font-bold text-red-400 text-[11px]">75.0%</span>
          </div>
          <div className="p-1.5 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[9px] text-zinc-400 block">1D-CNN</span>
            <span className="font-bold text-amber-400 text-[11px]">93.3%</span>
          </div>
          <div className="p-1.5 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[9px] text-zinc-400 block">Cubic SVM</span>
            <span className="font-bold text-sky-300 text-[11px]">97.5%</span>
          </div>
          <div className="p-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300">
            <span className="text-[9px] block">MS-HQNet</span>
            <span className="font-bold text-emerald-400 text-[11px]">99.17%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Customer Attrition Bento Visuals (Hypothesis Testing + Random Forest + Executive BI Dashboard)
const CustomerAttritionBento: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 w-full h-full items-stretch">
      {/* Left Column: Two Stacked Preview Cards */}
      <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
        {/* Top Preview: Hypothesis Testing */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-sky-400">
              <Database className="w-3.5 h-3.5" />
              Hypothesis Validation
            </span>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 text-[9px] font-bold">
              p &lt; 0.05
            </span>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1.5 text-xs my-auto">
            <div className="flex justify-between items-center text-zinc-300">
              <span>Chi-Square Contract Test:</span>
              <span className="text-emerald-400 font-bold">Significant</span>
            </div>
            <div className="flex justify-between items-center text-zinc-300">
              <span>ANOVA Monthly Charges:</span>
              <span className="text-sky-300 font-bold">F = 184.2</span>
            </div>
            <p className="text-[10px] text-zinc-400 pt-1 border-t border-white/5">
              The tests point to tenure and billing method as the main churn drivers.
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400">
            <span>7,000+ Cleaned Records</span>
            <span className="text-emerald-400 font-bold">Tested</span>
          </div>
        </div>

        {/* Bottom Preview: Random Forest Classifier */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Supervised Classifier
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[9px] font-bold">
              0.84 ROC-AUC
            </span>
          </div>

          <div className="space-y-2 my-auto text-xs">
            <div className="flex justify-between items-center p-2 rounded-lg bg-black/60 border border-white/10">
              <span className="text-zinc-300">Model Precision:</span>
              <span className="text-emerald-400 font-bold">80.0%</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg bg-black/60 border border-white/10">
              <span className="text-zinc-300">Ensemble Estimators:</span>
              <span className="text-amber-300 font-bold">200 Trees</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400">
            <span>Scikit-Learn Pipeline</span>
            <span className="text-sky-300 font-bold">Early Warning</span>
          </div>
        </div>
      </div>

      {/* Right Column: Large Full-Height Hero Visual */}
      <div className="md:col-span-7 h-[384px] sm:h-[444px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] font-bold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            Executive Power BI Churn Spike & Cohort Retention Roadmap
          </span>
          <span className="text-[10px] font-mono text-red-400 font-bold">42% At-Risk Cohort</span>
        </div>

        {/* Churn Breakdown Visual Card */}
        <div className="my-auto space-y-3">
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-red-300">Month-to-Month Electronic Check Churn:</span>
              <span className="text-red-400 font-black text-lg">42% Peak Churn</span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
              The Power BI dashboard shows that 42% of subscriber loss comes from month-to-month contracts, compared with only 8% on 2-year contracts.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-300">Target Retention Campaign:</span>
              <span className="text-emerald-400 font-bold">Annual Contract Incentives</span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/80 overflow-hidden flex">
              <div className="w-[42%] h-full bg-red-500" title="At Risk" />
              <div className="w-[58%] h-full bg-emerald-500" title="Retained" />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span className="text-red-400">42% High-Risk Identified</span>
              <span className="text-emerald-400">58% Retained Base</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10 text-center text-xs">
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Records Cleaned</span>
            <span className="font-bold text-sky-300">7,000+ SQL</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">ROC-AUC</span>
            <span className="font-bold text-emerald-400">0.84 Score</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Deliverable</span>
            <span className="font-bold text-amber-300">Power BI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. E-Commerce Bento Visuals (SQL Data Audit + PCA Scree Plot + Hybrid DBSCAN / K-Means Hero)
const EcommerceBento: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 w-full h-full items-stretch">
      {/* Left Column: Two Stacked Preview Cards */}
      <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
        {/* Top Preview: SQL Data Audit */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-amber-300">
              <Database className="w-3.5 h-3.5" />
              SQL Data Quality Audits
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[9px] font-bold">
              Deduplication
            </span>
          </div>

          <div className="space-y-1.5 my-auto text-xs">
            <div className="p-2 rounded-lg bg-black/60 border border-white/10 flex justify-between">
              <span className="text-zinc-300">Duplicate Handling:</span>
              <span className="text-emerald-400 font-bold">100% Cleansed</span>
            </div>
            <div className="p-2 rounded-lg bg-black/60 border border-white/10 flex justify-between">
              <span className="text-zinc-300">Nulls Reconciled:</span>
              <span className="text-sky-300 font-bold">CTE Normalized</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400">
            <span>Relational Transactions</span>
            <span className="text-amber-300 font-bold">Clean Data</span>
          </div>
        </div>

        {/* Bottom Preview: PCA Scree Plot */}
        <div className="h-[185px] sm:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-4 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-bold flex items-center gap-1.5 text-sky-400">
              <Layers className="w-3.5 h-3.5" />
              PCA Variance Extraction
            </span>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 text-[9px] font-bold">
              85% Variance
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div>
              <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
                <span>PC1 (Purchase Frequency):</span>
                <span className="text-sky-300 font-bold">58%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
                <div className="w-[58%] h-full bg-sky-400 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
                <span>PC2 (Average Basket Size):</span>
                <span className="text-amber-300 font-bold">27%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden">
                <div className="w-[27%] h-full bg-amber-400 rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400">
            <span>2 Principal Components</span>
            <span className="text-emerald-400 font-bold">85% Total Explained</span>
          </div>
        </div>
      </div>

      {/* Right Column: Large Full-Height Hero Visual */}
      <div className="md:col-span-7 h-[384px] sm:h-[444px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181e] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative group hover:border-white/20 transition-all font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6C3B0] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Hybrid DBSCAN Outlier Filtration & K-Means 3D RFM Clusters
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">RFM Segmentation</span>
        </div>

        {/* Segmentation Breakdown Card */}
        <div className="space-y-3 my-auto text-xs">
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-bold text-amber-300">VIP High-LTV Shopper Cohort</div>
              <div className="text-[10px] text-zinc-300 font-sans">
                Top 24% of customers generate 68% of cumulative e-commerce revenue
              </div>
            </div>
            <span className="text-xs font-bold text-amber-400">68% GMV</span>
          </div>

          <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 text-red-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-bold text-red-300">DBSCAN Margin Leakage Outliers</div>
              <div className="text-[10px] text-zinc-300 font-sans">
                Filtered out 12% of data: unusual purchases with high returns and low margin
              </div>
            </div>
            <span className="text-xs font-bold text-red-400">12% Leakage Cut</span>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-zinc-300">
            <span>A/B Testing Framework:</span>
            <span className="text-emerald-400 font-bold">Retention Experiments</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10 text-center text-xs">
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Variance Kept</span>
            <span className="font-bold text-sky-300">85% PCA</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">Outlier Leakage</span>
            <span className="font-bold text-red-400">-12% Filtered</span>
          </div>
          <div className="p-2 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[10px] text-zinc-400 block">VIP Segment</span>
            <span className="font-bold text-emerald-400">68% Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Map each project ID to its respective Bento Visual Grid
const ProjectBentoSlot: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'resilinet':
      return <ResiliNetBento />;
    case 'paradox':
      return <ParadoxBento />;
    case 'ms-hqnet':
      return <MSHQNetBento />;
    case 'customer-attrition':
      return <CustomerAttritionBento />;
    case 'ecommerce-value-maximization':
    default:
      return <EcommerceBento />;
  }
};

interface ProjectTabProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ProjectTab: React.FC<ProjectTabProps> = ({ project, index, isActive, onClick }) => {
  // Unique accent color per project tab
  const getTabAccent = (idx: number) => {
    switch (idx) {
      case 0:
        return { dot: 'bg-sky-400', border: 'border-sky-400/50', text: 'text-sky-300' };
      case 1:
        return { dot: 'bg-amber-400', border: 'border-amber-400/50', text: 'text-amber-300' };
      case 2:
        return { dot: 'bg-purple-400', border: 'border-purple-400/50', text: 'text-purple-300' };
      case 3:
        return { dot: 'bg-red-400', border: 'border-red-400/50', text: 'text-red-300' };
      case 4:
      default:
        return { dot: 'bg-emerald-400', border: 'border-emerald-400/50', text: 'text-emerald-300' };
    }
  };

  const accent = getTabAccent(index);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border-t border-l border-r shrink-0 cursor-pointer ${
        isActive
          ? `bg-[#131317] text-white ${accent.border} shadow-[0_-4px_16px_rgba(0,0,0,0.5)] -mb-[1px] z-20 translate-y-[-2px]`
          : 'bg-[#0A0A0D]/70 text-zinc-400 border-white/10 hover:text-zinc-200 hover:bg-[#121216] translate-y-0'
      }`}
    >
      <span className={`w-2 h-2 rounded-full ${isActive ? `${accent.dot} animate-pulse shadow-[0_0_8px_currentColor]` : 'bg-zinc-600'}`} />
      <span className="font-bold text-[#F5F5F7]">{project.number}</span>
      <span className="opacity-90 font-medium">
        {project.id === 'resilinet'
          ? 'ResiliNet'
          : project.id === 'paradox'
          ? 'Paradox'
          : project.id === 'ms-hqnet'
          ? 'MS-HQNet'
          : project.id === 'customer-attrition'
          ? 'Churn Analytics'
          : 'E-Commerce RFM'}
      </span>
      {isActive && (
        <span className={`hidden md:inline text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 ${accent.text} border border-white/10 font-bold ml-1`}>
          OPEN
        </span>
      )}
    </button>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects = portfolioData.projects;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const touchStartX = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);

  const currentProject = projects[currentPage];

  const handlePageChange = (newIndex: number) => {
    if (newIndex === currentPage || newIndex < 0 || newIndex >= projects.length) return;
    setDirection(newIndex > currentPage ? 1 : -1);
    setCurrentPage(newIndex);
  };

  const handleNext = () => {
    if (currentPage < projects.length - 1) {
      handlePageChange(currentPage + 1);
    } else {
      handlePageChange(0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    } else {
      handlePageChange(projects.length - 1);
    }
  };

  // Keyboard navigation when modal is not open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (webglState.activeDrawerProject) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Subtle mouse wheel flipping with cooldown
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 450) return;
    if (Math.abs(e.deltaY) > 55) {
      if (e.deltaY > 0 && currentPage < projects.length - 1) {
        lastWheelTime.current = now;
        handlePageChange(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        lastWheelTime.current = now;
        handlePageChange(currentPage - 1);
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-3 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Perfectly Centered */}
        <div className="w-full text-center mb-10 sm:mb-14">
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-kanit font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mx-auto max-w-full">
              <span className="hero-heading">Featured</span>
              <span className="text-stroke-hollow">Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-3 max-w-xl mx-auto">
              Flip through the pages or click a tab to see how each project was built and what came out of it.
            </p>
          </FadeIn>
        </div>

        {/* The Notebook Binder Stage */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Top Index Tabs: Tabbed Binder Dividers */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar px-2 sm:px-6 z-10 relative">
            {projects.map((project, idx) => (
              <ProjectTab
                key={project.id}
                project={project}
                index={idx}
                isActive={idx === currentPage}
                onClick={() => handlePageChange(idx)}
              />
            ))}
          </div>

          {/* The Physical Notebook Outer Chassis */}
          <div
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-[#09090C] border border-white/15 p-2 sm:p-4 md:p-5 shadow-[0_32px_100px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Metallic Corner Rivets in the 4 corners of the binder */}
            <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-white/20 shadow-sm pointer-events-none z-30" />
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-white/20 shadow-sm pointer-events-none z-30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-white/20 shadow-sm pointer-events-none z-30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-white/20 shadow-sm pointer-events-none z-30" />

            {/* Inner Binder Stage: Left Spiral Spine + Turned Page */}
            <div className="relative flex w-full items-stretch min-h-[640px] md:min-h-[720px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-[#0D0D11]">
              
              {/* Left Ring Binder Spine */}
              <div className="w-10 sm:w-14 md:w-18 shrink-0 bg-[#07070A] border-r border-white/10 flex flex-col justify-around items-center py-6 sm:py-8 relative select-none z-20">
                {/* Dual Vertical Metallic Backbone Wire */}
                <div className="absolute top-4 bottom-4 w-1 bg-gradient-to-b from-zinc-700 via-zinc-500 to-zinc-700 rounded-full left-1/2 -translate-x-1/2 opacity-60 pointer-events-none" />

                {/* 8 Stamped Multi-Ring Binder Wire Loops */}
                {Array.from({ length: 8 }).map((_, rIdx) => (
                  <div key={rIdx} className="relative w-full flex items-center justify-center my-1.5">
                    {/* Punch Hole */}
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#030305] border border-white/15 shadow-[inset_0_2px_4px_rgba(0,0,0,0.95)] relative flex items-center justify-center">
                      {/* Curved Metallic Wire Loop */}
                      <div className="absolute -right-3.5 sm:-right-4 w-7 sm:w-8 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-600 shadow-[0_3px_6px_rgba(0,0,0,0.9)] border-t border-white/60 pointer-events-none z-30" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Crease Shadow Overlay directly to the right of the spine */}
              <div className="absolute left-10 sm:left-14 md:left-18 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none z-20" />

              {/* Stacked Sheet Depth Simulation on the Right Edge */}
              <div className="absolute right-0 top-3 bottom-3 w-2.5 sm:w-3 flex flex-col justify-between pointer-events-none z-20">
                <div className="h-full border-r border-white/5 mr-0.5" />
                <div className="h-full border-r border-white/10 mr-1" />
                <div className="h-full border-r border-white/15 mr-1.5" />
              </div>

              {/* The Active Notebook Page with 3D Page Turn Animation */}
              <div
                className="flex-1 relative overflow-hidden"
                style={{ perspective: 1400 }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject.id}
                    custom={direction}
                    variants={{
                      initial: (dir: number) => ({
                        rotateY: dir > 0 ? 24 : -24,
                        opacity: 0,
                        x: dir > 0 ? 30 : -30,
                        scale: 0.985,
                      }),
                      animate: {
                        rotateY: 0,
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                      },
                      exit: (dir: number) => ({
                        rotateY: dir > 0 ? -24 : 24,
                        opacity: 0,
                        x: dir > 0 ? -30 : 30,
                        scale: 0.985,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      }),
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ transformOrigin: 'left center' }}
                    className="w-full h-full bg-[#131317] p-4 sm:p-6 md:p-8 flex flex-col justify-between relative text-[#F5F5F7]"
                  >
                    {/* Engineering Blueprint Dot-Grid Texture */}
                    <div
                      className="absolute inset-0 opacity-[0.06] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                        backgroundSize: '18px 18px',
                      }}
                      aria-hidden="true"
                    />

                    {/* Classic Engineering Pad Red Margin Line on the left */}
                    <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-[1px] bg-red-500/25 pointer-events-none" />

                    {/* TOP PAGE ROW: Stamped Log Metadata + Pill Actions */}
                    <div className="pl-4 sm:pl-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
                      {/* Left: Stamped Technical Reference */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#D6C3B0] flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-emerald-400" />
                          <span>LOG ENTRY {currentProject.number} / 0{projects.length}</span>
                        </span>
                        <span className="text-zinc-600 hidden sm:inline">·</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 uppercase">
                          {currentProject.category}
                        </span>
                      </div>

                      {/* Right: Quick Action Links & Prominent Case Study Button */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        {currentProject.liveLink && (
                          <a
                            href={currentProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Launch Live Application"
                            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-[11px] font-mono uppercase tracking-wider transition-all"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {currentProject.github && (
                          <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View GitHub Code"
                            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-zinc-300 hover:border-white hover:text-white text-[11px] font-mono uppercase tracking-wider transition-all"
                          >
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}

                        {/* Standout Prominent Case Study Button */}
                        <button
                          onClick={() => setActiveDrawerProject(currentProject.id)}
                          type="button"
                          className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/25 to-white/10 hover:from-emerald-500/35 hover:to-white/20 border border-emerald-400/50 text-white hover:border-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.18)] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer group"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Open Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* PROJECT TITLE & HERO BANNER */}
                    <div className="pl-4 sm:pl-6 pt-3 pb-2 flex flex-wrap items-baseline justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-3 sm:gap-5">
                        <span
                          className="font-anton text-white/95 leading-none select-none tracking-tight block text-4xl sm:text-6xl md:text-7xl"
                        >
                          {currentProject.number}
                        </span>

                        <div className="space-y-0.5">
                          <h3 className="font-inter font-extrabold text-lg sm:text-2xl md:text-3xl text-white tracking-tight leading-snug">
                            {currentProject.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#D6C3B0] font-medium line-clamp-1">
                            {currentProject.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Headline Metric Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-bold text-white">{currentProject.headlineMetric}</span>
                      </div>
                    </div>

                    {/* CENTER BODY: Bento Visual Artifacts (Clicking opens case study) */}
                    <div
                      onClick={() => setActiveDrawerProject(currentProject.id)}
                      title="Click anywhere to inspect full case study"
                      className="pl-4 sm:pl-6 py-3 flex-1 cursor-pointer relative z-10"
                    >
                      <ProjectBentoSlot projectId={currentProject.id} />
                    </div>

                    {/* BOTTOM PAGE BAR: Stamped Sign-off & Page Flipping Controls */}
                    <div className="pl-4 sm:pl-6 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono relative z-10">
                      {/* Left: Stamped Author / Status */}
                      <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>AUTHOR: SHLOKE BINANI // VIT VELLORE</span>
                      </div>

                      {/* Center: Interactive Page Indicator Pips */}
                      <div className="flex items-center gap-1.5">
                        {projects.map((_, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => handlePageChange(pIdx)}
                            title={`Jump to Page 0${pIdx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              pIdx === currentPage
                                ? 'w-6 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                                : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Right: Tactile Page Flipper Controls */}
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline text-[10px] text-zinc-500 mr-1">
                          [ Use arrows or swipe ]
                        </span>

                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all flex items-center gap-1 text-[11px]"
                          title="Previous Page (Arrow Left)"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Prev</span>
                        </button>

                        <span className="text-[11px] font-bold text-[#F4ECE1] px-1">
                          0{currentPage + 1} / 0{projects.length}
                        </span>

                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all flex items-center gap-1 text-[11px]"
                          title="Next Page (Arrow Right)"
                        >
                          <span>Next</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

