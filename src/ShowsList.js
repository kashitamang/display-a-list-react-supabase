import Show from './Show.js';

export default function ShowsList({ 
  shows = [], 
}) {
  return (
    <div className="shows-list">
      {
        shows.map((show, i) => {
          return <Show
            {...show}
            key={show.name + i + show.id}/>;
        })
      }
    </div>
  );
}
