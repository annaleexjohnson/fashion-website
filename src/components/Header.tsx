import IconLogo from "../assets/IconLogo"

const Header = () => {
    return(
        <div className="z-50 fixed flex flex-row justify-between w-[100vw] m-w-[100vw] h-[10vh] m-0 px-2 pt-2 bg-white border-b border-black
        md:flex-col md:h-[100%] md:m-h-[100vh] md:w-[9vw] md:content-top md:border-r md:py-8 md:px-6">
            
            {/* icon */}
            <div className ="flex justify-center content-center
            md:rotate-[270deg] md:origin-center">
                <IconLogo />
            </div>

            {/* title */}
            <div className="font-playfair text-4xl md:text-3xl lg:text-4xl">
                <h1 className="md:rotate-[270deg] md:fixed md:top-50% md:left-0 xl:text-[4rem] ">Kove</h1>
            </div>

            {/* motto */}
            <div className="text-xs font-bold text-right md:text-left xl:text-sm">
                <div className="whitespace-normal md:rotate-[270deg] md:origin-center md:fixed md:top-50% md:left-0
                md:w-[10%] md:-translate-y-[125%] 2xl:-translate-y-[200%]">
                    HIGH QUALITY FABRICS <br/>
                    DESIGNED & MADE <br/>
                    IN ICELAND <br/>
                </div>     
            </div>
                   
        </div>
    )
}

export default Header