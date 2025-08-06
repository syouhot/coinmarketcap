import React from 'react'
import RightArrow from "../../public/assets/svg/rightArrow"

const styles = {
    button:`text-[#6188ff] flex items-center cursor-pointer whitespace-nowrap justify-between`,
}
export default function MoreButton() {
  return (
    <div className={styles.button}>
        More
        <RightArrow/>
    </div>
  )
}
