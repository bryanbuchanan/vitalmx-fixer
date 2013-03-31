var names = {
	"RV(2|1)?": "Ryan Villopoto",
	"BB(4|1)?": "Blake Baggett",
	"RD(5)?": "Ryan Dungey",
	"JS(7)?": "James Stewart",
	"IT(9)": "Ivan Tedesco", // Number required to avoid conflicts with common words
	"JB(10)?": "Justin Brayton",
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
	"CR(22)": "Chad Reed", // Number required to avoid conflicts with bike name
	"BM(24)?": "Bret Metcalfe",	
	"MM(25)": "Marvin Musquin", // Number required to avoid conflicts with common words
	"MB(26)?": "Michael Byrne",
	"NW(27)?": "Nick Wey",
	"TR(28)?": "Tyla Rattray",
	"AS(29)?": "Andrew Short",
	"JG(33)": "Josh Grant",
	"TC(41)": "Trey Canard", // Number required to avoid conflicts with bike name
	"JB(51)?": "Justin Barcia",
	"JH(75)?": "Josh Hill",
	"KR(94)?": "Ken Roczen",
	"MA(800)": "Mike Alessi" // Number required to avoid conflicts with common words
};

var content = document.body.innerHTML;
for (var name in names) var content = content.replace(new RegExp(name, 'g'), names[name]);
document.body.innerHTML = content;

/* Target only post content (not done)
var menus = document.getElementsByClassName('body');
for (var i = menus.length - 1; i >= 0; i--) {
  menus[i].className = "style1";
}
*/