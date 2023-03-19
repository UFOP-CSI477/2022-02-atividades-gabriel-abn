import {
  DeleteTipoSanguineo,
  DeleteTipoSanguineoUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class DeleteTipoSanguineoController implements Controller {
  constructor(
    private readonly deleteTipoSanguineo: DeleteTipoSanguineoUseCase
  ) {}

  async handle(request: DeleteTipoSanguineo.Params): Promise<HttpResponse> {
    try {
      if (!request.id) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const result = await this.deleteTipoSanguineo.execute(request);

      return {
        status: 200,
        body: result,
      };
    } catch (error) {
      if (error.name == "Application Error" || error.name == "Domain Error") {
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
