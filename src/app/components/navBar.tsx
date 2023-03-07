import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'
import closeIcon from '../../app/asset/svg/closeIcon.svg';



export const NavBar = ({handleClick}:{handleClick:any})=>{
    return(
      <div id="navBar" className={styles.overlay}>
        <a href="javascript:void(0)" className={styles.closebtn}>
          <Image 
            onClick = {handleClick}
           src={closeIcon} alt="#"/>
        </a>
        <div className={styles.overlayContent}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/whoWeAre">Who We Are</Link>
          <Link href="/forStartups">For Startups</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
          <div className={styles.overlayAddressContent}>
            <div className={styles.overlayAddressContentOne}>
              <div className={styles.overlayAddressContentOneContent}>
                <h6 style={{margin:"0"}}>USA</h6>
                <p  style={{margin:"0"}}>
                186 Princeton Hightstown Rd, Bldg 3,<br/>
                Suite 10, West Windsor, NJ 08550
                </p>
              </div>
              <div className={styles.overlayAddressContentOneContent}>
                <h6 style={{margin: "15px 0 0 0"}}>India</h6>
                <p style={{marginBottom: "11px",marginTop:"6px"}}>
                No.108, Theyagaraya Road, T Nagar,<br/>
                Chennai - 17, India.
                </p>
              </div>
            </div>
            <div className="overlay-addressContent-Two">
              <a href="mailto:hello@studiodiseno.com">E-mail: hello@studiodiseno.com</a>
              <a href="tel:+91 44 42632026">Contact: +91 44 42632026m</a>
            </div>
          </div>
        </div>
      </div>
    )
  }