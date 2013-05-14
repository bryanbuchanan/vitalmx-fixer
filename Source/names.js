var names = {
	"RV(2|1)?": "Ryan Villopoto",
	"BB(4|1)?": "Blake Baggett",
	"RD(5|1)?": "Ryan Dungey",
	"JS(7)?": "James Stewart",
	"IT(9)": "Ivan Tedesco", // IT is too common of a word, so number is required
	"JB(10)": "Justin Brayton", // Number is required to avoid conflicts with Barcia, who is more likely to be referenced
	"KC(11)?": "Kyle Chisholm",
	"JW(12)?": "Jake Weimer",
	"BW(13)?": "Blake Wharton",
	"KW(14)?": "Kevin Windham",
	"DW(15)?": "Dean Wilson",
	"JD(16)?": "John Dowd",
	"ET(17|1)?": "Eli Tomac",
	"DM(18)?": "Davi Millsaps",
	"WH(19)?": "Will Haun",
	"BT(20)?": "Broc Tickle",
	"CR(22)": "Chad Reed", // CR is too common of a word, number required
	"BM(24)?": "Bret Metcalfe",	
	"MM(25)?": "Marvin Musquin",
	"MB(26)?": "Michael Byrne",
	"NW(27)?": "Nick Wey",
	"TR(28)?": "Tyla Rattray",
	"AS(29)?": "Andrew Short",
	"JG(33)?": "Josh Grant",
	"TC(41)?": "Trey Canard",
	"JB(51)?": "Justin Barcia",
	"JH(75)?": "Josh Hill",
	"KR(94)?": "Ken Roczen",
	"MA(800)?": "Mike Alessi",
	"AC(92|292)?": "Adam Cianciarulo"
};

for (var name in names) {

	// Add specifics to patterns
	var abbr = "(\\W|^)" + name + "(\\W|$)";
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

// Organize list of elements
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
		var content = content.replace(new RegExp(name, 'g'), '$1<span style="border-radius:3px; background:rgba(255,255,0, .25);">' + names[name] + '</span>$3');
	}
	elements[i].innerHTML = content;
}
