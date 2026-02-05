import { ZoomAdapter, ZoomStatus } from '../ZoomController';
export declare class PluginIpcAdapter implements ZoomAdapter {
    name: string;
    private base;
    init(): Promise<void>;
    getStatus(): Promise<ZoomStatus>;
    mute(): Promise<void>;
    unmute(): Promise<void>;
    toggleAudio(): Promise<void>;
    videoOn(): Promise<void>;
    videoOff(): Promise<void>;
    toggleVideo(): Promise<void>;
    leaveMeeting(): Promise<void>;
    supportedActions(): string[];
}
//# sourceMappingURL=PluginIpcAdapter.d.ts.map