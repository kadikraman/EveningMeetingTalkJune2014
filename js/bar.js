// This is json an easy way to store data in a concise way
// badum... an array of objects. jason ftw
var jobs = [
  { name: "USA", income: 500 },
  { name: "UK", income: 450 },
  { name: "Germany", income: 300 },
  { name: "France", income: 450 },
  { name: "Spain", income: 250 }
];

// how to access each piece of data: jobs[0].name
// for(var i=0; i<jobs.length; i++){
//   console.log(jobs[i].name + ": " + jobs[i].income);
// }

Reveal.addEventListener( 'slidechanged', function( event ) {
  var currentSlideId = event.currentSlide.id;

  if(currentSlideId == "slideBasicBar")
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  launchBasicBar();
} );

function launchBasicBar(){
  // using d3 to svg element on out page select the
var svg = d3.select("#svgBasicBar")

// empty the svg element before repainting the graph
$("#svgBasicBar").empty();

svg.selectAll("rect") // creates an empty set of rectangles in the memory (since we have none in svg)
  .data(jobs) //pass in "jobs" object
  .enter() // enters data into the DOM
  .append("rect") // sticks them inside the svg (at this point we have 5 empty rectangles
  .attr("x", 20) // each rectangle will start 20px from the edge of the page
  .attr("y", function(d, i) { return i*30 + 20; }) // d: data && i: index
  .attr("width", 0)
  .attr("height", 20)
  .style("opacity", 0.7)
  .on("mouseover", function(d,i) 
    {d3.select(this).transition().duration(1000).style("fill", "red"); })
  .on("mouseout", function(d,i)
    {d3.select(this).transition().duration(1000).style("fill", "black"); })
  .transition() // everything after this will start a transition
    .delay(function(d, i) {return i*5000; })
    .duration(10000)
    .attr("width", function (d, i) { return d.income; });
}

//svg.selectAll("text")
//  .data(jobs)
//  .enter()
//  .append("text")
//  .attr("x", 25)
//  .attr("y", function(d,i) { return i*30 + 35})
//  .text(function(d,i) {return d.name; });