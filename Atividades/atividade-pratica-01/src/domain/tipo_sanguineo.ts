import { DomainError, Entity } from "./common";

export type TipoSanguineoProps = {
  id: string;
  tipo: string;
  fator: string;
};

export class TipoSanguineo extends Entity<TipoSanguineoProps> {
  private constructor(props: TipoSanguineoProps) {
    super(props);
  }

  public static create(props: TipoSanguineoProps): TipoSanguineo {
    var errors: string[] = [];

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new TipoSanguineo(props);
  }
}
