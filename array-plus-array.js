// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//     P.S.Each array includes only integer numbers.Output is a number too.

function arrayPlusArray(arr1, arr2) {
  var addArray1 = 0;
  var addArray2 = 0;
  for (var i = 0; i < arr1.length; i++) {
    addArray1 = addArray1 + arr1[i];
  }
  for (var i = 0; i < arr2.length; i++) {
    addArray2 = addArray2 + arr2[i];
  }

  return addArray1 + addArray2;
}
