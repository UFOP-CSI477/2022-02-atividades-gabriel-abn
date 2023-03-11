import { DomainError } from "./common";

export type DistribuicaoProps = {
  produto_id: number;
  unidade_id: number;
  data: Date;
};

export class Distribuicao {
  private constructor(private props: DistribuicaoProps) {}

  public static create(props: DistribuicaoProps): Distribuicao | DomainError {
    return new Distribuicao(props);
  }
}
