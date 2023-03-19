import { ApplicationError } from "@application/common";
import { IDoacaoRepository } from "@application/repositories";
import { Doacao, DoacaoProps } from "@domain/doacao";

export namespace UpdateDoacaoUseCase {
  export type Params = {
    doacao: DoacaoProps;
  };
  export type Result = DoacaoProps;
}

export class UpdateDoacaoUseCase {
  constructor(private readonly doacaoRepository: IDoacaoRepository) {}

  async execute(
    data: UpdateDoacaoUseCase.Params
  ): Promise<UpdateDoacaoUseCase.Result> {
    const existsDoacao = await this.doacaoRepository.findById(data.doacao.id);

    if (!existsDoacao) {
      throw new ApplicationError("Doação não encontrada");
    }

    const doacao = Doacao.create({ ...existsDoacao });

    const result = await this.doacaoRepository.update(existsDoacao.id, doacao);

    if (!result) {
      throw new ApplicationError("Falha ao atualizar doação");
    }

    return result;
  }
}
