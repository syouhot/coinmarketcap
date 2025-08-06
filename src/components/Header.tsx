import Image from 'next/image'
import React from 'react'
import Search from "../../public/assets/svg/search"
const styles = {
    header: 'bg-[#17171a] text-white h-20 flex gap-[100px] w-full p-[30px]',
    headerWrapper: `flex justify-between h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-between items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4 ring-blue-600 opacity-60`,
    navLink: ``,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input:`bg-transparent outline-none text-white w-70 ml-3`,
}

export default function Header() {
    return (

        <div className={styles.header}>
            <Image src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg" alt='logo' width={220} height={220} />
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Cryptocurrencies
                        </div>
                        <div className={styles.badge} />
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Exchanges
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            NFT
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Cryptown
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Portfolio
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Watchlist
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Products
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Learn
                        </div>
                    </div>
                </nav>
                <div className='flex items-center'>
                    <div className={styles.inputContainer}>
                        <Search />
                        <input type="text" className={ styles.input} placeholder="Search" />
                    </div>
                </div>
            </div>
        </div>

    )
}
