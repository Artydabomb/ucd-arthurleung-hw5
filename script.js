//Display current time & date in jumbotron
var DateTime = luxon.DateTime;
var dt = DateTime.local();
var displayDate = $("#currentDay");
displayDate.text(dt.toLocaleString(DateTime.DATE_HUGE));

//if statement -> if current time (luxon feature) > div time i.e. line 25, then do the formatting according to CSS. Nest this inside a for loop.
var x = { hour: "numeric", minute: "numeric", second: "numeric" };
var currentTime = dt.toLocaleString(x);
//test: console.log("test " + currentTime);
var newdt = dt.set({ hour: 22 });
//test: console.log(newdt.toLocaleString(x));

if (dt < newdt) {
    test: console.log("true");
};

//create save icon. do click event to store the inputted text into local storage. refresh should not remove text inputted by user.

