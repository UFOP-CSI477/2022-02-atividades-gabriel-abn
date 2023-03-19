import { ApplicationError } from "@application/common";
import { ITipoSanguineoRepository } from "@application/repositories";
import { TipoSanguineoProps } from "@domain/tipo_sanguineo";

export namespace GetAllTipoSanguineo {
  export type Result = TipoSanguineoProps[];
}

export class GetAllTipoSanguineoUseCase {
  constructor(private tipoSanguineoRepository: ITipoSanguineoRepository) {}

  async execute(): Promise<GetAllTipoSanguineo.Result> {
    const result = await this.tipoSanguineoRepository.getAll();

    if (!result)
      throw new ApplicationError(
        "Não foi possível buscar os tipos sanguíneos."
      );

    return result;
  }
}
