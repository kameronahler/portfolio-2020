// react
import React from 'react'

export const PageHeader = ({
  children,
  title,
}: {
  children?: React.ReactChild
  title: string
}) => {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  )
}
