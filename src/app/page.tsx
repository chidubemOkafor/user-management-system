import Waveone from "../../public/waveone.svg"
import Wavetwo from "../../public/wavetwo.svg"
import Image from 'next/image';
import usermagement from '../../public/usermanagement.png'
import edituser from '../../public/edituser.png'

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center w-[100%] font-bold sm:mt-0 mt-[7em]">
        <p className="text-4xl">user management <span className="text-yellow-400">system</span></p>
        <p className="mb-20">powered by @dubem</p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[8em] w-[80%] sm:w-auto">
            <div className="text-left">
            <Image src={usermagement} alt="user mangement pic" height={300} width={700}/>
            </div>
          </div>
        </div>
    </div>
  );
}
