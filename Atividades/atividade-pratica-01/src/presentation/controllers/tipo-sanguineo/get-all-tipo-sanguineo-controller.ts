import { GetAllTipoSanguineoUseCase } from "@application/use-cases";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetAllTipoSanguineoController implements Controller {
  constructor(
    private readonly getAllTipoSanguineo: GetAllTipoSanguineoUseCase
  ) {}

  async handle(): Promise<HttpResponse> {
    try {
      const result = await this.getAllTipoSanguineo.execute();

      return {
        status: 200,
        body: result,
      };
    } catch (error) {
      if (error.name == "Application Error") {
        return {
          status: 400,
          body: error.toString(),
        };
      }

      return {
        status: 500,
        body: error.toString(),
      };
    }
  }
}
