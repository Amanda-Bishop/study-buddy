var p = [];

//var k = {"key":"value"};
//p.push(k);
//console.log(p);
const fs = require('fs') 
fs.readFile('students.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    //console.log(data); 
    var user = {};
    var line = "MATH ECE"
    var courses = line.split(' ');
    user["courses"] = [];
    for (var course=0; course<courses.length; course++) {
        user["courses"].push(courses[course]);
    }
   // console.log(user["courses"]);
    var lines = data.split('-');
    //console.log(lines[0]);
    for(var line = 0; line < lines.length; line++){
       // console.log('-----');
     // console.log(lines[line]);
    }
}) 

function readInFile() {
    
    const fs = require('fs') 
    try {
        let data = fs.readFileSync('students.txt', 'utf-8');
        return formatData(data);
    } catch (error) {
        console.log("unable to read file: ", error);
    }
   
}

function formatData(data) {
        var ppl = data.split('-');
        var i = 0;
        var people = [];
        for (var person=0; person < ppl.length; person++){
            var line = ppl[person].split('\n');
            var user = {};
            user["name"] = line[i];
            user["term"] = line[i+1];
            var courses = line[i+2].split(' ');
            user["courses"] = [];
            for (var course=0; course<courses.length; course++) {
                user["courses"].push(courses[course]);
            }
            user["timezone"] = line[i+3];
            var habits = line[i+4].split(' ');
            user["tod"] = habits[0];
            user["focus"] = habits[1];
            user["style"] = habits[2];
            people.push(user);
            if (person == 0) {
                i++;
            }
        }
        return(people);
}

let l = readInFile();
console.log("------");
console.log(l);