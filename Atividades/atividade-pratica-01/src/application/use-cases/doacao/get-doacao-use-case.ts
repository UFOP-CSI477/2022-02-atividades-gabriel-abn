import { ApplicationError } from "@application/common";
import { IDoacaoRepository } from "@application/repositories";
import { DoacaoProps } from "@domain/doacao";

export namespace GetDoacaoUseCase {
  export type Params = {
    id: string;
  };
  export type Result = DoacaoProps;
}

export class GetDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(
    params: GetDoacaoUseCase.Params
  ): Promise<GetDoacaoUseCase.Result> {
    const result = await this.doacaoRepository.findById(params.id);

    if (!result) {
      throw new ApplicationError("Doação não encontrada");
    }

    return result;
  }
}
