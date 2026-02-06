"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomController = void 0;
const Errors_1 = require("./models/Errors");
class ZoomController {
    adapter;
    ready = false;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async init() {
        await this.adapter.init();
        this.ready = true;
    }
    adapterName() { return this.adapter.name; }
    ensureReady() {
        if (!this.ready)
            throw new Errors_1.AdapterNotReadyError();
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
exports.ZoomController = ZoomController;
//# sourceMappingURL=ZoomController.js.map