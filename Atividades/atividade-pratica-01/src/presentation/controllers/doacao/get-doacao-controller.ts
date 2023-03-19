import { GetDoacao, GetDoacaoUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetDoacaoController implements Controller {
  constructor(private readonly getDoacao: GetDoacaoUseCase) {}

  async handle(request: GetDoacao.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }
      const doacao = await this.getDoacao.execute(request);

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
      return {
        status: 500,
        body: new ServerError(error).toString(),
      };
    }
  }
}
