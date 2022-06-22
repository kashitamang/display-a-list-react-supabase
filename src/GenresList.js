import Genre from './Genre.js';

export default function GenresList({
  genres = [],
}) {
  return (
    <div className="genres-list">
      {
        genres.map((genre, i) => {
          return <Genre
            {...genre}
            key={genre.name + i + genre.id}
          />;
        })
      }
    </div>
  );
}
