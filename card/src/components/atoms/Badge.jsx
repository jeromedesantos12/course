function Badge({ emoji, text }) {
  return (
    <button>
      <div className="height">
        {emoji} {text}
      </div>
    </button>
  );
}

export default Badge;
