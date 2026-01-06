import { useState, useEffect } from "react";

export default function useTypeWriter(
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1500
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    let timeout;

    // TYPING
    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    }

    // PAUSE
    else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    }

    // DELETING
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    }

    // NEXT WORD
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDelay]);

  return text;
}
