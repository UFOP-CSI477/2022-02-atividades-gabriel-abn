import { Doacao, DoacaoProps } from "@domain/doacao";

export interface IDoacaoRepository {
  create(doacao: Doacao): Promise<DoacaoProps>;
  findById(id: string): Promise<DoacaoProps>;
  findAll(): Promise<DoacaoProps[]>;
  update(id: string, doacao: Doacao): Promise<DoacaoProps>;
  delete(id: string): Promise<boolean>;
}
