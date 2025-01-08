//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Aboveall";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/U1oSe2y";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349165278728";
global.owner = process.env.OWNER_NUMBER || "2349165278728";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/U1oSe2y";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUQ4MTc2TmQzbXNleEhicU0vamxUTXRDamtiK3I5YllJM0JNVDRPMWFWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3FNYUYxRDhtNnRrNjJVcXBRMmc1NWtoVXF5MnYzWlFhR0JHY0RvZGRXYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SmFRRmowM3JEdFpXY0FDZ3hnaGlHQjMyTjBxUVc4eG5ROVJoVWZxZzI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJua1lQWjVNdFRPZHVad1ZBWFlrMmxiSU5Kc0ZjNXFTcWpQSll2NUhrcDFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFNjlEcGtQVjVhNjVWSkI0Nlg2R08xK3dWZ2NsNkpHeTlqZXc1ckN1M2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldmSysyelhVaWN5YmMycjBsV3JOVzZYdXZKaDZXUjUwSlkyL1FaWGJaQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU08vYmZvVGdMdGptdXhKaUVIN0xpRGJ6RUMvaFNuWSsyT0gxMXdmVGYwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG9WdlQ2RERvRUI2NW1kVXIvbWJ3Nm02dWJRdjErWnpubHJhekJJczdWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNyTWxIeDNnZlZ6SGRETGdHa0pDYWVndHowWmZqOVFLa1lPclQ3TWI2Ty9TMW5qV3Y4bmYzV0xudml1dldxZkk5eHJkRk1zK0Y2TjNEc2NWSGJLNmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IlhHOU1ONmt4STVtMkVLOTFrdjhVNyszT0hHY0xBMjBqOW1CNEFpVlRjU289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5zdUdqWVdEVFVtYm0tU3pmYV9CckEiLCJwaG9uZUlkIjoiYzEzYzlkNzAtMDk1OS00NDI1LWE2MWEtZjMzNTIzMzMyZWFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFrVWFhaGVPQ1orQXBDS3RwVTI3cmhxMTFMVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZkhReDVZeFVrUVREQ3JiUGduWmZwZ3J0Wkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEtGR0ZGUlIiLCJtZSI6eyJpZCI6IjIzNDkxNjUyNzg3Mjg6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MVzY4a0NFTnVrKzdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVNWGNwUVBSeVRESnljT2JCejVGalVySHY4OTZ2TVIxSjNSQ2ZtQzczbjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inp1ZTNieW1yNFZ3a1AvRWxMZEorNjhTZGVrbWRDa0wwblhjTDJDa2thcnUrNUhNR3FGeXVOVHg1MmVPU2FMM21JRkRsS2FqSDIvUVphNmdlY1JtYUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwakp0bzNFaXoyUEZHT2E4d1U1aDFCTlJ2UXJ0aDNkVjZPekYwQW44enpnZnJub2cwbTZjWFltZ0NpMDk5WC9HSVlHVXBzbWlnQ0h3dmVqODhIdTJqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjUyNzg3Mjg6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVRGM0tVRDBja3d5Y25EbXdjK1JZMUt4Ny9QZXJ6RWRTZDBRbjVndTk1OSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjM2NDY0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHS3kifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "Jᴜᴘɪᴛᴇʀʙᴏʟᴅ99 ☠️👑🌍",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
