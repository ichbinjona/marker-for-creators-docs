# Session Management

Every recording session is saved automatically. Whether you shot 15 minutes or 8 hours, your markers, timelines, and settings are preserved and ready to share with your editor or import into the Companion App.

## Viewing Your Sessions

Open the **Sessions** tab to see all your recordings. Sessions are listed with their formatted name, date, number of markers, and duration.

Each session name follows a standard format:
`20260315-TOD-14300000 - Session 12`

This tells you the date (March 15, 2026), session type (Time of Day), start timecode (14:30:00.00), and session name.

## Editing Sessions

Tap a session to open its detail view. Here you can:

- **Review all markers** with their timecodes, colors, and notes
- **Edit marker notes** - tap a marker to add or change its note
- **Add markers** retroactively by tapping +
- **Delete markers** by swiping left
- **Undo/Redo** - up to 25 steps of undo history, persisted between app launches
- **Rename** the session
- **Change session type** - switch between Time of Day and Rec Run (all timecodes are recalculated automatically)
- **Override framerate** - change the framerate after recording
- **Override drop frame** - toggle drop frame notation
- **Override resolution** - change the resolution (Premiere Pro)

### Undo and Redo

Every edit you make to markers and timelines is tracked. Tap the undo or redo button in the toolbar to step backwards or forwards through your changes.

Undo history is saved to disk and persists for 5 days, so you can come back to a session later and still undo recent changes.

## Cloud Sync

Sessions sync automatically to all your devices via your Marker account:

- Finish recording on your iPhone - the session appears in the Companion App on your Mac within seconds
- Edit a note on your iPad - the change syncs to your iPhone and Companion App
- Delete a session - it's removed everywhere

Sync works in the background and supports offline use. Changes made while offline are queued and synced when you reconnect.

### Edit Lock

When you open a session on one device, it's locked for editing on other devices. This prevents conflicting changes.

- Other devices see a message showing who is editing and on which device
- Locks expire automatically after 30 minutes of inactivity
- You can override the lock with "Edit anyway" if needed

## Sharing Sessions

To share a session with your editor or another team member:

1. In the Sessions list, long-press a session and select **Share**, or tap the share button in the session detail view
2. A `.marker` file is generated containing all markers, timelines, and metadata
3. Share via AirDrop, email, Messages, cloud storage, or any other method

The recipient can drag the `.marker` file into the Companion App on their Mac or PC to import it.

### Batch Export

In edit mode (tap "Edit" in the Sessions list), you can select multiple sessions and share them all at once. Each session generates its own `.marker` file.

## Deleting Sessions

Long-press a session and select **Delete**, or use edit mode for batch deletion. Deleted sessions are removed from all synced devices.

::: warning
Session deletion is permanent and cannot be undone.
:::

---

**Next:** [Advanced Settings](/features/advanced-settings)
