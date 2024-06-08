import amz from '../assets/amazon.png'
import flp from '../assets/flipkart.png'
import shoe from '../assets/shoe_image.svg'
export default function Body(){
    return <div className="flex flex-row m-8 p-8 items-center justify-center">
    <div className='p-2 w-1/2'>
        <div className='font-mono m-2 text-9xl font-bold'>
        YOUR FEET DESERVE THE BEST
        </div>
        <div className='font-mono text-sm w-1/2 font-medium m-1'>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </div>
        <div>
            <button className=' bg-red-500 text-white font-medium px-2.5 py-1.5 mr-5 mt-5'>Shop Now</button>
            <button className=' bg-white border border-black text-black font-medium px-2.5 py-1.5 mr-5 mt-5'>Category</button>
        </div>
        <div className='mt-2'>
            <div className='flex flex-col text-xs'>Also Available On</div>
            <div className='flex gap-1'>
            <div className='mr-2 mt-2'><img src={flp} /></div>
            <div className='mr-2 mt-2'><img src={amz} /></div>          
            </div>
        </div>
    </div>
    <div>
       <img src={shoe} alt="" className='m-10 w-auto h-auto'/>
    </div>

    </div>
}