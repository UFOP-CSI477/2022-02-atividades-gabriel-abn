import { GetAllDoacaoUseCase } from "@application/use-cases";
import { ServerError } from "@presentation/errors";
import { Controller, HttpResponse } from "@presentation/protocols";

export class GetAllDoacaoController implements Controller {
  constructor(private readonly getAllDoacao: GetAllDoacaoUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const doacoes = await this.getAllDoacao.execute();

      return {
        status: 200,
        body: doacoes,
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
