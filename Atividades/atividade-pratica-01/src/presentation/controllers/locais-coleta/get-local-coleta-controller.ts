import { GetLocalColeta, GetLocalColetaUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetLocalColetaController implements Controller {
  constructor(private readonly getLocalColeta: GetLocalColetaUseCase) {}

  async handle(request: GetLocalColeta.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const response = await this.getLocalColeta.execute(request);

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
