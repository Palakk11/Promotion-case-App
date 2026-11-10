import { useEffect, useState } from "react";

// Lets a whole card toggle open/closed on click. Clicks on links, buttons and
// pictures keep their own behavior, and selecting text doesn't toggle the card.
// Cards open fully while printing so Export / Print keeps every detail.
export default function useCardToggle() {
  const [expanded, setExpanded] = useState(false);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const before = () => setPrinting(true);
    const after = () => setPrinting(false);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  const onCardClick = (e) => {
    if (e.target.closest("a, button, img")) return;
    if (window.getSelection()?.toString()) return;
    setExpanded((v) => !v);
  };

  return { expanded: expanded || printing, printing, onCardClick };
}
