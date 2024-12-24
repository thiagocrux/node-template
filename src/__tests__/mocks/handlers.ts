import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3333', () => {
    return HttpResponse.text('Hello, world!');
  }),
];
