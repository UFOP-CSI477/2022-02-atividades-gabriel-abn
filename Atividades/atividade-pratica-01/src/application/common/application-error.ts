export class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Application Error";
  }

  public toString(): { message: string; name: string } {
    return { message: this.message, name: this.name };
  }
}
