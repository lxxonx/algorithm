const today = new Date();
// format = "2015-01-24"

const year = today.getFullYear();
const month =
  today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

const todayDate = `${year}-${month}-${date}`;

console.log(todayDate);
