import {z , defineCollection, reference} from "astro:content"


const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        categoryName: z.enum(["games", "anime", "tecnologia"]),
        img: z.string().optional(),
        description: z.string(),
        publishDate: z.date().optional(),    // <-- trabaja con string en los .mdx
        author: reference('authors')
    })
})

const authors = defineCollection({
    schema: z.object({
        name: z.string(),
        img: z.string().optional(),
        description: z.string()
    })
})
export const collections = {articles, authors};