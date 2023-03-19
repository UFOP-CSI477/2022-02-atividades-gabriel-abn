import { PresentationError } from "./presentation-error";

export class ServerError extends PresentationError {
  constructor(error: any) {
    super("Internal server error: " + error.message);
    this.name = "Server Error";
  }
}
