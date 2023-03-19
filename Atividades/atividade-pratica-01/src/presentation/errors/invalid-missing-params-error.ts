import { PresentationError } from "./presentation-error";

export class InvalidMissingParamsError extends PresentationError {
  constructor(paramName?: string | string[]) {
    super(
      paramName ? `Missing param: ${paramName}` : "Invalid/Missing params."
    );
    this.name = "InvalidMissingParamsError";
  }
}
