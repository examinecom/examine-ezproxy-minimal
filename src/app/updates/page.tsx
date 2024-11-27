import Nav from "../nav";

function appendSearchParams(
  url: URL,
  paramKey: string,
  values: string[]
): void {
  values.forEach((value) => {
    url.searchParams.append(paramKey, value);
  });
}

async function getUpdates({
  limit = 10,
  types,
  category,
}: {
  limit: number;
  types: string;
  category: string;
}) {
  const url = new URL(
    `/v1/updates?per_page=${limit}`,
    "https://api.examine.com"
  );

  if (types) {
    const typesArray = types.split(",");
    appendSearchParams(url, "types[]", typesArray);
  }

  if (category) {
    const categoriesArray = category.split(",");
    appendSearchParams(url, "category[]", categoriesArray);
  }

  const endpoint = decodeURIComponent(url.pathname + url.search);
  const response = await fetch(`https://api.examine.com${endpoint}`, {
    next: { tags: ["updates"], revalidate: 0 },
  });

  return response || null;
}

export default async function Home() {
  const pageUpdates = await getUpdates({
    limit: 5,
    types: "",
    category: "tech,site,supplement_guide,content",
  }).then((r) => r.json());

  console.log({ pageUpdates });

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
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
      {/* <h2>Study updates:</h2>
      <ul>
        {studyUpdates.data.map((update: any) => (
          <li key={update.date}>
            <h3>{update.headline}</h3>
            <ul>
              {update.study_summaries.map((study: any) => (
                <li
                  key={study.id}
                  dangerouslySetInnerHTML={{ __html: study.headline }}
                ></li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
