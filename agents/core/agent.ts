export class Agent {
  name: string;
  personality: string;

  constructor(name: string, personality: string) {
    this.name = name;
    this.personality = personality;
  }

  async think(input: string) {
    return `${this.name} thinks about ${input}`;
  }

  async act() {
    return `${this.name} is posting...`;
  }
}
