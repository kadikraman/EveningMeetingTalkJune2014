// global variables
var width = 960;
var height = 800;

// launch when slide is traversed upon
Reveal.addEventListener( 'slidechanged', function( event ) {
  var currentSlideId = event.currentSlide.id;

  if(currentSlideId == "slideStevenageStaff")
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  launchStaffBubbles();
} );

function launchStaffBubbles(){
	// using d3 to svg element on out page select the
	var svg = d3.select("#svgStevenageStaff")
    	.attr("width", width)
    	.attr("height", height);

    // empty the svg element before repainting the graph
	$("#svgStevenageStaff").empty();

	// get the staff data
	var staffData = stevenageStaff;
	
	// add an x and a y coordinate to each staff member
	for(var i=0; i<staffData.length; i++){
		staffData[i].x = Math.random() * width; // Math.random will give a random number between 0 and 1
		staffData[i].y = Math.random() * height;
	}

	var circles = svg.selectAll("circle");
	var texts = svg.selectAll("text");

	var colorScale = d3.scale.linear().domain([1, 30]).range(["#FFFF99", "#003300"]).clamp(true);

	var fontScale = d3.scale.sqrt().domain([1, 30]).range([12, 40]);

	var radiusScale = d3.scale.sqrt().domain([1, 30]).range([20, 40]);

	var force = d3.layout.force()
		.nodes(staffData)
		.links(related)
		// charge is the repelling force of each node
		.charge(-800)
		// friction is how each node passes past each other
		.friction(0.95)
		// link distance is the nominal distance that is between each node
		.linkDistance(75)
		.size([width, height])
		.gravity(0.2)
		.start();

	circles.data(staffData)
		.enter()
		.append("circle")
		.attr("r", function(d, i){
			return radiusScale(d.years);
		})
		.style("fill", function(d, i){
			return colorScale(d.years);
		})
		.call(force.drag) // - gives functionality to drag stuff

	texts.data(staffData)
		.enter()
		.append("text")
		.text(function(d, i) {return d.shortName})
		.attr("font-size", function(d,i) {return fontScale(d.years); })

	// create our lines that will eventually connect our circles
	var links = svg.selectAll("line")
		.data(related)
		.enter()
		.append("line")
		.attr("stroke", "grey")

	// force is waiting for an event to happen
	force.on("tick", function(){
		svg.selectAll("circle")
			.attr("cx", function(d, i) {return d.x; })
			.attr("cy", function(d, i) {return d.y; })

		svg.selectAll("text")
			.attr("x", function(d, i) {return d.x; })
			.attr("y", function(d, i) {return d.y; })

		links.attr("x1", function(d,i) {return d.source.x})
			.attr("y1", function(d,i) {return d.source.y})
			.attr("x2", function(d,i) {return d.target.x})
			.attr("y2", function(d,i) {return d.target.y})
	})	
}