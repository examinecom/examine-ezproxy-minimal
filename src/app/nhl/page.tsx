import { fetchWrapper } from "../fetchWrapper";
import Nav from "../nav";

export default async function Nhl() {
  const nhlTeams = await fetchWrapper(
    `https://api.nhle.com/stats/rest/en/team`
  ).then((r) => r.json());

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <pre>{JSON.stringify(nhlTeams, null, 4)}</pre>
    </div>
  );
}
