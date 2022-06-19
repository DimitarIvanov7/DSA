const arr = [1, 2, 3, 4, 5, 9, 10];

const binanarySearch = (nums, target) => {
	let min = 0;
	let max = nums.length - 1;

	while (max >= min) {
		let mid = Math.floor((min + max) / 2);

		if (nums[mid] === target) return mid;

		if (nums[mid] > target) max = mid - 1;
		else min = mid + 1;
	}

	return;
};

const test = binanarySearch(arr, -1);

console.log(test);
