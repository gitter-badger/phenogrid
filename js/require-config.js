console.log('require-config.js');

requirejs.config({
    "baseUrl": "node_modules",
    "paths": {
        "js": "../js",
		"jquery": "jquery/dist/jquery.min",
        "jquery-ui": "jquery-ui/jquery-ui",
        "d3": "../dist/d3/d3",
        "Hashtable": "../dist/jshashtable/jshashtable",
        "jshashtable": "../dist/jshashtable/jshashtable",
        "phenogrid": "../dist/phenogrid-byo"
    },
    packages:   [
                    // {
                    //     name: "jshashtable",
                    //     location: "jshashtable",
                    //     main: "jshashtable",
                    //     deps: []
                    // },
                    {
                        name: "model",
                        location: "../js",
                        main: "model",
                        deps: []
                    }
                ],
    "shim": {
        "jquery-ui": {
            export: "$",
            deps: ['jquery']
        },
        // "phenogrid": {
        //     deps: ['jquery', 'd3', 'Hashtable']
        // },
        // "jshashtable": {
        //     export: "Hashtable",
        //     deps: []
        // }
    }
});

// Load the main app module to start the app
console.log('loading require-config.js');
requirejs(["js/require-main"]);
