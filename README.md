# Requirements

## Telegram Channel

- Announce rules upon user join
- Total time per round takes 2.5 hours with a 15 minute overlap (T-45 to T-30 overlaps with previous rounds)
- The round should be 6 times a day starting at 1 PM PST, 3.30 PM EST, 6 PM EST, 8.30 PM EST, 11 PM EST
- Whitelist - accounts included in every round which must be liked

### Round Structure

#### T-45 Minutes: Alert
- "Next round starts in 45 minutes, please get ready to submit your account name. Do not post your username until I've said to or else you'll miss the round"
- Subsequent messages advertising the round

#### T-30 Minutes: Drop Accounts
- 30 minutes before the round begins  “Comment your Instagram @accountname now to get added to the next engagement round”

#### T-10 Minutes
- Put out a post 10 minutes before post time “10 minutes left to post your Instagram @accountname for inclusion in this engagement round”


#### Round Start: Liking Phase
- “The round starts now! DM @starspullingmyhairbot to get the list of Instagram accounts and like on the most recent post for each account”
- _Format_: @getLikes, @giveLikes
- Drop whitelist's latest 1 posts
- Collect the list of every account name that has been submitted in the 30 minutes time window, and post:
- “Please engage within 90 minutes and when you’ve finished, comment “@YourOwnInstagramAccount done”
- Account names have to be posted in groups of 15, and our account, @starspullingmyhair, should be included first in every round regardless of it being commented whilst the round addition window was open.

- After 40, 60, and 80 minutes the bot should post a compiled list of all the account names that haven’t finished engaging yet.

#### T+90 Minutes: Drop the Ban Hammer
- Compile a list and serve the list in differnt formats
- Formats: FollowLiker list, IGDM list (instagram-specific, into instagram dm for easy liking)(note, there is an insta character limit on DM)
- Account names have to be posted in groups of 15, and our account, @starspullingmyhair, should be included first in every round regardless of it being commented whilst the round addition window was open.
- Output "Please engage within 90 minutes and when you’ve finished, comment “@Instagramaccountname done"
- List format should be user specific and dm'd to each user
- User has to request or we can message directly (depends what the botapi allows)
- there is also link list, which will dm you into
- If there is a list of accounts that didn’t complete a round, they should be (ideally) added to a google sheet or a text file. Less ideally, the list would be sent to my email address. 
- Periodically output encouraging percentage completion message

###### Round Close & Verification
- "Round is closed, will check if everyone that joined the round liked/commented."
- Issue warnings/bans
- After 90 minutes the bot needs to post a compiled list of all the account names that have entered the round but failed to engage in the time. These accounts need to be posted with “These accounts have entered the round but failed to engage. You each have a warning and may be asked to leave the group if this happens 5 times. Please complete the rounds you enter to be fair to everyone that does:
“@accountthatdidn’tfinish1
@accountthatdidn’tfinish2
@accountthatdidn’tfinish3
@accountthatdidn’tfinish4
….”
- If there is a list of accounts that didn’t complete a round, they should be (ideally) added to a google sheet or a text file. Less ideally, the list would be sent to my email address.
* * *

### Interaction With the Bot

##### Admin (DM to bot)
- __/start__ - gives list of commands
- __/help__ - Recieve commands list
- __/removeallwarns__ that is pretty easy to understand
- __/warn__ - warn a user
- __/removewarn__ - remove 1 warning from user
- __/whitelistshow__ - show whitelist
- __/whitelistadd__ - add an account to whitelist
- __/whitelistremove__ - remove account from whitelist
- __/changetimes__ - accepts list of times to run rounds (JSON format)

##### User
- __/help__ - Recieve commands list
- __/time__ - to check time of all rounds
- __/nextround__ - output time until next round
- __/admin__ - Output the admin details
- __/wp__ - Output the user's warning points
- __/rules__ - show rules
- __/leave__ - leave from round (if user has accidentally took part at the round and he/she has a willing to leave this round) 
- __/swap__ - swap liking account (account which will be doing the likes)

* * *

### Misc
