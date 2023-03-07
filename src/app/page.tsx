"use client";
import { useState,useRef } from 'react';
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import sdLogo from '../app/asset/svg/logoWhite.svg';
import navLogo from '../app/asset/svg/hamburger.svg';
import logoWhite from '../app/asset/svg/logoText.svg';
import linkedIn from '../app/asset/svg/linkedin.svg';
import mobileShopping from '../app/asset/images/mobileShopping.png'
import digitalMusic from '../app/asset/images/digitalMusic.jpg'
import optimizeDigital from '../app/asset/images/optimizingDigital.jpg'
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


// const inter = Inter({ subsets: ['latin'] })

const Header=  ()=>(
    <header>
      <div className={styles.container}>
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
                priority
              />
            </div> 
          </div>
        </div>
      </div>
  </header>
  );
  
const HeaderContent = ()=>(
  <div className={styles.headerContent}>
     <div className={styles.container}>
        <div className={styles.homeHeaderContentHome}>
        <h1>{"WE DON'T JUST DESIGN"} <br/> {"WE DEFINE EXPERIENCES"}</h1>
        <p>{"We are a bunch of smart and passionate people looking to reinvent the possibilities when technology and design meet."}</p>
        </div>
     </div>
  </div>
);
function handleclick (){
  
}
const WhatWeDo = ()=>{
    const [tabToggle,setTabToggle] = useState(1);
    const tab1Ref:any = useRef(null);
    const tab2Ref:any = useRef(null);
    const tab3Ref:any = useRef(null);
    const tabButtonstyles = {
      backgroundColor :  "rgba(255, 216, 0, 1)",
      border :  "solid 1px rgba(255, 216, 0, 1)",
      boxShadow :  "0 5px 21px -3px rgba(255, 216, 0, 0.5)"
    }
    return (
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h1>What We Do</h1>
        </div>
        <div className={styles.whatWeDoTab}>
          <div className={styles.tab}>
            <button ref={tab1Ref} onClick={()=>{
              setTabToggle(1);
              tab1Ref.current.style.backgroundColor =  "rgba(255, 216, 0, 1)"
              tab1Ref.current.style.border =  "solid 1px rgba(255, 216, 0, 1)"
              tab1Ref.current.style.boxShadow =  "0 5px 21px -3px rgba(255, 216, 0, 0.5)"
              tab3Ref.current.style=""
              tab2Ref.current.style=""
            }} style={tabButtonstyles}>Digital Experience Strategy</button>
            <button ref={tab2Ref} onClick={()=>{
              setTabToggle(2);
              tab2Ref.current.style.backgroundColor =  "rgba(255, 216, 0, 1)"
              tab2Ref.current.style.border =  "solid 1px rgba(255, 216, 0, 1)"
              tab2Ref.current.style.boxShadow =  "0 5px 21px -3px rgba(255, 216, 0, 0.5)"
              tab3Ref.current.style=""
              tab1Ref.current.style=""
            }}>Web & Mobile App Development</button>
            <button ref={tab3Ref} onClick={()=>{
              setTabToggle(3);
              tab3Ref.current.style.backgroundColor =  "rgba(255, 216, 0, 1)"
              tab3Ref.current.style.border =  "solid 1px rgba(255, 216, 0, 1)"
              tab3Ref.current.style.boxShadow =  "0 5px 21px -3px rgba(255, 216, 0, 0.5)"
              tab2Ref.current.style=""
              tab1Ref.current.style=""
            }}>User Experience and Design</button>
          </div>
          {tabToggle === 1 ?(
          <div id="Digital Experience Strategy" className={styles.tabcontent}>
                            <div className={styles.tabContentInner}>
                                <p>Our digital strategy framework eases the process of customer adoption and increases ongoing
                                    engagement. We define product experience, customer journeys and content strategy tailored to
                                    exceed customer expectations.</p>
                                <ul>
                                    <li>Product Strategy</li>
                                    <li>Marketing Strategy</li>
                                    <li>User Experience Strategy</li>
                                    <li>Content Strategy</li>
                                </ul>
                            </div>
          </div>
          ):tabToggle === 2 ?(              
          <div className={styles.tabcontent}>
            <div className={styles.tabContentInner}>
              <p>Our full-stack development services help you bring modern applications to life as envisioned,
                on time and under budget. We can assist you with your end to end application development
                needs - Enterprise-class application development, mobile and web development, backend
                development to API development, integration, and deployment.</p>
                <ul>
                  <li>Mobile Apps (Native and Hybrid)</li>
                  <li>Front-end</li>
                  <li>Web Development</li>
                  <li>Enterprise Applications</li>
                </ul>
            </div>
          </div>
          ):(
          <div className={styles.tabcontent}>
            <div className={styles.tabContentInner}>
              <p>We combine human-centered design with leading technologies to deliver compelling experiences
                that move markets and transform businesses. We can assist you with UX research, analysis,
                IA, wireframing, UI design, interaction, prototyping, and UX testing.</p>
                <ul>
                  <li>User Analysis</li>
                  <li>User Interface Design</li>
                  <li>Information Architecture</li>
                  <li>Wireframes</li>
                  <li>Prototyping</li>
                  <li>Interaction Design</li>
                </ul>
            </div>
          </div>
          )
        }
        </div>
      </div>
    );
  }

