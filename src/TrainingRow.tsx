import { TrainingRowProps, ETrainingStatus, TableColumns } from "./types"

export const TrainingRow = ({ training, onGoClick }: TrainingRowProps) => {
        return (
                <tr>
                        {TableColumns.map((columnName) => {
                                if (columnName === "action") {
                                        if (![ETrainingStatus.Started, ETrainingStatus.Defeat].includes(training.status)) {
                                                return null
                                        }
                                        return (
                                                <td key={columnName}>
                                                        <button onClick={() => onGoClick(training)}>Go !</button>
                                                </td>
                                        )
                                }
                                return <td key={columnName}>{training[columnName]}</td>
                        })}
                </tr>
        )
}
