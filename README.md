# Requirements

## Telegram Channel

- Announce rules upon user join
- 



### Round Structure

#### T-30 Minutes: Alert
- "Next round starts in 30 minutes, please get ready to submit your account name. Do not post your username until I've said to or else you'll miss the round"
- Subsequent messages advertising the round

#### Round Start: Drop Accounts
- "The round starts now! Drop Accounts! etc!"
- _Format_: @getLikes, @giveLikes
- Must drop admin's latest post


#### T+60 Minutes: Liking Phase
- Compile a list and serve the list in differnt formats
- List format should be user specific and dm'd to each user
- User has to request or we can message directly (depends what the botapi allows)
- Formats: FollowLiker list, IGDM list (instagram-specific, into instagram dm for easy liking)(note, there is an insta character limit on DM)
- there is also link list, which will dm you into 

#### T+180 Minutes: Round Close & Verification
- "Round is closed, will check if everyone that joined the round liked/commented."
- Issue warnings/bans

* * *

### Interaction With the Bot

##### Admin (DM to bot)
- _/start_ - gives list of commands
- _/help_ - Recieve commands list
- need manual warn
- add to whitelist
- remove from whitelist

##### User
- _/help_ - Recieve commands list
- _/nextround_ - output time until next round
- _/admin_ - Output the admin details
- _/wp_ - Output the user's warning points
// tabled for later discussion - _/check_ - check if your done liking every (desirable)
- _/rules_ - show rules
- _/leaveround_
- _/swap_ - swap liking account (account which will be doing the likes)

/*
90 minutes liking phase
30 minute drop
6 rounds per day
30 minute gap between (rounds + leadup)(checking & warnings can be done here)

* * *

### Misc
- Need whitelist - accounts which cannot be warned