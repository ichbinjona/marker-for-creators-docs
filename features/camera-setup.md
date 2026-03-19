# Camera Setup

Your markers are only as accurate as your camera's timecode. If your camera's clock is off by even a few seconds, every marker shifts - and your editor spends time re-aligning instead of editing.

Getting this right takes 2 minutes before your shoot. Skipping it can cost you hours later.

## Why Timecode Matters

When you set a marker in the Marker app, it's timestamped with the current time. When the Companion App imports your footage, it reads the timecode embedded in each video file. If both match, your markers land exactly where they should.

Two timecode systems are supported:

### Time of Day (TOD)

Your camera's timecode matches the actual clock time. If it's 2:30 PM, your camera's timecode reads 14:30:00:00. Marker also uses the clock time. Everything syncs automatically.

**Recommended for most shoots.** It's the simplest to set up and works reliably across multiple cameras.

### Rec Run

The timecode starts at a fixed value (typically 01:00:00:00 or 00:00:00:00) and counts up only while the camera is recording. Each clip starts where the previous one left off.

**Use this for single-camera shoots** where you're recording one continuous clip and want simpler timecodes.

::: tip
Time of Day is recommended unless you have a specific reason to use Rec Run. It's more forgiving with multi-camera setups and doesn't require precise start-time coordination.
:::

## Setting Up Your Camera

Marker includes step-by-step timecode setup guides for many popular cameras.

1. Go to **Settings > How to setup your camera**
2. Select your camera brand
3. Select your model
4. Follow the instructions to set your camera to Time of Day timecode

Guides are available for cameras from Sony, Canon, Panasonic, Blackmagic, ARRI, RED, Nikon, Fujifilm, GoPro, DJI, and more. The database is maintained by the community and updated regularly.

### Not Finding Your Camera?

If your camera isn't listed, the general principle is the same:

1. Go to your camera's **timecode settings**
2. Set the mode to **Time of Day** (sometimes called "Free Run" or "Clock")
3. Make sure the **date and time** are correct
4. Check that timecode persists after power-off (some cameras reset it)

## Daily Timecode Check

Camera clocks drift over time. Before each day of shooting, Marker shows a reminder to verify your camera's timecode is still accurate. A quick glance at your camera's timecode display compared to your phone's clock is enough.

If the timecode has drifted, re-sync it in your camera's settings.

## Session Types in Marker

When you start a new session, you choose between:

- **Time of Day** - Marker uses the current clock time as the timecode reference
- **Rec Run** - Marker uses a fixed starting timecode (configurable in Settings)

This must match your camera's timecode mode. If your camera is set to Time of Day, start a Time of Day session. If your camera is set to Rec Run, start a Rec Run session.

::: warning
If your Marker session type doesn't match your camera's timecode mode, your markers will not align with your footage. This is the most common cause of misaligned markers.
:::

---

**Next:** [Session Management](/features/session-management)
