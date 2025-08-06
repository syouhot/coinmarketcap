"use client"
import React from 'react'
import ChevronDowm from "../../../public/assets/svg/chevronDown"
import ChevronUp from "../../../public/assets/svg/chevronUp"

const styles = {
  rate:"rate flex items-center",
  red:"text-[#ea3943] ml-2",
  green:"text-[#17c784] ml-2"
}
export default function Rate({ isIncrement, rate }: { isIncrement : boolean, rate: string }) {
  return (
    <div className={styles.rate}>
      {isIncrement ? <ChevronUp fill = "#17c784" /> : <ChevronDowm fill="#ea3943" />}
      <p className={isIncrement ? styles.green : styles.red}>{ rate}</p>
    </div>
  )
}
