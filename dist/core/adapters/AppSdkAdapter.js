"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSdkAdapter = void 0;
const Errors_1 = require("../models/Errors");
class AppSdkAdapter {
    name = 'app_sdk';
    async init() {
        // TODO: Wire Zoom Meeting/App SDK here.
    }
    async getStatus() {
        return { audioMuted: false, videoOn: false, inMeeting: false, role: 'unknown' };
    }
    async mute() { throw new Errors_1.UnsupportedActionError(); }
    async unmute() { throw new Errors_1.UnsupportedActionError(); }
    async toggleAudio() { throw new Errors_1.UnsupportedActionError(); }
    async videoOn() { throw new Errors_1.UnsupportedActionError(); }
    async videoOff() { throw new Errors_1.UnsupportedActionError(); }
    async toggleVideo() { throw new Errors_1.UnsupportedActionError(); }
    async leaveMeeting() { throw new Errors_1.UnsupportedActionError(); }
    supportedActions() { return []; }
}
exports.AppSdkAdapter = AppSdkAdapter;
//# sourceMappingURL=AppSdkAdapter.js.map