const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let months = ["january","february","march","april","may","june","july","august","september","october","november","december"];

date.innerHTML=(today.getDate()<10)?"0"+today.getDate():""+today.getDate();
day.innerHTML=days[today.getDay()];
month.innerHTML=months[today.getMonth()];
year.innerHTML=today.getFullYear();