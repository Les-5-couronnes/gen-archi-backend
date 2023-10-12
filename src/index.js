import { init } from "./app.js";

async function main() {
  const server = await init();

  server.listen(8000, () => {
    console.log("Server App is listening on port:", 8000);
  });
}

void main();
