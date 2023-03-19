import {
  UpdateLocalColeta,
  UpdateLocalColetaUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class UpdateLocalColetaController implements Controller {
  constructor(private readonly updateLocalColeta: UpdateLocalColetaUseCase) {}
  async handle(request: UpdateLocalColeta.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const response = await this.updateLocalColeta.execute(request);

      return {
        status: 200,
        body: response,
      };
    } catch (error) {
      if (error.name === "Application Error" || error.name === "Domain Error") {
        return {
          status: 400,
          body: error.toString(),
        };
      }
      return {
        status: 500,
        body: new ServerError(error).toString(),
      };
    }
  }
}