const OurWorks =()=>(
  <div className={styles.container}>
    <div className={styles.sectionTitle}>
      <h1>Our Work</h1>
    </div>
    <div className={styles.ourWorkList}>
      <div className={styles.mobileShopping}>
        <div className={styles.mobileShoppingRow}>
          <div className={styles.mobileShoppingcol1}>
            <div className='mobileShoppingImage'>
              <Image 
              src ={mobileShopping}
              alt="#"
              style={{
                width:"100%",
                position: "relative",
                left: "-110px"
              }}
              />
            </div>
          </div>
          <div className={styles.mobileShoppingcol2}>
              <div className={styles.mobileShoppingContent}>
                  <h1>Redefined Mobile Shopping Experience</h1>
              </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className={styles.ourWorkListWrapRow}>
          <div className={styles.colWorkList}>
            <div className={styles.digitalMusicApp}>
              <div className={styles.digitalMusicAppImg}>
              <Image 
              src ={digitalMusic}
              alt="#"
              style={{
                width:"100%",
                objectFit: "cover",
                height: "100%"
              }}
              />
              </div>
              <div className={styles.digitalAppTitle}>
                <h1>Digital Music App</h1>
              </div>
            </div>  
          </div>
          <div className={styles.colWorkList}>
            <div className={styles.digitalMusicApp}>
              <div className={styles.digitalMusicAppImg}>
              <Image 
              src ={optimizeDigital}
              alt="#"
              style={{
                width:"100%",
                objectFit: "cover",
                height: "100%"
              }}
              />
              </div>
              <div className={styles.digitalAppTitle}>
                <h1>Optimising Digital Credit Marketplace</h1>
              </div>
            </div>
          </div>  
        </div>      
      </div>
    </div>
    <div className={styles.exploreMore}>
      <div className={styles.exploreMoreanchore}>
        <a href='#'>
        Explore More
        </a>
      </div>
    </div>
  </div>
);

const VersionAppDesign = () =>(
  <div className={styles.container}>
    <div className={styles.appDesignRow}>
      <div className={styles.colAppDesign}>
        <div className={styles.versionAppDesignContent}>
          <h1>Get the First Version Of App Design for Free</h1>
          <p>Our product realization service empowers businesses to quickly and effectively deliver
                products, software, and services that transform markets and enhance the human experience. In
                addition to testing the products early via prototypes, we adopt a cross-disciplinary and
                iterative approach to ensure compelling concepts are implementable, which results in
                higher-quality designs and reduced time to market.
          </p>
          <div className={styles.exploreMoreBlack}>
            <div className={styles.exploreMoreanchore}>
              <a href='#'>
              Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

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

const Footer = ()=>{
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
              <h6>India</h6>
              <h5>
                No.108, Theyagaraya Road, T Nagar,<br/>
                Chennai - 17, India.
              </h5>
              <a href="https://goo.gl/maps/cGemWsnPPi1Ja5G7A" target="_blank">View Map</a>
            </div>
            <div className={styles.physicalAddress}>
              <h6>USA</h6>
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
                <li>
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
}

export default function Home() {
  return (
    <div>
      <section className={styles.headerSection}>
        <main className={styles.main}>
          <div>
            <Header/>
            <HeaderContent/>
          </div>
        </main>
      </section>
      <section className={styles.whatWeDo}>
        <WhatWeDo/>
      </section>
      <section className={styles.ourWorks}>
        <OurWorks/>
      </section>
      <section className={styles.versionAppDesign}>
        <VersionAppDesign/>
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
   </div>
  )
}
