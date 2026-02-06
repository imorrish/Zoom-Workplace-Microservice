"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApiAdapter = void 0;
const Errors_1 = require("../models/Errors");
class RestApiAdapter {
    name = 'rest_api';
    async init() { }
    async getStatus() {
        // REST cannot observe local client status reliably.
        return { audioMuted: false, videoOn: false, inMeeting: false, role: 'unknown' };
    }
    async mute() { throw new Errors_1.UnsupportedActionError('REST cannot control local audio'); }
    async unmute() { throw new Errors_1.UnsupportedActionError('REST cannot control local audio'); }
    async toggleAudio() { throw new Errors_1.UnsupportedActionError('REST cannot control local audio'); }
    async videoOn() { throw new Errors_1.UnsupportedActionError('REST cannot control local video'); }
    async videoOff() { throw new Errors_1.UnsupportedActionError('REST cannot control local video'); }
    async toggleVideo() { throw new Errors_1.UnsupportedActionError('REST cannot control local video'); }
    async leaveMeeting() { throw new Errors_1.UnsupportedActionError('REST cannot leave local meeting'); }
    supportedActions() { return []; }
}
exports.RestApiAdapter = RestApiAdapter;
//# sourceMappingURL=RestApiAdapter.js.map