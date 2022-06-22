export default function Star({ name, zodiac, known_for, pronouns }) {
  return (
    <div className="star-item">
      <h2>{name}</h2>
      <p>This stars zodiac sign is {zodiac} and {pronouns} is most known for:</p>
      <ul>
        {known_for.map((known_for, i) => <li key={known_for + i}>{known_for}</li>)}
      </ul>
    </div>
  );
}