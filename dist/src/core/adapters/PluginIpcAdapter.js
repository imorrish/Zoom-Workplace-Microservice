"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginIpcAdapter = void 0;
const axios_1 = __importDefault(require("axios"));
const Errors_1 = require("../models/Errors");
const config_1 = require("../../infra/config");
class PluginIpcAdapter {
    name = 'plugin_ipc';
    base = config_1.config.pluginIpc.baseUrl;
    async init() { }
    async getStatus() {
        // Attempt to fetch status from plugin bridge; if not available, return best-effort
        try {
            const r = await axios_1.default.get(`${this.base}/status`);
            return r.data;
        }
        catch {
            return { audioMuted: false, videoOn: true, inMeeting: true, role: 'unknown' };
        }
    }
    async mute() { await axios_1.default.post(`${this.base}/audio/mute`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async unmute() { await axios_1.default.post(`${this.base}/audio/unmute`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async toggleAudio() { await axios_1.default.post(`${this.base}/audio/toggle`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async videoOn() { await axios_1.default.post(`${this.base}/video/on`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async videoOff() { await axios_1.default.post(`${this.base}/video/off`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async toggleVideo() { await axios_1.default.post(`${this.base}/video/toggle`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    async leaveMeeting() { await axios_1.default.post(`${this.base}/meeting/leave`).catch(() => { throw new Errors_1.UnsupportedActionError(); }); }
    supportedActions() { return ['mute', 'unmute', 'toggleAudio', 'videoOn', 'videoOff', 'toggleVideo', 'leaveMeeting']; }
}
exports.PluginIpcAdapter = PluginIpcAdapter;
//# sourceMappingURL=PluginIpcAdapter.js.map