import {
  GetTipoSanguineo,
  GetTipoSanguineoUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetTipoSanguineoController implements Controller {
  constructor(private readonly getTipoSanguineo: GetTipoSanguineoUseCase) {}

  async handle(request: GetTipoSanguineo.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const result = await this.getTipoSanguineo.execute(request);

      return {
        status: 200,
        body: result,
      };
    } catch (error) {
      if (error.name == "Application Error" || error.name == "Domain Error") {
        return {
          status: 404,
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
