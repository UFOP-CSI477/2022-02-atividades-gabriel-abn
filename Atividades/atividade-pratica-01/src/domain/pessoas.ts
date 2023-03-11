import { DomainError } from "@domain/common";

export type PessoaProps = {
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  documento: string;
  cidade_id: number;
  tipo_id: number;
};

export class Pessoa {
  private constructor(private props: PessoaProps) {}

  public static create(props: PessoaProps): Pessoa | Error {
    var errors: string[] = [];

    if (props.documento.length != 8) {
      errors.push("Documento inválido.");
    }

    if (errors.length > 0) {
      return new DomainError(errors);
    }

    return new Pessoa(props);
  }
}