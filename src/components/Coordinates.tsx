const Coordinates = () => {
    return(
        <div className="relative flex flex-row flex-wrap content-center min-w-[91vw] h-[100vh] overflow-x-hidden">
            {/* text under main images */}
            <span className="font-playfair text-5xl whitespace-nowrap overflow-x-hidden 
            md:text-[18rem] lg:text-[14rem] lg:-translate-x-[25%] lg:overflow-visible">
                64.1466&deg; N 21.9426&deg; W
            </span>
            
            {/* div above text */}
            <div className="absolute top-0 left-0 flex flex-row w-[100%] h-[100vh] p-2 
            md:justify-between md:min-w-[91vw] md:p-0">
                
                {/* column 1 */}
                <div className="flex flex-col justify-between h-[100%] basis-1/3 
                md:basis-1/2 md:pl-2">

                    <div className="w-[100%] h-[30%] bg-landscape1 bg-center bg-cover
                    md:h-[30vh] md:w-[30vh]"></div>

                    <span className="text-xs pb-10 md:text-base 2xl:text-lg">
                        LOCALLY & ETHICALLY <br/>
                        SOURCED THREADS
                    </span>

                </div>
                

                {/* column 2 */}
                <div className="flex flex-col justify-end basis-1/3 h-[80%]
                md:absolute md:h-[90%] lg:static lg:h-[100%]">
                    <div className="absolute h-[20%] w-[60%] bg-model4 bg-center bg-cover
                    md:h-[30vh] md:w-[30vh] md:static"></div>
                </div>


                {/* column 3 */}
                <div className="flex flex-col basis-1/3 justify-between md:basis-1.2">

                    <div className="flex flex-col lg:flex-row">
                        <span className="text-xs md:text-base md:mt-[20vh] lg:mt-0] lg:self-center 2xl:text-lg"> 
                            NATURE IS ALWAYS<br/>
                            IN FASHION.
                        </span>
                        <div className="h-[20vh] m-w-[100%] bg-landscape4 bg-center bg-cover
                        lg:h-[40vh] lg:w-[30vh] lg:mt-10 lg:ml-20"></div>
                    </div>

                    <span className="text-3xl whitespace-normal md:text-10xl">ISL/INTL</span>

                </div>


            </div>
        </div>
    )
}

export default Coordinates