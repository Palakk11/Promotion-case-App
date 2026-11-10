import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Click any picture in the main content to view it full-screen.
export default function ImageLightbox() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest?.(".main-content img");
      if (!img) return;
      const caption = img.parentElement?.querySelector(".program-image-caption, figcaption")?.textContent;
      setImage({ src: img.currentSrc || img.src, caption: caption || img.alt });
    };
    const onKey = (e) => e.key === "Escape" && setImage(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = image ? "hidden" : "";
  }, [image]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.caption || "Image"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setImage(null)}
        >
          <button className="lightbox-close" aria-label="Close" onClick={() => setImage(null)}>
            <X size={22} />
          </button>
          <motion.figure
            className="lightbox-figure"
            initial={{ scale: 0.94 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
          >
            <img src={image.src} alt={image.caption || ""} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
