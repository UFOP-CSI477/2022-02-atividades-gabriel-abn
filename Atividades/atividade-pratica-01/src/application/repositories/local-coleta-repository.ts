import { LocalColeta, LocalColetaProps } from "@domain/local-coleta";

export interface ILocalColetaRepository {
  create(localColeta: LocalColeta): Promise<LocalColetaProps>;
  findById(id: string): Promise<LocalColetaProps>;
  findAll(): Promise<LocalColetaProps[]>;
  update(id: string, localColeta: LocalColeta): Promise<LocalColetaProps>;
  delete(id: string): Promise<boolean>;
}
