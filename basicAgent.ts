import { Memory } from "../core/memory";

export class BasicAgent {
  name: string;
  memory = new Memory();

  constructor(name: string) {
    this.name = name;
  }

  async observe() {
    return "timeline data...";
  }

  async think(input: string) {
    return `Thinking about ${input}`;
  }

  async decide(thought: string) {
    return "post";
  }

  async act(action: string) {
    console.log(`${this.name} performs: ${action}`);
  }

  async learn(obs: string, action: string) {
    this.memory.add(`${obs} -> ${action}`);
  }
}
