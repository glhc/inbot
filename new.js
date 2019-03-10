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
let firstroundTimes = [
	moment({hour: 13}),
	moment({hour: 15, minute: 30}), // needs minutes
	moment({hour: 18}),
	moment({hour: 20, minute: 30}), // needs minutes
	moment({hour: 23}),
];

function setRounds (times) {  // sets round times

};




// Define array of round start times in JSON format
JSON.parse(xxx) // <-- xxx filled with default vals, modified by user
