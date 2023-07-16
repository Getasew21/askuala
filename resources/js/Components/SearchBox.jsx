import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";

export default function SearchBox() {
    const [activeSearch, setActiveSearch] = useState([]);
    const words = ["haylegnaw", "getasew", "sol", "hareg"];
    const handleSearch = (e) => {
        if (e.target.value == "") {
            setActiveSearch([]);
            return false;
        }
        setActiveSearch(
            words.filter((w) => w.includes(e.target.value)).slice(0, 8)
        );
    };

    return (
        <div>
            <form action="" className=" relative">
                <div className="relative">
                    <input
                        name=""
                        id=""
                        placeholder="Type Here"
                        className="w-full p-4 text-gray-500 text-xl rounded-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none  "
                        onChange={(e) => handleSearch(e)}
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gray-400 rounded-full  ">
                        <AiOutlineSearch fill="white" />
                    </button>
                </div>

                {activeSearch.length > 0 && (
                    <div className="absolute top-20 p-4  bg-gray-300 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                        {activeSearch.map((s) => (
                            <span>{s}</span>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
}
