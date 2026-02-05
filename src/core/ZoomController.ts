import { AdapterNotReadyError } from './models/Errors';

export interface ZoomStatus {
  audioMuted: boolean;
  videoOn: boolean;
  inMeeting: boolean;
  role?: 'host' | 'cohost' | 'attendee' | 'unknown';
}

export interface ZoomAdapter {
  name: string;
  init(): Promise<void>;
  getStatus(): Promise<ZoomStatus>;
  mute(): Promise<void>;
  unmute(): Promise<void>;
  toggleAudio(): Promise<void>;
  videoOn(): Promise<void>;
  videoOff(): Promise<void>;
  toggleVideo(): Promise<void>;
  leaveMeeting(): Promise<void>;
  startRecording?(): Promise<void>;
  stopRecording?(): Promise<void>;
  supportedActions(): string[];
}

export class ZoomController {
  private ready = false;
  constructor(private adapter: ZoomAdapter) {}
  async init() {
    await this.adapter.init();
    this.ready = true;
  }
  adapterName() { return this.adapter.name; }
  private ensureReady() {
    if (!this.ready) throw new AdapterNotReadyError();
  }
  async status() { this.ensureReady(); return this.adapter.getStatus(); }
  async mute() { this.ensureReady(); return this.adapter.mute(); }
  async unmute() { this.ensureReady(); return this.adapter.unmute(); }
  async toggleAudio() { this.ensureReady(); return this.adapter.toggleAudio(); }
  async videoOn() { this.ensureReady(); return this.adapter.videoOn(); }
  async videoOff() { this.ensureReady(); return this.adapter.videoOff(); }
  async toggleVideo() { this.ensureReady(); return this.adapter.toggleVideo(); }
  async leaveMeeting() { this.ensureReady(); return this.adapter.leaveMeeting(); }
  async startRecording() { this.ensureReady(); return this.adapter.startRecording?.(); }
  async stopRecording() { this.ensureReady(); return this.adapter.stopRecording?.(); }
  supportedActions() { return this.adapter.supportedActions(); }
}
