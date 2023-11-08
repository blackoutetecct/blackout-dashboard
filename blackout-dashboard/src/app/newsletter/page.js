
import Image from 'next/image'

import dashboard from '../../assets/dashboardWhite.png'
import tarifa from '../../assets/tarifa.png'
import newsletter from '../../assets/newsletterYellow.png'
import newsletterImage from '../../assets/newsletterImage.png'

// COMPONENTS

import Title from '@/components/Title'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (

    <>

      <Navbar 

        linkDasboardColor="text-white"
        linkTarifaColor="text-white"
        linkNewsletterColor="text-[#E4DA81]"

        imageDashboard={dashboard}
        imageTarifa={tarifa}
        imageNewsletter={newsletter}

      />

      <main className="ml-[300px] max-[700px]:ml-[60px] p-14 max-lg:p-5 max-[400px]:px-6 font-[600] dashboard-content max-w-[1400px] mx-auto main-dashboard">

          <Title title="Newsletter"/>

          <section className="flex flex-col max-[500px]:px-0 mt-0 max-[400px]:mt-0 max-[400px]:pt-[1rem] px-4 items-center"> 
           
           <Image 
           src={newsletterImage}
           className="relative top-[60px]"
           />

           <form className="pt-[5rem] pb-[3rem] px-[4rem] bg-[#070707] w-full border-[1px] border-[#ffffff45] rounded-[15px] border-solid" method="">
                    <input className="bg-[#131313] text-center py-[1.9rem] text-xl rounded-[15px] w-[100%] text-[#818181]" placeholder='Email' type="text" name="year" required />    
                    <input className="bg-gradient text-center py-[1.5rem] text-xl rounded-[15px] mt-[.7rem]  w-[100%] text-[#000] cursor-pointer" value="ENVIAR" type="submit" />    
           </form>


        </section>
      </main>

    </>
  )
}
