import { ApplicationError } from "@application/common";
import { ITipoSanguineoRepository } from "@application/repositories";
import { TipoSanguineo, TipoSanguineoProps } from "@domain/tipo_sanguineo";

export namespace UpdateTipoSanguineo {
  export type Params = {
    id: string;
    tipo: string;
    fator: string;
  };
  export type Result = {
    tipoSanguineo: TipoSanguineoProps;
  };
}

export class UpdateTipoSanguineoUseCase {
  constructor(
    private readonly tipoSanguineoRepository: ITipoSanguineoRepository
  ) {}

  async execute(
    params: UpdateTipoSanguineo.Params
  ): Promise<UpdateTipoSanguineo.Result> {
    const tipoSanguineo = await this.tipoSanguineoRepository.getByID(params.id);

    if (!tipoSanguineo) {
      throw new ApplicationError("Tipo sanguíneo não encontrado.");
    }

    const updatedTipoSanguineo = TipoSanguineo.create({
      ...params,
    });

    const result = await this.tipoSanguineoRepository.update(
      params.id,
      updatedTipoSanguineo
    );

    if (!result) {
      throw new ApplicationError(
        "Não foi possível atualizar o tipo sanguíneo."
      );
    }

    return { tipoSanguineo: result };
  }
}
