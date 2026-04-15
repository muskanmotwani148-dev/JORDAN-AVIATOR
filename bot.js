const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "8726969586:AAFI2DKl3q_QSlEOZ8ooYQeepPTMcOo4LP8";
const CHANNEL_LINK = "https://t.me/+Q0TN7aLjeIw1OWM1";

const bot = new TelegramBot(TOKEN, { polling: true });

// /start command handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = `Hey 👋
Welcome to Aviator Smart Hub 🚀

Yahan aapko milega:
✔️ Live game insights
✔️ Smart timing updates
✔️ Strategy tips
✔️ Safe play guidance

👇 Start karne ke liye niche options select karo`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📢 Join VIP Channel", url: CHANNEL_LINK }],
      ]
    }
  };

  bot.sendMessage(chatId, text, options); // ✅ FIX 1: sendMessage add kiya
});

// Callback query handler — BAHAR rakha /start ke
bot.on('callback_query', (query) => {
  if (query.data === 'joined') {
    bot.sendMessage(
      query.message.chat.id,
      `✅ Access Granted!\n\n🎯 You will now receive:\n• Aviator Signals ✈️\n• Winning Strategies 📊\n• VIP Tips 💎\n\nStay active & don't miss signals! 🚀`
    );
    bot.answerCallbackQuery(query.id);
  }
});

console.log("Bot is running...");
