let studentArray = [];

$(document).ready(function ()
{
    $("button#submit").click(addStudentGrades);

    $("button#sortName").click(sortName);

    $("button#sortPercent").click(sortPercent);

    displayArray();
});

function sortName ()
{
    studentArray.sort(sortByName);
    displayArray();
}


function sortPercent ()
{
    studentArray.sort(sortByPercent);
    displayArray();
}

function displayArray()
{
   let theTable = $("tbody");

    theTable.empty();

    const start = 0;
    const stop = studentArray.length;
    for(let i = start; i < stop; i++)
    {
        let anItem = studentArray[i];

        let tableRow = $("<tr>");

        theTable.append(tableRow);

        let firstCell = $("<td>");
        tableRow.append(firstCell);
        firstCell.text(anItem.first);

        let lastCell = $("<td>");
        tableRow.append(lastCell);
        lastCell.text(anItem.last);

        let earnedCell = $("<td>");
        tableRow.append(earnedCell);
        earnedCell.text(anItem.earned);

        let possibleCell = $("<td>");
        tableRow.append(possibleCell);
        possibleCell.text(anItem.possible);

        let percentCell = $("<td>");
        tableRow.append(percentCell);
        percentCell.text(anItem.percent);
    }
}

function addStudentGrades(){

    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let pointEarned = parseFloat($("input#pointsEarned").val());
    let pointPossible =parseFloat($("input#pointsPossible").val());

    let student = {};

    student.first = firstName;
    student.last = lastName;
    student.earned = pointEarned;
    student.possible = pointPossible;

    let percentage = (pointEarned / pointPossible);

    student.percent = parseFloat((percentage * 100).toFixed(2));

    studentArray.push(student);

    displayArray();
}

function sortByName(a, b){

        if (a.first < b.first)
            return -1;
        else if (a.first > b.first)
            return 1;
        else
            return 0;
}

function sortByPercent(a,b){

    if (a.percent < b.percent)
        return -1;
    else if (a.percent > b.percent)
        return 1;
    else
        return 0;
}
