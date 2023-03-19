import { DomainError, Entity } from "@domain/common";

export type PessoaProps = {
  id: string;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  documento: string;
  cidade_id: number;
  tipo_id: number;
};

export class Pessoa extends Entity<PessoaProps> {
  private constructor(props: PessoaProps) {
    super(props);
  }

  public static create(props: PessoaProps): Pessoa {
    var errors: string[] = [];

    if (props.documento.length != 8) {
      errors.push("Documento inválido.");
    }

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new Pessoa(props);
  }
}
