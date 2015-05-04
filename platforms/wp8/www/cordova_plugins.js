cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.cloudsky.cordovaplugins.zbar/www/zbar.js",
        "id": "org.cloudsky.cordovaplugins.zbar.zBar",
        "clobbers": [
            "cloudSky.zBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.statusbar": "0.1.10",
    "org.cloudsky.cordovaplugins.zbar": "1.3.0"
}
// BOTTOM OF METADATA
});