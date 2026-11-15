#!/usr/bin/env python3
"""Lightweight checks for the demo storyboard data."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOARD = ROOT / "src" / "data" / "storyboard.ts"
VIDEO_CONFIG = ROOT / "src" / "config.ts"


def main() -> int:
    text = BOARD.read_text(encoding="utf-8")
    config = VIDEO_CONFIG.read_text(encoding="utf-8")
    ids = re.findall(r"id:\s*'([^']+)'", text)
    durations = [int(value) for value in re.findall(r"durationInFrames:\s*(\d+)", text)]
    expected_match = re.search(r"durationInFrames:\s*(\d+)", config)
    errors = []

    if not ids:
        errors.append("No storyboard scene IDs found")
    if len(ids) != len(set(ids)):
        errors.append("Storyboard scene IDs must be unique")
    if len(durations) != len(ids):
        errors.append(f"Found {len(ids)} scenes but {len(durations)} durations")
    if any(duration <= 0 for duration in durations):
        errors.append("All scene durations must be positive")
    if not expected_match:
        errors.append("Could not read composition duration from src/config.ts")
    elif sum(durations) != int(expected_match.group(1)):
        errors.append(f"Scene durations total {sum(durations)} frames, config expects {expected_match.group(1)}")

    for required in ("style:", "purpose:", "narration:", "onScreenText:", "transition:", "assetNotes:"):
        if required not in text:
            errors.append(f"Missing required storyboard field: {required}")

    if errors:
        print("QC FAILED")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"QC passed: {len(ids)} unique scenes, {sum(durations)} frames total.")
    print("Note: this script does not inspect research, visuals, assets, audio, or rendered media.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
