import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS} from '../../config';
import {KineticWord, PaperBackground, SceneLabel, PaperWipe} from '../components/visuals';

export const SceneThree: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const finish = spring({frame: frame - 15, fps, config: {damping: 13, stiffness: 80}});
  const orbit = interpolate(frame, [0, 150], [-8, 8], {extrapolateRight: 'clamp'});
  return <AbsoluteFill>
    <PaperBackground color={COLORS.ink} />
    <SceneLabel dark={false}>DESAIN KOTA ADALAH PILIHAN</SceneLabel>
    <div style={{position: 'absolute', left: 1270, top: 190, width: 400, height: 400, border: `3px solid ${COLORS.yellow}`, borderRadius: '50%', transform: `rotate(${orbit}deg) scale(${.8 + finish * .2})`}} />
    <div style={{position: 'absolute', left: 1420, top: 340, width: 110, height: 110, background: COLORS.coral, borderRadius: '50%', boxShadow: `0 0 0 28px ${COLORS.ink}, 0 0 0 31px ${COLORS.teal}`}} />
    <KineticWord text="NAUNGAN" left={130} top={280} delay={4} size={110} color={COLORS.paper}/>
    <KineticWord text="RUANG HIJAU" left={130} top={420} delay={13} size={86} color={COLORS.yellow}/>
    <KineticWord text="MATERIAL" left={130} top={545} delay={22} size={100} color={COLORS.coral}/>
    <div style={{position: 'absolute', left: 135, bottom: 105, width: 0, height: 8, background: COLORS.teal, transform: `scaleX(${finish})`, transformOrigin: 'left', width: 940}} />
    <div style={{position: 'absolute', right: 110, bottom: 75, color: COLORS.paper, fontFamily: 'Arial, sans-serif', fontSize: 19, letterSpacing: 3}}>ANIMO • TEMPLATE DEMO</div>
    <PaperWipe color={COLORS.coral} />
  </AbsoluteFill>;
};
