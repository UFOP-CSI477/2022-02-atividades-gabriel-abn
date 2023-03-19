import { GetAllPessoaUseCase } from "@application/use-cases";
import { ServerError } from "@presentation/errors";
import { HttpResponse } from "@presentation/protocols";

export class GetAllPessoaController {
  constructor(private readonly getAllPessoaUseCase: GetAllPessoaUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const pessoas = await this.getAllPessoaUseCase.execute();
      return {
        status: 200,
        body: pessoas,
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
