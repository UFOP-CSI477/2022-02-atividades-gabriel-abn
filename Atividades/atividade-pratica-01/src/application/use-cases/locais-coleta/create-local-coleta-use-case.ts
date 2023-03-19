import { ApplicationError } from "@application/common";
import { ILocalColetaRepository } from "@application/repositories";
import { LocalColeta, LocalColetaProps } from "@domain/local-coleta";

export namespace CreateLocalColeta {
  export type Params = {
    localColeta: LocalColetaProps;
  };
  export type Result = LocalColetaProps;
}

export class CreateLocalColetaUseCase {
  constructor(private readonly localColetaRepository: ILocalColetaRepository) {}

  async execute(
    data: CreateLocalColeta.Params
  ): Promise<CreateLocalColeta.Result> {
    const existsLocalColeta = await this.localColetaRepository.findById(
      data.localColeta.id
    );

    if (existsLocalColeta) {
      throw new ApplicationError("Local de coleta já cadastrado");
    }

    const localColeta = LocalColeta.create({ ...data.localColeta });

    const result = await this.localColetaRepository.create(localColeta);

    if (!result) {
      throw new ApplicationError("Erro ao cadastrar local de coleta");
    }

    return result;
  }
}
