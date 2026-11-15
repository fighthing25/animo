# Animo — Explainer Animation Template

A reusable, code-driven editorial explainer starter built with Remotion, React, and TypeScript. It includes a three-scene Indonesian demo, layered vector compositions, frame-based motion, a JSON-compatible storyboard data module, an optional narration track, preview/render commands, and a QC helper. It needs no paid AI service, external images, or voice model to run.

> The demo's city-heat visuals are conceptual illustrations, not measured data. The narration is sample copy, not research-backed reporting. Replace it with sourced research before publishing a factual explainer.

## Requirements

- Node.js LTS and npm.
- A supported desktop OS and a working headless Chrome/Chromium environment for Remotion rendering. Review the current [Remotion system requirements](https://www.remotion.dev/docs/requirements) if rendering setup fails.
- Python 3 for the optional storyboard QC script.

Remotion packages use the 4.x major range; `npm install` resolves compatible package releases and creates `package-lock.json`. Commit the lockfile for reproducible installs after setup.

## Install and preview

```bash
npm install
npm run studio
```

Open the Remotion Studio URL printed by the command and select `Explainer`. Preview is 1920×1080 at 30 fps and 15 seconds long. No audio is included by default.

## Run the demo checks and render

```bash
npm run qc
npm run render:preview
npm run render
```

Outputs are written to `out/preview.mp4` and `out/demo.mp4`. The preview renders at half scale. The full command requests H.264 video and AAC audio; the demo contains no audio track unless you enable narration. Check command output and inspect the resulting file before treating a render as successful. The repository has not been executed in this authoring environment.

## Project map

```text
src/
  Root.tsx                   Remotion composition registration
  config.ts                  Output dimensions, frame rate, palette
  data/storyboard.ts         Typed sample storyboard and narration
  compositions/Explainer.tsx Scene sequencing
  scenes/                    Independent scene artwork and motion
  components/visuals.tsx     Reusable paper, typography, wipe, camera helpers
  components/audio/          Optional voice-over track
scripts/qc.py                Lightweight storyboard data checks
```

## Customize

- Update `src/data/storyboard.ts` with your own scene IDs, narrative, visual purpose, and asset notes. Keep the executable composition timing in sync with scene durations.
- Change `VIDEO` and the Remotion composition duration together when changing resolution, fps, or total runtime.
- Edit each scene in `src/scenes/`. Components use Remotion's frame clock, so motion remains deterministic when rendering individual frames.
- Add licensed or user-owned files under `public/assets/`; reference public files with `staticFile('assets/...')`.
- To include prerecorded narration, place the audio file in `public/assets/audio/`, set `NARRATION_FILE` in `src/components/audio/NarrationTrack.tsx` to its relative path under `public/`, and adjust the storyboard/scene timing to match. Music and SFX should be separate tracks with explicit timing and levels.
- Keep an asset ledger (source URL, creator, license, attribution, and intended use) alongside added third-party assets.

## Staged production and QC checklist

1. Research claims; save a source ledger and mark uncertain or time-sensitive facts.
2. Write narration and a storyboard before expanding into full animation.
3. Review a still/contact sheet for every scene: hierarchy, contrast, readable type, safe margins, distinct composition, and explanatory purpose.
4. Approve visual direction, then animate in scene-sized passes; use motivated transitions instead of repeating fades.
5. Render a low-resolution preview and inspect scene boundaries, motion, clipping, typography, and narration sync.
6. Run type/build checks, `npm run qc`, then the final render. Re-open the MP4 and verify duration, resolution, fps, codec, and audio using an available media inspector such as `ffprobe`.
7. Check audio intelligibility/peaks, spelling, licenses/attributions, and delivery settings before publishing.

`npm run qc` checks basic storyboard IDs, positive durations, required fields, and total-frame consistency. It does not validate factual research, inspect rendered frames, verify asset rights, or measure audio quality; those require human review and additional tooling.
