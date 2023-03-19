import { GetPessoa, GetPessoaUseCase } from "@application/use-cases";
import { InvalidMissingParamsError, ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetPessoaController implements Controller {
  constructor(private readonly getPessoa: GetPessoaUseCase) {}

  async handle(request: GetPessoa.Params): Promise<HttpResponse> {
    try {
      if (!request) {
        return {
          status: 400,
          body: new InvalidMissingParamsError().toString(),
        };
      }

      request.documento = request.documento
        .replace(".", "")
        .replace("-", "")
        .replace(" ", "");

      const response = await this.getPessoa.execute(request);

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
