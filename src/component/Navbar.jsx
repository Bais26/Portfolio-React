import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Skills",
            url: "/skills"
        },
        {
            name: "Projects",
            url: "/projects"
        },
    ];

    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    const handleToggleDropdown = (index) => {
        setShowDropdown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="bg-primary text-white sticky top-0 container mx-auto">
            <div className="flex flex-wrap md:flex-nowrap justify-between mx-4 p-4 items-center bg-primary">
                <a href="/" className="text-white font-bold text-3xl">Portfolio</a>
                <div className="hidden text-xl md:flex items-center gap-12 md:gap-12 bg-primary ">
                    {navItems.map((items, index) => {
                        return (
                            <div className="bg-primary my-2" key={index}>
                                <Link className="bg-primary" key={index} to={items.url}>{items.name}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden bg-primary">
                    <button onClick={handleToggleSidebar}>
                        <i className="bg-primary text-2xl mt-2 fa-solid fa-bars "></i>
                    </button>
                    {toggle && (
                        <div className="absolute w-full top-12 right-0 p-4 bg-primary">
                            <div className="p-4 bg-primary">
                                {navItems.map((items, index) => {
                                    return (
                                        <div className="bg-primary my-2" key={index}>
                                            <span className="bg-primary " onClick={() => handleToggleDropdown(index)}>
                                                <a className="bg-primary" key={index} href={items.url}>{items.name}</a>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex">
                    
                </div>
            </div>
        </div>
    );
}