import { ApplicationError } from "@application/common";
import { IDoacaoRepository } from "@application/repositories";

export namespace DeleteDoacaoUseCase {
  export type Params = {
    id: string;
  };

  export type Result = boolean;
}

export class DeleteDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(
    params: DeleteDoacaoUseCase.Params
  ): Promise<DeleteDoacaoUseCase.Result> {
    const result = await this.doacaoRepository.delete(params.id);

    if (!result) {
      throw new ApplicationError("Doação não encontrada");
    }

    return result;
  }
}
