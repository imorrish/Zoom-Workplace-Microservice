import { ZoomAdapter, ZoomStatus } from '../ZoomController';
export declare class RestApiAdapter implements ZoomAdapter {
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
    supportedActions(): string[];
}
//# sourceMappingURL=RestApiAdapter.d.ts.map