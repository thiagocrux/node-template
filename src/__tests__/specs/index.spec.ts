import { describe, expect, it } from 'vitest';

import { STATUS_CODE } from '../../constants';

describe('index.ts', () => {
  it('should have a status 200', async () => {
    const response = await fetch('http://localhost:3333');
    expect(response.status).toBe(STATUS_CODE.OK);
  });

  it('should have content-type', async () => {
    const response = await fetch('http://localhost:3333');
    expect(response.headers.get('content-type')).toBe('text/plain');
  });

  it('should return the matching text', async () => {
    const response = await fetch('http://localhost:3333');
    expect(await response.text()).toBe('Hello, world!');
  });
});
