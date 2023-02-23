const Page3 = () => {
    return(
        <div className="relative flex flex-wrap min-w-[91vw] h-[100vh]">
            <div className="absolute w-[20vw] h-[40vh] bg-model3 bg-center bg-cover"></div>
            <div className="absolute bottom-0 right-0 w-[30vw] h-[50vh] bg-landscape4 bg-center bg-cover"></div>

            {/* title */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="flex flex-row justify-between text-xs px-6 pb-4">
                    <span>KOVE</span>
                    <span>SOURCED, DESIGNED, AND MADE IN</span>
                    <span>2022</span>
                </div>
                <div className="text-[8rem] text-center text-xbold leading-[7rem] whitespace-nowrap">
                    THE LAND <br/>
                    OF <br/>
                    FIRE <span className="font-playfair">&</span> ICE
                </div>
                <div className="flex flex-row w-[40%] text-xs px-6 pt-6">
                    <span className="mr-[10%]">OUR MATERIALS ARE 100% SUSTAINABLE AND MICROPLASTIC FREE.</span>
                    <span>THE ENVIRONMENT COMES FIRST.</span>
                </div>
            </div>
        </div>
    )
}

export default Page3