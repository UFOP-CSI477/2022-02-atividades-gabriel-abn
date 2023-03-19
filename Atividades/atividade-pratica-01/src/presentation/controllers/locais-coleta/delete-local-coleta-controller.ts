import {
  DeleteLocalColeta,
  DeleteLocalColetaUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class DeleteLocalColetaController implements Controller {
  constructor(private readonly deleteLocalColeta: DeleteLocalColetaUseCase) {}

  async handle(request: DeleteLocalColeta.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const response = await this.deleteLocalColeta.execute(request);

      return {
        status: 200,
        body: response,
      };
    } catch (error) {
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
