import React from 'react'
import { Link } from 'react-router-dom'

export default function Page({ to, text }) {
  return <Link to={to}>{text}</Link>
}
