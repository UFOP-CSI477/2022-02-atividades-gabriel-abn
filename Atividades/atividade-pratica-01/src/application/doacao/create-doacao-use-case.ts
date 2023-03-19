import { ApplicationError } from "@application/common";
import { IIDGenerator } from "@application/protocols";
import {
  IDoacaoRepository,
  ILocalColetaRepository,
  IPessoaRepository,
} from "@application/repositories";
import { Doacao } from "@domain/doacao";

export namespace CreateDoacao {
  export type Params = {
    pessoa_id: string;
    local_id: string;
    data: string;
  };
  export type Result = {
    id: string;
  };
}

export class CreateDoacaoUseCase {
  constructor(
    private repository: IDoacaoRepository,
    private pessoaRepository: IPessoaRepository,
    private localRepository: ILocalColetaRepository,
    private idGenerator: IIDGenerator
  ) {}

  async execute(data: CreateDoacao.Params): Promise<CreateDoacao.Result> {
    const pessoa = await this.pessoaRepository.findById(data.pessoa_id);

    if (!pessoa) throw new ApplicationError("Pessoa não encontrada");

    const local = await this.localRepository.findById(data.local_id);

    if (!local) throw new ApplicationError("Local não encontrado");

    const id = this.idGenerator.generate();

    const doacao = Doacao.create({
      id: id,
      pessoa_id: pessoa.id,
      local_id: local.id,
      data: new Date(data.data),
    });

    const result = await this.repository.create(doacao);

    return {
      id: result.id,
    };
  }
}
