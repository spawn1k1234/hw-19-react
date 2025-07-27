export default function Button({ onClick }) {
  return (
    <div className="load-more-container">
      <button type="Button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
