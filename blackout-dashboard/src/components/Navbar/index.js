import Image from "next/image"

import asideLogo from '../../assets/asidelogo.png'
import logOut from '../../assets/logout.png'


export default function Navbar(props) {

    return(
        <aside className="h-[100vh] w-[300px] max-[700px]:w-[60px] max-[700px]:items-center fixed flex justify-between flex-col p-[2rem] max-[700px]:p-2 border-r-[8px] border-[#242424]">

        <header className="flex gap-2 items-center">
          <Image
          src={asideLogo}
          />
          <h1 className="font-bold text-2xl max-[700px]:hidden"> BLACKOUT </h1>
        </header>

      <nav className="flex flex-col gap-[2rem]">

          <a className={`${props.linkDasboardColor} flex gap-3 items-center`} href="/dashboard"> <Image src={props.imageDashboard}  /> <span className="max-[700px]:hidden">Dashboard</span> </a>
          <a className={`${props.linkTarifaColor} flex gap-3 items-center`} href="/tarifa"> <Image src={props.imageTarifa}  /> <span className="max-[700px]:hidden">Tarifa</span> </a>
          <a className={`${props.linkNewsletterColor} flex gap-3 items-center`} href="/newsletter"> <Image src={props.imageNewsletter}  /> <span className="max-[700px]:hidden">Newsletter</span> </a>

      </nav>

          <a className="text-white flex gap-3 items-center" href="/"> <Image src={logOut}  /> <span className="max-[700px]:hidden">Sair</span> </a>


    </aside>
    )
}