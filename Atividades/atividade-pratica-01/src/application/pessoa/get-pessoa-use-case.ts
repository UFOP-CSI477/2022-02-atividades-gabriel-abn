import { IPessoaRepository } from "@application/repositories";
import { PessoaProps } from "@domain/pessoas";

export namespace GetPessoa {
  export type Params = {
    documento: string;
  };
  export type Result = PessoaProps;
}

export class GetPessoaUseCase {
  constructor(private readonly pessoaRepository: IPessoaRepository) {}

  async execute(params: GetPessoa.Params): Promise<GetPessoa.Result> {
    const pessoa = await this.pessoaRepository.findByDocumento(
      params.documento
    );

    if (!pessoa) {
      throw new Error("Pessoa não cadastrada ou não encontrada.");
    }

    return pessoa;
  }
}
