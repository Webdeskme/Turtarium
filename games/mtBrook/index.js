const term = new XTerminal()
// mount the terminal to page
term.mount('#encrypt');

// prompt style
const promptStyle = '$ ';

const numberWords = {
  "0": "xzeroq",
  "1": "xoneq",
  "2": "xtwoq",
  "3": "xthreeq",
  "4": "xfourq",
  "5": "xfiveq",
  "6": "xsixq",
  "7": "xsevenq",
  "8": "xeightq",
  "9": "xnineq"
};

const ln = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
	"K": 10,
	"L": 11,
	"M": 12,
	"N": 13,
	"O": 14,
	"P": 15,
	"Q": 16,
	"R": 17,
	"S": 18,
	"T": 19,
	"U": 20,
	"V": 21,
	"W": 22,
	"X": 23,
	"Y": 24,
	"Z": 25,
	"1": 26,
	"2": 27,
	"3": 28,
	"4": 29,
	"5": 30,
	"6": 31,
	"7": 32,
	"8": 33,
	"9": 34,
	"#": 35
}
const nl = {
	0: "A",
	1: "B",
	2: "C",
	3: "D",
	4: "E",
	5: "F",
	6: "G",
	7: "H",
	8: "I",
	9: "J",
	10: "K",
	11: "L",
	12: "M",
	13: "N",
	14: "O",
	15: "P",
	16: "Q",
	17: "R",
	18: "S",
	19: "T",
	20: "U",
	21: "V",
	22: "W",
	23: "X",
	24: "Y",
	25: "Z",
	26: "1",
	27: "2",
	28: "3",
	29: "4",
	30: "5",
	31: "6",
	32: "7",
	33: "8",
	34: "9",
	35: "#"
}
var t1 = [];
var t2 = [];
t1["A"] = ["D","R","Q","E","I","2","Y","P","O","A","3","Z","7","H","B","X","L","M","G","C","6","W","N","U","9","5","V","1","J","#","4","F","T","K","8","S"];
t1["B"] = ["R","9","P","3","Z","B","8","M","6","W","I","5","1","4","F","E","X","J","#","T","H","2","G","C","Q","U","Y","O","A","7","K","L","S","D","N","V"];
t1["C"] = ["E","3","Z","#","1","V","9","5","2","T","7","O","A","F","Y","G","N","U","M","4","B","S","P","H","I","6","R","W","C","J","L","8","K","X","Q","D"];
t1["D"] = ["W","2","F","S","Y","Z","6","L","Q","3","V","8","R","M","5","T","C","X","K","#","P","I","4","G","B","N","O","9","E","D","J","U","7","A","H","1"];
t1["E"] = ["9","Q","M","I","5","F","N","J","H","2","Z","U","O","K","L","3","E","A","7","S","4","B","#","T","P","C","8","6","W","1","D","X","V","R","G","Y"];
t1["F"] = ["U","C","S","H","K","#","A","V","E","N","4","D","L","I","7","6","O","Y","B","Q","3","G","2","9","T","R","J","X","8","F","Z","1","P","5","W","M"];
t1["G"] = ["V","Y","N","R","Q","6","F","G","5","1","9","P","I","C","H","D","K","#","E","A","U","O","X","J","8","M","B","Z","7","3","T","4","W","S","L","2"];
t1["H"] = ["5","U","T","6","4","G","J","S","X","8","H","K","F","3","#","O","1","V","2","9","E","N","W","R","C","D","M","L","Y","B","I","7","Q","Z","A","P"];
t1["I"] = ["N","G","7","P","J","K","E","1","T","H","M","A","U","V","D","Q","9","O","Z","B","S","4","I","2","#","W","X","C","6","5","Y","R","F","8","3","L"];
t1["J"] = ["2","B","L","V","8","5","H","X","P","I","Y","N","9","J","U","S","T","E","D","7","M","Z","K","#","F","G","6","Q","3","R","A","C","1","W","4","O"];
t1["K"] = ["6","H","K","B","L","M","C","D","G","Q","F","X","8","7","J","2","W","R","V","I","#","P","S","3","4","E","U","N","9","Y","1","A","Z","O","T","5"];
t1["L"] = ["M","J","W","U","T","E","7","2","D","L","C","S","4","9","3","5","Z","B","6","8","R","X","O","Y","A","V","#","K","F","H","Q","I","N","P","1","G"];
t1["M"] = ["Q","P","J","Z","U","L","G","A","4","B","5","C","6","D","X","I","3","W","1","V","K","F","7","S","M","T","N","H","2","O","R","E","Y","9","#","8"];
t1["N"] = ["C","T","V","4","D","7","W","Y","3","G","K","R","X","Z","1","H","6","8","F","P","I","#","B","Q","S","9","A","E","N","L","5","O","M","U","2","J"];
t1["O"] = ["G","#","1","M","A","D","3","O","S","4","J","W","C","Y","R","P","Q","6","5","F","V","K","Z","B","7","2","E","T","H","U","8","9","L","N","I","X"];
t1["P"] = ["4","K","R","L","E","A","S","9","7","M","X","3","G","O","W","F","B","Q","8","5","1","J","Y","Z","D","I","T","#","P","N","6","2","U","H","V","C"];
t1["Q"] = ["Y","8","G","9","P","H","L","#","U","O","Q","M","Z","T","4","R","D","7","3","W","C","6","E","A","N","J","F","5","1","I","S","K","2","V","X","B"];
t1["R"] = ["T","S","Y","K","R","1","2","8","I","#","D","9","E","5","O","4","H","N","L","M","Z","7","F","P","V","Q","W","3","G","X","U","6","J","C","B","A"];
t1["S"] = ["1","O","H","W","B","Q","5","4","8","R","2","F","V","G","P","A","J","K","T","E","N","9","C","X","6","L","Z","Y","D","S","#","M","3","7","U","I"];
t1["T"] = ["J","A","2","C","S","3","1","B","R","X","T","V","K","Q","I","U","5","F","H","N","9","E","6","8","W","Y","7","D","L","4","P","Z","G","M","O","#"];
t1["U"] = ["I","Z","U","1","6","8","P","C","F","V","O","H","2","X","N","7","#","T","A","D","L","Y","J","K","5","4","Q","B","S","W","E","G","R","3","M","9"];
t1["V"] = ["B","F","X","Y","N","U","4","E","M","Z","8","G","Q","A","C","V","S","3","R","1","J","5","D","7","L","#","H","P","I","9","W","T","O","2","K","6"];
t1["W"] = ["F","L","E","8","G","C","K","3","J","5","N","#","P","W","T","Y","V","I","9","O","A","U","R","1","X","7","4","M","Z","Q","2","S","6","B","D","H"];
t1["X"] = ["L","X","3","N","#","T","D","I","A","U","G","7","M","2","S","8","Y","Z","Q","6","W","C","9","O","E","1","K","J","5","P","B","V","H","F","R","4"];
t1["Y"] = ["H","4","D","F","X","J","T","R","#","P","L","E","N","1","A","B","2","9","Y","Z","7","M","V","I","K","3","C","G","Q","8","O","W","5","6","S","U"];
t1["Z"] = ["7","1","6","A","2","9","Z","H","Y","D","W","B","S","N","Q","J","M","4","C","X","8","R","U","L","O","F","I","V","K","T","G","P","E","#","5","3"];
t1["1"] = ["#","7","O","J","W","R","I","6","V","K","A","2","T","8","9","M","P","H","U","L","Y","D","5","F","1","B","3","S","4","C","N","Q","X","G","Z","E"];
t1["2"] = ["O","6","4","2","F","P","U","K","N","9","B","L","Y","#","M","W","A","D","S","3","G","Q","T","E","H","X","5","8","R","V","7","J","I","1","C","Z"];
t1["3"] = ["P","M","A","5","C","X","#","W","K","F","U","T","H","R","E","Z","I","2","O","Y","D","L","1","V","J","S","G","4","B","6","9","3","8","Q","7","N"];
t1["4"] = ["3","I","5","7","O","Y","Q","U","B","S","1","6","W","L","8","#","G","C","J","K","F","V","M","4","Z","H","9","2","T","A","X","N","D","E","P","R"];
t1["5"] = ["A","W","B","T","V","I","O","F","9","E","S","Y","D","P","Z","C","U","L","4","G","Q","3","H","N","2","8","1","R","X","K","M","5","#","J","6","7"];
t1["6"] = ["S","V","8","D","9","O","B","N","Z","7","R","Q","3","U","6","K","4","G","X","J","5","1","L","M","Y","P","2","I","#","E","C","H","A","T","F","W"];
t1["7"] = ["X","E","I","G","7","S","R","Z","W","C","#","1","J","B","V","N","8","5","P","H","2","T","Q","6","3","O","D","A","U","M","F","Y","4","L","9","K"];
t1["8"] = ["K","D","9","X","3","W","V","Q","1","J","E","I","#","6","2","L","F","P","N","U","O","A","8","5","R","Z","S","7","M","G","H","B","C","4","Y","T"];
t1["9"] = ["8","N","#","Q","M","4","X","7","C","6","P","J","5","S","K","9","R","1","I","2","T","H","3","W","G","A","L","U","O","Z","V","D","B","Y","E","F"];
t1["#"] = ["Z","5","C","O","H","N","M","T","L","Y","6","4","B","E","G","1","7","S","W","R","X","8","A","D","U","K","P","F","V","2","3","#","9","I","J","Q"];

