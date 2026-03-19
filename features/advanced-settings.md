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

## YouTube Mode

Hides sensitive information like your email address from the app interface. Designed for creators who film their screen or show the app in videos and tutorials.

## Allow Screen to Sleep

By default, Marker keeps the screen awake during recording so you can always reach the marker buttons. Enable this setting if you want the screen to sleep normally during long recordings to save battery.

::: tip
If you're using the Apple Watch for marking, you can let the screen sleep since you're tapping markers from your wrist.
:::

## Legacy Export

Enables direct export of EDL, XML, or OTIO files from the iPhone app - without using the Companion App.

When Legacy Export is enabled:
- **Timelines are disabled** (the third page of the recording screen is hidden)
- Sessions export in the native format of your selected editing software
- Additional settings appear for framerate, resolution, and starting timecode

Legacy Export is available for users who don't want to use the Companion App or need a simpler workflow. However, you lose automatic footage matching, timeline support, and the one-click import that the Companion provides.

### Legacy Settings

When Legacy Export is on, additional settings appear in **Settings > Recording Settings**:

- **Timeline Framerate** - set the export framerate manually
- **Drop Frame** - toggle drop frame timecode (NTSC framerates only, DaVinci Resolve and Final Cut Pro)
- **Resolution** - set the sequence resolution (Premiere Pro only)
- **Export Format** - choose between OTIO or XML (Premiere Pro only)
- **Starting Timecode** - for Rec Run sessions in DaVinci Resolve: 01:00:00:00 or 00:00:00:00

---

**Next:** [Companion App](/companion-app/)
