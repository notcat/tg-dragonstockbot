import { Telegraf } from "telegraf";

import 'dotenv/config';

const token = process.env.BOT_TOKEN;
if (!token) throw new Error('"BOT_TOKEN" env var is required!');
const bot = new Telegraf(token);

bot.command('hello', Telegraf.reply('world'));
bot.launch();

console.log("Bot started...")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));