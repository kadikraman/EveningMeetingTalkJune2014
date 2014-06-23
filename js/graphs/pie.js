var colors = ["#800053", "#A63F00", "#006B53", "#D0F86F", "#6F9C00", "#34D2AF", "#A0000F"];
var types = ["initial purchase", "insurance", "petrol", "maintenance", "parking", "tax", "fine"]

var monthlyData = getMonthlyExpensesData();

var svgPie = d3.select("#svgPie")
	.attr("width", 750)
	.attr("height", 420);

// create a pie layout and assign it to the variable
var pieLayout = d3.layout.pie()
				.startAngle(-0.5 * Math.PI) // change have half circles
				.endAngle(0.5 * Math.PI) // change to have half circles
				.sort(null) // turn sort off, will display green-yellow-red

// a tag element in svg (g is short for group)
// we will use this to contain all our individual pie chart elements.
var g = svgPie.selectAll("g").data(monthlyData)
							.enter()
							.append("g")
							.attr("transform", function(d, i) { // places the elements on the page in a grid
								var row = i % 3; // 4 because we want the thing to be 4 columns long
								var col = Math.floor(i / 3);

								return "translate("+ (240 * row + 120) + "," + (150 * col + 100) +")";
							});

g.selectAll('path').data(function(d,i){return pieLayout(getDetailedMonthlyExpensesData(d.month))})
	.enter()
	.append('path')
	.attr("d", d3.svg.arc().innerRadius(50).outerRadius(90))
	.style('fill', function(d,i){
		return colors[i]
	})
	.on("mouseover", function(d, i) {
		d3.select(this.parentNode)
			.select("text")
			.text("£" + d.value.toFixed(2))
		d3.select("#label").text(types[i])
	})
	.on("mouseout", function(d, i){
		d3.select(this.parentNode)
			.select("text")
			.text(function(d,i) { return d.month })
		d3.select("#label").text(" . ")
	})

g.append("text").text(function(d,i) { return monthlyData[i].month })
				.attr("transform", "translate(-20, -10)")
				.attr("font-size", 18);

//g.append("text").text(function(d,i) { return monthlyData[i].month })
//				.attr("transform", "translate(-20, 20)");

d3.select("#label").append("text")
.text(" . ")