import { ApplicationError } from "@application/common";
import { ITipoSanguineoRepository } from "@application/repositories";

export namespace DeleteTipoSanguineo {
  export type Params = {
    id: string;
  };
  export type Result = boolean;
}

export class DeleteTipoSanguineoUseCase {
  constructor(
    private readonly tipoSanguineoRepository: ITipoSanguineoRepository
  ) {}

  async execute(
    params: DeleteTipoSanguineo.Params
  ): Promise<DeleteTipoSanguineo.Result> {
    const result = await this.tipoSanguineoRepository.delete(params.id);

    if (!result) throw new ApplicationError("Tipo Sanguineo não encontrado");

    return result;
  }
}
