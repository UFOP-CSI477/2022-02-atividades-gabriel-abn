import {
  CreateTipoSanguineo,
  CreateTipoSanguineoUseCase,
} from "@application/use-cases";
import { InvalidMissingParamsError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class CreateTipoSanguineoController implements Controller {
  constructor(
    private readonly createTipoSanguineo: CreateTipoSanguineoUseCase
  ) {}

  async handle(request: CreateTipoSanguineo.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const response = await this.createTipoSanguineo.execute(request);

      return {
        status: 201,
        body: response,
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
