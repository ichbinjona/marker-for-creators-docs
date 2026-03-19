# Recording & Marking

This is where the magic happens. You're on set, behind the camera, running the show. This guide covers everything about starting a session, setting markers, adding notes, and organizing your clips into timelines - all while you keep filming.

## Starting a Session

Open the Marker app and tap the red **Start Session** button. Choose your session type:

### Time-of-Day Mode

Uses real-world clock time as your timecode. This is the recommended mode for most workflows.

- Supports **multiple cameras and multiple video clips** per session
- Automatically syncs with your camera's timecode
- Works perfectly with the Companion App's auto-footage-matching

### Rec Run Mode

Counts up from 00:00:00. Use this only for **single-clip recordings** where you start Marker and your camera at the same time.

- Best for simple setups with one camera and one continuous recording
- Does not support automatic footage matching - you'll drag your clip into the Companion manually

::: tip
If you're unsure, choose **Time-of-Day**. It works in every scenario.
:::

---

## The Recording Screen

Once your session is active, you'll see a three-page horizontal view. Swipe left and right to navigate between them.

### Page 1: Marker Buttons (Center)

This is your main screen. Four large, colored marker buttons are ready to tap.

**Tap** a button to set a point marker at the current timecode.

**Hold** a button (press and hold for 1+ second) to create an **In/Out marker** - the in-point is set when you press down and the out-point when you release. A timer appears after 1.5 seconds showing how long you've held.

The button colors and names match your editing software:

- **DaVinci Resolve**: 16 colors (Red, Blue, Green, Yellow, Cyan, Pink, Purple, Fuchsia, Rose, Lavender, Sky, Mint, Lemon, Sand, Cocoa, Cream)
- **Premiere Pro**: 7 colors (Green, Red, Purple, Orange, Yellow, Blue, Turquoise)
- **Final Cut Pro**: 4 marker styles (Enchanted, Lavender, Midnights, Lilac)

::: info
Marker labels appear on the buttons for a few seconds after you open the app. You can hide them permanently in Advanced Settings.
:::

### Page 2: Marker History (Left)

Swipe left to see every marker you've set during this session in a live, scrollable list. Each marker shows its color, name, timecode, and any attached note.

You can:

- **Edit notes** directly on any marker by tapping the note field
- **Create a marker from the NoteBar** - when you focus the NoteBar on this page, a new marker is created instantly at the current timecode. Type your note, tap the checkmark to save.
- **Change the NoteBar marker color** using the color button on the left side of the NoteBar
- **Repeat the last NoteBar marker** by tapping the plus button
- **Customize the plus button** by long-pressing it - choose which button type the NoteBar uses by default

### Page 3: Timelines (Right)

Swipe right to access the timeline manager. This is one of Marker's most powerful features.

→ [Learn more about Timelines](/features/timelines-and-clips)

---

## The NoteBar

The NoteBar is the text input at the bottom of the screen. It works differently depending on which page you're on:

### On the Marker Buttons Page

Type a note, then:

- **Tap the left arrow** to attach the note to the **previous marker** you placed
- **Tap the right arrow** to attach the note to the **next marker** you will place

If the previous marker already has a note, you'll see a confirmation before overwriting it.

### On the Marker History Page

The NoteBar creates markers directly:

1. Tap the NoteBar to focus it - a new marker is created at the current timecode
2. Type your note
3. Tap the **checkmark** to save

Use the **color button** on the left to change the marker's color before saving.

The **plus button** repeats the last NoteBar marker (same color and type). Long-press the plus button to change which marker type it uses:

- A specific button (1, 2, 3, or 4)
- Last Set Marker (from any source)
- Last NoteBar Marker

### On the Timeline Page

- **Tap the plus button** to create a new timeline
- **Type a name and tap the checkmark** to create a named timeline

---

## The Timecode Header

The timecode header sits at the top of the screen on all pages. It shows:

- A **stop button** to end your session (with confirmation)
- A **recording indicator** (red dot + "Session Rec")
- Your **live timecode** - large and readable

In Time-of-Day sessions, tap the timecode to toggle between the current time-of-day and elapsed session duration.

Status messages appear briefly in the header when you add notes, activate timelines, or perform other actions.

---

## Stopping a Session

Tap the **stop button** in the timecode header. Confirm to end your session. Your session is saved locally and synced to the cloud automatically.

You can review and edit any past session by going to the **Sessions** tab and tapping on it.

---

## iPad Features

On iPad in landscape orientation, Marker shows a **side-by-side dual-page layout** with separate NoteBars for each visible page. This lets you see your marker buttons and your marker history (or timeline view) at the same time.

In portrait or narrow windows (Split View, Stage Manager), the iPad displays the same single-page layout as iPhone.

---

## Live Activity & Dynamic Island

While a session is running, Marker shows a Live Activity on your Lock Screen and in the Dynamic Island (on supported iPhones). The Live Activity displays:

- A recording indicator
- Your current timecode
- **Four marker buttons** - you can set markers directly from the Lock Screen

---

**Next:** [Importing Your Session](/workflow/importing)
