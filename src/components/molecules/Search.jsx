import React, {useState} from "react";
import SearchIcon from "../icons/SearchIcon";
import ArrowDown from "../icons/ArrowDown";

const Search = () => {

    const links = [
        {id:1, title: "Discover", url: "/discover"},
        {id:2, title: "Browse", url: "/browse"},
        {id:3, title: "News", url: "/news"}
    ]

    const [open, setOpen] = useState(false)

    function openFilter () {
        setOpen(!open)
    }

    return (
        <>
            <div className="bg-[#121212] fixed top-12 w-full md:py-3 ">
                <div className="backdrop-blur-sm text-white py-7 flex lg:py-3 justify-center lg:justify-start lg:px-28 xl:px-48 items-center text-[16px] w-full text-center top-14">
                    <div className="absolute left-8 lg:static">
                        <div className="lg:absolute mt-1 lg:mt-3 lg:ml-4">
                            <SearchIcon />
                        </div>
                        <form className="hidden lg:block">
                            <input type="text" placeholder="search store" className="px-6 bg-[#202020] border-none rounded-full placeholder:pl-7 "/>
                        </form>
                    </div>

                    <div className="lg:hidden flex items-center" onClick={openFilter}>
                        <p className="mr-[2px] text-white">Discover</p>
                        <div className={`${open ? 'rotate-180' : 'rotate-0'}`}>
                            <ArrowDown />
                        </div>
                    </div>
                    <div className="hidden lg:block lg:ml-12">
                        <ul className="text-center flex text-white ">
                            {
                                links.map( link => (
                                  link.id == 2 ? <li className="font-normal mr-10 text-[#858585]" key={link.id}>{link.title}</li> : <li className="font-normal mr-10" key={link.id}>{link.title}</li>
                                ))
                            }
                        </ul>
                    </div>
           
                </div>
                <div className={`bg-[#121212] absolute lg:hidden w-full top-[5rem] z-20 ${open ? "block"  : "hidden" }`}>
                    <ul className=" pl-8 text-white py-5 xs:py-6 md:text-[14px]">
                        {
                            links.map( link => (
                                link.id !== 1 ? <li className="py-5 md:py-3 text-[#8C8C8C] border-t border-[#2A2A2A]" key={link.id}>{link.title}</li>
                                : <li className="py-5 md:py-3" key={link.id}>{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <button onClick={openFilter} className={`lg:hidden w-full h-[45rem] bg-black  aboslute bg-opacity-80 ${open ? "block"  : "hidden" }`}></button>
        </>
    )
}

export default Search