import { ApplicationError } from "@application/common";
import { ITipoSanguineoRepository } from "@application/repositories";

export namespace DeleteTipoSanguineoUseCase {
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
    params: DeleteTipoSanguineoUseCase.Params
  ): Promise<DeleteTipoSanguineoUseCase.Result> {
    const result = await this.tipoSanguineoRepository.delete(params.id);

    if (!result) throw new ApplicationError("Tipo Sanguineo não encontrado");

    return result;
  }
}
