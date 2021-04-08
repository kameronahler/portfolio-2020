// react
import React from 'react'

export const PageHeader = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactChild
}) => {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  )
}
