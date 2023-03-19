import { IDoacaoRepository } from "@application/repositories";
import { DoacaoProps } from "@domain/doacao";

export namespace GetAllDoacao {
  export type Result = DoacaoProps[];
}

export class GetAllDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(): Promise<GetAllDoacao.Result> {
    const result = await this.doacaoRepository.findAll();

    return result;
  }
}
