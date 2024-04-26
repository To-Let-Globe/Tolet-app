import React from 'react'
import '../style/service.css'

import Image1 from '../assets/image/service/image18.png'
import Image2 from '../assets/image/service/image21.png'
import Image3 from '../assets/image/service/image23.png'
import Image4 from '../assets/image/service/image25.png'
import Image5 from '../assets/image/service/image27.png'
import Image6 from '../assets/image/service/image29.png'

export const Service = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ width: '100%', height: '10%', marginTop: '3%' }}>
        <p
          style={{
            marginLeft: '4%',
            fontWeight: 'normal',
            fontSize: '56px',
            font: 'poppins',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          Services
        </p>
        <p
          style={{
            marginLeft: '4%',
            color: '#C8A21C',
            font: 'poppins',
            fontSize: '12px',
          }}
        >
          OUR SERVICES FOR CLIENT
        </p>
      </div>
      <div class="container">
        <div
          class="d-flex justify-content-between"
          style={{
            width: '100%',
            height: '45%',
            position: 'relative',
            marginBottom: '5%',
          }}
        >
          <div class="box1">
            <div class="box12">
              <img
                src={Image1}
                alt=""
                style={{ width: '30%', height: '40%' }}
              ></img>
            </div>
            <div class="box13">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                Paying Guest
              </p>
              <div class="box14">
                Find budget-frinedly and Convient paying guest accomadations for
                a Comfortable stay away from home
              </div>
            </div>
          </div>

          <div class="box1">
            <div class="box12">
              <img
                src={Image2}
                alt=""
                style={{ width: '30%', height: '40%' }}
              />
            </div>
            <div class="box23">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                Flat
              </p>
              <div class="box14">
                Discover a diverse range of apartments for rent, customize to
                suit your lifestyle and budget
              </div>
            </div>
          </div>

          <div class="box1">
            <div class="box12">
              <img
                src={Image3}
                alt=""
                style={{ width: '30%', height: '40%' }}
              ></img>
            </div>
            <div class="box13">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                House
              </p>
              <div class="box14">
                Search for your dream home, available for rent or sale, tailored
                to your lifestyle and preferences
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-between"
          style={{ width: '100%', height: '45%', position: 'relative' }}
        >
          <div class="box1">
            <div class="box12">
              <img
                src={Image4}
                alt=""
                style={{ width: '30%', height: '40%' }}
              ></img>
            </div>
            <div class="box23">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                Shop
              </p>
              <div class="box14">
                Explore a variety of retail spaces and shops available for
                lease, ideal for growing your business
              </div>
            </div>
          </div>
          <div class="box1">
            <div class="box12">
              <img
                src={Image5}
                alt=""
                style={{ width: '30%', height: '40%' }}
              ></img>
            </div>
            <div class="box13">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                Office
              </p>
              <div class="box14">
                Elevate your workspace and productivity with modern office
                spaces for ent, designed for success
              </div>
            </div>
          </div>
          <div class="box1">
            <div class="box12">
              <img
                src={Image6}
                alt=""
                style={{ width: '30%', height: '40%' }}
              ></img>
            </div>
            <div class="box23">
              <p
                class="here"
                style={{
                  color: 'black',
                  marginLeft: '5%',
                  marginTop: '2%',
                  fontWeight: 'bold',
                }}
              >
                Warehouse
              </p>
              <div class="box14">
                Secure the perfect godwon space for rent, offering ample storage
                and logistics solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service