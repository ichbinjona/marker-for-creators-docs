# Advanced Settings

Most settings in Marker work out of the box. These advanced options let you fine-tune the app for specialized workflows.

Go to **Settings > Advanced** to access these.

## Timeline Mode

Controls how timelines behave during recording.

| Mode | Behavior |
|------|----------|
| **Single** | One timeline active at a time. Switching activates the new one and deactivates the old one. |
| **Multi** | Multiple timelines active simultaneously. Toggle each independently. |
| **Tagger** | Tap to tag a moment. Timeline activates briefly and deactivates automatically. |

→ [Learn more about Timelines](/features/timelines-and-clips)

## Minimum Timeline Duration

Set the minimum length for timeline activations: **0s, 1s, 2s, or 3s** (default: 3s).

Activations shorter than this are automatically discarded when the session ends. This prevents accidental taps from creating tiny clips in your timeline.

Tagger Mode is exempt - tags are always kept regardless of duration.

## Display Frame Rate

Changes the framerate shown in the timecode display during recording. This is a display-only setting - the Companion App auto-detects the actual framerate from your footage.

Supported framerates: 23.976, 24, 25, 29.97, 30, 47.952, 48, 50, 59.94, 60 fps.

## Hide Marker Labels

When enabled, marker button labels are hidden during recording. The buttons still show their colors, but the text names are removed.

Useful if you want a cleaner recording screen or are filming your screen.

## Review Mode

Hides sensitive information like your email address from the app interface. Designed for creators who film their screen or show the app in videos, tutorials, and reviews.

## Legacy Export

Legacy Export is the **first-generation Marker workflow** - a manual process where marker files are exported directly from the iPhone app without the Companion App.

With Legacy Export enabled:
- **Timelines are disabled** (the third page of the recording screen is hidden)
- **Settings must be defined before shooting** - framerate, resolution, and format are baked into the export
- **No automatic footage matching** - you import the marker file manually into your editing software
- **No one-click import** - the seamless Play button workflow is not available

Legacy Export exists for specific edge cases where the Companion App's automatic workflow doesn't cover your setup - for example, workflows involving hardware like the Blackmagic ATEM Mini that already creates its own timeline files. For the vast majority of users, the **Companion App workflow is the recommended approach**.

### Legacy Settings

When Legacy Export is on, additional settings appear in **Settings > Recording Settings**:

- **Timeline Framerate** - set the export framerate manually
- **Drop Frame** - toggle drop frame timecode (NTSC framerates only, DaVinci Resolve and Final Cut Pro)
- **Resolution** - set the sequence resolution (Premiere Pro only)
- **Starting Timecode** - for Rec Run sessions in DaVinci Resolve: 01:00:00:00 or 00:00:00:00

---

**Next:** [Companion App](/companion-app/)
