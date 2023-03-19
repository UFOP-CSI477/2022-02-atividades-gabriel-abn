import { ApplicationError } from "@application/common";
import { IPessoaRepository } from "@application/repositories";
import { Pessoa } from "@domain/pessoas";

export namespace EditPessoa {
  export type Params = {
    id: string;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    documento: string;
    cidade_id: number;
    tipo_id: number;
  };
  export type Result = {
    id: string;
  };
}

export class EditPessoaUseCase {
  constructor(private pessoaRepository: IPessoaRepository) {}

  async execute(data: EditPessoa.Params): Promise<EditPessoa.Result> {
    const pessoaExists = await this.pessoaRepository.findByDocumento(
      data.documento
    );

    if (!pessoaExists) {
      throw new ApplicationError("Pessoa não cadastrada.");
    }

    const pessoa = Pessoa.create({ ...data });

    const result = await this.pessoaRepository.update(pessoa);

    if (!result) {
      throw new ApplicationError("Erro ao editar pessoa.");
    }

    return { id: result.documento };
  }
}
