import { writeFile } from "node:fs/promises";

const owner = "Ygreece";
const siteRepository = `${owner}.github.io`.toLowerCase();
const response = await fetch(`https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`, {
  headers: {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
  }
});

if (!response.ok) throw new Error(`GitHub API request failed: ${response.status}`);

const projects = (await response.json())
  .filter(repo => !repo.fork && !repo.archived && repo.name.toLowerCase() !== siteRepository)
  .map(({ name, description, html_url, homepage, language, topics, updated_at, stargazers_count }) => ({
    name, description, html_url, homepage, language, topics, updated_at, stargazers_count
  }));

await writeFile("_data/github_projects.json", `${JSON.stringify(projects, null, 2)}\n`);
