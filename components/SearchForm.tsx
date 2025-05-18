import { Search } from "lucide-react"
import Form from "next/form"
import SearchFormReset from "./SearchFormReset"

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form
            id="search-form"
            className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5"
            action="/" scroll={false}
        >
            {/* INPUT with NAME and DEFAULTVALUE */}
            <input
                className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
                name="query" defaultValue={query} placeholder="Search Startups"
            />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                {/* Button with type submit is modifying the query in the url */}
                <button type="submit"
                    className="size-[50px] rounded-full bg-black flex justify-center items-center text-white"
                >
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm