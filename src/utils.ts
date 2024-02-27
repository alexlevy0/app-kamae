import { ETrainingStatus } from "./types"

export function generateRandomStatus(): ETrainingStatus {
	const possibleStatuses = [ETrainingStatus.Defeat, ETrainingStatus.Victory]
	const randomNumber = Math.floor(Math.random() * 2)
        return possibleStatuses[randomNumber]
}
