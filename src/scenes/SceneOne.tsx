import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';
import {COLORS} from '../../config';
import {PaperBackground, SceneLabel, PaperWipe} from '../components/visuals';

export const SceneOne: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rise = spring({frame: frame - 8, fps, config: {damping: 14, stiffness: 90}});
  const sunX = interpolate(frame, [0, 150], [1490, 1370], {extrapolateRight: 'clamp'});
  return <AbsoluteFill>
    <PaperBackground />
    <SceneLabel>ANIMO / KOTA & IKLIM</SceneLabel>
    <div style={{position: 'absolute', right: 235, top: 135, width: 210, height: 210, borderRadius: '50%', background: COLORS.coral,
      transform: `translateX(${sunX - 1370}px) scale(${.8 + rise * .2})`, boxShadow: '16px 18px 0 rgba(24,33,31,.12)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 380, background: COLORS.ink, clipPath: 'polygon(0 26%, 17% 26%, 17% 0, 34% 0, 34% 39%, 48% 39%, 48% 11%, 66% 11%, 66% 31%, 82% 31%, 82% 6%, 100% 6%, 100% 100%, 0 100%)'}} />
    <div style={{position: 'absolute', left: 110, top: 300, color: COLORS.ink, fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 116,
      lineHeight: .86, letterSpacing: -6, transform: `translateY(${(1 - rise) * 55}px)`, opacity: rise}}>
      KOTA<br/><span style={{color: COLORS.coral}}>MENYIMPAN</span><br/>PANAS
    </div>
    <div style={{position: 'absolute', right: 180, bottom: 88, color: COLORS.paper, fontFamily: 'Arial, sans-serif', fontSize: 20, letterSpacing: 3}}>SEBUAH EXPLAINER VISUAL</div>
    <PaperWipe color={COLORS.yellow} />
  </AbsoluteFill>;
};
