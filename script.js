//your JS code here. If required.
let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	square.addEventListener("mouseover", (event) => {
		squares.forEach((sq) => {
			sq.style.backgroundColor = '#6F4E37';
		});
		event.target.style.backgroundColor = '#E6E6FA';
	});

	square.addEventListener("mouseout", () => {
		squares.forEach((sq) => {
			sq.style.backgroundColor = '#E6E6FA';
		});
	});
});