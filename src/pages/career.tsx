"use client";
import styles from '../app/page.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { Header } from "../app/components/header";
import { NavBar } from "@/app/components/navBar";
import Footer from '@/app/components/footer';
import careersImg from "../app/asset/images/careers-img.png";
import "../app/career.css";
import eigthkMiles from '../app/asset/icons/8kMilesLogo.png'
import altechLogo from '../app/asset/icons/altech-logo.png'
import Capgemini_Logo from '../app/asset/icons/Capgemini_Logo.png'
import connectionUnlimited from '../app/asset/icons/connectionUnlimited.png'
import creditMantriLogo from '../app/asset/icons/credit mantri logo.png'
import eventzilla from '../app/asset/icons/Eventzilla.png'
import iCubeLogo from '../app/asset/icons/icube-logo.png'
import intellectLogo from '../app/asset/icons/intellect-logo.png'
import logo_tcm from '../app/asset/icons/logo_tcm.png'
import logo_facilgo from '../app/asset/icons/logo-facilgo.png'
import mesh_dynamics from '../app/asset/icons/mesh-dynamics.png'
import mevents from '../app/asset/icons/mevents.png'
import saltaudios from '../app/asset/icons/saltaudios.png'
import scb_logo from '../app/asset/icons/scb-logo.png'
import tie_silicon_log from '../app/asset/icons/tie-silicon-logo.png'
import tagstone from '../app/asset/icons/Tagstone.png'
import weinvest from '../app/asset/icons/weinvest.png'
import trueRCM from '../app/asset/icons/trueRCM.png'

const OurClientWrap = ()=>{
    return(
      <div className={styles.container}>
        <div className={styles.ourClientsHeader}>
          <div className={styles.sectionTitle}>
            <h1>Our Clients</h1>
          </div>
          <div className={styles.ourClientsDescription}>
            <p>We’ve been grateful to work with a wide spectrum of clients from startups to Fortune 500
               companies. Our creativity enables us to collaborate on different types of projects in varying
               domains from brand design to enterprise software.
            </p>
          </div>
        </div>
        <div className={styles.ourClientList} >
          <div className={styles.ourClientListView}>
            <div className={styles.ourClientRow}>
              <div className={styles.ourClientColumn}>
                <Image src={Capgemini_Logo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={scb_logo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={logo_facilgo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={eventzilla} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={eigthkMiles} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={mevents} alt="#"/>
              </div>
            </div>
          </div>
          <div className={styles.ourClientListView}>
            <div className={styles.ourClientRow}>
              <div className={styles.ourClientColumn}>
                <Image src={weinvest} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={altechLogo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={intellectLogo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={mesh_dynamics} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={logo_tcm} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={tagstone} alt="#"/>
              </div>
            </div>
          </div>
          <div className={styles.ourClientListView}>
            <div className={styles.ourClientRow}>
              <div className={styles.ourClientColumn}>
                <Image src={creditMantriLogo} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={connectionUnlimited} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={saltaudios} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={trueRCM} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={tie_silicon_log} alt="#"/>
              </div>
              <div className={styles.ourClientColumn}>
                <Image src={iCubeLogo} alt="#"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

const Career=()=>{
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
          <section className={styles.homeHeader+" "+styles.homeHeaderServices+" "+styles.homeHeaderContact}>
            <Image src={careersImg} alt="#"/>
            <div className={styles.homeHeaderContent}>
               <div >
                <div className={styles.homeHeaderContentInner}>
                  <h1>Come work with us!</h1> 
                  <p>{"We're looking for talented individuals that want to do great work with amazing people."}</p> 
                </div> 
               </div> 
            </div>
          </section>
          <section className={styles.currentOpenning}>
            <div className='container' style={{marginLeft:"7%"}}>
               <div className="currentOpenningWrap">
                 <h2>Current Openings</h2>
                 <div className={styles.currentOpenninglistWrap}>
                    <a className={styles.currentOpenningList}>
                      <div>
                       <h5>UX Designer</h5>
                       <span className='line'></span>
                       <div className={styles.apply}>
                        <h4>Apply</h4>
                       </div>
                       <span className={styles.width}/>
                      </div>                           
                    </a>
                    <a className={styles.currentOpenningList}>
                      <div>
                       <h5>Reactjs developer</h5>
                       <span className='line'></span>
                       <div className={styles.apply}>
                        <h4>Apply</h4>
                       </div>
                       <span className={styles.width}/>
                      </div>                           
                    </a>
                    <a className={styles.currentOpenningList}>
                      <div>
                       <h5>Business Analyst</h5>
                       <span className='line'></span>
                       <div className={styles.apply}>
                        <h4>Apply</h4>
                       </div>
                       <span className={styles.width}/>
                      </div>                           
                    </a>
                 </div>
               </div> 
            </div>
          </section>
          <section className={styles.ourClientsWrap}>
            <OurClientWrap/>
          </section>
          <footer className={styles.footer} style={{
                backgroundColor: "#eee",
                padding: "50px 0"
            }}>
                <Footer/>
          </footer>
        </>
    )
};

export default Career
