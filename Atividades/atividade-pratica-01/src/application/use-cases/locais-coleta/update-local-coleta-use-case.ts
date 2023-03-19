import { ApplicationError } from "@application/common";
import { ILocalColetaRepository } from "@application/repositories";
import { LocalColeta, LocalColetaProps } from "@domain/local-coleta";

export namespace UpdateLocalColeta {
  export type Params = {
    id: string;
    localColeta: LocalColetaProps;
  };
  export type Result = LocalColetaProps;
}

export class UpdateLocalColetaUseCase {
  constructor(private readonly localColetaRepository: ILocalColetaRepository) {}

  async execute(
    params: UpdateLocalColeta.Params
  ): Promise<UpdateLocalColeta.Result> {
    const local = await this.localColetaRepository.findById(params.id);

    if (!local) {
      throw new ApplicationError("Local de coleta não encontrado");
    }

    const localColeta = LocalColeta.create({ ...params.localColeta });

    const updatedLocal = await this.localColetaRepository.update(
      params.id,
      localColeta
    );

    if (!updatedLocal) {
      throw new ApplicationError("Erro ao atualizar local de coleta");
    }

    return updatedLocal;
  }
}
