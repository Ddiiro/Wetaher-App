import Image from 'next/image'

export default function thisWeek(){
    return(
        <div>
        <div className='absolute inset-0'>
            <Image
                src='https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                fill={true}
                alt='weather image'
            />
        </div>

        <div className='relative z-10'>
            <p>This is this week's weather report.</p>
        </div>
            
        </div>
    )
}