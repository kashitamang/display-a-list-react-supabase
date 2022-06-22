export default function Genres({ type, description, example, more_like_this }) {
  return (
    <div className="genre-item">
      <h2>{type}</h2>
      <p>{description} An example of this type of genre would be {example}. If you like this, another genre you might also like is {more_like_this}.</p>
    </div>
  );
}
