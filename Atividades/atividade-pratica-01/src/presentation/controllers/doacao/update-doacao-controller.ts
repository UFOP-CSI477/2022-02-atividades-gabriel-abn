import { UpdateDoacao, UpdateDoacaoUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class UpdateDoacaoController implements Controller {
  constructor(private readonly updateDoacao: UpdateDoacaoUseCase) {}

  async handle(request: UpdateDoacao.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      const updatedDoacao = await this.updateDoacao.execute(request);

      return {
        status: 200,
        body: updatedDoacao,
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
