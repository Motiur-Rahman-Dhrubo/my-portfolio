const Skills = () => {
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl md:mt-10 mt-6 md:p-12 p-6 min-h-96">
            <h2 className="md:text-3xl text-2xl font-bold text-center">My Skills:</h2>
            <div className="mt-6 flex md:gap-4 gap-2 flex-wrap justify-center">
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/html.png" alt="html" className="w-full"/>
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">HTML5</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/css.png" alt="css" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">CSS3</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-green-200">
                    <img src="/assets/js.png" alt="js" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">JavaScript</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/bs.png" alt="bootstrap" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">BootStrap</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/tw.png" alt="tailwind" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">Tailwind CSS</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-green-200">
                    <img src="/assets/react.png" alt="react" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">React JS</p>
                    <p className="text-xs text-center">Category: Frontend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-green-200">
                    <img src="/assets/node.png" alt="html" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">Node JS</p>
                    <p className="text-xs text-center">Category: Backend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-orange-200">
                    <img src="/assets/fire.png" alt="firebase" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">Firebase</p>
                    <p className="text-xs text-center">Category: Backend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-orange-200">
                    <img src="/assets/mdb.png" alt="mongodb" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">MongoDB</p>
                    <p className="text-xs text-center">Category: Backend</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-green-200">
                    <img src="/assets/git.png" alt="git" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">Git</p>
                    <p className="text-xs text-center">Category: Tool</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/chrome.png" alt="chrome" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">Chrome</p>
                    <p className="text-xs text-center">Category: Tool</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/github.png" alt="github" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">GitHub</p>
                    <p className="text-xs text-center">Category: Tool</p>
                </div>
                <div className="lg:w-36 md:w-28 w-20 border p-2 rounded-lg hover:shadow-lg bg-blue-300">
                    <img src="/assets/vs_code.png" alt="vs_code" className="w-full" />
                    <p className="lg:text-lg md:text-md text-xs font-semibold text-center mt-1">VS Code</p>
                    <p className="text-xs text-center">Category: Tool</p>
                </div>
            </div>
            <div className="mt-6 flex gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-300 border"></div>
                    <p className="md:text-base text-xs">Expert</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-200 border"></div>
                    <p className="md:text-base text-xs">Medium</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-200 border"></div>
                    <p className="md:text-base text-xs">Learning</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;