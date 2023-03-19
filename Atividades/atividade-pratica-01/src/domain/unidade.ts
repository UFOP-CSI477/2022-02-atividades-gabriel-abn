import { DomainError, Entity } from "@domain/common";

export type UnidadeProps = {
  id: string;
  nome: string;
  numero: string;
  complemento: string;
  cidade_id: number;
};

export class Unidade extends Entity<UnidadeProps> {
  private constructor(props: UnidadeProps) {
    super(props);
  }

  public static create(props: UnidadeProps): Unidade {
    var errors: string[] = [];

    if (!props.complemento) {
      props.complemento = "";
    }

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new Unidade(props);
  }
}
