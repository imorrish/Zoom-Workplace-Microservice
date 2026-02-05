"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAdapter = void 0;
class MockAdapter {
    name = 'mock';
    state = { audioMuted: false, videoOn: true, inMeeting: true, role: 'attendee' };
    async init() { }
    async getStatus() { return this.state; }
    async mute() { this.state.audioMuted = true; }
    async unmute() { this.state.audioMuted = false; }
    async toggleAudio() { this.state.audioMuted = !this.state.audioMuted; }
    async videoOn() { this.state.videoOn = true; }
    async videoOff() { this.state.videoOn = false; }
    async toggleVideo() { this.state.videoOn = !this.state.videoOn; }
    async leaveMeeting() { this.state.inMeeting = false; }
    supportedActions() { return ['mute', 'unmute', 'toggleAudio', 'videoOn', 'videoOff', 'toggleVideo', 'leaveMeeting']; }
}
exports.MockAdapter = MockAdapter;
//# sourceMappingURL=MockAdapter.js.map