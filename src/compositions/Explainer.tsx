import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {storyboard} from '../data/storyboard';
import {SceneOne} from '../scenes/SceneOne';
import {SceneTwo} from '../scenes/SceneTwo';
import {SceneThree} from '../scenes/SceneThree';
import {NarrationTrack} from '../components/audio/NarrationTrack';

export const Explainer: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#f1eadb'}}>
    <Sequence from={0} durationInFrames={storyboard[0].durationInFrames} name={storyboard[0].id}>
      <SceneOne />
    </Sequence>
    <Sequence from={150} durationInFrames={storyboard[1].durationInFrames} name={storyboard[1].id}>
      <SceneTwo />
    </Sequence>
    <Sequence from={300} durationInFrames={storyboard[2].durationInFrames} name={storyboard[2].id}>
      <SceneThree />
    </Sequence>
    <NarrationTrack />
  </AbsoluteFill>
);
