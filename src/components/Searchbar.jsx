import { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim());
    setInput("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="SearchForm-button">
            <i
              className="fa-solid fa-magnifying-glass"
              aria-hidden="true"
              style={{
                color: "rgb(148, 148, 148)",
                fontSize: "20px",
                padding: "15px",
              }}
            ></i>
          </span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
