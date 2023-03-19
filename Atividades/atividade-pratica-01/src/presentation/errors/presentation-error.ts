export abstract class PresentationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Presentation Error";
  }

  toString(): { message: string; name: string } {
    return { name: this.name, message: this.message };
  }
}
