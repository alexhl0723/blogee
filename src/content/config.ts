import {z , defineCollection} from "astro:content"
const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        categoryName: z.enum(["games", "anime", "tecnologia"]),
        img: z.string().optional(),
        description: z.string(),
        publishDate: z.date().optional() // <-- trabaja con string en los .mdx
    })
})

export const collections = {articles};