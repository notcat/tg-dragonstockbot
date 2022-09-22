"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
require("dotenv/config");
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error('"BOT_TOKEN" env var is required!');
const bot = new telegraf_1.Telegraf(token);
bot.command('hello', telegraf_1.Telegraf.reply('world'));
bot.launch();
console.log("Bot started...");
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
