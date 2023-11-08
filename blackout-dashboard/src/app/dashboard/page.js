import Image from 'next/image'

import dashboardman from '../../assets/dashboardman.png'
import dashboard from '../../assets/dashboard.png'
import tarifa from '../../assets/tarifa.png'
import newsletter from '../../assets/newsletter.png'
import water from '../../assets/watter.png'
import shock from '../../assets/thunder.png'

// COMPONENTS

import Revenue from '@/components/Revenue'
import Title from '@/components/Title'
import Metric from '@/components/Metric'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (

    <>

      <Navbar 

        linkDasboardColor="text-[#E4DA81]"
        linkTarifaColor="text-white"
        linkNewsletterColor="text-white"

        imageDashboard={dashboard}
        imageTarifa={tarifa}
        imageNewsletter={newsletter}

      />

      <main className="ml-[300px] max-[700px]:ml-[60px] p-14 max-lg:p-5 max-[400px]:px-6 font-[600] dashboard-content max-w-[1400px] mx-auto main-dashboard">

          <Title title="DASHBOARD"/>

          <section className="flex gap-8   my-5 items-center max-2xl:items-start  max-2xl:flex-col "> 
            <div className="dashboard-user p-10 py-2 max-[500px]:gap-0 max-[500px]:p-5  text-black rounded-3xl flex-1 flex items-center gap-[2rem] max-2xl:justify-between max-2xl:flex-1 max-2xl:w-full">
              <div>
                <p className="font-[700] ´text-2xl"> QUANTIDADE DE USUÁRIOS </p>
                <p className="text-[10rem] mt-[-30px] max-[900px]:text-[5rem] max-[400px]:text-[3rem] max-[900px]:mt-[0rem]"> 239 </p>
              </div>

              <Image src={dashboardman} className="w-full max-w-[500px] max-[1200px]:w-[50%]" />
            </div>

            <div className="flex flex-col justify-between gap-4 h-full max-2xl:w-full">
             
             <Revenue category="TOTAL MENSAL" total="50.00" />
             <Revenue category="TOTAL ANUAL" total="150.00" />
             <Revenue category="TOTAL GERAL" total="200.00" bgBuy="bg-black" bg="bg-[#E4DA81]" textColor="text-black" />
             
          </div>
          </section>

        <section >  
          <Title title="MÉTRICA"/>

         <div className="grid mt-5 grid-cols-4 gap-8 max-[1400px]:gap-2 max-2xl:grid-cols-2 max-2xl:max-w-[600px] max-[500px]:grid-cols-1 ">

           <Metric title="LITROS ADMINISTRADOS" number="2.6" measure="L" image={water} />
           <Metric title="ENERGIA ADMINISTRADA" number="0.6" measure="V" image={shock} />
           <Metric title="DISPOSITIVOS HIDRICOS" number="46" measure="D" image={water} />
           <Metric title="DISPOSITIVOS DE ELETRICIDADE" number="46" measure="D" image={shock} />

         </div>

        </section>
      </main>

    </>
  )
}
