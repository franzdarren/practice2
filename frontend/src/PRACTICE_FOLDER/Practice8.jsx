//sample from claudepro

const statusInfo = {
  airing: { label: "Airing now", className: "status live" },
  finished: { label: "Finished", className: "status ended" },
  upcoming: { label: "Coming soon", className: "status soon" },
};

function StatusBadge({ status }) {
  const info = statusInfo[status];
  if (!info) return <span className="status">Unknown</span>;
  return <span className={info.className}>{info.label}</span>;
}

export default function StatusList() {
  return (
    <ul className="status-list">
      <li>Starlight Bakery <StatusBadge status="airing" /></li>
      <li>Moon Rail <StatusBadge status="finished" /></li>
      <li>Ghost Office 2 <StatusBadge status="upcoming" /></li>
      <li>Lost Pilot <StatusBadge status="cancelled" /></li>
    </ul>
  );
}
