import { useEffect } from "react";

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
