import { DomainError } from "./common";

export type LocaisColetaProps = {
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade_id: number;
};

export class LocaisColeta {
  private constructor(private props: LocaisColetaProps) {}

  public static create(props: LocaisColetaProps): LocaisColeta | Error {
    var errors: string[] = [];

    if (errors.length > 0) {
      return new DomainError(errors);
    }

    return new LocaisColeta(props);
  }
}