t2["A"] = ["K","C","S","2","F","L","7","N","O","A","G","X","I","R","D","J","3","T","U","8","M","Z","E","H","5","W","B","Y","P","#","6","4","1","Q","9","V"];
t2["B"] = ["7","Q","N","L","3","1","M","T","J","W","5","G","B","#","S","D","C","9","V","I","F","X","Y","P","E","Z","U","8","6","2","O","A","4","R","K","H"];
t2["C"] = ["8","H","G","J","U","D","I","5","W","T","M","7","R","6","X","Z","V","E","2","Q","B","K","3","1","F","9","#","C","4","O","A","N","S","P","Y","L"];
t2["D"] = ["4","G","#","8","Z","I","A","2","C","V","O","6","T","E","R","Q","X","L","K","N","W","P","D","M","J","H","9","S","F","Y","3","U","B","5","1","7"];
t2["E"] = ["6","N","U","7","D","M","O","V","8","C","2","#","W","9","B","I","S","H","X","A","J","R","1","5","L","Q","Z","4","E","K","Y","3","F","T","P","G"];
t2["F"] = ["Q","1","M","Z","2","X","R","F","9","E","B","I","6","A","7","K","L","3","J","P","#","8","V","S","U","Y","O","H","N","W","T","5","G","4","C","D"];
t2["G"] = ["1","X","R","Y","W","8","4","#","3","U","6","P","N","5","Q","C","Z","2","9","S","A","H","J","7","O","V","T","D","M","E","F","B","I","G","L","K"];
t2["H"] = ["T","F","J","R","7","#","9","D","P","1","Z","W","Y","C","O","6","M","S","I","E","K","A","G","U","X","4","8","5","V","Q","H","L","2","3","N","B"];
t2["I"] = ["H","D","I","9","O","K","P","B","E","F","R","Q","4","N","8","Y","J","U","W","1","6","C","2","X","#","3","A","L","G","T","5","M","7","S","V","Z"];
t2["J"] = ["G","I","A","H","Y","P","5","W","L","J","T","N","F","U","4","1","8","Z","C","M","E","S","K","R","9","D","3","7","#","V","2","O","6","B","X","Q"];
t2["K"] = ["A","5","2","I","X","B","W","L","Q","H","J","O","9","Y","#","R","G","1","7","T","Z","6","S","F","D","P","K","N","3","8","C","V","U","E","4","M"];
t2["L"] = ["Z","Y","1","U","5","V","X","4","#","6","S","D","7","I","L","2","E","A","F","K","G","J","T","C","N","O","M","9","Q","B","R","P","H","8","W","3"];
t2["M"] = ["3","2","K","A","R","W","C","7","N","G","8","Y","H","1","9","T","#","M","6","V","Q","E","B","J","I","5","P","U","D","4","S","X","Z","L","F","O"];
t2["N"] = ["O","T","V","M","S","F","J","H","I","Q","L","2","Z","K","U","B","N","P","G","W","D","#","4","E","1","R","X","A","Y","7","8","C","3","9","6","5"];
t2["O"] = ["R","4","F","X","L","G","#","3","K","Y","U","B","O","W","M","7","1","C","D","6","2","I","H","N","V","8","J","P","T","Z","9","E","5","A","Q","S"];
t2["P"] = ["N","M","O","Q","K","R","T","J","H","L","W","A","E","3","6","P","7","D","8","5","9","4","X","B","Z","1","Y","G","U","C","V","2","#","F","S","I"];
t2["Q"] = ["S","7","6","C","9","Q","N","O","V","2","A","4","5","F","P","H","K","J","Y","G","T","1","Z","I","W","L","E","X","B","3","U","#","R","M","D","8"];
t2["R"] = ["M","R","T","1","C","4","F","9","D","Z","E","5","U","2","N","S","Q","K","H","B","3","G","8","6","Y","X","V","I","O","L","J","W","A","#","7","P"];
t2["S"] = ["#","A","3","G","1","5","2","C","7","8","V","U","J","Z","F","M","4","Q","S","O","L","B","P","T","H","I","D","6","9","X","K","Y","E","W","R","N"];
t2["T"] = ["B","6","E","S","H","N","U","Y","X","K","3","F","2","J","5","G","P","8","1","#","V","M","Q","A","C","7","L","R","W","D","Z","9","T","O","I","4"];
t2["U"] = ["E","U","Z","6","I","O","Y","X","4","S","K","9","C","H","W","A","B","G","R","3","8","T","M","2","7","N","Q","F","L","P","1","D","J","V","5","#"];
t2["V"] = ["P","S","B","K","J","7","6","U","Y","3","#","R","A","T","I","8","D","V","Z","4","O","Q","L","G","2","C","W","1","5","9","E","F","M","N","H","X"];
t2["W"] = ["L","Z","Q","E","A","Y","1","R","F","B","P","H","S","G","C","3","W","#","T","D","4","V","O","K","6","U","N","J","7","5","M","I","8","X","2","9"];
t2["X"] = ["Y","V","X","O","B","J","8","G","A","N","7","K","Q","P","Z","W","U","5","#","C","I","9","F","L","M","T","R","3","1","6","4","S","D","H","E","2"];
t2["Y"] = ["W","E","L","B","G","U","Z","1","R","P","D","J","K","8","2","#","5","4","M","9","X","O","N","3","S","6","7","T","C","I","Q","H","V","Y","A","F"];
t2["Z"] = ["F","#","9","4","Q","A","3","K","S","X","Y","E","V","L","T","N","R","7","P","U","C","5","I","O","8","G","H","B","J","1","D","Z","W","2","M","6"];
t2["1"] = ["2","W","C","5","4","E","L","Q","M","I","H","V","D","X","3","F","A","R","N","J","1","U","6","9","P","B","S","O","K","G","7","8","Y","Z","#","T"];
t2["2"] = ["X","8","4","V","E","H","G","A","2","O","N","S","M","B","1","L","Y","W","3","7","5","D","9","Q","T","J","F","K","R","U","#","6","P","I","Z","C"];
t2["3"] = ["C","L","7","W","#","Z","Q","M","T","5","I","8","P","4","K","9","2","F","O","H","R","Y","U","D","B","E","6","V","S","A","N","G","X","1","3","J"];
t2["4"] = ["U","O","Y","N","P","T","V","8","G","7","C","3","L","D","E","5","6","I","4","2","H","F","R","W","Q","M","1","#","Z","S","X","K","9","J","B","A"];
t2["5"] = ["D","K","P","3","T","C","S","6","U","#","4","1","G","M","H","V","9","O","E","X","N","L","W","8","A","2","5","Z","I","F","B","R","Q","7","J","Y"];
t2["6"] = ["5","B","W","P","8","6","E","Z","1","D","9","T","3","V","A","4","I","X","Q","F","Y","N","7","#","K","S","C","M","2","H","L","J","O","U","G","R"];
t2["7"] = ["9","3","D","#","M","2","K","S","6","4","X","Z","8","Q","J","O","F","N","B","Y","7","W","5","V","G","A","I","E","H","R","P","1","L","C","T","U"];
t2["8"] = ["V","J","8","T","6","9","H","I","5","M","Q","C","1","S","Y","E","O","B","A","L","P","3","#","Z","R","F","4","2","X","N","G","7","K","D","U","W"];
t2["9"] = ["I","P","5","D","V","S","B","E","Z","9","F","M","#","O","G","X","H","Y","L","R","U","7","C","4","3","K","2","Q","A","J","W","T","N","6","8","1"];
t2["#"] = ["J","9","H","F","N","3","D","P","B","R","1","L","X","7","V","U","T","6","5","Z","S","2","A","Y","4","#","G","W","8","M","I","Q","C","K","O","E"];

