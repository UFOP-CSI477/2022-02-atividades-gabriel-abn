import { DomainError, Entity } from "./common";

export type DistribuicaoProps = {
  produto_id: number;
  unidade_id: number;
  data: Date;
};

export class Distribuicao extends Entity<DistribuicaoProps> {
  private constructor(props: DistribuicaoProps) {
    super(props);
  }

  public static create(props: DistribuicaoProps): Distribuicao | DomainError {
    return new Distribuicao(props);
  }
}
