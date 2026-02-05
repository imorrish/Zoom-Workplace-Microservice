import request from 'supertest';
import app from '../../src/app.js';

describe('Health', () => {
  it('GET /healthz should return ok', async () => {
    const res = await request(app).get('/healthz');
    expect(res.status).toBe(200);
    expect(res.text).toBe('ok');
  });
});
