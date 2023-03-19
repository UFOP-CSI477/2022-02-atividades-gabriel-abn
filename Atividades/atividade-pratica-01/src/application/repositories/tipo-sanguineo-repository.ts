import { TipoSanguineo, TipoSanguineoProps } from "@domain/tipo_sanguineo";

export interface ITipoSanguineoRepository {
  create(tipoSanguineo: TipoSanguineo): Promise<TipoSanguineoProps>;
  getByID(id: string): Promise<TipoSanguineoProps>;
  getByTipo(tipo: string): Promise<TipoSanguineoProps>;
  getAll(): Promise<TipoSanguineoProps[]>;
  update(id: string, tipoSanguineo: TipoSanguineo): Promise<TipoSanguineoProps>;
  delete(id: string): Promise<boolean>;
}
