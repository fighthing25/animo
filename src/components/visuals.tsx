import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS} from '../../config';

export const PaperBackground: React.FC<{color?: string}> = ({color = COLORS.paper}) => (
  <AbsoluteFill style={{
    backgroundColor: color,
    backgroundImage: 'radial-gradient(rgba(24,33,31,.10) .7px, transparent .7px)',
    backgroundSize: '5px 5px',
  }} />
);

export const SceneLabel: React.FC<{children: React.ReactNode; dark?: boolean}> = ({children, dark = true}) => (
  <div style={{position: 'absolute', left: 112, top: 76, fontFamily: 'Arial, sans-serif', fontSize: 22,
    letterSpacing: 4, fontWeight: 700, textTransform: 'uppercase', color: dark ? COLORS.ink : COLORS.paper}}>
    {children}
  </div>
);

export const CameraFrame: React.FC<{children: React.ReactNode; zoom?: number}> = ({children, zoom = 1.04}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = Math.min(1, frame / Math.max(1, durationInFrames - 1));
  return <AbsoluteFill style={{overflow: 'hidden'}}>
    <AbsoluteFill style={{transform: `scale(${1 + (zoom - 1) * progress}) translate(${progress * -0.5}%, ${progress * -0.35}%)`}}>
      {children}
    </AbsoluteFill>
  </AbsoluteFill>;
};

export const PaperWipe: React.FC<{color?: string}> = ({color = COLORS.paper}) => {
  const frame = useCurrentFrame();
  const progress = Math.min(1, frame / 20);
  return <div style={{position: 'absolute', inset: 0, zIndex: 50, background: color,
    clipPath: `polygon(${100 - progress * 100}% 0, 100% 0, 100% 100%, ${100 - progress * 100}% 100%)`,
    pointerEvents: 'none'}} />;
};

export const KineticWord: React.FC<{text: string; top: number; left: number; delay?: number; size?: number; color?: string}> = ({text, top, left, delay = 0, size = 96, color = COLORS.ink}) => {
  const frame = useCurrentFrame();
  const t = Math.max(0, frame - delay);
  const y = t < 18 ? (1 - Math.min(1, t / 18)) * 70 : 0;
  const opacity = Math.min(1, t / 10);
  const rotate = t < 18 ? (1 - Math.min(1, t / 18)) * -5 : 0;
  return <div style={{position: 'absolute', left, top, color, fontFamily: 'Arial Black, Arial, sans-serif',
    fontSize: size, fontWeight: 900, letterSpacing: -4, lineHeight: .92, textTransform: 'uppercase',
    transform: `translateY(${y}px) rotate(${rotate}deg)`, opacity, textShadow: '2px 3px 0 rgba(24,33,31,.12)'}}>{text}</div>;
};
