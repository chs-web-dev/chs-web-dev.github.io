const calendarPrevious = document.getElementById("calendar-previous");
const calendarNext = document.getElementById("calendar-next");

const monthTitle = document.getElementById("month");

const monthStartingDates = {
    "sept": "5",
    "oct": "0",
    "nov": "3",
    "dec": "5",
    "jan": "1",
    "feb": "4",
    "mar": "5",
    "apr": "1",
    "may": "3",
    "jun": "6",
}
const monthLengths = {
    "sept": "30",
    "oct": "31",
    "nov": "30",
    "dec": "31",
    "jan": "31",
    "feb": "29",
    "mar": "31",
    "apr": "30",
    "may": "31",
    "jun": "30",
}

let currentMonth = "sept";
const months = ["sept", "oct", "nov", "dec", "jan", "feb", "mar", "apr", "may", "jun"];
const monthArrays = [
    ["September", "2023", ["26"]],
    ["October", "2023", ["10", "24"]],
    ["November", "2023", ["14", "28"]],
    ["December", "2023", ["12"]],
    ["January", "2024", ["9", "23"]],
    ["February", "2024", ["13", "27"]],
    ["March", "2024", ["12"]],
    ["April", "2024", ["9", "23"]],
    ["May", "2024", ["28"]],
    ["June", "2024 - No classes!", []],
];

calendarPrevious.addEventListener("click", () => {
    currentMonth = months[months.indexOf(currentMonth) - 1];
    renderCalendar(currentMonth, monthArrays[months.indexOf(currentMonth)]);
});

calendarNext.addEventListener("click", () => {
    currentMonth = months[months.indexOf(currentMonth) + 1];
    renderCalendar(currentMonth, monthArrays[months.indexOf(currentMonth)]);
});

renderCalendar(currentMonth, monthArrays[months.indexOf(currentMonth)]);

function renderCalendar(monthAbbr, month) {
    if (monthAbbr == "sept") {
        calendarPrevious.setAttribute("disabled", "");
    } else {
        calendarPrevious.removeAttribute("disabled");
    }
    if (monthAbbr == "jun") {
        calendarNext.setAttribute("disabled", "");
    } else {
        calendarNext.removeAttribute("disabled");
    }
    document.getElementById("calendar-table").innerHTML = "";
    const sunday = document.createElement("th");
    sunday.innerHTML = "Sunday";
    const monday = document.createElement("th");
    monday.innerHTML = "Monday";
    const tuesday = document.createElement("th");
    tuesday.innerHTML = "Tuesday";
    const wednesday = document.createElement("th");
    wednesday.innerHTML = "Wednesday";
    const thursday = document.createElement("th");
    thursday.innerHTML = "Thursday";
    const friday = document.createElement("th");
    friday.innerHTML = "Friday";
    const saturday = document.createElement("th");
    saturday.innerHTML = "Saturday";
    const calendarThead = document.createElement("thead");
    const calendarTr = document.createElement("tr");
    calendarTr.appendChild(sunday);
    calendarTr.appendChild(monday);
    calendarTr.appendChild(tuesday);
    calendarTr.appendChild(wednesday);
    calendarTr.appendChild(thursday);
    calendarTr.appendChild(friday);
    calendarTr.appendChild(saturday);
    calendarThead.appendChild(calendarTr);
    document.getElementById("calendar-table").appendChild(calendarThead);

    monthTitle.innerHTML = month[0] + " " + month[1];
    const monthTbody = document.createElement("tbody");
    monthTbody.id = monthAbbr;
    monthTbody.style.display = "table-row-group";
    
    let monthArr = [];
    for (let i = 0; i < parseInt(monthStartingDates[monthAbbr]); i++) {
        monthArr.push("");
    }
    for (let i = 0; i < parseInt(monthLengths[monthAbbr]); i++) {
        monthArr.push(i + 1);
    }

    let week = document.createElement("tr");
    for (let i = 0; i < 50; i++) {
        if (i % 7 == 0 && i != 0) {
            monthTbody.appendChild(week);
            week = document.createElement("tr");
        }
        let day = document.createElement("td");
        if (monthArr[i] != null) {
            day.innerHTML = monthArr[i];
            if (month[2].includes(monthArr[i].toString())) {
                day.classList.add("calendar-meeting");
            }
        }
        week.appendChild(day);
    }

    document.getElementById("calendar-table").appendChild(monthTbody);
}