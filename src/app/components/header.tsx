import Image from 'next/image'
import styles from '../page.module.css'
import sdLogo from '../../app/asset/svg/logo.svg';
import navLogo from '../../app/asset/svg/hamburger.svg';

export const Header = ({handleClick}:{handleClick:any})=>{
    return(
        <header>
            <div className='header'>
              <div className={styles.row}>
                <div className={styles.col1}>
                  <Image
                      className={styles.logo}
                      src={sdLogo}
                      alt="#"
                      width={200}
                      height={47}
                      priority
                  />
                </div>
                <div className={styles.col2}>
                  <Image 
                    className={styles.logo} 
                    src={navLogo} alt="#"
                    width={190}
                    height={45}
                    onClick = {handleClick}
                    priority
                  />
                </div> 
              </div>
            </div>
      </header>
    )
}