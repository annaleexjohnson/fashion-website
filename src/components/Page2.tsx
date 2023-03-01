const Page2 = () => {
    return(
        <div className="flex flex-wrap flex-col w-[100vw] min-w-[50vw] m-h-[100vh] 
        bg-black color text-white 
        md:min-w-[91vw] lg:min-w-[50vw] lg:m-w-[50vw] lg:justify-start">
            
            {/* text animation */}
            <div className="w-[100%] h-[10vh] 
            lg:h-[25vh] lg:px-4 lg:pt-4 overflow-hidden">
                <span className="font-playfair text-5xl whitespace-nowrap inline-block 
                animate-[moveTextLinear_8s_linear_infinite] md:text-[4rem] lg:text-10xl 2xl:text-15xl">
                    64.1466&deg; N 21.9426&deg; W
                </span>
            </div>

            {/* image */}
            <div className="w-[90%] h-[78vh] m-4 bg-model5 bg-[center_bottom_10%] bg-cover 
            lg:h-[65vh] lg:w-[70%]"></div>

        </div>
    )
}

export default Page2

