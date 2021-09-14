require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://autoreplybot222.glitch.me/`);
}, 280000);

///ا
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "";
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
///

//حاله البوت
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("idle"); /// الحالات هي dnd idle online
});
///الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

///هنا تعدل و تنسخ
client.on("message", msg => {
  if (msg.content === "هلا") { /// هنا تكتب الكلام
    msg.reply("**اهلين**  "); /// هنا الرد

  }
});
///هنا تعدل و تنسخ
client.on("message", msg => {
  if (msg.content === ":-") { /// هنا تكتب الكلام
    msg.reply("**:-------------**");
    
  }
});
///هنا تعدل و تنسخ
client.on("message", msg => {
  if (msg.content === "boobs") { /// هنا تكتب الكلام
  if(!msg.channel.nsfw){ msg.channel.send("This command can only be used in channels marked nsfw."); return; }
    if(msg.channel.nsfw){ msg.channel.send("https://cdn.discordapp.com/attachments/876986632274845777/886957489021665290/06323.jpg"); return; }
  }
});
