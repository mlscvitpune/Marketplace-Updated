import React from 'react'

const SingleItemView = (props) => {
  return (
    <div className='w-full	h-auto 	flex	min-h-full	items-center	flex-col sm:text-left sm:h-full sm:w-full overflow-x-hidden overflow-y-auto	'>
      <div className='w-screen 	flex basis-1/2 sm:flex-col	max-w-max	relative	my-[5%]	items-center	 flex-row	 border-b-4 border-solid	justify-between	'>
        <div className='w-[50%] flex items-center basis-1/2 mx-5 my-5 flex-col sm:text-left'>
          <h1 className='mb-[3%]'>
            <span
              className='text-center text-3xl sm:text-4xl  font-semibold item-center text-gray-800	'>
              "ITEM NAME":
            </span>   
            {/* //TODO: */}
            <br></br>
            <br></br>
          </h1>
          <span
            className='text-center text-xl sm:text-2xl text-gray-500	float-right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
            massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </span>
          <button
            className='bg-[#0071FF] text-xl sm:text-2xl text-white px-8 mt-8 h-10 rounded-md text-center italic	text-white'> Interested
          </button>
        </div>
        <div className='w-[50] flex basis-1/2 items-center mx-5 my-5 flex-col'>  
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1500"
          className='w-1/2 h-3/4 items-center float-left '
          //TODO: Add images and adjust to small screen
          />
          </div>
      </div>
   
      <div  className='w-full sm:flex-col basis-1/2 flex min-w-max	py-10 px-3 flex-col items-center'>
        <div className='w-[45%] flex items-center mb-5 flex-col'>
          {/* Heading container for */}
          <h2 className='text-center text-3xl sm:text-4xl  font-semibold item-center text-gray-800	mb-3'>
            {/* Text 7 */}
            <span>Category</span>
            <br></br>
          </h2>
          <span
            className='text-center text-xl sm:text-2xl text-gray-500	'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </span>
        </div>
        <div className='w-full sm:flex-col flex flex-wrap space-x-4	 items-center flex-row	justify-items-center place-content-evenly justify-between	'>
          {/* CardsContainer  */}
          <div className='w-screen max-w-full	 flex relative self-start	items-center px-2 py-2 flex- col justify-around'>
            {/* Featurecard */}
            <div className='w-[30%] flex-row block items-center text-center justify-items-center	'>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1500"
              className= ' w-3/5 m-auto object-cover'           />
            <span
              className='text-3xl sm:text-4xl text-center  text-gray-500	'>
              MRP
            </span>
            <span className='text-center	 text-gray-500		'>
              <span>(in RS.)</span>
              <br></br>
            </span>
         
            <span className='text-3xl sm:text-4xl text-center  text-gray-500	'>MSP:(in RS.)</span>
          </div>

          <div className='w-[30%] flex-row block items-center text-center justify-items-center	'>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1500"
              className=' w-3/5 m-auto object-cover	'/>
            <span className='text-3xl sm:text-4xl text-center  text-gray-500	'>Quantity Available:</span>
            <br></br>
            <span
              className='text-center text-xl sm:text-2xl text-gray-500	'>
              Lorem ipsum
            </span>
          </div>
        
          <div className=' w-[30%] flex-row block items-center  justify-items-center	 text-center'>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1500"
              className='w-3/5   m-auto object-cover'/>
            <span
              className='text-3xl sm:text-4xl	text-gray-500	'>
              <span>
                Available By:
                </span>
              <br></br>

            </span>
            <span
              className='text-center text-xl sm:text-2xl text-gray-500 '>
              Lorem ipsum 
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SingleItemView
