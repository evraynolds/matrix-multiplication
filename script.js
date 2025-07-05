const root = document.getElementById("root");

function getInputValues(elems, colNum) {
  return Array.from(elems).reduce((acc, elem, index) => {
    if (index % colNum === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(Number(elem.value));

    return acc;
  }, []);
}

function multiplyMatrices(matrix1, matrix2) {
  let result = [
    [0, 0],
    [0, 0],
  ];
  let temp;
  // matrix1 col count
  for (let i = 0; i < matrix1.length; i++) {
    // matrix2 row count
    for (let l = 0; l < matrix2[0].length; l++) {
      // matrix1 row count
      for (let j = 0; j < matrix1[0].length; j++) {
        temp = matrix1[i][j] * matrix2[j][l];
        result[i][l] += temp;
      }
    }
  }
  return result;
}

document.getElementById("calculate").addEventListener("click", () => {
  const matrixOneElems = document.getElementsByClassName("matrix-one-entry");
  const matrixTwoElems = document.getElementsByClassName("matrix-two-entry");

  const matrixOneValues = getInputValues(matrixOneElems, 3);
  const matrixTwoValues = getInputValues(matrixTwoElems, 2);

  const result = multiplyMatrices(matrixOneValues, matrixTwoValues);
  const half = Math.floor(result.length / 2);
  const firstRow = result.slice(0, half);
  const secondRow = result.slice(half);

  const sum = document.createElement("div");
  const row1 = document.createElement("div");
  const row2 = document.createElement("div");

  row1.innerText = firstRow;

  row2.innerText = secondRow;
  root.appendChild(sum);
  sum.appendChild(row1);
  sum.appendChild(row2);
  sum.className = "result";
});
