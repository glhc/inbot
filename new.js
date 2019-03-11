// New, better code.
"use strict";

// Initialisation
const moment - require("moment-timezone"); // library for timezone logic
const TelegramBot = require('node-telegram-bot-api');
const token = ''; // <-- Unique Telegram Bot token
const chat_id = "";
const bot = new TelegramBot(token, { polling: true });

moment.tz.setDefault("America/Tijuana"); // Set PST as default

let accounts = [];
let roundTimes = [
	moment({hour: 13}),
	moment({hour: 15, minute: 30}), // needs minutes
	moment({hour: 18}),
	moment({hour: 20, minute: 30}), // needs minutes
	moment({hour: 23}),
];

function tMinus45() {
	// output t-45 message
	bot.sendMessage("Next round starts in 45 minutes, please get ready to " + 
		"submit your account name. Do not post your username until I've said to " + 
		"or else you'll miss the round.");
};

function tMinus30() {
	bot.sendMessage("Comment your Instagram @accountname now to get added to " + 
	"the next engagement round.");
};

function tMinus10() {
	bot.sendMessage("10 minutes left to post your Instagram @accountname " + 
		"for inclusion in this engagement round");
};

function roundStart() {
	bot.sendMessage("The round starts now! DM @starspullingmyhairbot to get " + 
		"the list of Instagram accounts and like on the most recent post for " + 
		"each account.");
};

// Maybe tPlus40, tPlus60 & tPlus80 can be combined?
function tPlus40() {

};

function tPlus60() {

};

function tPlus80() {

};

// Define array of round start times in JSON format
JSON.parse(xxx) // <-- xxx filled with default vals, modified by user

// Bot command section
bot.onText(/\/help/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
}); 