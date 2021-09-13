import http from 'k6/http';
import { sleep } from 'k6';

// // 1. init code
// export let options = {
//   vus: 10,
//   duration: '30s',
// };

//  ramping up/down VUs
export let options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export function setup() {
  // 2. setup code
  sleep(1);
}

export default function () {
  // 3. VU code
  http.get('https://test.k6.io');
  sleep(1);
}

export function teardown(data) {
  // 4. teardown code
  sleep(1);
}