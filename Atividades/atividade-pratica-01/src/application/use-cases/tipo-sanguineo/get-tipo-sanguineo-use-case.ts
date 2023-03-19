import { ApplicationError } from "@application/common";
import { ITipoSanguineoRepository } from "@application/repositories";
import { TipoSanguineoProps } from "@domain/tipo_sanguineo";

export namespace GetTipoSanguineo {
  export type Params = {
    id: string;
  };
  export type Result = {
    tipoSanguineo: TipoSanguineoProps;
  };
}

export class GetTipoSanguineoUseCase {
  constructor(
    private readonly tipoSanguineoRepository: ITipoSanguineoRepository
  ) {}

  async execute(
    params: GetTipoSanguineo.Params
  ): Promise<GetTipoSanguineo.Result> {
    const tipoSanguineo = await this.tipoSanguineoRepository.getByID(params.id);

    if (!tipoSanguineo) {
      throw new ApplicationError("Tipo sanguíneo não encontrado.");
    }

    return { tipoSanguineo };
  }
}
