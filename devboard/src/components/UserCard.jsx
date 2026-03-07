function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <div>{initials}</div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

export default UserCard;
