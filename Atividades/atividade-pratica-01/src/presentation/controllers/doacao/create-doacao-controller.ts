import { CreateDoacao, CreateDoacaoUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class CreateDoacaoController implements Controller {
  constructor(private readonly createDoacao: CreateDoacaoUseCase) {}

  async handle(request: CreateDoacao.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }
      const doacao = await this.createDoacao.execute(request);

      return {
        status: 200,
        body: doacao,
      };
    } catch (error) {
      if (error.name === "Application Error") {
        return {
          status: 400,
          body: error.toString(),
        };
      }
      if (error.name === "Domain Error") {
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
