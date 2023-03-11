import { DomainError, Entity } from "./common";

export type DoacaoProps = {
  pessoa_id: string;
  local_id: string;
  data: Date;
};

export class Doacao extends Entity<DoacaoProps> {
  private constructor(props: DoacaoProps) {
    super(props);
  }

  public static create(props: DoacaoProps): Doacao | Error {
    var errors: string[] = [];

    if (errors.length > 0) {
      return new DomainError(errors);
    }

    return new Doacao(props);
  }
}
