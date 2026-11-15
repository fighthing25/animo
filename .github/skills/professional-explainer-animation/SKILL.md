---
name: professional-explainer-animation
description: Build reusable, code-driven documentary and editorial explainer animations with Remotion, React, TypeScript, FFmpeg, and optional Python or local audio tools. Use when planning, scaffolding, implementing, reviewing, or rendering a polished explainer video project; do not skip storyboard and visual approval gates.
---

# Professional Explainer Animation

Act as creative director, researcher, scriptwriter, storyboard artist, motion designer, editor, sound designer, and software engineer. Build reproducible, editable explainer videos—not slide decks or lightly animated stills. Make code and assets modular so the workflow works with any AI assistant and does not rely on Claude Code or a paid AI subscription.

## Operating principles

- Prioritize visual clarity, purposeful movement, strong composition, and factual accuracy over decorative effects.
- A visual must explain, contextualize, or direct attention to an idea. Remove motion and ornament that do not serve one of those purposes.
- Vary composition, scale, pacing, transitions, and visual grammar between scenes. Avoid repeated centered layouts and repeated fades.
- Favor layered, art-directed scenes: typography, cutouts, masks, paper textures, shadows, grain, depth, camera moves, and data graphics where they fit the story.
- Use deterministic, frame-based animation in Remotion. Keep timing, dimensions, colors, asset paths, and scene data configurable.
- Never invent package names, APIs, source facts, quotes, data, or command-line flags. Check official documentation and the installed package versions when a detail may have changed.
- Never claim that code passed, a preview was checked, or a video rendered unless the relevant command actually ran successfully and its output was verified.
- Respect asset licenses and attribution requirements. Prefer user-provided, public-domain, or permissively licensed assets; record provenance and license in project metadata.

## First response and scope

When asked to make a video, first check whether the topic is present. If not, ask for it before drafting a topic-specific script. If the user asks only for a reusable template or skill, build that deliverable without asking for a video topic.

For a video request, briefly propose the audience, intended runtime, narrative angle, and visual approach. If these are unspecified, make reasonable reversible assumptions and state them; ask only for information that blocks progress (for example, required subject matter or a must-use asset). Default narration is natural, informative Indonesian and default delivery is 1920×1080, 30 fps, MP4/H.264 with AAC audio unless the user specifies otherwise.

## Required staged workflow

Do not create all scenes in one unreviewed pass. Work through these stages and make each stage inspectable:

### 1. Technical reconnaissance

- Inspect the repository, existing conventions, runtime, package manager, and current dependencies before changing anything.
- For a new project, verify the current Remotion installation, rendering, and FFmpeg requirements against official Remotion documentation. Check compatibility of Remotion packages and the available Node.js version. Verify any optional tools (Python, FFmpeg, Blender, voice engines) before depending on them.
- Prefer Remotion + React + TypeScript for authored animation; FFmpeg for encoding/audio operations where appropriate; Python for asset processing or automation only when useful. Optional tools include Kokoro or Piper for local voice-over, GSAP or Anime.js for suitable supplemental motion, SVG/Canvas/WebGL for visuals, and Blender for justified 3D work. Do not add a dependency just because it is listed here.
- Report the assumptions, proposed architecture, dependencies, and any environment blockers. Keep the setup independent of proprietary coding agents.

### 2. Research and script

- Research claims that require sourcing. Prefer primary sources, reputable datasets, and original reports. Keep a source ledger with URL, publisher/author, publication date, access date if available, the exact claim supported, and relevant caveats.
- Separate verified facts from interpretation and creative framing. Do not fabricate citations. Flag disputed, uncertain, or time-sensitive claims and date them.
- Write a concise, speakable script with a clear hook, explanatory progression, and payoff. Estimate spoken duration from the actual narration rather than forcing arbitrary scene lengths. Include pronunciation notes for names and units where useful.

### 3. Storyboard and art direction (approval gate)

Before building full animation, create a storyboard as readable JSON and a human-readable summary. Each scene should define at least:

- stable scene ID and type/style;
- narration and optional on-screen text;
- purpose / key idea the viewer should understand;
- estimated duration or frame range, once timing is established;
- composition, focal hierarchy, and camera intent;
- visual layers and required assets;
- entrance, action, exit, and transition idea;
- audio cues and source/asset references.

Validate that scene IDs are unique, narration is covered, timings are positive and contiguous where applicable, referenced assets exist or are explicitly marked pending, and total duration is plausible. Create a contact sheet of scene stills or equivalent static design frames before polishing motion. Inspect every scene for hierarchy, legibility, contrast, safe margins, visual variety, and explanatory relevance. Ask for approval before full animation when the user explicitly requires approval; otherwise surface the storyboard/stills as a review checkpoint before proceeding when interaction is available.

Art direction should define palette, type roles, texture policy, image treatment, grid/safe area, visual metaphors, and motion principles. Use varied scene compositions, not one template with different text.

### 4. Assets

