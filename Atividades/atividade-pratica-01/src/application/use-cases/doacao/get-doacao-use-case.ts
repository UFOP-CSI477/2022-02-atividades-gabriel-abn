import { ApplicationError } from "@application/common";
import { IDoacaoRepository } from "@application/repositories";
import { DoacaoProps } from "@domain/doacao";

export namespace GetDoacao {
  export type Params = {
    id: string;
  };
  export type Result = DoacaoProps;
}

export class GetDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(params: GetDoacao.Params): Promise<GetDoacao.Result> {
    const result = await this.doacaoRepository.findById(params.id);

    if (!result) {
      throw new ApplicationError("Doação não encontrada");
    }

    return result;
  }
}
