import { getCollection } from "astro:content";
import { Clients, Posts, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Arnoldo", age: 44, isActive: true },
    { id: 2, name: "Rafael", age: 52, isActive: false },
    { id: 3, name: "Melina", age: 40, isActive: true },
    { id: 4, name: "Enrriette", age: 64, isActive: true },
    { id: 5, name: "Vera", age: 50, isActive: true },
  ]);

  const posts = await getCollection("blog");

  await db.insert(Posts).values(
    posts.map((p) => ({
      id: p.id,
      title: p.data.title,
      likes: Math.round(Math.random() * 100),
    }))
  );

  console.log("DB execute");
}
