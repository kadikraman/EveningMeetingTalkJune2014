// create a function that searched twitter and downloads the data
function search(query) {
	var url = "http://twitcher.steer.me/search?q=" + query + "&key=px2xvp2q";

	// create fontsize scale
	var fontScale = d3.scale
						.linear()
						.domain([0,2000])
						.clamp(true) // if anyone has over 2000 followers, will calmp at 2000
						.range([14,40]);

	// create the colour scale
	var colorScale = d3.scale
						.linear()
						.domain([0,2000])
						.clamp(true)
						.range(["#0033CC", "#003300"]);

	// runs the code in the function once has received something from url
	d3.json(url, function(error, data) {
		var list = d3.select("ul");

		list.selectAll("li")
		.remove(); // needed for when you refresh the page

		// 1st run around: there are no 'li's at the moment. will create an emty list etc
		// nth run around: repopulate
		list.selectAll("li").data(data) 
			.enter()
			.append("li")
			.html(function(d, i){
				var tweet = "<span>" + d.text + "</span><strong>" + d.user.name + "</strong>";
			return tweet;
			})
			.style("font-size", function(d, i) {
				return fontScale(d.user.followers_count) + "px";
			})
			.style("color", function(d,i) {
				return colorScale(d.user.followers_count)
			})
			.style("opacity", 0)
			.transition()
			.delay(function(d, i){
				return i*50;
			})
			.duration(500)
			.style("opacity", 1);
	})
} 

// when page loads, will automatically call this
search("twitter"); 

// handle user input: look for the form element on the page and listen for its submit event
d3.select("form").on("submit", function() {
	// create variable and store the input value (this will bea text)
	var input = d3.select("input").property("value");

	search(input);

	// when you submit the form, the browset tries to refresh the page etc
	// we will hijack this event, prevent default
	d3.event.preventDefault();
})