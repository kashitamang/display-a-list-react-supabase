export default function Stars({ name, pronouns, from, known_for }) {
  return (
    <div className="show-item">
      <h2>{name}</h2>
      <p>From {from}, this host is most well known for {pronouns} work in:</p>
      <ul>
        {known_for.map((known_for, i) => <li key={known_for + i}>{known_for}</li>)}
      </ul>
    </div>
  );
}
