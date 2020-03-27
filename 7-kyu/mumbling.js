// This time no story, no theory.The examples below show you how to write function accum:

//     Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  const multiplyLetters = s
    .split("")
    .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
    .join("-");
  return multiplyLetters;
}
