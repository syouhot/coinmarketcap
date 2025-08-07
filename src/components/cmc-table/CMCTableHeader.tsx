import React from 'react'
import Info from "../../../public/assets/svg/info"
import ChevronDown from "../../../public/assets/svg/chevronDown"

const styles = {
    textIcon: `flex items-center`
}

export default function CMCTableHeader() {
    return (
        <tbody>
            <tr>
                <th></th>
                <th className='flex items-center'>
                    <b># &nbsp;</b>
                    <ChevronDown fill={'#fff'} />
                </th>
                <th>Name</th>
                <th>Price</th>
                <th>24h %</th>
                <th>7d %</th>
                <th><div className={styles.textIcon}>
                    <p className='mr-2'>Market Cap</p>
                    <Info />
                </div></th>
                <th><div className={styles.textIcon}>
                    <p className='mr-2'>Volume</p>
                    <Info />
                </div></th>
                <th><div className={styles.textIcon}>
                    <p className='mr-2'>Circulating Supply</p>
                    <Info />
                </div></th>
                <th>Last 7 days</th>
            </tr>
        </tbody>
    )
}
