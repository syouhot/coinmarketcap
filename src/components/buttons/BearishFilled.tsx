import React from 'react'
import ChevronDown from '../../../public/assets/svg/chevronDown'
export default function BearishFilled() {
    return (
        <div className="flex items-center">
            <ChevronDown fill="#A52B2B" />
            <small className="ml-1 text-[#A52B2B]">Bearish</small>
        </div>
    )
}
