"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginIpcAdapter = void 0;
const { ZoomClient } = require('zoom-plugin-sdk');
class PluginIpcAdapter {
    name = 'plugin_ipc';
    zoomClient = new ZoomClient();

    async init() {
        // Initialize the Zoom client
        await this.zoomClient.initialize();
    }

    async getStatus() {
        try {
            const status = await this.zoomClient.getStatus();
            return status;
        } catch {
            return { audioMuted: false, videoOn: true, inMeeting: true, role: 'unknown' };
        }
    }

    async mute() {
        try {
            await this.zoomClient.muteAudio();
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async unmute() {
        try {
            await this.zoomClient.unmuteAudio();
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async toggleAudio() {
        try {
            const status = await this.zoomClient.getStatus();
            if (status.audioMuted) {
                await this.zoomClient.unmuteAudio();
            } else {
                await this.zoomClient.muteAudio();
            }
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async videoOn() {
        try {
            await this.zoomClient.startVideo();
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async videoOff() {
        try {
            await this.zoomClient.stopVideo();
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async toggleVideo() {
        try {
            const status = await this.zoomClient.getStatus();
            if (status.videoOn) {
                await this.zoomClient.stopVideo();
            } else {
                await this.zoomClient.startVideo();
            }
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    async leaveMeeting() {
        try {
            await this.zoomClient.leaveMeeting();
        } catch {
            throw new Errors_1.UnsupportedActionError();
        }
    }

    supportedActions() {
        return ['mute', 'unmute', 'toggleAudio', 'videoOn', 'videoOff', 'toggleVideo', 'leaveMeeting'];
    }
}

exports.PluginIpcAdapter = PluginIpcAdapter;