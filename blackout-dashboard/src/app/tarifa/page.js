import Image from 'next/image'

import dashboard from '../../assets/dashboardWhite.png'
import tarifa from '../../assets/tarifaYellow.png'
import newsletter from '../../assets/newsletter.png'
import tarifaImage from '../../assets/tarifaImage.png'

// COMPONENTS

import Title from '@/components/Title'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (

    <>

      <Navbar

        linkDasboardColor="text-white"
        linkTarifaColor="text-[#E4DA81]"
        linkNewsletterColor="text-white"

        imageDashboard={dashboard}
        imageTarifa={tarifa}
        imageNewsletter={newsletter}

      />

      <main className="ml-[300px]  max-[700px]:ml-[60px] p-14 max-lg:p-5 max-[400px]:px-6 font-[600] dashboard-content max-w-[1400px] mx-auto main-dashboard">

          <Title title="TARIFA"/>

          <section className="flex gap-2 relative top-[0rem] bg-[#070707] max-[500px]:bg-black max-[500px]:px-0 mt-5 max-[400px]:mt-0 max-[400px]:pt-[1rem] pt-[3rem]  rounded-md px-4 items-center"> 
           
           <Image 
           src={tarifaImage}
           className="w-[40%] h-[40%] max-[1000px]:hidden"
           />

           <form className="max-[400px]:flex max-[400px]:items-center max-[400px]:flex-col" method="">
                <Title title="VALOR" />

                <div className='flex max-[400px]:flex-col gap-6 items-center pt-5'> 
                    <input className="bg-[#131313] text-center py-[1.9rem] text-xl rounded-[15px] w-[100%] text-[#818181]" placeholder='MÊS' type="number" name="mounth" required />
                    <input className="bg-[#131313] text-center py-[1.9rem] text-xl rounded-[15px] w-[100%] text-[#818181]" placeholder='ANO' type="number" name="year" required />    
                </div>
                    <textarea placeholder='OBSERVAÇÃO' className="w-full mt-5 bg-[#131313] p-5  rounded-[15px] h-[45vh]"   ></textarea>
                    <input className="bg-gradient text-center py-[1.5rem] text-xl rounded-[15px] mt-[.7rem]  w-[100%] text-[#000] cursor-pointer" value="ENVIAR" type="submit" />    

           </form>


        </section>
      </main>

    </>
  )
}
