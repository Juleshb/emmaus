
import bg1 from "../assets/ZW8A9603.JPG"
import bg2 from "../assets/ZW8A9566.JPG"




const halls = () => {


  return (
<>
   
    <main>
       
        <section className="pb-5 -mt-64 bg-colr2 ">

          
           
          <div className="container mx-auto " >
            <div className="flex flex-wrap">


            
              

              

             



            <div className="lg:pt-12 pt-6 w-full md:w-1/2 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
            <div className="hover:text-white bg-white  rounded-lg  hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words  w-full mb-8 ">
                  
                  <img className="w-full h-full object-cover rounded-t-lg  " src={bg1} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base  font-semibold">CONFERENCE AND BANQUETING SERVICES</h6>
                    <p className="mt-2 mb-4 ">
                    Conference and banqueting services encompass a range of offerings designed to facilitate successful events, from corporate conferences and seminars to weddings and gala dinners. Here's a breakdown of what these services typically include:
                    Event Planning and Coordination, Venue Selection, Catering Services, Decor and Theming, Audiovisual Equipment and Technical Support, Hospitality and Guest Services, Post-Event Services .
                    </p>

                    
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Contact us
            </button>

                 </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-1/2 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
            <div className="hover:text-white bg-white  rounded-lg  hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words  w-full mb-8 ">
                  
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg2} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base  font-semibold">MEETING ROOMS</h6>
                    <p className="mt-2 mb-4 ">
                    Our meeting rooms are equipped with state-of-the-art technology, including audiovisual equipment, high-speed internet access, and customizable lighting, ensuring seamless presentations and productive discussions. With flexible seating arrangements and ergonomic furnishings, we cater to the unique needs of your event, whether it's an intimate board meeting or a large-scale conference.
                    </p>
                    
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
            Contact us
            </button>

                 </div>
                </div>
              </div>


             

              

              

    

            </div>

          </div>
        </section>
  

    


       
      
       
        
      </main>
    </>
  );
};

export default halls;