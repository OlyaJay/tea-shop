import { useState } from "react";

interface SearchProps {
    setSearch: (q: string) => void;
}

const SearchInput = ({ setSearch }: SearchProps) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearch(input.trim());
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center py-5">
            <div className="flex gap-5">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"/>
                <button className="p-2 bg-gray-100 shadow-md rounded-md border border-secondary hover:bg-background hover:scale-102 transition-transform transition-colors duration-300">Search</button>
            </div>
        </form>
    );
};

export default SearchInput;
