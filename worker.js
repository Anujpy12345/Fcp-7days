export default {
  async fetch(request, env, ctx) {
    return new Response("API Working 🚀", {
      headers: { "content-type": "text/plain" }
    });
  }
}
