// get the monthly car expense
// this will return an object array with each obect representing a month with attributes cost and month
var monthlyCarExpenses = getMonthlyExpensesData();

// width scale - this scale will determine the width of the rectangles
var widthScale = d3.scale.linear().domain([0, 100]).range([0, 200]);


Reveal.addEventListener( 'slidechanged', function( event ) {
  var currentSlideId = event.currentSlide.id;

  if(currentSlideId == "slideBasicBar")
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  launchBasicBar();
} );

function launchBasicBar(){
  // using d3 to svg element on out page select the
var svg = d3.select("#svgBasicBar")
    .attr("width", 750)
    .attr("height", 250);

// empty the svg element before repainting the graph
$("#svgBasicBar").empty();

svg.selectAll("rect") // creates an empty set of rectangles in the memory (since we have none in svg)
  .data(monthlyCarExpenses) //pass in "jobs" object
  .enter() // enters data into the DOM
  .append("rect") // sticks them inside the svg (at this point we have 5 empty rectangles
  .attr("x", 40) // each rectangle will start 20px from the edge of the page
  .attr("y", function(d, i) { return i*30 + 20; }) // d: data && i: index
  .attr("width", 0)
  .attr("height", 20)
  .style("opacity", 0.7)
  .on("mouseover", function(d,i) 
    {d3.select(this).transition().duration(200).style("fill", "green"); })
  .on("mouseout", function(d,i)
    {d3.select(this).transition().duration(200).style("fill", "black"); })
  .transition() // everything after this will start a transition
    .delay(function(d, i) {return i*250; })
    .duration(1000)
    .attr("width", function (d, i) { return widthScale(d.cost); });

// create labels for months and position them immediately before the bars
svg.selectAll("text.label")
  .data(monthlyCarExpenses)
  .enter()
  .append("text")
  .attr("x", 0)
  .attr("y", function(d, i) {
      return i*30 + 35;
  })
  .text(function(d, i) {
      return d.month
  })
  .style("fill", "#616354")
  .style("font-size", 16)
  .style("opacity", 0)
    .transition()
    .delay(function(d, i) { return i*250; })
    .duration(1000)
    .style("opacity", 1);

// create labels for the total cost for each period and postiion them immediately after the bars
svg.selectAll("text.number")
  .data(monthlyCarExpenses)
  .enter()
  .append("text")
  .attr("class", "cost")
  .style("fill", "#616354")
  .style("font-size", 16)
  .style("opacity", 0)
  .attr("x", function(d, i) {
      return widthScale(d.cost) + 50
  })
  .attr("y", function(d, i) {
      return i*30 + 35;
  })
  .text(function(d, i) {
      return "£" + d.cost.toFixed(2);
  })
  .transition()
  .delay(function(d, i) { return i*250; })
  .duration(1000)
  .style("opacity", 1);
}
