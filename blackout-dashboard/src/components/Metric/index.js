import Image from "next/image"


export default function Metric(props) {
    return(
        <div className="flex justify-around gap-10 flex-col rounded-[20px] border-2 border-[#333333] p-5 px-7 w-full">
        <div className="p-5 w-[45%] rounded-full bg-[#4444] flex items-center justify-center">
          <Image src={props.image} width="100%" />
      </div>
      <p> {props.title} </p>
      <p className="text-center text-6xl text-[#E4DA81]">  {props.number}<span className="text-3xl">{props.measure} </span> </p>
    </div>
    )
}