Package.describe({
	summary: "Leaflet Dynamic JSON Layer"
});

Package.on_use(function (api, where) {
	api.add_files('dist/leaflet-layerjson.min.js', 'client');
	//TODO server-side methods...	
});
