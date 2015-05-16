var matrixZero = function (matrix) {
  var matrixCopy = matrix,
      matrixZeroFunction = function(elem){return 0;};

  for (var row = 0; row < matrixCopy.length; row++){
    for (var column = 0; column < matrixCopy[row].length; column++){
      if (matrixCopy[row][column] === 0) {
        matrixCopy[row] = matrixCopy[row].map(matrixZeroFunction);
        break;
      }
    }
  }
  return matrixCopy;
};

console.log(matrixZero( [[1,2,3,4],[0,5,2,8,0],[7,3,7,0,1],[9,7,5,3,1]] ));
