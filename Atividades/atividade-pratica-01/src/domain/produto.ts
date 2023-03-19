import { DomainError, Entity } from "./common";

export type ProdutoProps = {
  id: string;
  etiqueta: string;
  doacao_id: number;
  validade: Date;
};

export class Produto extends Entity<ProdutoProps> {
  private constructor(props: ProdutoProps) {
    super(props);
  }

  public static create(props: ProdutoProps): Produto {
    var errors: string[] = [];

    if (props.validade.getTime() < Date.now()) {
      errors.push("Data de validade invalida.");
    }

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new Produto(props);
  }
}
