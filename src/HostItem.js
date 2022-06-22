export default function Stars({ name, from, known_for}) {
  return (
    <div className="show-item">
      <h2>{name}</h2>
      <p>From {from}, this host is most well known for {known_for}.</p>
    </div>
  );
}