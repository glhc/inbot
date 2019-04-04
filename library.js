'use strict';
//library to make main file bot.js more clear

//generates an instagram url from a user in format "@username"
async function getProfileFromUser (username) {
	if (typeof username === "string") {
		if (username[0] === "@") {
			username = username.slice(1);
		}
			return "https://www.instagram.com" + username
	} else {
		reject("input is not a string");
	}
};

// navigates to first picture when given an Insta first page
async function loadFirstImage (profileLink) {
	await page.goto(profileLink);
	await page.$$eval('._9AhH0', elements => elements[0].click()); // open image
	await page.$$eval('_0mzm- sqdOP yWX7d    _8A5w5    '); // open likers
};

// scroll through all likers (must include account for <= 10 likers)
async function populateLikers () {
};

// generates an array (?) of users who have liked the image
async function readLikers () {

};