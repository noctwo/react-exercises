import { Source } from "./Source"

type Articles = {
    source: Source,
    author: string,
    title: string,
    description:string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export type {Articles}