export default function Genres({ type, description, example }) {
  return (
    <div className="genre-item">
      <h2>{type}</h2>
      <p>{description} An example of this type of genre would be {example}.</p>
    </div>
  );
}
