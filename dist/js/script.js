let numbers = document.querySelectorAll(
	"ul button[number], ul button[calculation]",
);
let clear = document.querySelector("ul button[clear]");
let del = document.querySelector("ul button[del]");
let output = document.querySelector(".output");
let equal = document.querySelector("ul button[equal]");
numbers.forEach(function (el) {
	el.onclick = function () {
		if (output.classList.contains("val")) {
			output.innerHTML = "0";
		}
		output.innerHTML = output.innerHTML.trim();
		el.innerHTML = el.innerHTML.trim();
		if (output.innerHTML.length >= 14) {
			alert("max nums!");
		} else {
			output.innerHTML += el.innerHTML;
			if ([...output.innerHTML][0] == "0") {
				output.innerHTML = output.innerHTML.slice(1);
			}
		}
	};
});

clear.onclick = function () {
	output.innerHTML = "0";
};

equal.onclick = function () {
	try {
		output.innerHTML = `${eval(output.innerHTML).toFixed(5)}`;
	} catch {
		alert("calculation is not valid!");
	}
};

del.onclick = function () {
	let inner = output.innerHTML;
	output.innerHTML = Array.from(inner)
		.slice(0, Array.from(inner).length - 1)
		.join("");
	if (output.innerHTML.length === 0) {
		output.innerHTML = "0";
	}
};
