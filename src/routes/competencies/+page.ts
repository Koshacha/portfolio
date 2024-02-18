export async function load({ fetch }) {
  const response = await fetch('api/skills');
  const { skills } = await response.json();

  return { skills, wideLayout: true };
}
