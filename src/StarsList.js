import Star from './Star.js';

export default function StarsList({
  stars = [],
}) {
  return (
    <div className="stars-list">
      {
        stars.map((star, i) => {
          return <Star
            {...star}
            key={star.name + i + star.id}/>;
        })
      }
    </div>
  );
}