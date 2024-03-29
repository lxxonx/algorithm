const emojiMap = {
  "📟": "40404",
  "🔢": "1234",
  "🎰": "777",
  "": "109",
  "💯": "100",
  "🏪": "24",
  "🧑‍🏫": "22",
  "🧑🏻‍🏫": "22",
  "🧑🏼‍🏫": "22",
  "🧑🏽‍🏫": "22",
  "🧑🏾‍🏫": "22",
  "🧑🏿‍🏫": "22",
  "👨‍🏫": "22",
  "👨🏻‍🏫": "22",
  "👨🏼‍🏫": "22",
  "👨🏽‍🏫": "22",
  "👨🏾‍🏫": "22",
  "👨🏿‍🏫": "22",
  "👩‍🏫": "22",
  "👩🏻‍🏫": "22",
  "👩🏼‍🏫": "22",
  "👩🏽‍🏫": "22",
  "👩🏾‍🏫": "22",
  "👩🏿‍🏫": "22",
  "🔞": "18",
  "📅": "17",
  "📆": "17",
  "🔟": "10",
  "9️⃣": "9",
  "🎱": "8",
  "8️⃣": "8",
  "7️⃣": "7",
  "6️⃣": "6",
  "5️⃣": "5",
  "4️⃣": "4",
  "🥉": "3",
  "🏎️": "3",
  "3️⃣": "3",
  "🥈": "2",
  "2️⃣": "2",
  "🥇": "1",
  "🔂": "1",
  "1️⃣": "1",
  "0️⃣": "0",
};

console.log(Object.keys(emojiMap));

const str = `
'📟',     '🔢',     '🎰',     '',      '💯',
'🏪',     '🧑‍🏫',   '🧑🏻‍🏫', '🧑🏼‍🏫', '🧑🏽‍🏫',
'🧑🏾‍🏫', '🧑🏿‍🏫', '👨‍🏫',   '👨🏻‍🏫', '👨🏼‍🏫',
'👨🏽‍🏫', '👨🏾‍🏫', '👨🏿‍🏫', '👩‍🏫',   '👩🏻‍🏫',
'👩🏼‍🏫', '👩🏽‍🏫', '👩🏾‍🏫', '👩🏿‍🏫', '🔞',
'📅',     '📆',     '🔟',     '9️⃣',      '🎱',
'8️⃣',      '7️⃣',      '6️⃣',      '5️⃣',      '4️⃣',
'🥉',     '🏎️',      '3️⃣',      '🥈',     '2️⃣',
'🥇',     '🔂',     '1️⃣',      '0️⃣'
  `;

console.log(str.replaceAll(/'/g, '"'));
