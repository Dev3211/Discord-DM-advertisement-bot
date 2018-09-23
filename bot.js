const Discord = require("discord.js");

const client = new Discord.Client();

var ignoreDM = ['id here'] //author ids to ignore when trying to DM

client.on("ready", () => {
console.log('Bot Online and Ready! On ' + client.guilds.size + ' Servers!');
});

client.on("error", (e) => {
console.error(e);
});

client.on("warn", (e) => {
console.warn(e);
});

client.on("debug", (e) => {
console.info(e);
});

process.on('unhandledRejection', (reason, promise) => {
console.log('Unhandled Rejection at:', reason.stack || reason)
return;
});// remove this if u dont want to debug errs

client.on("message", msg => {
if (msg.author.bot) return; //ignore bots

var interval = 60000; //time in millisecond = 1 minute

if(msg.content === "!" + "dmall"){
let guild = client.guilds.get("GUILD ID"); //the self-bot will get member ids from the guild id

var memberss = []; //this will contain the members that would need to be DM'ed 

guild.members.forEach(function(member, index){
if(ignoreDM.includes(index)) return; //ignore putting these ids in the memberss array
memberss.push(member)
})

memberss.forEach(function(memberz, index)
{
 setTimeout(function () {
  memberz.send("test")
  console.log("DM'ED " + memberz)
  }, index * interval); //send it after every index completes along with the time so that it goes to the next iteration with a stop in between
})

}
})

client.login("TOKEN");

