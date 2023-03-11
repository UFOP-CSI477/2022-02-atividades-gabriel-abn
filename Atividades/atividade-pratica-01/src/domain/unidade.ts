import { DomainError } from "@domain/common";

export type UnidadeProps = {
  nome: string;
  numero: string;
  complemento: string;
  cidade_id: number;
};

export class Unidade {
  private constructor(private props: UnidadeProps) {}

  public static create(props: UnidadeProps): Unidade | Error {
    var errors: string[] = [];

    if (!props.complemento) {
      props.complemento = "";
    }

    if (errors.length > 0) {
      return new DomainError(errors);
    }

    return new Unidade(props);
  }
}
