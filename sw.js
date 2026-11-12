/* 곁에: 홈 화면 앱으로 설치되게 하는 최소 서비스 워커.
   화면을 저장(캐시)하지 않아서, 사이트를 고치면 바로 새 화면이 나와요. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
