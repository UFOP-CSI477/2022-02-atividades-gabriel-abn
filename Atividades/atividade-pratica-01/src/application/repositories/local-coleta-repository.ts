import { LocaisColetaProps } from "@domain/local-coleta";

export interface ILocalColetaRepository {
  findById(id: string): Promise<LocaisColetaProps>;
}