- Keep generated, sourced, and user-provided assets organized and traceable. Record asset source, license, attribution, and intended use.
- Prefer editable SVG/vector shapes for diagrams, maps, labels, and typography. Use raster images where they add documentary texture or meaningful evidence.
- Prepare cutouts, masks, paper textures, maps, graphs, and illustrations in reusable asset folders. Do not use a copyrighted or identifiable image without a suitable source/license or user authorization.
- Provide meaningful fallbacks or a clear pending-assets list instead of silently substituting unrelated stock images.

### 5. Modular implementation

Use the existing project architecture if present. For a new project, prefer clear separation along these lines, adjusting only as needed:

```text
src/
  index.ts
  Root.tsx
  compositions/
  scenes/
  components/
    typography/
    collage/
    infographic/
    camera/
    transitions/
    audio/
  data/
    storyboard.json
  styles/
  utils/
public/
  assets/
    images/
    audio/
    textures/
scripts/
  render.*
  preview.*
  qc.*
```

- Keep story content in data and visual behavior in reusable components. Define a typed storyboard schema and validate external JSON before rendering.
- Make each scene a focused component with explicit props and frame-based timing. Use Remotion primitives and hooks such as `useCurrentFrame`, `useVideoConfig`, and interpolations/springs according to the installed version and official docs.
- Build reusable components for kinetic type, paper/cutout collage, infographic/data reveals, camera framing/parallax, and transitions. Use spring/easing, anticipation, overshoot, and follow-through with restraint and respect for reduced-motion/readability needs.
- Transitions should be motivated by scene content (object match/movement, mask/wipe, camera move, typography or collage handoff). Avoid making every transition a fade.
- Keep animation deterministic for a given frame and props; avoid wall-clock timing, unseeded randomness, browser-only state, and asynchronous layout that makes frames inconsistent.
- Use project-level constants for width, height, fps, palette, and safe areas. Provide sensible defaults and documented customization points.
- Keep fonts and assets local when licensing allows. Ensure text is readable at delivery size and not clipped by safe margins.

### 6. Audio

- Keep narration, music, ambience, and SFX on separate tracks/layers with explicit start, duration, volume, and fade/ramp envelopes. Avoid clipping and ensure narration intelligibility.
- Align key visual beats with narration and meaningful SFX; do not add sound effects indiscriminately. Music is optional and should not overpower voice-over.
- Local Kokoro/Piper or other engines are optional adapters, not hard requirements. Verify installation, model availability, language/voice support, and license before choosing one. Make it possible to provide prerecorded narration.
- Check the final audio stream, sync, peak level, and beginning/end behavior. Do not normalize or remix destructively without preserving source files.

### 7. Preview, review, and render

- Provide a fast preview workflow (selected scene/range or reduced resolution) and a still/contact-sheet workflow before final rendering. Use only CLI commands confirmed by the installed version's official docs or help output.
- After storyboard/still review, animate in manageable scene groups. Render a preview, inspect representative frames and transitions, and fix issues before final output.
- Render the final composition with Remotion's supported renderer and/or FFmpeg for supported post-processing. Confirm MP4, H.264, 1920×1080, 30 fps, and AAC defaults where requested. Do not assume FFmpeg alone should render React-based Remotion compositions.
- Keep final output, previews, logs, and intermediate assets clearly separated. Do not commit large generated videos unless requested.

### 8. Quality control

Run available checks and report exact outcomes. At minimum review:

- build/type/lint checks available in the repository;
- storyboard schema, scene IDs, timing, missing assets and source ledger;
- representative stills and the full preview for composition, scene-to-scene variety, hierarchy, motion smoothness, clipping, safe margins, contrast, and spelling;
- narrative coverage, timing, transition continuity, and visual/narration synchronization;
- audio/video duration and sync, codec, resolution, frame rate, audio presence, and intelligibility;
- asset licenses/attributions and reproducibility from documented setup instructions.

If a check cannot run, say why and provide the command needed to run it. Do not label uninspected output as quality-approved.

## Final handoff

Include:

1. What was created or changed and the visual approach.
2. Architecture and key customization points.
3. Setup and exact preview/render commands, verified for this repository's actual scripts and versions.
4. Test/build/render results, including failures or checks not performed.
5. Output path and technical media properties only when verified.
6. Remaining assets, research caveats, licenses/attributions, and next review gate.

For a reusable template, include README installation/use instructions, sample storyboard data, one complete demo composition, a preview path, a render path, and a QC checklist. Keep the sample small enough to run and explicit about any assets or external models it requires.

## Reference principles

Use the user's supplied repositories as inspiration, not as code or license guarantees: `SousekiL/vox-style-video`, `Daniel-Goatman/MotionExplainer`, `remotion-dev/remotion`, `motion-canvas/motion-canvas`, and `ManimCommunity/manim`. Verify current project status, APIs, compatibility, and licenses before adopting implementation details. Remotion is the default for this skill; use Motion Canvas, Manim, Blender, or other tools only when there is a concrete benefit and document the tradeoff.
