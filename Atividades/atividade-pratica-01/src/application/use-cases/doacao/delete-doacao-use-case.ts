import { ApplicationError } from "@application/common";
import { IDoacaoRepository } from "@application/repositories";

export namespace DeleteDoacao {
  export type Params = {
    id: string;
  };

  export type Result = boolean;
}

export class DeleteDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(params: DeleteDoacao.Params): Promise<DeleteDoacao.Result> {
    const result = await this.doacaoRepository.delete(params.id);

    if (!result) {
      throw new ApplicationError("Doação não encontrada");
    }

    return result;
  }
}
