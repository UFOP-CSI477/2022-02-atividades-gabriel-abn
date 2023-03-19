import {
  CreateLocalColeta,
  CreateLocalColetaUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class CreateLocalColetaController implements Controller {
  constructor(private readonly createLocalColeta: CreateLocalColetaUseCase) {}

  async handle(request: CreateLocalColeta.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const response = await this.createLocalColeta.execute(request);

      return {
        status: 200,
        body: response,
      };
    } catch (error) {
      if (error.name === "Domain Error") {
        return {
          status: 400,
          body: error.toString(),
        };
      }
      if (error.name === "Application Error") {
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
