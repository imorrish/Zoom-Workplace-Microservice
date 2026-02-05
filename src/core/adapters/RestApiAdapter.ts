import { ZoomAdapter, ZoomStatus } from '../ZoomController';
import { UnsupportedActionError } from '../models/Errors';

export class RestApiAdapter implements ZoomAdapter {
  name = 'rest_api';
  async init(): Promise<void> { /* Initialize OAuth/token store if needed */ }
  async getStatus(): Promise<ZoomStatus> {
    // REST cannot observe local client status reliably.
    return { audioMuted: false, videoOn: false, inMeeting: false, role: 'unknown' };
  }
  async mute(): Promise<void> { throw new UnsupportedActionError('REST cannot control local audio'); }
  async unmute(): Promise<void> { throw new UnsupportedActionError('REST cannot control local audio'); }
  async toggleAudio(): Promise<void> { throw new UnsupportedActionError('REST cannot control local audio'); }
  async videoOn(): Promise<void> { throw new UnsupportedActionError('REST cannot control local video'); }
  async videoOff(): Promise<void> { throw new UnsupportedActionError('REST cannot control local video'); }
  async toggleVideo(): Promise<void> { throw new UnsupportedActionError('REST cannot control local video'); }
  async leaveMeeting(): Promise<void> { throw new UnsupportedActionError('REST cannot leave local meeting'); }
  supportedActions(): string[] { return []; }
}
