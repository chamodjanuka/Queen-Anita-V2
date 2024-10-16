//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Y1ZnFxUUpmOXJWRTNKbkI2UTNrekVTc1RoaUxnZzVTMG9CUUFnb1BXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVlsbStvZVd6YnJFU1JZOHQybU9Cd20vdE8ySzZSeGl2VmVyVWV6UDdRaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TElaQnFnRFhiRUVxTzFJb0RQNERlTXprWXdWZHEwUnZzUzJ0WlBvU25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6NW9GUkJ2WE11aitYSVREK1pPUC9JQ1FISFhMQ1ZBRHFGV3ZXNTYvSUdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNYUlidmN6QlZWREs4SEJ1anZ0aU5maW1qeFZuR09BREdOTmVDWmdBR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx3MDh0Z2lIWTJLRzR4Wk04SW0rSkF6Z3dIRnpCaEdURDVDNkNyZGlpeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpIS3dWai8vdDR1NTNwZ1cyeDRaVlpzZUI3UCt3MXpqdE4vMW0wcUVVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczZOYmd0VGErTFNjcng2UHR6NUY5MGN4dVFJQ0lxOHZJbE1pT2RZaFBGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgzMWtVdFBENllpUk1NM2VpNThQVzRuRXZsV3RuU2dOQ1dFOENISHN4RTFURGl3dlF6d0pLNGdWb2NOcW5OOWZHUmdFV3pzUE9qd0JRb1FMdnEzbGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJWMU4yU2Rlb3l5M0Q0UzJpRlkzVGRDSkczWFljQXRGOTh4RFdrT3F4ZUcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRMkU2eVBNVFJRcVdCRVI3M3ZZY21BIiwicGhvbmVJZCI6ImFmYjM4Y2E5LTg3YzMtNDIwNS1hYTc0LWQwNDQwYmE3ZTIyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWlNGWXpyT2NaWHZ1UFZwa3BaNVFLNHdYb1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemx3U3l1UkhXc0JERXVZZVgvejNXUXBJaDlRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1KNks2QUVTIiwibWUiOnsiaWQiOiI5NDc4NjIwMjkxOTozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCJXG5cblxuXG5cblxu8J2QgFxuXG5cblxuXG5cbvCdkI1cblxuXG5cblxuXG7wnZCAXG5cblxuXG5cblxu8J2Qk1xuXG5cblxuXG5cbvCdkIdcblxuXG5cblxuXG7wnZCAXG5cblxuXG5cblxu8J2QjFxuXG5cblxuXG5cbvCdkIBcblxuXG5cblxuXG7wnZCHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcm50TFFFRUxDbnZyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJubTJ5QW54MERaeno2RGdVNG9QdXRyZ0JXYkNMc1RoT01US1dhaTNqaXlNPSIsImFjY291bnRTaWduYXR1cmUiOiJxSHBCaUJCZVpBZXZIUTdaVmNzUmI1K2xZdmcxdU9yeXBMbTJZbUkrQ2VMMmh5VHNmdTJPRkhoV3RtZFNDWDBpZk5pd0ViMVkrenl0N2ZmWkdqM21BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic3B5dW1sTkFYN2YvRXhXUjZVSHB4c2ZkNVAxTGRiUFk5bTJyeExjMDVpSGM1NWF4akkvTk5xMTEzR2tMeWdRY1ovdTVMUU94R2VIM0NKem5SU3NiaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NjIwMjkxOTozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNXRzZ0o4ZEEyYzgrZzRGT0tEN3JhNEFWbXdpN0U0VGpFeWxtb3Q0NHNqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MDc0MTExfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
