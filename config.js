//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chrislankinghz@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com";
global.gurl = process.env.GURL || "https://whatsapp.com";
global.website = process.env.GURL || "https://whatsapp.com";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "254723780545";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254723780545";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "welcome";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "groups";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZLYXMrajRYZDBhOGExYkY1bHU5R25CL1pVajk4a2U0MTBIeWdVcjdXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHNtdjhxU0g0a0Zid3dzME1yaHI3eG9pMVhKZDJaSEVXVTV4Nm1menJDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRmU0K3NxY1FpNUtUR3dSZzVycnRFeFNBa21sa0s4WUVlNUhoMGxDaUYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5U2pqdGlrQlJSK25FMHNjMWlEb0U0dXRvWEFMRkVibTBUVitIUHlXalU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNNEsxWHN1K21YQTE4Um0rWmQzbVFlT3lLL1BiOWJoNDJmQmNEQm5ZWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJjNERJSDJLTXFtQ1ZBaGRWQ0xPZ2J4MUM5bkQraXdQTFdYV3FmMjRKSHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JjOHFTeEFYMmVrckN1WUZDSVo0Rk1ZTm9rKzUrdDZFNlBBYVg3V1VtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlQwRXhwZzRMZjZqMUlndUFvU01ZdUVhMytpNDZhTitPNkhWTUpGT3lCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdhdVlrTnpBejNMbDJWak1MdzAwbzFGUzhBMG9ncDU2a0NNQTZ1R0NOKzRid3pDN3hjSUtJbm1tUWN0UTk5QTJ6ZVlRZXcxR3JYSGdoalBhMjBNS0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiIvTVBZdi9vMmhyY0NIS00wVGk4bnJkZ0pIZGZ5U2E3eDlRSnVuVFBrZ0RjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzbkZGTUhHX1NpaVRlZzNhQXExZ1NBIiwicGhvbmVJZCI6IjI1YTA4ZGMxLTZkYzQtNGZlMS1iZDlhLTE5YmM4ZTRjYzQ4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNDdIaThpd0NSZTcvOFlOdlVYbzBIVG9lQmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHYweEx2S3dJMzVsak0zd2FjZjhJb0F0MUh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFGSzhRNlNKIiwibWUiOnsiaWQiOiIyNTQ3MjM3ODA1NDU6MThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lpZzA0c0VFT0dwNExRR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNoQmlTSTZoRytoQ3B3SGY1dldkSW5mWFliQS9ob09rdUUwT1VoL1RFUW89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImV2bzNVWDlPRm1DQ214SWFJWG8rTG5nd2NYQmtqNzZkV29GVTZYdFpRU3NaeGloMHRZWWV6T04zU2Fyb1RRY1BiSlgwS1VlQmdBQkUvTWVDK2F3dEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzdWhsKzY0eUdlblovcmd0UGxXYWtBYTRHOEM1SlE5OXduTmQ3ZVpVcURKVk9VcWdEWVZsT21oNnUvbVN4aFJyUDgrVUtDRGpxMU9VTnFtVVBmODNBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMzc4MDU0NToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVb1FZa2lPb1J2b1FxY0IzK2IxblNKMzEyR3dQNGFEcExoTkRsSWYweEVLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjQyODY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1BSCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ĶÌNGH-MĐ`",
  author: process.env.PACK_AUTHER || "KINGH-MD",
  packname: process.env.PACK_NAME || "K Ì Ŋ Ĝ H",
  botname: process.env.BOT_NAME || "ĶĮNĢH MÐ-BØT",
  ownername: process.env.OWNER_NAME || "MUTHEE K I N G H🌹🥰",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
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
