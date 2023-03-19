import { DeleteDoacao, DeleteDoacaoUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class DeleteDoacaoController implements Controller {
  constructor(private readonly deleteDoacao: DeleteDoacaoUseCase) {}

  async handle(request: DeleteDoacao.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }
      const doacao = await this.deleteDoacao.execute(request);

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
