// react
import React from 'react'

// packages
import styled from 'styled-components'

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
