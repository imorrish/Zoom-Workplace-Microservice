import axios from 'axios';
import { ZoomAdapter, ZoomStatus } from '../ZoomController';
import { UnsupportedActionError } from '../models/Errors';
import { config } from '../../infra/config';

export class PluginIpcAdapter implements ZoomAdapter {
  name = 'plugin_ipc';
  private base = config.pluginIpc.baseUrl;
  async init(): Promise<void> { /* Optionally test connectivity */ }
  async getStatus(): Promise<ZoomStatus> {
    // Attempt to fetch status from plugin bridge; if not available, return best-effort
    try {
      const r = await axios.get(`${this.base}/status`);
      return r.data as ZoomStatus;
    } catch {
      return { audioMuted: false, videoOn: true, inMeeting: true, role: 'unknown' };
    }
  }
  async mute(): Promise<void> { await axios.post(`${this.base}/audio/mute`).catch(() => { throw new UnsupportedActionError(); }); }
  async unmute(): Promise<void> { await axios.post(`${this.base}/audio/unmute`).catch(() => { throw new UnsupportedActionError(); }); }
  async toggleAudio(): Promise<void> { await axios.post(`${this.base}/audio/toggle`).catch(() => { throw new UnsupportedActionError(); }); }
  async videoOn(): Promise<void> { await axios.post(`${this.base}/video/on`).catch(() => { throw new UnsupportedActionError(); }); }
  async videoOff(): Promise<void> { await axios.post(`${this.base}/video/off`).catch(() => { throw new UnsupportedActionError(); }); }
  async toggleVideo(): Promise<void> { await axios.post(`${this.base}/video/toggle`).catch(() => { throw new UnsupportedActionError(); }); }
  async leaveMeeting(): Promise<void> { await axios.post(`${this.base}/meeting/leave`).catch(() => { throw new UnsupportedActionError(); }); }
  supportedActions(): string[] { return ['mute','unmute','toggleAudio','videoOn','videoOff','toggleVideo','leaveMeeting']; }
}
