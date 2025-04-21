import type { JSX } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module './housing.mdx' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export default Component
}
