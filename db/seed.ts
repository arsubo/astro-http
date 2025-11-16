import { Clients, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Arnoldo", age: 44, isActive: true },
    { id: 2, name: "Rafael", age: 52, isActive: false },
    { id: 3, name: "Melina", age: 40, isActive: true },
    { id: 4, name: "Enrriette", age: 64, isActive: true },
    { id: 5, name: "Vera", age: 50, isActive: true },
  ]);

  console.log("DB execute");
}
