import { FC, useEffect, useState } from "react"

import "./App.css"
import trainingsData from "./data.json"
import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"
import { ITraining, trainingOrder } from "./types"
import { generateRandomStatus } from "./utils"

const App: FC = (): JSX.Element => {
        const [trainings, setTrainings] = useState<ITraining[]>([])

        useEffect(() => {
                const trainings = trainingsData as ITraining[]
                const updatedTrainings = trainings.map((training) => {
                        const order = trainingOrder[training.status]
                        return { ...training, order }
                })
                setTrainings(updatedTrainings)
        }, [])

        const handleGoClick = (training: ITraining) => {
                const newStatus = generateRandomStatus()
                setTrainings((prevTrainings) => {
                        const updatedTrainings = [...prevTrainings]
                        const trainingIndex = updatedTrainings.findIndex((t) => t.title === training.title)
                        updatedTrainings[trainingIndex].status = newStatus
                        return updatedTrainings
                })
        }

        return (
                <table>
                        <TableHead />
                        <TableBody
                                trainings={trainings}
                                onGoClick={handleGoClick}
                        />
                </table>
        )
}

export default App
