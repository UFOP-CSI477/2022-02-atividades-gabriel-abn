import { IPessoaRepository } from "@application/repositories";

export namespace DeletePessoa {
  export type Params = {
    documento: string;
  };
  export type Result = boolean;
}

export class DeletePessoaUseCase {
  constructor(private readonly pessoaRepository: IPessoaRepository) {}

  async execute(input: DeletePessoa.Params): Promise<DeletePessoa.Result> {
    const pessoa = await this.pessoaRepository.findByDocumento(input.documento);

    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }

    return await this.pessoaRepository.delete(pessoa.documento);
  }
}
