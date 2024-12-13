import React from 'react'
import { useSelector } from 'react-redux'

export default function Menu() {

  const countClick = useSelector(state => state)

  return (
    <div>
      {countClick}
    </div>
  )
}
