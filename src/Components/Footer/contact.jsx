import {MapPin, PhoneCall, Mail} from 'lucide-react'

function Contact(){
return (
    <div className="h-full flex flex-col gap-5 justify-center items-center w-full lg:w-[50%]">
    <h1 className="text-xl text-[#cccccc] font-bold">Contact Me</h1>
    <div className='flex  flex-col lg:flex-row gap-1.5 lg:gap-10'>
<div className='flex items-center gap-1 lg:gap-3'>
<MapPin size={30} />
<div>
 <h1 className='text-sm '>Pakistan, Sindh</h1>
 <h1 className='text-sm '>Karachi, Nazimabad</h1>


</div>
</div>
<div className='flex items-center gap-3'>
<PhoneCall size={30} />
<div>
 <h1 className='text-sm '>0322 8261384</h1>
 <h1 className='text-sm '>+92322 8261384</h1>


</div>
</div>
<div className='flex items-center gap-3'>
<Mail size={30}/>
<div>
 <h1 className='text-sm '>maazcoding54@gmail.com</h1>
 <h1 className='text-sm '>maazjbusiness@gmail.com</h1>


</div>
</div>
    </div>
</div>
)
}

export default Contact;