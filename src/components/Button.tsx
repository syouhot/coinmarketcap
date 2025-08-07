import React from 'react'


const styles = {
    button: 'bg-[#6188ff] px-5 py-2 rounded-lg'
}
export default function Button({ label, onPress }: { label: string, onPress: () => void }) {
    return (
        <button className={styles.button} onClick={onPress}>{label}</button>
    )
}
