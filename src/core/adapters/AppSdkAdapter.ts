import { ZoomAdapter, ZoomStatus } from '../ZoomController';
import { UnsupportedActionError } from '../models/Errors';

export class AppSdkAdapter implements ZoomAdapter {
  name = 'app_sdk';
  async init(): Promise<void> {
    // TODO: Wire Zoom Meeting/App SDK here.
  }
  async getStatus(): Promise<ZoomStatus> {
    return { audioMuted: false, videoOn: false, inMeeting: false, role: 'unknown' };
  }
  async mute(): Promise<void> { throw new UnsupportedActionError(); }
  async unmute(): Promise<void> { throw new UnsupportedActionError(); }
  async toggleAudio(): Promise<void> { throw new UnsupportedActionError(); }
  async videoOn(): Promise<void> { throw new UnsupportedActionError(); }
  async videoOff(): Promise<void> { throw new UnsupportedActionError(); }
  async toggleVideo(): Promise<void> { throw new UnsupportedActionError(); }
  async leaveMeeting(): Promise<void> { throw new UnsupportedActionError(); }
  supportedActions(): string[] { return []; }
}
