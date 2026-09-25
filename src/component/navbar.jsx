import React from 'react';

function Navbar() {
    return(
        <nav className= "fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-xs z-50 px-6 md:px-12 py-4 flex justify-between items-center border-b border-gray-100">
            <h1 className="text-2xl font-bold text-blue-600">Nicholas Kenji</h1>

            <div className="flex space-x-6 text-sm font-semibold text-gray-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;