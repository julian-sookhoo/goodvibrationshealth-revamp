import { defineCollection, z } from 'astro:content'

const faqItem = z.object({ q: z.string(), a: z.string() })

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['non-duality', 'mind-belief', 'body-energy', 'coaching']),
    headline: z.string(),
    description: z.string(),
    isBookable: z.boolean().default(true),
    conditions: z.array(z.string()).optional(),
    order: z.number().optional(),
    faqs: z.array(faqItem).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
})

const conditions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    description: z.string(),
    primaryServices: z.array(z.string()),
    secondaryServices: z.array(z.string()).optional(),
    featuredTestimonial: z.string().optional(),
    targetKeyword: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    targetKeyword: z.string().optional(),
    relatedServices: z.array(z.string()).optional(),
  }),
})

export const collections = { services, conditions, blog }
