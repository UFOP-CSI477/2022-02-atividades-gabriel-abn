import { DomainError, Entity } from "./common";

export type LocaisColetaProps = {
  id: string;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade_id: number;
};

export class LocaisColeta extends Entity<LocaisColetaProps> {
  private constructor(props: LocaisColetaProps) {
    super(props);
  }

  public static create(props: LocaisColetaProps): LocaisColeta {
    var errors: string[] = [];

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new LocaisColeta(props);
  }
}
