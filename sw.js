// 極簡 service worker：只為了讓瀏覽器允許「安裝成 App」。
// 刻意「完全不快取」——所有請求照常走網路，學生永遠拿到最新版，
// 不會發生安裝後卡在舊版的問題。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* 不攔截，一律走網路 */ });
