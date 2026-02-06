"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../infra/config");
const router = (0, express_1.Router)();
router.get('/login', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth login not implemented' } }); });
router.get('/callback', async (req, res) => {
    const { code } = req.query;
    if (!code) {
        return res.status(400).json({ error: { code: 'MISSING_CODE', message: 'Authorization code is missing' } });
    }
    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios_1.default.post('https://zoom.us/oauth/token', null, {
            params: {
                grant_type: 'authorization_code',
                code,
                redirect_uri: config_1.config.zoom.redirectUri,
            },
            auth: {
                username: config_1.config.zoom.clientId,
                password: config_1.config.zoom.clientSecret,
            },
        });
        const { access_token, refresh_token } = tokenResponse.data;
        // Retrieve user information using the access token
        const userResponse = await axios_1.default.get('https://api.zoom.us/v2/users/me', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const userInfo = userResponse.data;
        // Store tokens and user information (this can be replaced with a database call)
        const session = {
            accessToken: access_token,
            refreshToken: refresh_token,
            user: userInfo,
        };
        res.json({ message: 'OAuth flow completed successfully', session });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({
            error: {
                code: 'OAUTH_FLOW_FAILED',
                message: 'Failed to complete OAuth flow',
                details: errorMessage,
            },
        });
    }
});
router.post('/logout', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth logout not implemented' } }); });
exports.default = router;
//# sourceMappingURL=auth.routes.js.map