const Page3 = () => {
    return(
        <div className="relative flex flex-wrap min-w-[91vw] m-w-[100vw] h-[100vh] m-h-[100vh]">

            {/* images */}
            <div className="absolute w-[20vw] h-[40vh] bg-model3 bg-center bg-cover 
            md:w-[30vw] md:h-[30vh] lg:w-[20vw] lg:h-[40vh]"></div>
            <div className="absolute bottom-0 right-0 w-[30vw] h-[25vh] md:h-[50vh] bg-landscape4 bg-center bg-cover"></div>

            {/* title */}
            <div className="z-40 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xs 
            md:text-base lg:text-xs xl:text-sm 2xl:text-lg">

                <div className="flex flex-row justify-between px-6 pb-4 xl:px-20">
                    <span>KOVE</span>
                    <span className="text-center mt-6 lg:mt-0 md:mx-10">SOURCED, DESIGNED, AND MADE IN</span>
                    <span>2022</span>
                </div>

                <div className="text-4xl text-center text-xbold whitespace-nowrap tracking-wide
                md:text-[5rem]
                lg:text-10xl lg:leading-[6rem] xl:text-[10rem] xl:leading-[8rem] 2xl:text-[12rem] 2xl:leading-[10rem]">
                    THE LAND <br/>
                    OF <br/>
                    FIRE <span className="font-playfair">&</span> ICE
                </div>

                <div className="flex flex-row pt-6 md:w-[40%] md:px-6 lg:w-[50%]">
                    <span className="mr-[10%]">OUR MATERIALS ARE 100% SUSTAINABLE AND MICROPLASTIC FREE.</span>
                    <span>THE ENVIRONMENT COMES FIRST.</span>
                </div>
                
            </div>
        </div>
    )
}

export default Page3