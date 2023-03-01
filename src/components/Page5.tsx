const Page5 = () => {
    return(
        <div className="relative flex flex-row flex-wrap content-center min-w-[91vw] h-[100vh] overflow-x-hidden">
            <span className="font-playfair text-[18rem] whitespace-nowrap -translate-x-[25%]">64.1466&deg; N 21.9426&deg; W</span>
            <div className="absolute top-0 left-0 flex flex-row justify-between min-w-[91vw] h-[100vh]">
                <div className="flex flex-col justify-between h-[100%] pl-10">
                    <div className="h-[30vh] w-[30vh] bg-landscape1 bg-center bg-cover"></div>
                    <span className="text-xs pb-10">
                        LOCALLY & ETHICALLY <br/>
                        SOURCED THREADS
                    </span>
                </div>
                <div className="flex flex-col justify-end h-[100%]">
                    <div className="h-[30vh] w-[30vh] bg-model4 bg-center bg-cover"></div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row">
                        <span className="text-xs self-center"> 
                            NATURE IS ALWAYS<br/>
                            IN FASHION.
                        </span>
                        <div className="h-[40vh] w-[30vh] mt-20 ml-20 bg-landscape4 bg-center bg-cover"></div>
                    </div>
                    <span className="text-10xl">ISL/INTL</span>
                </div>
            </div>
        </div>
    )
}

export default Page5