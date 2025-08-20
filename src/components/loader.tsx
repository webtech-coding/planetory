import icons from './../assets/icons.svg'
const Loader =()=>{
    return(
        <div className="loader">
            <div className='loader-content'>
                <svg>
                    <use xlinkHref={`${icons}#icon-spinner`}></use>
                </svg>
                <p>Loading image. Please wait...</p>
            </div>
        </div>
    )
}

export default Loader