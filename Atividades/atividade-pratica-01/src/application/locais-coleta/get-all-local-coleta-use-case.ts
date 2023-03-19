import { ApplicationError } from "@application/common";
import { ILocalColetaRepository } from "@application/repositories";
import { LocalColetaProps } from "@domain/local-coleta";

export namespace GetAllDoacao {
  export type Result = LocalColetaProps[];
}

export class GetAllDoacaoUseCase {
  constructor(private readonly localColetaRepository: ILocalColetaRepository) {}

  async execute(): Promise<GetAllDoacao.Result> {
    const local = await this.localColetaRepository.findAll();

    if (local.length == 0) {
      throw new ApplicationError("Nenhum local de doação encontrado");
    }

    return local;
  }
}
