import Nav from "../nav";

async function getUpdates() {
  const response = await fetch(
    `https://api.examine.com/v1/updates?per_page=10`
  );

  return response || null;
}

export default async function Home() {
  const pageUpdates = await getUpdates().then((r) => r.json());

  console.log({ pageUpdates });

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <p>This page doesn't use any query params in the API call</p>
      <h1>Some Examine updates:</h1>
      <h2>Page updates:</h2>
      <ul className="mb-20">
        {pageUpdates.data.map((update: any) => (
          <li key={update.id}>
            <h3
              dangerouslySetInnerHTML={{
                __html: update.content?.name ?? update.headline,
              }}
            ></h3>
            <div
              dangerouslySetInnerHTML={{
                __html: update.detailed_note ?? update.note,
              }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
