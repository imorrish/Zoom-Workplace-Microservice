"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_js_1 = __importDefault(require("../../src/app.js"));
describe('Health', () => {
    it('GET /healthz should return ok', async () => {
        const res = await (0, supertest_1.default)(app_js_1.default).get('/healthz');
        expect(res.status).toBe(200);
        expect(res.text).toBe('ok');
    });
});
//# sourceMappingURL=app.test.js.map