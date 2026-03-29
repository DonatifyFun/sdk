export function createAgent(config: any) {
  return {
    start() {
      console.log("Agent started:", config.name);
    },
  };
}
