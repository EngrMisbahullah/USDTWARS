import NextLink from 'next/link'
import { ReactNode } from 'react'

interface Props {
    className?:string,
    children?:ReactNode
}

const Grid = ({className,children}:Props) => {
  return (
    <div className={`grid ${className}`}>{children}</div>
  )
}

export default Grid
