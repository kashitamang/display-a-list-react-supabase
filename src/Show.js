export default function Show({ name, pilot, network, location }) {
  return (
    <div className="show-item">
      <h2>{name}</h2>
      <p>The Pilot first aired in {pilot}, last aired on {network}, and was shot in {location}.</p>
    </div>
  );
}
