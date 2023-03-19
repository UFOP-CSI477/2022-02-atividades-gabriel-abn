import { ApplicationError } from "@application/common";
import { IIDGenerator } from "@application/protocols";
import { IPessoaRepository } from "@application/repositories";
import { Pessoa } from "@domain/pessoas";

export namespace RegisterPessoa {
  export type Params = {
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

export class RegisterPessoaUseCase {
  constructor(
    private pessoaRepository: IPessoaRepository,
    private idGenerator: IIDGenerator
  ) {}

  async execute(data: RegisterPessoa.Params): Promise<RegisterPessoa.Result> {
    const pessoaExists = await this.pessoaRepository.findByDocumento(
      data.documento
    );

    if (pessoaExists) {
      throw new ApplicationError("Pessoa já cadastrada.");
    }

    const id = this.idGenerator.generate();

    const pessoa = Pessoa.create({ ...data, id: id });

    const result = await this.pessoaRepository.create(pessoa);

    if (!result) {
      throw new ApplicationError("Erro ao criar pessoa.");
    }

    return { id: result.id };
  }
}
