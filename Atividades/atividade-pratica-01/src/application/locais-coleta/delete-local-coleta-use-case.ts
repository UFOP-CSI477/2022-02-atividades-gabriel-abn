import { ApplicationError } from "@application/common";
import { ILocalColetaRepository } from "@application/repositories";

export namespace DeleteLocalColeta {
  export type Params = {
    id: string;
  };
  export type Result = boolean;
}

export class DeleteLocalColetaUseCase {
  constructor(private readonly localColetaRepository: ILocalColetaRepository) {}

  async execute(
    params: DeleteLocalColeta.Params
  ): Promise<DeleteLocalColeta.Result> {
    const local = await this.localColetaRepository.findById(params.id);

    if (!local) {
      throw new ApplicationError("Local de coleta não encontrado");
    }

    const deletedLocal = await this.localColetaRepository.delete(params.id);

    if (!deletedLocal) {
      throw new ApplicationError("Erro ao deletar local de coleta");
    }

    return deletedLocal;
  }
}
