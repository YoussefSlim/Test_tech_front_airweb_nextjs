import cors from "fastify-cors";
import { fastify } from "fastify";
import { readFile } from "fs/promises";

const app = fastify();

app.register(cors, { origin: true });

app.get("/products", async () => {
  await sleep(500);
  return readJson("./data/products.json");
});

app.get("/products/:id", async (request, reply) => {
  await sleep(500);

  const products = await readJson("./data/products.json");
  const product = products.find((product) => product.id === request.params.id);

  if (!product) reply.callNotFound();

  return product;
});

app.get("/categories", async () => {
  await sleep(500);
  return readJson("./data/categories.json");
});

app.get("/categories/:id", async (request, reply) => {
  await sleep(500);

  const categories = await readJson("./data/categories.json");
  const category = categories.find(
    (category) => category.id === request.params.id
  );

  if (!category) reply.callNotFound();

  return category;
});

app.listen(8080, "0.0.0.0").then(() => {
  const address = app.server.address();

  const message =
    typeof address === "string"
      ? `--- Listening on port: ${address} ---`
      : `--- Listening on port: ${address.address}:${address.port} ---`;

  const decoration = "-".repeat(message.length);

  console.log([decoration, message, decoration].join("\n"));
});

async function sleep(duration) {
  return new Promise((res) => setTimeout(res, duration));
}

async function readJson(path) {
  try {
    const data = await readFile(path, { encoding: "utf-8" });
    return JSON.parse(data);
  } catch {
    return [];
  }
}
