import { DomainError, Entity } from "./common";

export type TipoSanguineoProps = {
  tipo: string;
  fator: string;
};

export class TipoSanguineo extends Entity<TipoSanguineoProps> {
  private constructor(props: TipoSanguineoProps) {
    super(props);
  }

  public static create(props: TipoSanguineoProps): TipoSanguineo | Error {
    var errors: string[] = [];

    if (errors.length > 0) {
      return new DomainError(errors);
    }

    return new TipoSanguineo(props);
  }
}
