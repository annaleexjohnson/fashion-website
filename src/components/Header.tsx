const Header = () => {
    return(
        <div className="z-50 relative flex flex-col justify-between content-top h-[100%] w-[12vh] py-8 px-6 m-0 border-r border-black">
            <div >
                <div className="absolute rotate-[270deg] origin-[100%]">
                    icon
                </div>
            </div>

            <div className="font-playfair text-4xl ">
                <h1 className="absolute rotate-[270deg] origin-[5%_0%]">Kove</h1>
            </div>

            <div className="text-xs font-bold ">
                <div className="absolute rotate-[270deg] origin-top-left">
                    HIGH QUALITY FABRICS <br/>
                    DESIGNED & MADE <br/>
                    IN ICELAND
                </div>     
            </div>
                   
        </div>
    )
}

export default Header