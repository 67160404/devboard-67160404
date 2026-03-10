function Navbar({ favoriteCount }) {
  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>DevBoard</h1>
        <p style={{ margin: 0 }}>กระดานนักพัฒนา</p>
      </div>

      {favoriteCount > 0 && (
        <div
          style={{
            background: "#e53e3e",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
          }}
        >
          ❤️ {favoriteCount}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
