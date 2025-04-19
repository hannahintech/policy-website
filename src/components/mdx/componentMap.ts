import type { MDXModule } from '@/types/mdx'

type MdxSlug = 'philosophicalBasis' | 'examplePolicy'

export const mdxComponents: Record<MdxSlug, () => Promise<MDXModule>> = {
  philosophicalBasis: () => import('@/app/about/data/philosophical-basis.mdx'),
  examplePolicy: () => import('@/app/policies/data/example-policy.mdx'),
}
