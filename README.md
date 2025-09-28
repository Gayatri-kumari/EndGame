# Assembly Endgame 🎮

**Assembly Endgame** is a React-based word-guessing game inspired by the [Scrimba React course](https://scrimba.com/learn-react-c0e) project.  
The objective is to "save the world from assembly language" by guessing words correctly before running out of chances.

---

## 🔗 Live Demo

[Assembly Endgame](https://wordguessergame.netlify.app/)

---

## 📝 Original Features (from course)

- Word guessing with blanks displayed  
- On-screen keyboard to select characters  
- New Game button appears after win or loss  
- Confetti animation on winning  
- Custom farewell messages for wrong guesses  
- Language bullets are displayed to show remaining chances and to show the languages lost

---

## ✨ My Additions / Enhancements

1. **Hints Carousel** – Custom hints for all words, displayed in a carousel format(you can swipe through the hints to see all the hints) with the latest hint displayed first. **Maximum of 3 hints per game**. (Created a custom hint library with 3 hints for each word)
2. **Hint Button with Limited Chances** – Using a hint decreases the number of guesses left.
3. **Number of Guesses Left Animation** – Visual display updating remaining chances dynamically.  
4. **Keyboard Feedback Animation** – Wrong character presses are animated for better UX.  
5. **Automatic Reveal on Loss** – If the player loses, the missed word is displayed with an animated red highlight.  
6. **Info Button** – Explains the game objective and instructions for new players.  
7. **Overall UX Improvements** – Small styling tweaks and interactive animations to make the game more engaging.
8. **Responsive**

---

## 💻 Tech Stack

- **React.js** – Component-based architecture  
- **React Hooks** – `useState`, `useEffect`, `useRef`  
- **CSS3** – Styling and animations  
- **JavaScript (ES6)** – Game logic and state management  

---

## 🚀 How It Works

1. Use the on-screen keyboard to guess the letters of the word.  
2. Each wrong guess removes a language bullet visually and triggers a **farewell message**.  
3. Use hints if needed — up to **3 hints per game**, each reducing remaining guesses.  
4. Win by guessing the word correctly before running out of chances (confetti animation plays).  
5. Lose the game, and the missed word is revealed with a visual highlight.  
6. Click **New Game** to start over.  
7. Use the **Info** button anytime to see instructions and game objective.  

---

## 🙌 Credits

- Original project: Scrimba React Course – Word Guessing Game  
- Extended and enhanced by **Gayatri Kumari**  

---

## 📂 Future Improvements

- Add **multiple levels** with increasing difficulty  
- Integrate **sound effects** for correct/incorrect guesses  
- More **visual feedback and animations** to enhance UX  
