
const SearchResults = ({ params }: {params: { searchid: string }}) => {
    return (
        <div className="border border-solid-gray w-full h-1/5 p-2">
            <h1>Search Result {params.searchid}</h1>
        </div>
    )
}

export default SearchResults