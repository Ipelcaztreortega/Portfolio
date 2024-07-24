export const About = () => {
    return (
        <div id="about" className="font-sGrotesk min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">

            {/* Container holding the actual content */}
            <div className="max-w-4xl py-6 flex flex-col"> 

                {/* About me section */}
                <div>
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl mb-12">About Me</h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-12 items-start">
                    
                    <div className="about-container flex flex-col w-full sm:w-4/6 mr-2 mb-8 sm:mb-0">
                        
                        <p className="text-base sm:text-lg text-gray-600">
                            Hello! I'm Irvin, and I bring three years of personal coding experience to the table. I am a senior enrolled in the Computer Science program with a focus on Data Science at Georgia State University. I am proficient in OOP languages: Python and Java, while currently working on improving my Web Development skills using the MERN stack.
                        </p>
                        <p className="text-base sm:text-lg mt-4 text-gray-600">
                            I am passionate about Software Engineering and I would love to be able to contribute my skills and enthusiasm in an innovative and customer-obsessed organization where I can continue to grow and make a meaningful impact. I'm looking for roles in Software Engineering, Full-Stack development, and Data Science. 
                        </p>
                    </div>

                    <div className="w-full sm:w-2/6 relative flex-shrink-0">
                        <div className="overlay-tint absolute top-0 right-0 bottom-0 left-0"></div>
                        <img className="w-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded object-cover shadow-2xl" src="./images/toji.jpg" alt="Self-Image" />
                    </div>
                </div>

                {/* Skills section */}
                <div className="flex flex-wrap justify-between p-6 mt-20 gap-y-4">
                    <div className="w-full sm:w-1/6 mb-4">
                        <p className="font-bold text-red-900">SKILLS</p>
                    </div>
                    <div className="w-full sm:w-1/6 mb-4">
                        <p className="font-bold pb-2">LANGUAGES</p>
                        <p>Python</p>
                        <p>JavaScript/TypeScript</p>
                        <p>Java</p>
                        <p>HTML</p>
                        <p>CSS/Tailwind</p>
                        <p>SQL (MySQL)</p>
                        <p>NoSQL (MongoDB)</p>
                    </div>

                    <div className="w-full sm:w-1/6 mb-4">
                        <p className="font-bold pb-2">LIBRARIES/FRAMEWORKS</p>
                        <p>React</p>
                        <p>NumPy</p>
                        <p>Matplotlib</p>
                        <p>Node.js</p>
                        <p>Express</p>
                    </div>

                    <div className="w-full sm:w-1/6 mb-4">
                        <p className="font-bold pb-2">TOOLS</p>
                        <p>Linux</p>
                        <p>Git & Github</p>
                        <p>Netlify</p>
                        <p>Supabase</p>
                        <p>MS Excel</p>
                        <p>Tableau</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
