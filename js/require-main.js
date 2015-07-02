console.log('require-main.js');


define(["jquery", 'd3', "phenogrid"], function($, d3, phenogrid) {
    //the phenogrid.js plugin has been loaded.
    $(function() {
    	console.log('require-main.js ... $', $);
    	console.log('require-main.js ... d3', d3);
    	console.log('require-main.js ... phenogrid', phenogrid);
		$(document).ready(function(){
			$("#phenogrid_container").phenogrid({
				serverURL :"http://beta.monarchinitiative.org",
				phenotypeData: phenotypes,
				targetSpeciesName: "Mus musculus"
			});
		});
    });
});

