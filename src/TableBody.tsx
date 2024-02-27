import { TrainingRow } from "./TrainingRow";
import { ITraining } from "./types";

export function TableBody({ trainings, onGoClick }: { trainings: ITraining[]; onGoClick: (training: ITraining) => void; }) {
        return (
                <tbody>
                        {trainings
                                .sort((a, b) => a.order - b.order)
                                .map((training) => (
                                        <TrainingRow
                                                key={training.title}
                                                training={training}
                                                onGoClick={onGoClick} />
                                ))}
                </tbody>
        );
}
