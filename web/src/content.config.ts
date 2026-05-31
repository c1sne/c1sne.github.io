import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    location: z.string().optional(),
    status: z.enum(['active', 'archived', 'ongoing']).default('active'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    hidden: z.boolean().default(false),
    section: z.enum(['av', 'escenico', 'xr']).default('av'),
    categories: z.array(z.string()).default([]),
    shortDescription: z.string(),
    longDescription: z.string().optional(),
    coverImage: z.string().optional(),
    videoUrl: z.string().optional(),
    credits: z.string().optional(),
    technicalDetails: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

export const collections = { projects };
