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
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZtTjBVbTh6Z1FUUnpKQmhpT3J6WXVibFUrWHc4MjZIYzBIQnBvblprTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGQ2VXl5bGdCTGpCOEtwZmhTblFxZFlJWFhsZk1uK0YxblNXOHpsNmVtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTEkzVUpqcTEwbmtidE5NNGYrV29lT1l1eTdCOTZMRnhPMEhocUZJbEVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5eEQ2YVhSdlRlNHNqamc2M0dYajVPeTY4TzdIVlovSXQzQjJKNWZ0eDJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFSUUyenBEYlV5MXo0RDRCZENXM1VvQThhclAxdXkrRkdQZXNOZTc4MDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlLekRHRlVtdDFSa3JHd3NhdVhKald5YkU5SlpGa0hoYndQeWcxOG9DajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hTV1I0TmhxRW5OSFRJYmFNMlB4RHI4QTByemhuZE16cVpvTy9oL25WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlgwZGw4dVM0SW9LYllTQ0ppeXhvNmtFY2p3c2dCWkdLOE5mVjIrMTNnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrbVZmRlpiV0xaRC9lT2htUDROL0xDV3dNOXZReU92RFl5ajl0YWRKN3d5enVoK093cE1CejVLVys2MGxNS3Z2R1lwWlVQTGsyVjZJb3RabitJaEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiIvREFBaktIM2N4UU82UXRJMjl0Vk5mYm1XeGdORVpVV1ZZTURPQkZBNENzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxay0wcVVGeVRDZU44OFIzNE9RT1NBIiwicGhvbmVJZCI6ImUwYjc5NmJkLTZkYTctNGJiOC04NWQ4LTU2MjVlY2Q2ZTU1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRU242M2dsdnpOcVJpWEVhMHByZXBVMUpGOUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1QwaHozTHpkWGl1VVE2bXl3czFuZVEveFNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZOUDhFSDNHIiwibWUiOnsiaWQiOiIyNTQ3MjM3ODA1NDU6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lpZzA0c0VFT3FWNExRR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNoQmlTSTZoRytoQ3B3SGY1dldkSW5mWFliQS9ob09rdUUwT1VoL1RFUW89IiwiYWNjb3VudFNpZ25hdHVyZSI6InJWZWlkR3R6MVNpVUMzQ0N1NS9YTENsMExPcmdka0V1S2t1cHd2S2FEeVVQM2FHZys3OURuaEJjY25UMFdidDQwblBDQ0J2blYwUEZLeWRUcjhBckJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJacUkxV2RCSGhIRFNiMWJXYm5tL2xxMERwRXYxOUcrVFFobUwxS25lZUtmSDVGaSs3SmlxdzBQOWMvUUtlaXJFL3BlTjFPVDExQkMzY0MzNnN3OWRCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMzc4MDU0NToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVb1FZa2lPb1J2b1FxY0IzK2IxblNKMzEyR3dQNGFEcExoTkRsSWYweEVLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjQwMzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwvOSJ9"
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
