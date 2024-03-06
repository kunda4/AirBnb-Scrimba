import heroImage from '/Group 77.jpg';
export default function Hero() {
  return (
    <div className='flex flex-col justify-center px-24 align-middle gap-6'>
        <img className='t w-min' src={heroImage} alt=""  />
        <h1 className='text-4xl font-bold'>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind 
            hosts—all without leaving home.</p>
    </div>
  )
}
