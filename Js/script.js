var fs = require('fs');

function information() {
    var date_input = document.getElementById("Date");
    var feedback_input = document.getElementById("Feedback");

    document.write(date_input + feedback_input)
}


fs.writeFileSync('test.txt', date_input )
fs.writeFileSync('test.txt', feedback_input )
console.log("test");