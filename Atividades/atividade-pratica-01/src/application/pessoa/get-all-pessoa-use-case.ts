import { IPessoaRepository } from "@application/repositories";
import { PessoaProps } from "@domain/pessoas";

export namespace GetAllPessoaUseCase {
  export type Result = PessoaProps[];
}

export class GetAllPessoaUseCase {
  constructor(private repository: IPessoaRepository) {}

  async execute(): Promise<GetAllPessoaUseCase.Result> {
    return await this.repository.findAll();
  }
}
