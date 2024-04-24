import { Container } from 'react-bootstrap'
import { useEffect } from 'react'
import $ from 'jquery'
import '../style/about.css'

import React, { useState } from 'react';
import ceo1 from '../assets/image/about/ceo1.svg'
import ceo2 from '../assets/image/about/ceo2.svg'
import ceo3 from '../assets/image/about/ceo3.svg'
import divi from '../assets/image/about/division.png';

// import { Fplus } from '../components/faq'

export const AboutUs = () => {
  useEffect(() => {
    const topoffset = document.getElementById('team-head')
    var agPosY // Define agPosY variable

    var agTimelineLineProgress = $('.js-timeline_line-progress')
    var agTimelinePoint = $('.js-timeline-card_point-box')
    var agTimelineItem = $('.js-timeline_item')
    var agOuterHeight = $(window).outerHeight()
    // eslint-disable-next-line no-unused-vars
    var agHeight = $(window).height()
    var agFlag = false

    function fnOnScroll() {
      agPosY = $(window).scrollTop() // Assign value to agPosY
      fnUpdateFrame()
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop() // Assign value to agPosY
      agHeight = $(window).height()
      fnUpdateFrame()
    }

    function fnUpdateWindow() {
      agFlag = false
      fnUpdateProgress()
    }

    function fnUpdateProgress() {
      var agTop = topoffset.offsetTop + 140

      var i = agTop + agPosY - $(window).scrollTop()
      var a =
        agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop()
      var n = agPosY - a + agOuterHeight / 2
      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a
      }
      agTimelineLineProgress.css({ height: n + 'px' })

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top

        if (
          agTop + agPosY - $(window).scrollTop() <
          agPosY + 0.5 * agOuterHeight
        ) {
          $(this).addClass('js-ag-active')
        } else {
          $(this).removeClass('js-ag-active')
        }
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow)
      agFlag = true
    }

    $(window).on('scroll', fnOnScroll)
    $(window).on('resize', fnOnResize)

    return () => {
      $(window).off('scroll', fnOnScroll)
      $(window).off('resize', fnOnResize)
    }
  }, [])
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // Function to toggle open/close state for the first question
  const toggleFAQ1 = () => {
    setIsOpen1(!isOpen1);
  };

  // Function to toggle open/close state for the second question
  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleFAQ4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleFAQ5 = () => {
    setIsOpen5(!isOpen5);
  };
  

  return (
    <section className="about">
      <div className="head-title">
        <h1>About Us</h1>
      </div>
      <div className="js-timeline ag-timeline">
        <div className="js-timeline_line ag-timeline_line">
          <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
        </div>

        <div className="timeline">
          <div className="checkpoint check1">
            <div>
              <h2>Who are are?</h2>
              <p>
                At To-Let, we are more than just property managers – we are
                dedicated partners in your property management journey.
                Established with a commitment to redefining the standards of
                property management, To-Let brings a wealth of expertise to the
                dynamic property management landscape.
              </p>
            </div>
          </div>
          <div className="checkpoint check2">
            <div>
              <h2>Our Journey</h2>
              <p>
                Since our inception, we have been at the forefront of delivering
                exceptional property management solutions. With a foundation
                built on integrity, transparency, and client-centric values,
                To-Let has steadily grown to become a trusted name in the
                industry.
              </p>
            </div>
          </div>
          <div className="checkpoint check3">
            <div>
              <h2>Mission and Vision</h2>
              <p>
                Our mission is to simplify and elevate the property management
                experience for property owners and tenants alike. We envision a
                future where seamless, efficient, and client-focused property
                management is the norm.
              </p>
            </div>
          </div>
          <div className="checkpoint check4">
            <div>
              <h2>Services we offer</h2>
              <p>
                To-Let specializes in a comprehensive suite of property
                management services, including property leasing, tenant
                screening, rent collection, property maintenance, and the
                provision of PGs (Pay Guest) and flats for rent. Our tailored
                solutions cater to the unique needs of each property under our
                care.
              </p>
            </div>
          </div>
          <div className="checkpoint check5">
            <div>
              <h2>Client-Centric Approach</h2>
              <p>
                What sets To-Let apart is our unwavering dedication to client
                satisfaction. We prioritize open communication, timely
                responses, and a proactive approach to address the diverse needs
                of property owners and tenants.
              </p>
            </div>
          </div>

          <div className="checkpoint check6">
            <div>
              <h2>Expert Team</h2>
              <p>
                Our team consists of seasoned professionals with in-depth
                knowledge of the property management industry. From property
                managers to maintenance experts, each member of the To-Let team
                is committed to ensuring the optimal performance and value
                of your property.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div id="team-head" className='mb-2'>Our team</div>

        <div><img className='imagd' src={divi} alt='division'/></div>
        

        <div className="team-images">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="imagew"
                  src={ceo1}
                  alt="Founder"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div class="flip-box-back">
                <a href="https://www.linkedin.com/in/mayur-kukreja-280b71b4/">
                  <h2>Mayur Kukreja</h2>
                  <p>CEO & Founder</p>
                </a>
              </div>
            </div>
          </div>

          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  class="imagew"
                  src={ceo3}
                  alt="Co founder"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div class="flip-box-back">
                <a href="https://www.linkedin.com/in/emanshu-wadhwani-258678176/">
                  <h2>Emanshu wadhwani</h2>
                  <p>Co-founder</p>
                </a>
              </div>
            </div>
          </div>

          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  src={ceo2}
                  alt="Developer"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div class="flip-box-back">
                <a href="https://www.linkedin.com/in/rohit-kanaujia-b775a5171/">
                  <h2>Naruto</h2>
                  <p>Developer</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Fplus /> */}
      <div className="container">
      <div className="row">
        <div className="faq-wrapper">
          <div className="header">
            <h1>FAQs</h1>
          </div>
          <div className="faqinner">
            {/* First Question */}
            <div className='question' onClick={toggleFAQ1}> 
              <h4>What are To-Let's operating hours?</h4>
              <h1 className={`icon ${isOpen1 ? 'active' : ''}`}>{isOpen1 ? '-' : '+'}</h1>
            </div>
            <div className={`answer ${isOpen1 ? 'active' : ''}`}>
              <p>To-Let operates during standard business hours, providing assistance and support to our clients. Our current opening hours are from 9:00 AM to 9:00 PM, Monday to Saturday. Please note that these hours may be subject to change, and we recommend checking our official website or contacting our customer service for the most up-to-date information on our operating hours. We strive to be accessible to address your property management needs effectively.</p>
            </div>

            {/* Second Question */}
            <div className='question' onClick={toggleFAQ2}> 
              <h4>What is To-Let's cancellation policy?</h4>
              <h1 className={`icon ${isOpen2 ? 'active' : ''}`}>{isOpen2 ? '-' : '+'}</h1>
            </div>
            <div className={`answer ${isOpen2 ? 'active' : ''}`}>
              <p>To-Let understands that circumstances may change, and we aim to accommodate our clients to the best of our ability. Our cancellation policy varies depending on the specific service or arrangement. We recommend referring to your service agreement or contacting our customer service for detailed information tailored to your situation. For property leasing and management services, we typically outline cancellation terms within the contractual agreement. We encourage open communication to discuss any unforeseen circumstances and work towards a mutually beneficial solution. If you have specific concerns about our cancellation policy or need clarification, please reach out to our dedicated customer service team, who will be happy to assist you.</p>
            </div>

            {/* Third Question */}
            <div className='question' onClick={toggleFAQ3}> 
              <h4>Are To-Let's services safe to use?</h4>
              <h1 className={`icon ${isOpen3? 'active' : ''}`}>{isOpen3 ? '-' : '+'}</h1>
            </div>
            <div className={`answer ${isOpen3 ? 'active' : ''}`}>
              <p>Yes, To-Let is committed to ensuring the safety and security of our clients throughout their property management journey. We prioritize the protection of sensitive information, privacy, and the overall well-being of our clients. Our services adhere to industry-standard security measures, and we employ advanced technologies to safeguard data and transactions. Additionally, our team undergoes thorough training to uphold ethical standards and maintain a secure environment for our clients. We continually assess and enhance our security protocols to adapt to evolving challenges and ensure a safe experience for property owners and tenants. If you have specific concerns or questions about the safety of our services, please feel free to contact our customer service team, who will provide further assistance and information. Your trust and security are paramount to us at To-Let.</p>
            </div>

            {/* Fourth Question */}
            <div className='question' onClick={toggleFAQ4}> 
              <h4>Can I speak directly to the real owner at To-Let?</h4>
              <h1 className={`icon ${isOpen4 ? 'active' : ''}`}>{isOpen4 ? '-' : '+'}</h1>
            </div>
            <div className={`answer ${isOpen4 ? 'active' : ''}`}>
              <p>At To-Let, we value open communication and transparency. While our team is readily available to assist you with any inquiries or concerns, direct communication with the property owner may depend on the specific circumstances and the owner's preferences. If you wish to discuss matters directly with the property owner, we recommend reaching out to our customer service team first. They can guide you through the appropriate channels and facilitate communication based on the property owner's consent and availability. Our commitment is to provide a seamless experience for both property owners and tenants. Feel free to contact our customer service for further assistance or to express your preference for direct communication with the property owner. We are here to address your needs and ensure a positive experience with To-Let.</p>
            </div>

            {/* Fifth Question */}
            <div className='question' onClick={toggleFAQ5}> 
              <h4>What is To-Let's mission?</h4>
              <h1 className={`icon ${isOpen5 ? 'active' : ''}`}>{isOpen5 ? '-' : '+'}</h1>
            </div>
            <div className={`answer ${isOpen5 ? 'active' : ''}`}>
              <p>To-Let's mission is to simplify and elevate the property management experience for property owners and tenants alike. We are dedicated to redefining industry standards by envisioning a future where seamless, efficient, and client-focused property management is the norm. We strive to achieve this mission by providing a comprehensive suite of property management services, including property leasing, tenant screening, rent collection, and property maintenance. Our tailored solutions cater to the unique needs of each property under our care, emphasizing integrity, transparency, and client-centric values. At To-Let, we aim to be more than just property managers; we aspire to be trusted partners in our clients' property management journeys, ensuring satisfaction, open communication, and proactive solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}