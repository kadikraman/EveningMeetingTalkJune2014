var data = [
//	{ type: "initial purchase", cost: 1380.00, date: "06/11/13", comment: "cost of car" },
//	{ type: "initial purchase", cost: 60.00, date: "06/11/13", comment: "delivery" },
//	{ type: "insurance", cost: 792.06, date: "06/11/13", comment: "insurance for 1 year starting 8pm"},
	{ type: "petrol", cost: 44.02, date: "06/11/13", mileage: 44233 },
	{ type: "maintenance", cost: 2.00, date: "06/11/13", comment: "window scraper" },
	{ type: "maintenance", cost: 6.00, date: "06/11/13", comment: "window cleaning liquid" },
	{ type: "parking", cost: 4.50, date: "10/11/13"},
	{ type: "petrol", cost: 41.53, date: "14/11/13", mileage: 44527 },
	{ type: "maintenance", cost: 3.99, date: "16/11/13", comment: "oil based lubricant" },
	{ type: "parking", cost: 6.50, date: "19/11/13"},
	{ type: "petrol", cost: 45.55, date: "20/11/13", mileage: 44857 },
	{ type: "petrol", cost: 46.38, date: "24/11/13", mileage: 45209 },
	{ type: "parking", cost: 1.50, date: "24/11/13"},
	{ type: "parking", cost: 1.50, date: "01/12/13"},
	{ type: "petrol", cost: 45.10, date: "03/12/13", mileage: 45540 },
	{ type: "parking", cost: 2.80, date: "07/12/13"},
	{ type: "petrol", cost: 45.28, date: "09/12/13", mileage: 45888 },
	{ type: "petrol", cost: 41.44, date: "11/12/13", mileage: 46189 },
	{ type: "petrol", cost: 49.00, date: "19/12/13", mileage: 46546 },
	{ type: "profit", cost: 360.00, date: "20/12/13", comment: "Tessella expenses" },
	{ type: "parking", cost: 1.80, date: "21/12/13"},
	{ type: "maintenance", cost: 1.49, date: "22/12/13", comment: "demister" },
	{ type: "parking", cost: 1.30, date: "02/01/14"},
	{ type: "petrol", cost: 38.72, date: "03/01/14", mileage: 46821 },
	{ type: "maintenance", cost: 2.50, date: "10/01/14", comment: "smelly car tree" },
	{ type: "petrol", cost: 31.64, date: "15/01/14", mileage: 47025 },
	{ type: "petrol", cost: 44.54, date: "23/01/14", mileage: 47358 },
	{ type: "profit", cost: 432.00, date: "28/01/14", comment: "Tessella expenses" },
	{ type: "petrol", cost: 40.60, date: "03/02/14", mileage: 47648 },
	{ type: "petrol", cost: 47.31, date: "07/02/14", mileage: 48012 },
	{ type: "petrol", cost: 43.39, date: "14/02/14", mileage: 48337 },
	{ type: "parking", cost: 8.00, date: "18/02/14"},
	{ type: "profit", cost: 288.00, date: "26/02/14", comment: "Tessella expenses" },
	{ type: "tax", cost: 77.00, date: "26/02/14", comment: "Tax disc for 6 months starting 01/03/14" },
	{ type: "petrol", cost: 41.27, date: "26/02/14", mileage: 48634 },
	{ type: "maintenance", cost: 14.00, date: "09/03/14", comment: "wheel trims" },
	{ type: "maintenance", cost: 3.99, date: "09/03/14", comment: "wheel trim security kit" },
	{ type: "maintenance", cost: 4.99, date: "09/03/14", comment: "guy fitting wheel trims on car" },
	{ type: "maintenance", cost: 4.99, date: "09/03/14", comment: "smelly car tree" },
	{ type: "petrol", cost: 43.20, date: "11/03/14", mileage: 48934 },
	{ type: "parking", cost: 1.50, date: "15/03/14"},
	{ type: "petrol", cost: 39.18, date: "20/03/14", mileage: 49230 },
	{ type: "profit", cost: 324.00, date: "26/03/14", comment: "Tessella expenses" },
	{ type: "petrol", cost: 38.78, date: "28/03/14", mileage: 49514, liters: 30.78 },
	{ type: "petrol", cost: 38.06, date: "01/04/14", mileage: 49827, liters: 30.23 },
	{ type: "petrol", cost: 40.55, date: "09/04/14", mileage: 50125, liters: 32.73 },
	{ type: "parking", cost: 2.70, date: "09/04/14"},
	{ type: "parking", cost: 3.50, date: "11/04/14"},
	{ type: "petrol", cost: 48.00, date: "11/04/14", mileage: 50493, liters: 38.13 },
	{ type: "profit", cost: 48.00, date: "11/04/14", comment: "Pia and Villem paid for petrol" },
	{ type: "petrol", cost: 45.15, date: "18/04/14", mileage: 50830, liters: 35.05 },
	{ type: "profit", cost: 10.00, date: "18/04/14", comment: "Marcel's pixie friend paid for lift" },
	{ type: "parking", cost: 7.00, date: "19/04/14"},
	{ type: "parking", cost: 2.90, date: "21/04/14"},
	{ type: "profit", cost: 216.00, date: "26/04/14", comment: "Tessella expenses" },
	{ type: "fine", cost: 65.00, date: "26/04/14", comment: "Camden parking fine" },
	{ type: "maintenance", cost: 4.99, date: "03/05/14", comment: "car wash" },
	{ type: "parking", cost: 1.50, date: "03/05/14"},
	{ type: "parking", cost: 3.50, date: "03/05/14"},
	{ type: "petrol", cost: 49.02, date: "03/05/14", mileage: 51142 },
	{ type: "parking", cost: 1.60, date: "04/05/14"},
	{ type: "petrol", cost: 42.61, date: "15/05/14", mileage: 51506 },
	{ type: "parking", cost: 0.90, date: "17/05/14"},
	{ type: "parking", cost: 1.50, date: "17/05/14"},
	{ type: "petrol", cost: 42.33, date: "22/05/14", mileage: 51872 },
	{ type: "parking", cost: 4.00, date: "24/05/14" },
	{ type: "parking", cost: 3.50, date: "30/05/14" },
	{ type: "parking", cost: 4.00, date: "31/05/14" },
	{ type: "petrol", cost: 41.91, date: "04/06/14", mileage: 52201 },
	{ type: "parking", cost: 3.50, date: "13/06/14" },
	{ type: "petrol", cost: 39.15, date: "15/06/14", mileage: 52525 },
	{ type: "parking", cost: 3.50, date: "20/06/14" }
];

