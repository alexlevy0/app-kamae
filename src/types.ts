export interface ITraining {
        title: string
        category: ETrainingCategory
        status: ETrainingStatus
        order: number
}

export interface ITrainingTable extends Omit<ITraining, "order"> {
        action: string
}

type TTrainingKeys = keyof ITrainingTable

export const TableColumns: TTrainingKeys[] = ["title", "category", "status", "action"]

export enum ETrainingCategory {
        "À la maison" = "À la maison",
        "Cybersécurité" = "Cybersécurité",
        "RGPD" = "RGPD",
}

export enum ETrainingStatus {
        Started = "À commencer",
        Victory = "Victoire",
        Defeat = "Défaite",
}

export const trainingOrder: Record<ETrainingStatus, number> = {
        [ETrainingStatus.Started]: 0,
        [ETrainingStatus.Defeat]: 1,
        [ETrainingStatus.Victory]: 2,
}

export type TrainingRowProps = {
        training: ITraining
        onGoClick: (training: ITraining) => void
}
