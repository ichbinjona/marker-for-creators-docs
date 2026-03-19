# Troubleshooting

## Markers Are Misaligned with Footage

**Your camera's timecode doesn't match your phone's clock.**

This is the most common issue. If your camera's time-of-day timecode is off by even a few seconds, all markers will be shifted.

**Fix:**
1. Check your camera's date and time settings
2. Set the timecode mode to **Time of Day** (sometimes called "Free Run" or "Clock")
3. Verify the camera's clock matches your phone exactly
4. Use the camera setup guide: **Settings > How to setup your camera**

→ [Camera Setup Guide](/features/camera-setup)

---

## Companion App Can't Find My Footage

**The Companion scans for video files by date range and timecode. If it can't find them:**

1. **Are your files on this computer?** The Companion can only find files on connected drives. If footage is on an SD card, connect it first.
2. **Is the camera date correct?** The Companion narrows its search by recording date. If your camera's date was wrong, the files won't match.
3. **Try manual import:** Drag your footage folder directly onto the sidebar in the Companion App.
4. **Add a custom footage folder:** In Settings, add the folder where you keep your projects. The Companion will always search there first.

→ [Automatic Footage Matching](/companion-app/#automatic-footage-matching)

---

## DaVinci Resolve Free - Play Button Doesn't Work

**DaVinci Resolve Free doesn't allow external scripts to run automatically.**

After pressing Play in the Companion:
1. Open DaVinci Resolve
2. Go to **Workspace > Scripts > Allow Marker Companion Import**
3. The import will complete

Make sure you have the correct mode selected in Companion Settings: **DaVinci Resolve > Free**.

→ [DaVinci Resolve details](/companion-app/#davinci-resolve)

---

## Session Isn't Syncing to Companion

**Sessions sync via your Marker account. Check:**

1. You're signed in with the **same account** on both the iPhone app and the Companion App
2. Your computer has an **internet connection**
3. **Auto-sync is not suppressed** in Companion Settings

If a session still doesn't appear, export it as a `.marker` file from the iPhone app (Sessions > long-press > Share) and drag it into the Companion.

---

## Markers Show Wrong Timecodes

**Check these settings:**

1. **Session type mismatch:** If your camera is set to Time of Day but you started a Rec Run session (or vice versa), timecodes won't align. You can change the session type after recording in the session detail view.
2. **Framerate mismatch:** If the display framerate in the app doesn't match your footage framerate, timecodes will drift. The Companion auto-detects the correct framerate from your footage.
3. **Drop frame:** NTSC framerates (29.97, 59.94) can use drop frame or non-drop frame timecode. Make sure this matches between your camera, the Marker app, and your editing software.

---

## Apple Watch Doesn't Show Marker App

1. Make sure the Apple Watch app is installed (check the Watch app on your iPhone)
2. Both devices must be paired and in range
3. Start a session on the iPhone first - the Watch app activates when a session is running

---

## Edit Lock - Someone Else Is Editing

When another device has a session open for editing, your device shows an edit lock message.

- **Wait** for the other person to close the session
- **Edit anyway** to override the lock (the other device will become read-only)
- Locks expire automatically after **30 minutes** of inactivity

---

## App Shows "Content Locked"

Some features require a Marker subscription. Visit the app's subscription page to see available plans.

---

## Need More Help?

Contact support at [hello@markerforcreators.com](mailto:hello@markerforcreators.com)