var expenseColors = [
	{ type: "initial purchase", color: "#FFD3C6" },
	{ type: "insurance", color: "#D971E8" },
	{ type: "petrol", color: "#88A1FF" },
	{ type: "maintenance", color: "#71E8C6" },
	{ type: "parking", color: "#D9FFB0" },
	{ type: "profit", color: "#FF8E8B" },
	{ type: "tax", color: "#4EB4FF" },
	{ type: "fine", color: "#FFFF75" }
];

var stevenageStaff = [
// 1 year
	{ name: "Morgan Hollis", shortName: "HOLM", years: 1 },
	{ name: "Kadi Kraman", shortName: "KRAK", years: 1 },
	{ name: "Jonathan Masson", shortName: "MASJ", years: 1 },
	{ name: "Angela Montenegro", shortName: "MONA", years: 1 },
	{ name: "Simon Peers", shortName: "PEESI", years: 1 },
	{ name: "Matt Jones", shortName: "JONM", years: 1 },
// 2 years
	{ name: "Jonathan Agg", shortName: "AGGJ", years: 2 },
	{ name: "David Allen", shortName: "ALLD", years: 2 },
	{ name: "James Hutchinson", shortName: "HUTJ", years: 2 },
	{ name: "Elias Malik", shortName: "MALE", years: 2 },
	{ name: "Jonathan McKenzie", shortName: "MCKJ", years: 2 },
	{ name: "Daniel Wallis", shortName: "WALD", years: 2 },

// 3-4 years
	{ name: "Jonny Arnold", shortName: "ARNJ", years: 3.5 },
	{ name: "Marcel Cutts", shortName: "CUTM", years: 3.5 },
	{ name: "Michael Dinsdale", shortName: "DINM", years: 3.5 },
	{ name: "Anniek van der Drift", shortName: "DRIA", years: 3.5 },
	{ name: "Mark Knight", shortName: "KNIM", years: 3.5 },
	{ name: "Benoit Mangili", shortName: "MANB", years: 3.5 },
	{ name: "Michael Mases", shortName: "MASM", years: 3.5 },
	{ name: "Andrew Pollard", shortName: "POLA", years: 3.5 },

// 5-7 years
	{ name: "Alistar Rae", shortName: "RAEA", years: 6 },
	{ name: "Iain Peddie", shortName: "PEDI", years: 6 },
	{ name: "Mathew Burnett", shortName: "BURM", years: 6 },
	{ name: "Paul Cooper", shortName: "COOP", years: 6 },
	{ name: "Simon Child", shortName: "CHIS", years: 6 },

// 8-10 years
	{ name: "Alan Gaby", shortName: "GABA", years: 9 },
	{ name: "David Whittle", shortName: "WHID", years: 9 },
	{ name: "Fran Moore", shortName: "MOOF", years: 9 },
	{ name: "James Myatt", shortName: "MYAJ", years: 9 },
	{ name: "Mark Roberts", shortName: "ROBM", years: 9 },
	{ name: "Michael Spence", shortName: "SPEM", years: 9 },

// 11-17 years
	{ name: "Bruce Fairley", shortName: "FAIB", years: 14 },
	{ name: "Colin Maule", shortName: "MAUC", years: 14 },
	{ name: "David Brear", shortName: "BREC", years: 14 },
	{ name: "Graham Berridge", shortName: "BERG", years: 14 },
	{ name: "Matthey Pigg", shortName: "PIGM", years: 14 },
	{ name: "Stephen Baker", shortName: "BAKS", years: 14 },
	{ name: "Stuart White", shortName: "WHIS", years: 14 },
	{ name: "Timothy Pattenden", shortName: "PATT", years: 14 },
	{ name: "Werner Schultz", shortName: "SCHW", years: 14 },

// 18 years
	{ name: "David Dungate", shortName: "DUND", years: 18 },

// 30 years
	{ name: "Lawrence Hopkins", shortName: "HOPL", years: 30 },

// people I forgot, but must append to not mess up related links (sorry Tristan)
	{ name: "Tristan West", shortName: "WEST", years: 1 }
];

