# Companion App

The Companion App is where your markers meet your footage. It runs on your Mac or PC, connects to your editing software, and turns your marked session into a ready-to-edit project - with one click.

No more importing footage, building timelines, and manually placing markers. The Companion does it all.

## How It Works

1. **Sessions sync automatically** from your iPhone via your Marker account
2. **Footage is found automatically** by scanning your computer for matching video files
3. **Press Play** - your editing software opens with everything in place

## The Interface

The Companion App has a clean two-panel layout:

- **Sidebar** (left) - Lists all your sessions, newest first. Shows session name, date, marker count, and matched footage status.
- **Session Panel** (right) - Opens when you click a session. Shows all markers with colors, names, notes, and timecodes. Displays matched footage files.

## Pressing Play

The **Play button** is the core action. What happens depends on your editing software:

### DaVinci Resolve

**DaVinci Resolve Studio** - True one-click import. The Companion communicates directly with Resolve's scripting API via a Python bridge. Press Play and your project is created, footage is imported, timelines are built, and markers are placed - all automatically.

You can choose in Settings whether Play creates a **new project** or adds timelines to your **currently open project**.

**DaVinci Resolve Free** - One extra step required. Press Play and the Companion prepares your session data and installs a helper script. Then in Resolve, go to **Workspace > Scripts > Allow Marker Companion Import** to trigger the import. This extra step is needed because the free version of Resolve doesn't allow external scripts to run automatically.

### Premiere Pro

Press Play and the Companion generates an XML project file and opens it in Premiere Pro. Your footage is on the timeline with markers at the correct positions.

You can choose whether markers appear **on clips** or **on the sequence timeline** in Settings.

Premiere Pro 2026 and later uses the OpenTimelineIO (.otio) format instead of legacy XML.

### Final Cut Pro

Press Play and the Companion generates an FCPXML bundle and opens it in Final Cut Pro. You can choose between two marker display modes in Settings:

- **Subtitles** (default) - Markers appear as subtitle/caption text in the viewer, making them visible during playback
- **Native markers** - Markers appear as standard FCP markers on clips

Final Cut Pro uses four purple-toned marker styles (Enchanted, Lavender, Midnights, Lilac) since FCP doesn't support the full color range of DaVinci Resolve or Premiere Pro.

## Automatic Footage Matching

The Companion automatically finds your video files on your computer. Here's how:

### Fast Path (runs instantly)

1. **Cache** - If footage was matched before and the files still exist, the previous match is restored immediately
2. **Custom Footage Folders** - Folders you've configured in Settings are searched first (up to 6 levels deep)
3. **Learned Directories** - The Companion remembers where your footage has been found before and checks those directories first

### Background Path (runs in parallel)

4. **Spotlight** (Mac) - Searches your entire system using macOS file indexing, filtered by recording date and file type. Also searches cloud folders (Dropbox, Google Drive, OneDrive, iCloud Drive)
5. **Volume Scan** - Detects connected SD cards and external drives, scanning known camera folder structures (Sony, Canon, Blackmagic, RED, GoPro, DJI, Panasonic, and more)

On Windows, the Companion uses file system scanning instead of Spotlight.

### How Matching Works

The Companion reads each video file's embedded timecode and creation date using ffprobe. It compares these against your session's time range:

- Videos whose timecode range overlaps with your session are matched
- Videos whose creation date falls within your session period are matched as a fallback
- Multi-camera shoots are detected automatically when multiple cameras filmed simultaneously

### Supported Video Formats

MP4, MOV, MXF, AVI, MKV, BRAW, R3D, ARI/ARRI, MTS, M2TS, M4V, WebM, TS

### Manual Footage Import

If automatic matching doesn't find your files:

- **Drag a folder** onto the sidebar to scan it for videos
- **Drag video files** directly onto the sidebar
- The Companion reads metadata and matches them to your sessions

## Editing Markers in the Companion

You don't have to go back to your iPhone to fix a typo or add a missing marker. The Companion lets you edit everything:

- **Change marker colors** - Click the color dot to pick a new color
- **Edit names and notes** - Click the name or note field to edit inline
- **Delete markers** - Remove markers you don't need
- **Add markers** - Add new markers at specific timecodes

Edits to cloud-synced sessions sync back to your iPhone. Edits to locally imported (.marker file) sessions are saved locally.

## Converting Between Editing Softwares

Click the **software badge** in the session header (e.g., "DaVinci Resolve") to convert the session to a different editing software. Marker colors are automatically remapped to the closest available colors in the target software.

Useful when:
- Your cinematographer marks in DaVinci Resolve but your editor uses Premiere Pro
- You want to try the same edit in a different software
- A collaborator uses a different editor than you

## Session Settings

Each session has configurable settings in the header area:

- **Framerate** - Auto-detected from footage, manually overridable
- **Resolution** - Auto-detected, manually overridable
- **Drop Frame** - Toggle drop frame timecode for NTSC framerates

## The 3-Dot Menu

Each session has a menu with additional options:

- **Share** - Export as `.marker` file, or export a sequence file for any editing software (XML, FCPXML, EDL)
- **Reset** - Restore the session to its original imported state (only for imported sessions)
- **Delete** - Remove the session with confirmation

## Importing .marker Files

For sessions shared by collaborators or exported from the iPhone:

1. **Drag the .marker file** onto the sidebar
2. Or click **Browse** and select the file
3. The session appears in the sidebar and footage matching begins automatically

Re-importing a `.marker` file with the same session ID updates the existing session rather than creating a duplicate.

## App Settings

Open Settings from the app menu or sidebar.

### General

- **Default Resolution** - Applied to new sessions (default: 3840x2160)
- **Default Framerate** - Applied to new sessions (default: 25 fps)
- **Default Drop Frame** - Toggle for NTSC rates
- **File Naming** - Use session name or full formatted filename for exports

### Footage Folders

Add custom folders where you store your footage. These are searched first during automatic matching, making discovery faster.

### Per-Software Settings

**DaVinci Resolve:**
- Studio or Free mode (auto-detected)
- New Project or Current Project
- Remove gaps between clips
- Markers on clips or timeline

**Premiere Pro:**
- Remove gaps between clips
- Markers on clips or sequence

**Final Cut Pro:**
- Remove gaps between clips
- Subtitles or native markers

### Sync & Discovery

- **Suppress session sync** - Stop auto-syncing sessions from your iPhone
- **Suppress auto-discovery** - Stop automatic footage scanning
- **Suppress slow discovery** - Only search cache, custom folders, and learned paths (skip Spotlight and volume scans)

### Session Cleanup

- **Auto-cleanup period** - Automatically remove old sessions after 30 days, 90 days, 180 days, or 1 year
- **Delete empty sessions** - Remove sessions that never had footage matched

---

**Next:** [Example Workflows](/example-workflows/)
