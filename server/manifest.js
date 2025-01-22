const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DZHFpRTS.js","app":"_app/immutable/entry/app.tc4UWnwy.js","imports":["_app/immutable/entry/start.DZHFpRTS.js","_app/immutable/chunks/BmwsZ8mM.js","_app/immutable/chunks/CTK-nKQQ.js","_app/immutable/chunks/Y7Q9mygm.js","_app/immutable/entry/app.tc4UWnwy.js","_app/immutable/chunks/CTK-nKQQ.js","_app/immutable/chunks/Db9_DHQl.js","_app/immutable/chunks/P-jciKzZ.js","_app/immutable/chunks/B9QH5ZQb.js","_app/immutable/chunks/Y7Q9mygm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-rIEike3x.js')),
			__memo(() => import('./chunks/1-BKR8iXdW.js')),
			__memo(() => import('./chunks/2-BodaX5uC.js').then(function (n) { return n._; }))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
