import React from 'react'
import ChevronUp from '../../../public/assets/svg/chevronUp'
export default function BullishFilled() {
  return (
      <div className="flex items-center">
          <ChevronUp fill="#17C784" />
          <small className="ml-1 text-[#17C784]">Bullish</small>
      </div>
  )
}
