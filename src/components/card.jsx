import PropType from 'prop-types'
export default function Card(props){

    return(
        <div className="w-96 h-72 relative">
            {!props.openSpots &&<div className='absolute top-0 left-0 px-2 font-semibold uppercase py-1 mx-2 my-2 bg-white rounded-sm'>Sold Out</div>}
            <img src={props.img} 
            alt="Image on Airbnb"
            className="rounded-lg"/>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FE395C" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span>({props.rating})</span>
            <span className="text-[#918E9B]">{props.reviewCount} . </span>
            <span className="text-[#918E9B]">{props.country}</span>
            </div>
            <span>{props.title}</span>
            <p className="font-bold">From {props.price} <span className="font-normal">/ person</span></p>
        </div>
    )
}
Card.propTypes = {
    img: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    reviewCount:PropType.number.isRequired,
    country: PropType.string.isRequired,
    title: PropType.string.isRequired,
    price: PropType.number.isRequired,
    openSpots: PropType.number

}