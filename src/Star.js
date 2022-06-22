export default function Star({ name, zodiac, known_for }) {
  return (
    <div className="star-item">
      <h2>{name}</h2>
      <p>This stars zodiac sign is {zodiac} and they are most known for their work in {known_for}.</p>
    </div>
  );
}