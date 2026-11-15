import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS} from '../../config';
import {PaperBackground, SceneLabel, PaperWipe} from '../components/visuals';

export const SceneTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const reveal = spring({frame: frame - 10, fps, config: {damping: 16, stiffness: 75}});
  const drift = interpolate(frame, [0, 150], [-35, 18], {extrapolateRight: 'clamp'});
  return <AbsoluteFill>
    <PaperBackground color="#e8dfce" />
    <SceneLabel>DUA LANSKAP, SATU KOTA</SceneLabel>
    <div style={{position: 'absolute', left: 120, top: 230, width: 760, height: 600, background: '#d3c7b1', transform: `rotate(-2deg) translateX(${drift}px)`, boxShadow: '0 28px 55px rgba(24,33,31,.18)'}} />
    <div style={{position: 'absolute', left: 150, top: 255, width: 710, height: 530, background: '#d95f49', clipPath: 'polygon(0 35%, 22% 35%, 22% 0, 46% 0, 46% 30%, 72% 30%, 72% 9%, 100% 9%, 100% 100%, 0 100%)', transform: `scale(${.92 + reveal * .08})`}} />
    <div style={{position: 'absolute', left: 1030, top: 230, width: 760, height: 600, background: '#b8c8a9', transform: `rotate(2deg) translateY(${(1 - reveal) * 90}px)`, boxShadow: '0 28px 55px rgba(24,33,31,.18)'}} />
    <div style={{position: 'absolute', left: 1090, top: 470, width: 520, height: 240, borderRadius: '50% 50% 4% 4%', background: COLORS.teal, transform: `scale(${reveal})`}} />
    {[0, 1, 2, 3, 4].map((i) => <div key={i} style={{position: 'absolute', left: 1120 + i * 105, top: 345 + (i % 2) * 25, width: 30, height: 300, background: COLORS.ink, transform: `rotate(${(i - 2) * 2}deg) scaleY(${reveal})`, transformOrigin: 'bottom'}} />)}
    <div style={{position: 'absolute', left: 170, top: 700, color: '#fff7e8', fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 62, transform: `translateY(${(1 - reveal) * 35}px)`}}>ASPAL</div>
    <div style={{position: 'absolute', left: 1090, top: 700, color: COLORS.ink, fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 54, transform: `translateY(${(1 - reveal) * 35}px)`}}>NAUNGAN</div>
    <div style={{position: 'absolute', left: 120, bottom: 90, fontFamily: 'Arial, sans-serif', fontSize: 23, color: COLORS.ink}}>ILUSTRASI KONSEPTUAL • BUKAN DATA PENGUKURAN</div>
    <PaperWipe color={COLORS.teal} />
  </AbsoluteFill>;
};
