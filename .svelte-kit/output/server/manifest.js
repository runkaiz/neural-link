export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/barrier-card.webp","images/burden-icon.webp","images/cloud-icon.webp","images/cultural-perceptions.webp","images/extra-1.webp","images/extra-2.webp","images/gpa-icon.webp","images/hero-app.webp","images/high/ByaZlG0bjDWG5BVFv5ke65HSlWk.png.webp","images/high/GyNmzQ2poFNQXhj1h32UpgIoMsw.png.webp","images/high/KN50M76qpbtfzmM998eKRnf9860.png.webp","images/high/PClrPzfVPniQBWsXmSLtbmE4.png.webp","images/high/PvumLk2JOtzV7jITqGbrRyec.png.avif","images/high/i6HPHyWbiysJU5N98h1wmu0IFA.png.avif","images/high/yaBU9WBGAhmqDDgQceHTpNjosvQ.png.avif","images/inspiration-card.webp","images/low/3bo6c9yXiSsfY0K05sb0d43Qkeg.png.webp","images/low/9pH3d2YM3HGKPJrL5F2kdXmKPnA.png.webp","images/low/i6x29RbeBVEGLUDq4tLsVeh0SI.png.webp","images/mid/2gaZCDj0yzynLmkwkfpw2TB2It4.png.avif","images/mid/ey8C9oo7YXzrnwTLRUOZOtMo.png.avif","images/mid/zUiIsYWnGU0dtIvqvi7tV7YMk8.png.avif","images/oliver-cafe.webp","images/oliver-overwhelmed.webp","images/oliver-portrait.webp","images/peer-community.webp","images/peer-vs-pro.webp","images/uw-campus.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".avif":"image/avif"},
	_: {
		client: {start:"_app/immutable/entry/start.DMBwWGj5.js",app:"_app/immutable/entry/app.DFL2aixy.js",imports:["_app/immutable/entry/start.DMBwWGj5.js","_app/immutable/chunks/R8KKlAes.js","_app/immutable/chunks/DPQkqfAO.js","_app/immutable/chunks/CIc116G8.js","_app/immutable/entry/app.DFL2aixy.js","_app/immutable/chunks/DPQkqfAO.js","_app/immutable/chunks/DZPEVzgA.js","_app/immutable/chunks/zL-OyMsy.js","_app/immutable/chunks/CIc116G8.js","_app/immutable/chunks/BtB_B412.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
