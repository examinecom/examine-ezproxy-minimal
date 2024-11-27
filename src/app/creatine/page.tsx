import Nav from "../nav";

async function getCreatine() {
  const response = await fetch(
    `https://api.examine.com/v1/interventions/creatine`
  );

  // console.log({ response });

  // if (!response.ok) {
  //   const { status, statusText } = response;
  //   return { status, statusText };
  // }

  return await response.json();
}

export default async function Home() {
  let creatineData;
  try {
    creatineData = await getCreatine();
  } catch (err) {
    if (err instanceof Error) {
      return (
        <>
          There was an error fetching:
          <pre>{err.toString()}</pre>
        </>
      );
    }
    return "err was not an instance of Error";
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <pre>{JSON.stringify(creatineData, null, 4)}</pre>
    </div>
  );
}
