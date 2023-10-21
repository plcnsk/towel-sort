module.exports = function towelSort (matrix) {

  let result = [];

  if (matrix && Array.isArray(matrix)) {

    let modifiedMatrix = matrix;

    for (let i = 0; i < modifiedMatrix.length; i++) {
      if (i % 2 !== 0) {
        modifiedMatrix[i].reverse();
      }
    }
  
    for (let i = 0; i < modifiedMatrix.length; i++) {
      for (let j = 0; j < modifiedMatrix[i].length; j++) {
        let number = modifiedMatrix[i][j];
        result.push(number);
      }
    }

    return result;

  } else {

    return [];
    
  }
}