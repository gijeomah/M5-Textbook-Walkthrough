/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Genesis Ijeomah
     Date:   2/5/2026

     Filename: js03.js
 */
let weekDays = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday", "Saturday"];
window.addEventListener("load", addWeekDays);
function addWeekDays() {
    console.log("Function Called")
    let i = 0;
    let headingCells = document.getElementsByTagName("th");
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}
window.addEventListener("load", showGames);
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";
        //open paragraph 
        switch(gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;

        }
        //gameInfo += "<p>";
        //gameInfo += gameResults[i] + ": (" + runsScored[i]+ " - " + runsAllowed[i] + ")";
        //include the result score
        if (gameLocations[i] === "h"){
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a"){
            gameInfo += " @ ";
        }
        gameInfo += gameOpponents[i] + "<br>";
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
        //display innings
        if (gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i]+"]***";
        }else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i]+"]*";
        }else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        }
        gameInfo += "</p>";
    
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}
