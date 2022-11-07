function generate() {
	const num = Number(document.getElementById("data").value);
	if (!num) {
		alert("Please Enter the number");
	} else {
		let x = " ";
		let img ="<img src='https://cdn2.vectorstock.com/i/1000x1000/15/21/gift-box-icon-cartoon-vector-13581521.jpg'/>  ";
		const gift = document.querySelector(".gift");
		gift.innerHTML = "";
		for (let i = 0; i < num; i++) {
			x += img;
		}
		console.log(gift);
	    gift.innerHTML = x;
	}
}
