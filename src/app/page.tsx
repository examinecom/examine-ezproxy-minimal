import Nav from "./nav";

export default async function Home() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <p>Home</p>
      <p>No data is fetched here</p>
    </div>
  );
}
