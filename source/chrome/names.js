var names = {

	"RV(2)?": "Ryan Villopoto",
	"ET(3)?": "Eli Tomac",
	"BB(4|1)?": "Blake Baggett",
	"RD(5|1)?": "Ryan Dungey",
	"JM(6|1)?": "Jeremy Martin",
	"JS(7)?": "James Stewart",
	"IT(9)": "Ivan Tedesco", // IT is too common of a word, so number is required
	"JB(10)": "Justin Brayton", // Number is required to avoid conflicts with Barcia, who is more likely to be referenced
	"KC(11)?": "Kyle Chisholm",
	"JW(12)?": "Jake Weimer",
	// "BW(13)?": "Blake Wharton",
	"KW(14)?": "Kevin Windham",
	"CS(14)?": "Cole Seely",
	"DW(15)?": "Dean Wilson",
	"JD(16)?": "John Dowd",
	"ZO(16)?": "Zach Osborne",
	"CW(17)?": "Cooper Webb",
	"DM(18)?": "Davi Millsaps",
	"JB(19)": "Justin Bogle", // Number requires, conflict with Justin Barcia
	"BT(20)?": "Broc Tickle",
	"JA(21)?": "Jason Anderson",
	"CR(22)": "Chad Reed", // CR is too common of a word, number required
	"WP(23)?": "Weston Peick",
	"BM(24)?": "Bret Metcalfe",	
	"MM(25)?": "Marvin Musquin",
	"MB(26)?": "Michael Byrne",
	"NW(27)?": "Nick Wey",
	"JN(28)?": "Jessy Nelson",
	"AS(29)?": "Andrew Short",
	"JG(33)?": "Josh Grant",
	"JH(35)?": "Justin Hill",
	"TC(41)?": "Trey Canard",
	"WH(48)?": "Will Hahn",
	"JB(51)": "Justin Barcia", // Number requires, conflict with Justin Bogle
	// "DA(63)?": "Derek Anderson",
	// "JH(75)?": "Josh Hill",
	"KR(94|1)?": "Ken Roczen",
	"MA(800)?": "Mike Alessi",
	"AC(46|92|292|50)": "Adam Cianciarulo", // Number required to keep from conflicting with Cairoli
	
	"AC(222)": "Antonio Cairoli", // Number required to keep from conflicting with Cianciarulo
	"JH(84)": "Jeffrey Herlings", // Number required to keep from conflicting with Hill/Hansen
	"RF(461)?": "Romain Febvre",
	"BT(8)?": "Ben Townley",
	"KDD(9)?": "Ken de Dycker",
	"MN(12)?": "Max Nagl",
	"GP(21)": "Gautier Paulin",
	"CD(25)?": "Clement Desalle",
	"EB(777)?": "Evgeny Bobryshev",
	"JVH(89)?": "Jeremy van Horebeek",
	"TS(100)?": "Tommy Searle",
	"TG(243)?": "Tim Gajser",
	"JT(911)": "Jordi Tixier",
	"SS(24)?": "Shaun Simpson"
	
};

for (var name in names) {

	// Add specifics to patterns
	var abbr = "(\\W|^)(" + name + ")(\\W|$)";
	var realName = names[name];
	
	// Replace old pattern with new pattern
	names[abbr] = realName;
	delete names[name];

}

// Get list of elements
var elements = new Array();
elements.push(document.getElementsByTagName('h1'));
elements.push(document.getElementsByTagName('a'));
elements.push(document.getElementsByTagName('span'));
elements.push(document.getElementsByClassName('body'));

// Remove unnecessary nesting in list
for (var i = elements.length - 1; i >= 0; i--) {
	for (var ii = elements[i].length - 1; ii >= 0; ii--) {
		elements.push(elements[i][ii]);
	}
	elements.splice(i, 1);
}

// Replace content
for (var i = elements.length - 1; i >= 0; i--) {
	var content = elements[i].innerHTML;
	for (var name in names) {
		var content = content.replace(new RegExp(name, 'g'), '$1<span style="border-radius:3px; background:rgba(255,255,0, .25);" title="$2">' + names[name] + '</span>$4');
	}
	elements[i].innerHTML = content;
}


