import Nav from "../nav";

async function getCreatine() {
  const response = await fetch(
    `https://api.examine.com/v1/interventions/creatine`
  );

  return response || null;
}

export default async function Creatine() {
  const creatineData = await getCreatine().then((r) => r.json());

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <pre>{JSON.stringify(creatineData, null, 4)}</pre>
    </div>
  );
}
