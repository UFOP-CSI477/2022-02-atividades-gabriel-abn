import { Pessoa, PessoaProps } from "@domain/pessoas";

export interface IPessoaRepository {
  create(pessoa: Pessoa): Promise<PessoaProps>;
  findByDocumento(documento: string): Promise<PessoaProps>;
  findById(id: string): Promise<PessoaProps>;
  findAll(): Promise<PessoaProps[]>;
  update(pessoa: Pessoa): Promise<PessoaProps>;
  delete(documento: string): Promise<boolean>;
}
