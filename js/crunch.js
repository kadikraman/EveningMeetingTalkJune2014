// contains functions to make certain calculations on data.js

// pull all the data into an object array we will be working on
var transactions = data;


// returns all the expenses objects of a given type attribute
function getExpensesByType(type){
	var expensesArray = new Array();

	for (var index in transactions){
		if(transactions[index].type == type){
			expensesArray.push(transactions[index]);
		}
	}

	return expensesArray;
}

// returns an string array containing all the different types of expenses
function getAllTypes(){
	var typeArray = new Array();

	var exists = false;

	for (var index in transactions){

		exists = false;

		for(var i=0; i<typeArray.length; i++){
			if(transactions[index].type == typeArray[i])
				exists = true;
		}

		if(!exists && transactions[index].type != "profit")
			typeArray.push(transactions[index].type);
	}

	return typeArray;
}

// given an array of expense objects, adds up all the 'cost' attributes and returns an int
function getTotalCost(expensesArray){
	var totalCost = 0;

	for (var index in expensesArray){
		totalCost += expensesArray[index].cost;
	}
	return totalCost;
}

// returns the hex of the predefined expense color
function getColorByType(type){
	for(var index in expenseColors){
		if(expenseColors[index].type == type){
			return expenseColors[index].color;
		}
	}

	// return back as a default if matching type is not found
	return "#000000";
}

/*
Returns: object array containing ["month/year", total exp that month]
*/
function getMonthlyExpensesData(){
	// create the empty array for monthly expenses
	var monthlyExpensesArray = new Array();

	// initialise an empty array containing available months when any expenses were incurred
	var months = new Array();

	// get the months string from the data exluding the day (may contain duplicates)
	_.each(transactions, function(d, i){
		months.push(d.date.substring(3))
	})

	// clean the months array so that it now contains only unique elements
	months = _.uniq(months);

	// initialise expenses array
	var expenses = new Array(months.length);

	// set initial value to zero
	_.each(months, function(d, i){ expenses[i] = 0 })

	// for each of the transactions, add the cost (if not profit) to the corresponding index in the expenses array
	_.each(transactions, function(d, i){
		if(d.type != "profit"){
			expenses[_.indexOf(months, d.date.substring(3))] += d.cost;
		}
	})

	// bind the months and expenses arrays together into an object array
	_.each(months, function(d,i){
		monthlyExpensesArray.push(_.object(["month", "cost"], [months[i], expenses[i]]))

	})

	return monthlyExpensesArray;
}

/*
Takes: month in the dorm XX/XX (month/year)
Returns: object array containing [] of expenses by type
*/
function getDetailedMonthlyExpensesData(month){

	// get another instance of transactions that we can modify
	var tempData = new Array();

	// change it to only have month and year in the date
	_.each(transactions, function(d,i){
		// deep copy in order to avoid references
		tempData.push(_.extend({}, transactions[i]));
		tempData[i].date = tempData[i].date.substring(3)})

	// select the subset of texpenses which belong in a certain month
	var matchingMonth = _.where(tempData, {date: month})

	var types = ["initial purchase", "insurance", "petrol", "maintenance", "parking", "tax", "fine"]

	var inOneMonth = [0,0,0,0,0,0,0];

	var typesInMonths = new Array();

	_.each(types, function(d,i){
		_.each(matchingMonth, function(d2,i2){
			if(matchingMonth[i2].type == types[i]){
				inOneMonth[i] += matchingMonth[i2].cost;
			}
		})
	})


	return inOneMonth;
}
