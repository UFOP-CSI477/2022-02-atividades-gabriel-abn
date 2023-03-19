import { LocalColeta, LocalColetaProps } from "@domain/local-coleta";

export interface ILocalColetaRepository {
  create(localColeta: LocalColeta): Promise<LocalColetaProps>;
  findById(id: string): Promise<LocalColetaProps>;
  findAll(): Promise<LocalColetaProps[]>;
}