// write prompt style and prepare for input
function ask() {
    term.write(promptStyle);
    term.resume();
    //term.focus();
}

// capture data event
term.on('data', input => {
	//password sanitize
		var password = document.getElementById("password").value;
		password = password
			.replace(/[^a-zA-Z0-9.!? ]/g, "")   // Remove unwanted special characters
			.replace(/\s+/g, " ")                // Replace multiple spaces with one
			.trim()                             // Trim leading/trailing spaces
			.replace(/[0.!?\s]/g, "#")
			//.replace(/\d/g, (digit) => numberWords[digit])
			.toUpperCase();
    if (input == 'clear') {
        // clear screen
        term.clear();
        // print greeting message
		term.writeln('Type in text to encrypt or type help.');
    } 
    else if (input == 'help'){
		term.writeln('-> Password needs to be at least three charecters.');
		term.writeln('-> Passwords and text only take capital letters, numbers, spaces, and periods.');
		term.writeln('-> Type clear to clear the console.');
		term.writeln('-> Type exit to go back to the arcade.');
	}
	else if (input == 'exit'){
		window.location.href = "../../arcade/index.html";
	}
    else if (password.length >= 3){
        // write the input
        //term.writeln(input);
        // do something
        //term.writeln('Data: ' + input);
        //term.writeln('-> Try typing "help" for a list of comands.');
        
        
        //Sanatize data
        input = input
			.replace(/[^a-zA-Z0-9.!? ]/g, "")   // Remove unwanted special characters
			.replace(/\s+/g, " ")                // Replace multiple spaces with one
			.trim()                             // Trim leading/trailing spaces
			.replace(/[.!?\s]/g, "#")
			.replace(/\d/g, (digit) => numberWords[digit])
			.toUpperCase();
			
			//apply homophones
		input = input.replace(/E/g, () => {
			let options = ['E', '3', '8'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/T/g, () => {
			options = ['T', '7'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/A/g, () => {
			options = ['A', '6'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/O/g, () => {
			options = ['O', '9'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/I/g, () => {
			options = ['I', '1'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/N/g, () => {
			options = ['N', '2'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/S/g, () => {
			options = ['S', '5'];
			return options[Math.floor(Math.random() * options.length)];
		});
		input = input.replace(/H/g, () => {
			const options = ['H', '4'];
			return options[Math.floor(Math.random() * options.length)];
		});
		
		//Establish keys
		let k1 = password + input;
		let k2 = password[password.length - 1];
		k2 = k2 + input;
        //term.writeln('-> ' + k1 + ' k2: ' + k2);
        
        //let firstChar = k1.charAt(0);
        //let k1 = k1.slice(1);
        
        let en = "";
       ///////////////// term.writeln("-> text: " + input);
        //Loop through text and encrypt
        for (let char of input) {
		  //console.log(char);
		  let tk1 = k1.charAt(0);
          k1 = k1.slice(1);
          let tk2 = k2.charAt(0);
          k2 = k2.slice(1);
          let tin = input.charAt(0);
          input = input.slice(1);
          //term.writeln('k1: ' + tk1 + ' k2: ' + tk2);
          //term.writeln(ln["T"]);
          en = en + t2[t1[tk1][ln[tk2]]][ln[tin]];
          //term.writeln(en);
		}
		term.writeln('-> ' + en);
		navigator.clipboard.writeText(en);
		term.writeln('Note: Encrypted text has been coppied to cliboard.');
		term2.focus();
    }
    else{
		term.writeln('Please provide a password 3 charecters or longer in the password field.');
		}
    // then prompt user for more input
    ask();
});

// print greeting message
term.writeln('Type in text to encrypt or type help.');

// initiate
ask();
const term2 = new XTerminal()
// mount the terminal to page
term2.mount('#decrypt');
// write prompt style and prepare for input
function ask2() {
    term2.write(promptStyle);
    term2.resume();
    //term2.focus();
}
// capture data event
term2.on('data', input => {
	//password sanitize
		var password = document.getElementById("password").value;
		password = password
			.replace(/[^a-zA-Z0-9.!? ]/g, "")   // Remove unwanted special characters
			.replace(/\s+/g, " ")                // Replace multiple spaces with one
			.trim()                             // Trim leading/trailing spaces
			.replace(/[0.!?\s]/g, "#")
			//.replace(/\d/g, (digit) => numberWords[digit])
			.toUpperCase();
    if (input == 'clear') {
        // clear screen
        term2.clear();
        // print greeting message
		term2.writeln('Type in code to decrypt or type help.');
    } 
    else if (input == 'help'){
		term2.writeln('-> To decrypt make sure you type or copy in all of the text corectly.');
		term2.writeln('-> Type clear to clear the console.');
		term.writeln('-> Type exit to go back to the arcade.');
	}
	else if (input == 'exit'){
		window.location.href = "../../arcade/index.html";
	}
	else if (password.length >= 3){
		input = input
			.replace(/[^a-zA-Z0-9# ]/g, "")   // Remove unwanted special characters
			.replace(/\s+/g, " ")                // Replace multiple spaces with one
			.trim()                             // Trim leading/trailing spaces
			//.replace(/[.!?\s]/g, "#")
			//.replace(/\d/g, (digit) => numberWords[digit])
			.toUpperCase();
		var de = "";
		//determin k1 and k2
		let k1 = password;
		let k2 = password[password.length - 1];
		let dc = "";
		for (let char of input) {
			let tk1 = k1.charAt(0);
			k1 = k1.slice(1);
			let tk2 = k2.charAt(0);
			k2 = k2.slice(1);
			let tin = input.charAt(0);
			input = input.slice(1);
			//term2.writeln('t1: ' + t1[tk1][ln[tk2]] + ' tin: ' + tin);
			for (let i = 0; i < 36; i++) {
				if(t2[t1[tk1][ln[tk2]]][i] == tin){
					dc = dc + nl[i];
					k1 = k1 + nl[i];
					k2 = k2 + nl[i];
					//////////////term2.writeln(dc + ' tin: ' + tin + ' t1: ' + t1[tk1][ln[tk2]] + ' k1: ' + tk1 + ' k2: ' + tk2);
				}
			}
			//if(t2[t1[tk1][ln[tk2]]] != 'undefined'){
			/*for(let car of t2[t1[tk1][ln[tk2]]]){
				if(car == tin){
					//term2.writeln('dc: ' + t2[t1[tk1][ln[tk2]]][car] + ' d: ' + car);
					dC = dC + nl[car];
					k1 = k1 + nl[car];
					k2 = k2 + nl[car];
				}
				else{
					term2.writeln('dc: ' + t2[t1[tk1][ln[tk2]]][car] + ' car: ' + car + ' tin: ' + tin);
				}
			}*/
		//}
			//de = de + t2[t1[tk1][ln[tk2]]]
		}
		//Replace Homophone
		dc = dc.replaceAll('3', 'E');
		dc = dc.replaceAll('8', 'E');
		dc = dc.replaceAll('7', 'T');
		dc = dc.replaceAll('6', 'A');
		dc = dc.replaceAll('9', 'O');
		dc = dc.replaceAll('1', 'I');
		dc = dc.replaceAll('2', 'N');
		dc = dc.replaceAll('5', 'S');
		dc = dc.replaceAll('4', 'H');
		dc = dc.replaceAll('##', '. ');
		//dc = dc.replaceAll('#', ' ');
		dc = dc.replace(/#(?!$)/g, ' ').replace(/#$/, '.');
		dc = dc.replaceAll('XONEQ', '1');
		dc = dc.replaceAll('XTWOQ', '2');
		dc = dc.replaceAll('XTHREEQ', '3');
		dc = dc.replaceAll('XFOURQ', '4');
		dc = dc.replaceAll('XFIVEQ', '5');
		dc = dc.replaceAll('XSIXQ', '6');
		dc = dc.replaceAll('XSEVENQ', '7');
		dc = dc.replaceAll('XEIGHTQ', '8');
		dc = dc.replaceAll('XNINEQ', '9');
		dc = dc.replaceAll('XZEROQ', '0');
		dc = dc.charAt(0) + dc.slice(1).toLowerCase();
		dc = dc.replaceAll('. a', '. A');
		dc = dc.replaceAll('. b', '. B');
		dc = dc.replaceAll('. c', '. C');
		dc = dc.replaceAll('. d', '. D');
		dc = dc.replaceAll('. e', '. E');
		dc = dc.replaceAll('. f', '. F');
		dc = dc.replaceAll('. g', '. G');
		dc = dc.replaceAll('. h', '. H');
		dc = dc.replaceAll('. i', '. I');
		dc = dc.replaceAll('. j', '. J');
		dc = dc.replaceAll('. k', '. K');
		dc = dc.replaceAll('. l', '. L');
		dc = dc.replaceAll('. m', '. M');
		dc = dc.replaceAll('. n', '. N');
		dc = dc.replaceAll('. o', '. O');
		dc = dc.replaceAll('. p', '. P');
		dc = dc.replaceAll('. q', '. Q');
		dc = dc.replaceAll('. r', '. R');
		dc = dc.replaceAll('. s', '. S');
		dc = dc.replaceAll('. t', '. T');
		dc = dc.replaceAll('. u', '. U');
		dc = dc.replaceAll('. v', '. V');
		dc = dc.replaceAll('. w', '. W');
		dc = dc.replaceAll('. x', '. X');
		dc = dc.replaceAll('. y', '. Y');
		dc = dc.replaceAll('. z', '. Z');
		dc = dc.replaceAll(' i ', ' I ');
		term2.writeln('-> ' + dc);
		term.focus();
	}
    else {
        term2.writeln('Please provide a password 3 charecters or longer in the password field.');
    }
    ask2();
});
// print greeting message
term2.writeln('Type in code to decrypt or type help.');
// then prompt user for more input
ask2();
