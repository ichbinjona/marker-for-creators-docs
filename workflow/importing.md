# Importing Your Session

You've finished filming. Your markers are saved. Now it's time to bring everything into your editing software - and this is where the Companion App does the heavy lifting for you.

## The One-Click Import

1. Open the **Companion App** on your Mac or PC
2. Sign in with the same Marker account you used on your iPhone
3. Your sessions appear automatically in the sidebar
4. Click the **Play** button next to your session

That's it. Your editing software opens with markers in place and timelines ready.

→ [Learn more about the Companion App](/companion-app/)

## What Happens Behind the Scenes

When you click Play, the Companion App:

1. **Finds your footage** automatically by scanning your computer for video files that match your session's date and timecodes
2. **Matches each clip** to the correct position using timecode metadata
3. **Builds your project** with the correct resolution, framerate, and timeline structure
4. **Places your markers** directly onto the footage at the exact right positions
5. **Opens your editing software** with everything ready

## Automatic Footage Matching

The Companion App is smart about finding your footage:

- It scans **custom footage folders** you've configured first (fastest)
- It checks **previously used directories** - Companion learns where you keep your projects
- On Mac, it uses **Spotlight** to search your entire system by date range and file type
- It detects when **SD cards or external drives** are connected and scans them automatically

Supported video formats include MP4, MOV, MXF, AVI, MKV, BRAW, MTS, M2TS, M4V, R3D, and more.

### If Automatic Matching Doesn't Work

If the Companion can't find your footage automatically:

1. **Drag your footage folder** onto the sidebar (where the session list is)
2. Or use the **Select Folder** button in the matched footage section

The Companion reads the timecode metadata from each video file using ffprobe and matches it to your session.

::: tip
Make sure your **camera's date and time are set correctly**. The Companion uses the recording date to narrow down its search. If your camera clock is wrong, automatic matching may not find your files.
:::

## Manual Import via .marker Files

You can also share sessions as `.marker` files:

1. In the iPhone app, go to **Sessions**, long-press a session, and tap **Export**
2. Send the `.marker` file to your computer (AirDrop, email, cloud storage, etc.)
3. Drag the `.marker` file into the Companion App's sidebar

This is useful for collaboration - share a `.marker` file with your editor so they can import it on their own machine.

## Editing Software-Specific Notes

### DaVinci Resolve

**DaVinci Resolve Studio** users get true one-click import. Press Play and your project is created automatically via the Resolve Scripting API.

**DaVinci Resolve Free** requires one extra step: after pressing Play, go to **Workspace > Scripts > Allow Marker Companion Import** inside Resolve. This is due to a limitation in the free version that doesn't allow external scripts to run automatically.

You can choose between opening markers in a **new project** or importing into your **current project** in the Companion settings.

→ [DaVinci Resolve details](/companion-app/#davinci-resolve)

### Premiere Pro

Press Play - your project file is generated and opened in Premiere Pro automatically. The Companion creates a standard XML or OTIO sequence with your markers and footage in place.

→ [Premiere Pro details](/companion-app/#premiere-pro)

### Final Cut Pro

Press Play - an FCPXML bundle is created and opened in Final Cut Pro. You can choose between markers displayed as **subtitles** (shown in the viewer) or **native FCP markers** on clips.

Note that Final Cut Pro has limited marker color support. Marker uses four distinct purple-toned styles (Enchanted, Lavender, Midnights, Lilac) to differentiate your markers.

→ [Final Cut Pro details](/companion-app/#final-cut-pro)

---

## What's Next

Your project is open, your markers are in place. Time to edit.

→ [Learn about all the features you can use](/features/marker-types-and-presets)

→ [See example workflows for your content type](/example-workflows/)
