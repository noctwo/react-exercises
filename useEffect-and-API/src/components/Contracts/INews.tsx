import { Articles } from "./Articles"

interface INews {
    status: string,
    totalResults: number,
    articles: Articles[]
}

export type {INews}