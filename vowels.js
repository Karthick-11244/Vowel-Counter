// Function to count vowels in the entered text
function countVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    // Loop through each character in the text and check if it's a vowel
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

// Get references to the elements
const textInput = document.getElementById('textInput');
const checkVowelBtn = document.getElementById('checkVowelBtn');
const resetBtn = document.getElementById('resetBtn');
const vowelCountDisplay = document.getElementById('vowelCount');

// Event listener for the "Check Vowel" button
checkVowelBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    const vowelCount = countVowels(inputText);
    vowelCountDisplay.textContent = `Vowel Count: ${vowelCount}`;
});

// Event listener for the "Reset" button
resetBtn.addEventListener('click', () => {
    textInput.value = '';
    vowelCountDisplay.textContent = 'Vowel Count: 0';
});
