var job = ["Artist", "Designer", "Journalist","Programmer"];
var city = ["New York", "Orlando", "San Antonio", "Las Vegas"];
var spouse = ["HueningKai", "Yunho", "Hoseok", "Taemin"];
var numKids = [0, 5, 4, 1]; 

var xx = Math.floor(Math.random() * 4 )

function fortune(job, city, spouse, numKids) {

document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");

}

fortune (job[xx], city[xx], spouse[xx], numKids[xx])
