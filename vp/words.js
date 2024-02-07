const words = [
  { word: "abacaxi", clue: "Fruta" },
  { word: "Banana", clue: "Fruta" },
  { word: "Goiaba", clue: "Fruta" },
  { word: "Tangerina", clue: "Fruta" },
  { word: "Cacau", clue: "Fruta" },
  { word: "Melancia", clue: "Fruta" },
  { word: "Morango", clue: "Fruta" },
  { word: "Laranja", clue: "Fruta" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
