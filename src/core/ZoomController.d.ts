export interface ZoomStatus {
    audioMuted: boolean;
    videoOn: boolean;
    inMeeting: boolean;
    role?: 'host' | 'cohost' | 'attendee' | 'unknown';
}
export interface ZoomAdapter {
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
    startRecording?(): Promise<void>;
    stopRecording?(): Promise<void>;
    supportedActions(): string[];
}
export declare class ZoomController {
    private adapter;
    private ready;
    constructor(adapter: ZoomAdapter);
    init(): Promise<void>;
    adapterName(): string;
    private ensureReady;
    status(): Promise<ZoomStatus>;
    mute(): Promise<void>;
    unmute(): Promise<void>;
    toggleAudio(): Promise<void>;
    videoOn(): Promise<void>;
    videoOff(): Promise<void>;
    toggleVideo(): Promise<void>;
    leaveMeeting(): Promise<void>;
    startRecording(): Promise<void | undefined>;
    stopRecording(): Promise<void | undefined>;
    supportedActions(): string[];
}
//# sourceMappingURL=ZoomController.d.ts.map