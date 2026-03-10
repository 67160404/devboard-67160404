function PostCard({ title, body, isFavorite, onToggleFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>

      <button
        onClick={onToggleFavorite}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          color: isFavorite ? "red" : "gray",
        }}
      >
        {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
      </button>
    </div>
  );
}

export default PostCard;