var related = [
	{source: 0, target: 22}, // Morgan Mat
	{source: 1, target: 22}, // Kadi Mat 
	{source: 2, target: 33}, // Masson Brear
	{source: 3, target: 24}, // Angela Simon Child
	{source: 4, target: 31}, // Simon Peers Bruce
	{source: 5, target: 31}, // Mathew Jones Bruce
	{source: 6, target: 28}, // Agg Myatt
	{source: 7, target: 30}, // DAllen Spence
	{source: 8, target: 34}, // HUTJ Graham
	{source: 9, target: 32}, // Elias Colin
	{source: 10, target: 35}, // McK Pigg
	{source: 11, target: 34}, // Daniel Wallis Graham
	{source: 12, target: 4}, // ARNJ Simon Peers
	{source: 13, target: 34}, // Marcel Graham
	{source: 14, target: 33}, // Dinsdale David Brear
	{source: 15, target: 36}, // Anniek Steve

	{source: 17, target: 37}, // Benoit Stuart
	{source: 18, target: 30}, // Mases Spence
	{source: 19, target: 28}, // Andrew Myatt
	{source: 20, target: 37}, // alistar Stuart
	{source: 21, target: 37}, // iain Stuart
	{source: 22, target: 36}, // Burnet Steve
	{source: 23, target: 37}, // Paul Cooper Stuart
	{source: 24, target: 4}, // Simon Child Simon Peers

	{source: 28, target: 32}, // Myatt Colin

	{source: 30, target: 4}, // spence simon peers

	{source: 33, target: 36}, // david Brear Steve
	{source: 34, target: 36}, // graham Brear Steve
	{source: 35, target: 33}, // Pigg Colin
	{source: 36, target: 31}, // Steve Bruce
	{source: 37, target: 31}, // Stuart Bruce
	{source: 39, target: 31}, // Werner Bruce
	
	{source: 42, target: 24} // Tristan Simon Child

// 0 Morgan Hollis
// 1 Kadi Kraman
// 2 Jonathan Masson
// 3 Angela Montenegro
// 4 Simon Peers
// 5 Matt Jones
// 6 Jonathan Agg
// 7 David Allen
//8 James Hutchinson
//9 Elias Malik
//10 Jonathan McKenzie
//11 Daniel Wallis
//12 Jonny Arnold
//13 Marcel Cutts
//14 Michael Dinsdale
//15 Anniek van der Drift
//16 Mark Knight
//17 Benoit Mangili
//18 Michael Mases
//19 Andrew Pollard
//20 Alistar Rae
//21 Iain Peddie
//22 Mathew Burnett
//23 Paul Cooper
//24 Simon Child
//25 Alan Gaby
//26 David Whittle
//27 Fran Moore
//28 James Myatt
//29 Mark Roberts
//30 Michael Spence
//31 Bruce Fairley
//32 Colin Maule
//33 David Brear
//34 Graham Berridge
//35 Matthey Pigg
//36 Stephen Baker
//37 Stuart White
//38 Timothy Pattenden
//39 Werner Schultz
//40 David Dungate
//41 Lawrence Hopkins
//42 Tristan West

];