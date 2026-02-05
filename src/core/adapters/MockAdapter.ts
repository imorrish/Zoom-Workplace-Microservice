import { ZoomAdapter, ZoomStatus } from '../ZoomController';

export class MockAdapter implements ZoomAdapter {
  name = 'mock';
  private state: ZoomStatus = { audioMuted: false, videoOn: true, inMeeting: true, role: 'attendee' };
  async init(): Promise<void> { /* no-op */ }
  async getStatus(): Promise<ZoomStatus> { return this.state; }
  async mute(): Promise<void> { this.state.audioMuted = true; }
  async unmute(): Promise<void> { this.state.audioMuted = false; }
  async toggleAudio(): Promise<void> { this.state.audioMuted = !this.state.audioMuted; }
  async videoOn(): Promise<void> { this.state.videoOn = true; }
  async videoOff(): Promise<void> { this.state.videoOn = false; }
  async toggleVideo(): Promise<void> { this.state.videoOn = !this.state.videoOn; }
  async leaveMeeting(): Promise<void> { this.state.inMeeting = false; }
  supportedActions(): string[] { return ['mute','unmute','toggleAudio','videoOn','videoOff','toggleVideo','leaveMeeting']; }
}
