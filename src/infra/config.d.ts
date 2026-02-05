export declare const config: {
    port: number;
    nodeEnv: string;
    adapter: "app_sdk" | "plugin_ipc" | "rest_api" | "mock";
    apiKey: string;
    jwtSecret: string;
    allowedOrigins: string[];
    logLevel: string;
    zoom: {
        authMode: "oauth" | "server_to_server" | "none";
        clientId: string;
        clientSecret: string;
        redirectUri: string;
        accountId: string;
    };
    pluginIpc: {
        baseUrl: string;
    };
};
//# sourceMappingURL=config.d.ts.map