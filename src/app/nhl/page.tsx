import Nav from "../nav";

async function getNhlTeams() {
  const response = await fetch(`https://api.nhle.com/stats/rest/en/team`);

  return response || null;
}

export default async function Nhl() {
  const nhlTeams = await getNhlTeams().then((r) => r.json());

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <pre>{JSON.stringify(nhlTeams, null, 4)}</pre>
    </div>
  );
}
