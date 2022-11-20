function changeMatrix(matrix) {
	return matrix.map(arr => {
		return arr.map(item => {
			if (item === 0) {
				return 'zero';
			} else {
				return 'one';
			}
		});
	});
}

module.exports = changeMatrix;