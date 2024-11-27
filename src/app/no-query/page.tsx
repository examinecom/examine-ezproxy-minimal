import Nav from "../nav";

export default async function Home() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Nav />
      <p>This page doesn't fetch any data</p>
    </div>
  );
}
