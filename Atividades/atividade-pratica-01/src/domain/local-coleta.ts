import { DomainError, Entity } from "./common";

export type LocalColetaProps = {
  id: string;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade_id: number;
};

export class LocalColeta extends Entity<LocalColetaProps> {
  private constructor(props: LocalColetaProps) {
    super(props);
  }

  public static create(props: LocalColetaProps): LocalColeta {
    var errors: string[] = [];

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new LocalColeta(props);
  }
}
