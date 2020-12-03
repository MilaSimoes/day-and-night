let date = new Date();
let now = date.getHours() +1;
let morningSun = document.querySelector('#morningSun');
let noonSun = document.querySelector('#noonSun');
let midnightMoon = document.querySelector('#midnightMoon');
let stars = document.querySelector('#stars');
let text = document.querySelector('#text');

// Changes the background color depending on the hour of the day 
function changebg(){
	if(now >= 4 && now <= 11){
		document.body.style.background = 'linear-gradient(#14baf0,#faeda6)';
		morningSun.style.display = 'block';
		text.textContent = 'Good Morning';
	} else if(now >= 12 && now <= 17) {
		document.body.style.background = 'linear-gradient(-20deg,#efb043,#f8c563,#f3e6ac)';
		noonSun.style.display = 'block';
		text.textContent = 'Good Afternoon';
	} else {
		document.body.style.background = 'linear-gradient(#011259,#0b0b4d,#310496)';
		midnightMoon.style.display = 'block';
		stars.style.display = 'block';
		text.textContent = 'Good night';
	}
}

changebg()

