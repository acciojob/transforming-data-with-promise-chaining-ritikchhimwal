//your JS code here. If required.
const output = document.getElementById('output');
const button = document.getElementById('btn');

function startPromiseChaining() {
	button.setAttribute('disabled', true);
	const inputNum = document.getElementById('ip').value;

	const firstPromise = new Promise((resolve) => {
		setTimeout(() => {
			output.innerText = `Result: ${inputNum}`;
			resolve(inputNum);
		},2000)
	})

	firstPromise.then((res) => {
		res *= 2;
		return new Promise((resolve) => {
			setTimeout(() => {
				output.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res -= 3;
		return new Promise((resolve) => {
			setTimeout(() => {
				output.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res /= 2;
		return new Promise((resolve) => {
			setTimeout(() => {
				output.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res += 10;
		return new Promise((resolve) => {
			setTimeout(() => {
				output.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		output.innerText = `Final Result: ${res}`;
		button.removeAttribute('disabled');
	})
}