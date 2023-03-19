import { ApplicationError } from "@application/common";
import { IIDGenerator } from "@application/protocols";
import { ITipoSanguineoRepository } from "@application/repositories";
import { TipoSanguineo } from "@domain/tipo_sanguineo";

export namespace CreateTipoSanguineo {
  export type Params = {
    tipo: string;
    fator: string;
  };

  export type Result = {
    id: string;
  };
}

export class CreateTipoSanguineoUseCase {
  constructor(
    private tipoSanguineoRepository: ITipoSanguineoRepository,
    private idGenerator: IIDGenerator
  ) {}

  async execute(
    data: CreateTipoSanguineo.Params
  ): Promise<CreateTipoSanguineo.Result> {
    const exists = await this.tipoSanguineoRepository.getByTipo(data.tipo);

    if (exists) {
      throw new ApplicationError("O tipo sanguíneo já existe.");
    }

    const id = this.idGenerator.generate();
    const tipoSanguineo = TipoSanguineo.create({ ...data, id });

    const result = await this.tipoSanguineoRepository.create(tipoSanguineo);

    if (!result) {
      throw new ApplicationError("Não foi possível criar o tipo sanguíneo.");
    }

    return result;
  }
}
