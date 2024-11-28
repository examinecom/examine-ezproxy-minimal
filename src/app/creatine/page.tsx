import { apiBaseUrl } from "../apiBaseUrl";
import { fetchWrapper } from "../fetchWrapper";
import Nav from "../nav";

export default async function Creatine() {
  const creatineData = await fetchWrapper(
    `${apiBaseUrl}/v1/interventions/creatine`
  ).then((r) => r.json());

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <pre>{JSON.stringify(creatineData, null, 4)}</pre>
    </div>
  );
}
