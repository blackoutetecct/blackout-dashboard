import blackout from '../../assets/blackout-login.png'
import Image from 'next/image'
import Input from '@/components/Input'

import login from '../../assets/login.png'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'


export default function Login() {
    return(
        <main className="pt-[5rem] pb-2 px-[2rem] max-[500px]:pt-[2rem] max-[500px]:px-[0rem] max-[500px]:bg-[#E4DA81] h-[100vh]">
            <div className="flex gap-[4rem] m-auto max-w-[1200px] max-[800px]:block">
                <div className="pt-10 flex flex-col gap-2 items-center justify-center flex-content max-[800px]:hidden">
                    <h1 className="text-2xl font-semibold">ACESSE SUA CONTA AGORA MESMO! </h1>

                    <Image 
                    src={login}
                    />

                </div>
                <div className="bg-[#E4DA81] rounded-md text-black pt-10 px-[5rem] max-[800px]:px-[2rem] pb-10 max-w-[700px] max-[800px]:flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center">
                    <header className='flex items-center justify-center gap-5 pr-[6rem] max-[500px]:pr-[2rem] max-[500px]:gap-[0rem]'>
                        <Image 
                        src={blackout}
                        className="max-[500px]:w-[80px]"
                        
                        />
                        <h2 className="text-center self-center font-semibold text-4xl"> BLACKOUT </h2>

                    </header>
                    <form action="" method="get" className='flex gap-[1.4rem] flex-col'>
                        <div className="flex mt-[1rem] items-center gap-[1rem]">
                            <div className="w-[100%] h-[3px] bg-black relative top-[-15px]">  </div>
                            <h3 className='mt-[2rem] mb-[4rem] font-[700] text-center text-2xl'> LOGIN </h3>
                            <div className="w-[100%] h-[3px] bg-black relative top-[-15px]">  </div>
                        </div>
                       <div className="relative">
                           <Image src={email} className="absolute top-[20px] left-[25px]" />  <Input placeholder="Email" type="email" />
                       </div>
                       <div className='relative'>
                           <Image src={lock} className="absolute top-[15px] left-[30px]" /><Input placeholder="Senha" type="password" />
                       </div>
                        <a className="text-right text-red-800 text-sm relative top-[-14px]" href="/forgetPassword"> Esqueci minha senha? </a>

                        <input type="submit" value="LOGIN" className="border-[3px] rounded-lg border-black font-bold py-2 text-xl" />
                    </form>
                </div>
            </div>
        </main>
        )
}