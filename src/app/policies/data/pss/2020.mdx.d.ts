import type { JSX } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module './2020.mdx' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export default Component
}
