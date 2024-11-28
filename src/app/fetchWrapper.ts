export async function fetchWrapper(...props: Parameters<typeof fetch>) {
  const response = await fetch(...props);

  console.log(response);

  return response;
}
