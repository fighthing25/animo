import React from 'react';
import {Composition} from 'remotion';
import {Explainer} from './compositions/Explainer';
import {VIDEO} from './config';

export const Root: React.FC = () => (
  <Composition
    id="Explainer"
    component={Explainer}
    width={VIDEO.width}
    height={VIDEO.height}
    fps={VIDEO.fps}
    durationInFrames={VIDEO.durationInFrames}
  />
);
