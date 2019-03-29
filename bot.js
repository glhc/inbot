// New, better code.
"use strict";

// Initialisation
const moment - require("moment-timezone"); // library for timezone logic
const TelegramBot = require('node-telegram-bot-api');
const token = ''; // <-- Unique Telegram Bot token
const chat_id = "";
const bot = new TelegramBot(
	"API_TOKEN_HERE", // bot token from BotFather
  { polling: true }
 );
const admin = {
	igAccount:"@starspullingmyhair",
	tgUsername:"@starspullingmyhair",
	tgUserId:"",
};

const commands = [  //store list of commands to send to BotFather
	"/start",
	"/help",
	"/warn",
	"/removewarn",
	"/removeallwarns",
	"/rounds",
	"/leave",
	"/swap",
	"/admin",
	"/ban"
];

moment.tz.setDefault("America/Tijuana"); // Set PST as default

let warnedList = new Object(); // Object to track warnings.
let accounts = []; // array to hold usernames for a round. Might need object.
let roundTimes = [
	moment({hour: 13}),
	moment({hour: 15, minute: 30}),
	moment({hour: 18}),
	moment({hour: 20, minute: 30}),
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

bot.onText(  // change start times

);

function changeStartTimes (newTimes) {

bot.sendMessage("All times are in PST. Type \"\\done\" when finished setting " + 
	"rounds.");
// probably implement a loop which parses all replies for round times
// if the reply matches "done", end round setting function.
	bot.SendMessage("Please enter start time of round.");

};

// Maybe tPlus40, tPlus60 & tPlus80 can be combined?
function tPlus40(percentCompleted) {
	//chain 
	bot.sendMessage("We're " + percentCompleted + "of the way there!");
};

function tPlus60(percentCompleted) {
	bot.sendMessage("We're " + percentCompleted + "of the way there!");
};

function tPlus80(percentCompleted) {
	bot.sendMessage("We're " + percentCompleted + "of the way there!");
};

// Define array of round start times in JSON format
JSON.parse(xxx) // <-- xxx filled with default vals, modified by user

// Bot command section
bot.onText(/\/start/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  bot.sendMessage("Hi there! please find below a list of commands:" +
  		for (let i in commands) {
  			"\n" + commands[i];
  		}
  	);
}); 

bot.onText(/\/help/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
}); 

bot.onText(/\/rounds/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  bot.sendMessage("(Pacific Time) The rounds begin at the following times:" + 
  	for (let i in roundTimes) {
  		"\n" + i;
  	});
}); 

bot.onText(/\/nextround/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
}); 

// Command: Output administrator details
bot.onText(/\/admin/, (msg, match) => {
	// 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  bot.sendMessage("The admin is: " + admin.tgUsername
  	);
}); 

// Command: Check own warnings
bot.onText(/\/mywarns/, (msg, match) => {
  let user = msg.from.id;
  let warns = accounts.user.warnings; 

	bot.sendMessage("You have " + warns + "/5 warnings."

	);

});

//Command: User leaves round
bot.onText(/\/leave/, (msg, match) => {
	let pos = array.findIndex(msg.from.id);
	array.splice(pos, 1); 
}); 

bot.onText(/@/, (msg, match) => {
	// need to write logic to parse one or two accounts from input
  accounts.push(msg);
});

// Admin command: Warn a user
bot.onText(/\/warn/, (msg, match) => {
	// admin check
	if (msg.from.id === admin.tgUserId) {
		// get tgUsername string of the warned
		let stringIndex = msg.text.indexOf(" ") + 1; // get index of string
		let warned = msg.text.slice(msg.text[stringIndex]); // get tgUsername

		// Warn or ban them
		user.warnings++;
		
		if (warnedList.warned === 5) {
			bot.kickChatMember(chat_id, user_id);
	}};
});