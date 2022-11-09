const changeMatrix = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть двумерный массив тех же размеров', () => {
	const testArr = [
		[0, 1],
		[0, 0]
	]

	const res = changeMatrix(testArr);

	expect(Array.isArray(res)).toBe(true);
	expect(res.length).toBe(2);
	expect(Array.isArray(res[0])).toBe(true);
	expect(res[0].length).toBe(2);
});

test('Тест. 2х2', () => {
	const testArr = [
		[0, 1],
		[0, 0]
	];

	const res = changeMatrix(testArr);

	for (let i = 0; i < testArr.length; i++) {
		const testRow = testArr[i];
		const userRow = res[i];

		for (let j = 0; j < testRow.length; j++) {
			const testCell = testRow[j];
			const userCell = userRow[j];

			if (testCell === 0) {
				expect(userCell).toBe('zero');
			} else if (testCell === 1) {
				expect(userCell).toBe('one');
			}
		}
	}
});

test('Тест. 8х6', () => {
	const testArr = [
		[ 0, 0, 0, 0, 0, 1 ],
		[ 1, 1, 0, 1, 0, 0 ],
		[ 0, 0, 0, 0, 1, 0 ],
		[ 1, 0, 1, 1, 0, 0 ],
		[ 0, 1, 0, 0, 1, 1 ],
		[ 1, 0, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 1, 0 ],
		[ 1, 0, 1, 0, 1, 1 ]
	];

	const res = changeMatrix(testArr);

	for (let i = 0; i < testArr.length; i++) {
		const testRow = testArr[i];
		const userRow = res[i];

		for (let j = 0; j < testRow.length; j++) {
			const testCell = testRow[j];
			const userCell = userRow[j];

			if (testCell === 0) {
				expect(userCell).toBe('zero');
			} else if (testCell === 1) {
				expect(userCell).toBe('one');
			}
		}
	}
});

test('Тест. 5х9', () => {
	const testArr = [
		[ 1, 0, 0, 0, 1, 0, 0, 1, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
		[ 0, 0, 1, 0, 1, 0, 0, 1, 0 ],
		[ 1, 1, 0, 0, 0, 1, 0, 0, 0 ],
		[ 0, 0, 1, 1, 0, 0, 0, 0, 1 ]
	];

	const res = changeMatrix(testArr);

	for (let i = 0; i < testArr.length; i++) {
		const testRow = testArr[i];
		const userRow = res[i];

		for (let j = 0; j < testRow.length; j++) {
			const testCell = testRow[j];
			const userCell = userRow[j];

			if (testCell === 0) {
				expect(userCell).toBe('zero');
			} else if (testCell === 1) {
				expect(userCell).toBe('one');
			}
		}
	}
});

test('Тест. 11х9', () => {
	const testArr = [
		[ 0, 0, 1, 0, 1, 0, 1, 0, 1 ],
		[ 0, 0, 0, 1, 0, 0, 0, 1, 1 ],
		[ 1, 1, 0, 1, 0, 1, 0, 0, 1 ],
		[ 0, 0, 0, 0, 1, 0, 1, 0, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0, 0, 1 ],
		[ 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
		[ 1, 1, 1, 1, 0, 1, 0, 0, 1 ],
		[ 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
		[ 1, 1, 0, 0, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 1, 0, 1, 1, 0, 0 ],
		[ 0, 1, 0, 1, 1, 1, 0, 0, 1 ]
	];

	const res = changeMatrix(testArr);

	for (let i = 0; i < testArr.length; i++) {
		const testRow = testArr[i];
		const userRow = res[i];

		for (let j = 0; j < testRow.length; j++) {
			const testCell = testRow[j];
			const userCell = userRow[j];

			if (testCell === 0) {
				expect(userCell).toBe('zero');
			} else if (testCell === 1) {
				expect(userCell).toBe('one');
			}
		}
	}
});

test('Auto: random outcomes', () => {
	const generateMatrix = () => {
		const rowsAmount = getRandomInt(1, 15);
		const cellsAmount = getRandomInt(1, 15);

		const matrix = [];

		for (let i = 0; i < rowsAmount; i++) {
			const row = [];

			for (let j = 0; j < cellsAmount; j++) {
				const rand = getRandomInt(0, 1);

				if (rand) {
					row.push(1);
				} else {
					row.push(0);
				}
			}

			matrix.push(row);
		}

		return matrix;
	};

	for (let i = 0; i < 10; i++) {
		const matrix = generateMatrix();

		const solutionResult = solution(matrix);
		const userResult = changeMatrix(matrix);

		expect(userResult).toEqual(solutionResult);
	}
});