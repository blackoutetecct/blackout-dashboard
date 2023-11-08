import buy from '../../assets/buy.png'
import Image from 'next/image'

export default function Revenue(props) {

    return(
        <div className={`border-2 border-[#333333] py-7 px-5 max-[400px]:px-2  w-[100%] max-2xl:flex-1 pr-10 flex items-center gap-6 max-[500px]:gap-2 rounded-[25px] ${props.bg}`}>
        <div className={`rounded-full bg-[#4444] ${props.bgBuy}`}>
          <Image src={buy} width={70} className=' p-5 ' />
        </div>
        <div>
            <p className={`text-[1rem] ${props.textColor} `}> { props.category } </p>
            <p className={`text-[#E4DA81] text-4xl ${props.textColor} `}> { props.total } </p>
          </div>
    </div>
    )
}