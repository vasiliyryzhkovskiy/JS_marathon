const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
const CHAR_CODE = 1072;

console.log(getRow(firstRow, secondRow));

function getRow(firstRow, secondRow) {
  return getCountCharCodeInRow(CHAR_CODE, firstRow) >
    getCountCharCodeInRow(CHAR_CODE, secondRow)
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
