function changeMatrix(matrix) {
	const newMatrix = [];
	for (const row of matrix) {
		const matrixRow = [];
		for (const item of row) {
			if (item === 0) {
				matrixRow.push('zero');
			} else {
				matrixRow.push('one');
			}
		}
		newMatrix.push(matrixRow);
	}
	return newMatrix;
}

module.exports = changeMatrix;