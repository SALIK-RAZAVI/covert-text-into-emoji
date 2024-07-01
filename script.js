function convertToEmojiArt() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');
    let emojiArt = '';

    const emojiMap = {
        'a': '🍎', 'b': '🍌', 'c': '🌸', 'd': '🐬', 'e': '🐘',
        'f': '🍟', 'g': '🍇', 'h': '🏠', 'i': '🍦', 'j': '🎷',
        'k': '🔑', 'l': '🍋', 'm': '🌜', 'n': '🎵', 'o': '🐙',
        'p': '🍕', 'q': '👑', 'r': '🌈', 's': '🌞', 't': '🌴',
        'u': '☂', 'v': '🌋', 'w': '🌊', 'x': '❌', 'y': '☯',
        'z': '⚡', ' ': '  '
    };

    for (let char of inputText.toLowerCase()) {
        emojiArt += emojiMap[char] || char;
    }

    outputDiv.textContent = emojiArt;
}