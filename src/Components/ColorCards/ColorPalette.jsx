import React from 'react'
import ColorCard from './ColorCard'
const ColorPalette = ({ colors }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {colors.map((color, index) => (
        <ColorCard key={index} color={color.name} value={color.hex} />
      ))}
    </div>
  )
}

export default ColorPalette