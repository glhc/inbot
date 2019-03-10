// New, better code.
"use strict";

// Initialisation
const moment - require("moment-timezone"); // library for timezone logic
const TelegramBot = require('node-telegram-bot-api');
const token = ''; // <-- Unique Telegram Bot token
const chat_id = "";
const bot = new TelegramBot(token, { polling: true });

moment.tz.setDefault("Pacific Standard Time"); // Set PST as default

let accounts = [];
let firstroundTimes = [
	moment(13, "HH"),
	moment(15, "HH"), // needs minutes
	moment(18, "HH"),
	moment(20, "HH"), // needs minutes
	moment(23, "HH"),
];

function setRounds (times) {  // sets round times

};




// Define array of round start times in JSON format
JSON.parse(xxx) // <-- xxx filled with default vals, modified by user
