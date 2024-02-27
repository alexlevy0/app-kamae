import { TableColumns } from "./types"

export function TableHead() {
        return (
                <thead>
                        <tr>
                                {TableColumns.map((columnName) => (
                                        <th key={columnName}>{columnName}</th>
                                ))}
                        </tr>
                </thead>
        )
}
