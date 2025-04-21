import type { JSX } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module './food-and-agriculture.mdx' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export default Component
}
