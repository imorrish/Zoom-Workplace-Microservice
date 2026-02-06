"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function required(name, fallback) {
    const v = process.env[name] ?? fallback;
    if (v === undefined)
        throw new Error(`Missing required env var ${name}`);
    return v;
}
exports.config = {
    port: parseInt(process.env.PORT || '8080', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    adapter: (process.env.ADAPTER || 'mock'),
    apiKey: required('API_KEY', 'change-me'),
    jwtSecret: required('JWT_SECRET', 'super-secret'),
    allowedOrigins: (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean),
    logLevel: process.env.LOG_LEVEL || 'info',
    zoom: {
        authMode: (process.env.ZOOM_AUTH_MODE || 'none'),
        clientId: process.env.ZOOM_CLIENT_ID || '',
        clientSecret: process.env.ZOOM_CLIENT_SECRET || '',
        redirectUri: process.env.ZOOM_REDIRECT_URI || 'http://localhost:8080/auth/callback',
        accountId: process.env.ZOOM_ACCOUNT_ID || ''
    },
    pluginIpc: {
        baseUrl: process.env.PLUGIN_IPC_BASE_URL || 'http://localhost:9090'
    }
};
//# sourceMappingURL=config.js.map