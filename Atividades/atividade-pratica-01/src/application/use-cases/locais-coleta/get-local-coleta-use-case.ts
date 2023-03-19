import { ApplicationError } from "@application/common";
import { ILocalColetaRepository } from "@application/repositories";
import { LocalColetaProps } from "@domain/local-coleta";

export namespace GetLocalColeta {
  export type Params = {
    id: string;
  };
  export type Result = LocalColetaProps;
}

export class GetLocalColetaUseCase {
  constructor(private readonly localColetaRepository: ILocalColetaRepository) {}

  async execute(params: GetLocalColeta.Params): Promise<GetLocalColeta.Result> {
    const local = await this.localColetaRepository.findById(params.id);

    if (!local) {
      throw new ApplicationError("Local de doação não encontrado");
    }

    return local;
  }
}
