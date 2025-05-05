const term = new XTerminal()
// mount the terminal to page
term.mount('#encrypt');

// prompt style
const promptStyle = '$ ';

// write prompt style and prepare for input
function ask() {
    term.write(promptStyle);
    term.resume();
    term.focus();
}
term.focus();
// capture data event
term.on('data', input => {
    if (input == 'clear') {
        // clear screen
        term.clear();
        // print greeting message
		term.writeln('Type in text to encrypt or type help.');
    } 
    else if (input == 'ls'){
		term.writeln('-> 1: Simple Block Pushing Game');
	}
    else if (input == "1"){
        //window.open("../games/Simple Block Pushing Game.html", "_blank");
        window.location.href = "../games/Simple Block Pushing Game.html";
    }
    else if (input == "exit"){
        //window.open("../games/Simple Block Pushing Game.html", "_blank");
        window.location.href = "../cities/lift.html";
    }
    else{
		term.writeln('Please type a listed comand.');
		}
    // then prompt user for more input
    ask();
});
