import Image from 'next/image'
import styles from '../page.module.css'
import logoWhite from '../../app/asset/svg/logoText.svg';
import linkedIn from '../../app/asset/svg/linkedin.svg';

const Footer=()=>{
    return(
        <div className={styles.container}>
      <div className={"footerWrap"}>
        <div className={styles.footerRow}>
          <div className={styles.colFooter12}>
            <div className={styles.footerLogo}>
              <Image src={logoWhite} alt="#"/>
              <div className={styles.tagLine}>
                <h5>UX/UI Design & Branding Agency</h5>
              </div>
            </div>
          </div>
          <div className={styles.colFooter12}>
            <div className={styles.menuList}>
              <ul>
                <li>
                  <a>Work</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Who we are</a>
                </li>
                <li>
                  <a>For Startup</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
                <li>
                  <a>Get In Touch</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.colFooter3}>
            <div className={styles.digitalAddress}>
              <h5>E-mail: <a href="mailto:hello@studiodiseno.com">hello@studiodiseno.com</a></h5>
              <h5>Contact: <a href="tel:+91 44 42632026"> +91 44 42632026m</a></h5>
            </div>
            <div className={styles.physicalAddress}>
              <h5>
                No.108, Theyagaraya Road, T Nagar,<br/>
                Chennai - 17, India.
              </h5>
              <a href="https://goo.gl/maps/cGemWsnPPi1Ja5G7A" target="_blank">View Map</a>
            </div>
            <div className={styles.physicalAddress}>
              <h5>
                186 Princeton Hightstown Rd, Bldg 3, <br/>
                Suite 10, West Windsor, NJ 08550
              </h5>
              <a href="https://goo.gl/maps/M1qFmNvrbmgx6tMTA" target="_blank">View Map</a>
            </div>
          </div>
          <div className={styles.colFooter4}>
            <div className={styles.socialMedia}>
              <ul>
                <li style={{
                    textAlign: "left"
                }}>
                  <a href="https://www.linkedin.com/company/sdtech-india" target="_blank">
                    <Image src={linkedIn} alt="#"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyRightsBottom}>
            <h5>©2019 StudioDiseño. All Rights Reserved.</h5>
        </div>
      </div>
    </div>
    )
};

export default Footer; 