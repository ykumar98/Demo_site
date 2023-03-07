"use client";
import { useState } from 'react';
import { Header } from "../app/components/header";
import { NavBar } from "@/app/components/navBar";
import styles from '../app/page.module.css';
import Image from 'next/image'
import linkedIn from '../app/asset/svg/linkedin.svg';
import "../app/contact.css";
const Contact =()=>{
  const [navToggle, setNavToggle] = useState(false);
  const handleClick = ()=>{
    if(navToggle){
      setNavToggle(false)
    }else{
      setNavToggle(true)
    }
  }
  return(
  <>
    <Header handleClick={handleClick}/>
    {navToggle && <NavBar handleClick={handleClick}/>}
    <div className={styles.contactUsWrap}>
      <div className={styles.container}>
        <div className={styles.contactRow}>
          <div className={styles.colContact}>
            <div className={styles.contactUsWrapForm}>
              <h3>We’ve been waiting for you...</h3>
              <h5>Ready to begin your journey?</h5>
              <p>Get Started With Studio Diseno Today!</p>
              <form name='contactForm'>
                <div className={styles.checkboxGroup}>
                  <div className={styles.groupTitle}>
                    <h4 className={styles.formTitle}>
                    Service
                    </h4>
                    <span className={styles.info} id="service"></span>
                  </div>
                  <label>
                    <input type="checkbox" value="Branding"></input>
                    <span>Branding</span>
                  </label>
                  <label>
                    <input type="checkbox" value=" Web design "></input>
                    <span> Web design </span>
                  </label>
                  <label>
                    <input type="App design" value="App design"></input>
                    <span>App design</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Interaction design"></input>
                    <span>Interaction design</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Animation"></input>
                    <span>Animation</span>
                  </label>
                </div>
                <div className={styles.radiobuttonGroup}>
                  <div className={styles.groupTitle}>
                    <h4 className={styles.formTitle}>Budget</h4>
                    <span className={styles.info} id="service"></span>
                  </div>
                  <input type="radio" name="budget" value="$15K - $30K" id="$15K - $30K"/>
                  <label >$15K - $30K</label>
                  <input type="radio" name="budget" value="$30K - $50K" id="$30K - $50K"/>
                  <label >$30K - $50K</label>
                  <input type="radio" name="budget" value="$50K - $80K" id="$50K - $80K"/>
                  <label >$50K - $80K</label>
                  <input type="radio" name="budget" value="$80K and above" id="$80K and above"/>
                  <label >$80K and above</label>
                </div>
                <div className= {styles.rowInput}>
                  <div className={styles.colInput}>
                    <div className={styles.inputField}>
                    <input type="text" name="name" id="name" placeholder="Name"/> <br/>
                    <span className={styles.info} id="nameInfo"></span>
                    </div>
                  </div>
                  <div className={styles.colInput}>
                    <div className={styles.inputField}>
                      <input type="mail" name="email" id="email" placeholder="Email"/> <br/>
                      <span className={styles.info} id="mail"></span>
                    </div>
                  </div>
                </div>
                <div className={styles.fileUpload}>
                    <div className={styles.inputField}>
                      <div className={styles.inputFieldFullWidth}>
                        <input style={{width:"98%"}} type="text" name="message" id="message" placeholder="Project Details"/>
                      </div>
                    </div>
                </div>
                <div className={styles.exploreMore+" "+styles.exploreMoreContact}>
                  <div className={styles.exploreMoreanchore}>
                    <input type="submit" id={styles.sendmessage} className="btn-submit" value="Send"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.colContact2}>
            <div className={styles.contactUsWrapFormDetails}>
              <h3>Contact us</h3>
              <div className={styles.virtualAddress}>
                <a href="mailto:hello@studiodiseno.com">E-mail: hello@studiodiseno.com</a>
                <a href="tel:+91 44 42632026">Contact: +91 44 42632026m</a>
              </div>
              <div className={styles.physicalAddress}>
                <h4>
                  No.108, Theyagaraya Road, T Nagar,<br/>
                  Chennai - 17, India.
                </h4>
                <a href="https://goo.gl/maps/cGemWsnPPi1Ja5G7A" target="_blank">View Map</a>
              </div>
              <div className={styles.physicalAddress}>
                <h4 style={{fontSize:"16px"}}>
                  186 Princeton Hightstown Rd, Bldg 3, Suite 10, West Windsor, NJ 08550
                </h4>
                <a href="https://goo.gl/maps/M1qFmNvrbmgx6tMTA" target="_blank">View Map</a>
              </div>
              <div className={styles.socialMedia}>
                <h3>Follow</h3>
                <ul style={{padding:"0px"}}>
                  <li>
                    <a href="https://www.linkedin.com/company/sdtech-india" target="_blank">
                    <Image src={linkedIn} alt="#"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
 
export default Contact;