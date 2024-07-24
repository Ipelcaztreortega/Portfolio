export const Experience = () => {
    return (
        <div id="experience" className="font-sGrotesk flex flex-col items-center justify-center px-4 sm:px-8">

            {/* Container holding the actual content */}
            <div className="max-w-4xl flex flex-col w-full"> 

                {/* Experience section */}
                <div className="p-6 mt-20 gap-y-4 w-full">
                    <div className="w-full">
                        <p className="font-bold text-2xl sm:text-3xl lg:text-3xl mb-12">EXPERIENCE</p>
                    </div>

                    <div className="w-full mb-4">
                        <div className='w-full flex flex-col mb-8'>
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <p className="font-bold pb-2 text-lg sm:text-xl md:text-base">Eye Space</p>
                                <p className="md:text-base sm:text-lg">June 2024 - Current</p>
                            </div>
                            <p className="md:text-base  sm:text-lg">Software Engineer Intern</p>
                        </div>

                        <div className='w-full flex flex-col mb-8'>
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <p className="font-bold pb-2 text-lg sm:text-xl md:text-base">Code Path</p>
                                <p className="md:text-base sm:text-lg">July 2023 - August 2024</p>
                                
                            </div>
                            <p className="md:text-base  sm:text-lg">Tech Fellow Web Development</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
