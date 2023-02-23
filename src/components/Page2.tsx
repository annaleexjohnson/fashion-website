const Page2 = () => {
    return(
        <div className="flex flex-wrap flex-col justify-between min-w-[50vw] h-[100vh] bg-black color text-white">
            {/* text animation */}
            <div className="w-[75%] h-[20vh] px-4 pt-4 overflow-hidden">
                <span className="font-playfair text-10xl whitespace-nowrap">64.1466&deg; N 21.9426&deg; W</span>
            </div>
            {/* image */}
            <div className="w-[90%] h-[78vh] ml-4 bg-model5 bg-[center_bottom_10%] bg-cover"></div>
        </div>
    )
}

export default Page2