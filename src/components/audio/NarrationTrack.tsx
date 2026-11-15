import React from 'react';
import {Audio, staticFile} from 'remotion';

/** Optional narration file. Leave null for a silent visual preview. */
const NARRATION_FILE: string | null = null;

export const NarrationTrack: React.FC = () => {
  if (!NARRATION_FILE) return null;
  return <Audio src={staticFile(NARRATION_FILE)} volume={0.95} />;
};
