const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

console.log(getRow(firstRow, secondRow));

function getRow(firstRow, secondRow) {
  const charCode = 1072;
  return getCountCharCodeInRow(charCode, firstRow) >
    getCountCharCodeInRow(charCode, secondRow)
    ? firstRow
    : secondRow;
}

function getCountCharCodeInRow(charCode, row) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (charCode === row.charCodeAt(i)) {
      count = count + 1;
    }
  }
  return count;
}
