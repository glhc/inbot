/*
The copied code is kind of poorly written and doesn't utilise modern JavaScript
async practices (e.g. uses setTimeout instead of promises or async/await)
Doesn't do everything, but it's a good place to start.
Some of the logic could be written better
Also, some bugs waiting to happen
*/

// Requisites & initialization
const moment - require("moment-timezone"); // library for timezone logic
const TelegramBot = require('node-telegram-bot-api');
const token = ''; // <-- Unique Telegram Bot token
const chat_id = "";
const bot = new TelegramBot(token, { polling: true });


// Variables
let userNames = [];
let currentMode = "waiting";
var scheduledHours = [15, 18, 21];
var notifyGroupRulesTime = [10, 13, 17];

var groupRulesText = "group rules";

var announceText = "Next round starts in 20 minutes, please get ready to submit your account name. Do not post your username until I've said to or else you'll miss the round";
var announceTime = 20; //before. It could be 1-59 

var startCollectingText = "Comment your Instagram @accountname now to get added to the next engagement round"; //1
var startCollectingTextWithTimeLeft = "90 minutes left to comment your Instagram @accountname for inclusion in this engagement round"; //2
var delay = 1500; //before 1 and 2. ms

var thirtyMinsLeftText = "30 minutes left to comment your Instagram @accountname for inclusion in this engagement round";
var tenMinsLeftText = "10 minutes left to comment your Instagram @accountname for inclusion in this engagement round";

var likeTimeText = "The round starts now! Copy and paste the username lists into your Instagram Direct Messages, then click through each account and like and leave a 3+ word comment on the most recent post for each account";
var likeEndText = "Round is closed, will check if everyone that joined the round liked/commented.";


var collecting_start_time;
var like_start_time;

var debug_iterator = 0;

// Main
setInterval(function () {
    var time_now = new Date();
    var current_hour = time_now.getHours();
    var current_min = time_now.getMinutes();
    var current_seconds = time_now.getSeconds();

    //group rules
    if (currentMode == "waiting" && current_min == 0 && notifyGroupRulesTime.includes(current_hour)) {
        sendToGroup(groupRulesText);
    }

    if (currentMode == "waiting" && scheduledHours.includes(current_hour + 1) && ((current_min == 0 ? 60 : current_min) - announceTime == 40)) {//announce
        sendToGroup(announceText);
        currentMode = "annotate";
    }

    else if (currentMode == "annotate" && scheduledHours.includes(current_hour) && current_min == 0) {//started collecting
        collecting_start_time = time_now;
        setTimeout(function () {
            sendToGroup(startCollectingTextWithTimeLeft);
        }, delay);
        sendToGroup(startCollectingText);
        currentMode = "collecting";
    }
    else if (currentMode == "collecting") {
        var r = getMinutesDiff(time_now, collecting_start_time);
        if (r == 60) {//before 30 mins 60
            sendToGroup(thirtyMinsLeftText);
        }
        else if (r == 80) {//before 10 mins 80
            sendToGroup(tenMinsLeftText);
        }
        else if (r == 90) {//finish like time 90
            collecting_start_time = 0;
            currentMode = "liketime";
            sendToGroup(likeTimeText);
            like_start_time = time_now;
            setTimeout(function () {
                var list = getListMessage();
                sendToGroup(list, true);
            }, 1500);
        }
    }
    else if (currentMode = "liketime" && getMinutesDiff(time_now, like_start_time) >= 60) { //LikeTime
        currentMode = "waiting";
        list = [];
        sendToGroup(likeEndText);
        like_start_time = 0;
    }
}, 1000 * 60/*minute*/);


bot.onText(/\/chatId/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'chatId:' + chatId);
});

bot.on('message', (msg) => {
    if (currentMode == "collecting" && msg.text.startsWith('@')) {
        var text = msg.text.split(' ')[0];
        userNames.push(text);
    }
})

var getMinutesFromMilliseconds = function (t) {
    if (!t) return 0;
    return Math.floor(t / 60000);
}

var getMinutesDiff = function (d1, d2) {
    if (!d1 || !d2) return 0;
    var milliseconds = Math.abs(d1 - d2);
    var res = getMinutesFromMilliseconds(milliseconds);
    return res;
}
var getListMessage = function () {
    var res = "";
    for (var i = 0; i < userNames.length; i++) {
        var curName = userNames[i];
        res = res + '<a href="http://instagram.com/_u/' + curName.substring(1, curName.length) + '">' + curName + '</a>\r\n';
    }
    return res;
}

var sendToGroup = function (text, html) {
    if (!text || chat_id == '') return;
    if (html)
        bot.sendMessage(chat_id, text, { parse_mode: "HTML", disable_web_page_preview: "true" });
    else bot.sendMessage(chat_id, text);
}