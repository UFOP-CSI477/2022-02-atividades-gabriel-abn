import { DomainError, Entity } from "./common";

export type DistribuicaoProps = {
  id: string;
  produto_id: number;
  unidade_id: number;
  data: Date;
};

export class Distribuicao extends Entity<DistribuicaoProps> {
  private constructor(props: DistribuicaoProps) {
    super(props);
  }

  public static create(props: DistribuicaoProps): Distribuicao {
    var errors: string[] = [];

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new Distribuicao(props);
  }
}
