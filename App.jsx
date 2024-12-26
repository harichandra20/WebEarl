import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/section1/header'
import Body from './componets/section1/Body'
import Footer from './componets/section1/footer'
import third from './componets/section2/third'


function App() {


  return (
    <div>
      <div className='sec1'>
        <Header />
        <Body />
        <Footer />
      </div>

      <div className='sec2'>
        <div>
          <img src='https://th.bing.com/th/id/OIP.18TX1vFE7j5gzBTUm_OinAHaDp?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='image'></img>
        </div>
        <div className='right'>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam deleniti, possimus nisi incidunt, facere vel aliquam blanditiis</p>
          <div className='innerdiv'>
            <div>
              <h1>+200</h1>
              <div className='disign'></div>
              <p>employee</p></div>
            <div>
              <h1>+500</h1>
              <div className='disign'></div>
              <p>project</p>
            </div>


            <div>
              <h1>+300</h1>
              <div className='disign'></div>
              <p>clients</p>
            </div>


          </div>
        </div>
      </div>


      {/* section 3 */}

      <div className='sec'>

        <div className='sec3'>

          <h1>our Service</h1>
          <div className='ancer'> <a src="">see all</a></div>


        </div>

        <div className='sec3-2'>

          <div className='sec3-2-i'>
            <img src="https://th.bing.com/th/id/OIP.LdbvE1JNVL-Af9i22tR62QHaHk?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur praesentium cum qui amet nemo incidunt natus, voluptatibus exercitationem repellendus.</p>
            <button className='btn'>see detailes</button>
          </div>
          <div className='sec3-2-i'>
            <img src="https://th.bing.com/th/id/OIP.LdbvE1JNVL-Af9i22tR62QHaHk?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur praesentium cum qui amet nemo incidunt natus, voluptatibus exercitationem repellendus.</p>
            <button className='btn'>see detailes</button>
          </div>
          <div className='sec3-2-i'>
            <img src="https://th.bing.com/th/id/OIP.LdbvE1JNVL-Af9i22tR62QHaHk?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur praesentium cum qui amet nemo incidunt natus, voluptatibus exercitationem repellendus.</p>
            <button className='btn'>see detailes</button>
          </div>
          <div>
            <img src='https://th.bing.com/th/id/OIP.LdbvE1JNVL-Af9i22tR62QHaHk?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
          </div>

        </div>
      </div>

      {/* 4 seconn */}
      <div className='section-4'>

      
      <div className="left-4">

        <img src='https://th.bing.com/th/id/OIP.ebt-LOfXabY1T6hplooOaQHaGB?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
      </div>
      <div className='right-4'>
        <div>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, laudantium.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui laborum architecto assumenda saepe obcaecati! Culpa odio eius odit dignissimos! Perferendis, soluta? Aliquam corporis aspernatur dolorem voluptatibus optio distinctio odio nostrum!</p>
        </div>
        <div>
          <div>
            <h2>
              Lorem ipsum dolor sit.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, asperiores omnis. At qui ullam sit?</p>
          </div>

          <div>
            <h2>
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet necessitatibus, ad ipsum vitae eaque.
            </p>
          </div>
        </div>
            
        <div>
            <h2>
              Lorem ipsum dolor sit.
            </h2>
            <p>
              
            </p>
          </div>

          <div>
            <h2>
              Lorem ipsum dolor sit.
            </h2>
          </div> 

      </div>

    </div>
    </div>
  )
}

export default App
