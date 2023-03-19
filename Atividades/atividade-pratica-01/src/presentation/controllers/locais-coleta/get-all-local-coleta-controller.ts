import { GetAllLocalColetaUseCase } from "@application/use-cases";
import { ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetAllLocalColetaController implements Controller {
  constructor(private readonly getAllLocalColeta: GetAllLocalColetaUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const response = await this.getAllLocalColeta.execute();

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
