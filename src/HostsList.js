import Host from './Host.js';

export default function HostsList({
  hosts = [],
}) {
  return (
    <div className="hosts-list">
      {
        hosts.map((host, i) => {
          return <Host
            {...host}
            key={host.name + i + host.id}/>;
        })      
      }
    </div>
  );
}
