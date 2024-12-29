function Search() {
    return (
        <div className="m-3">
            <h5 className="mb-2 ms-4">
                {" "}
                <i className="fa-solid fa-magnifying-glass" /> Looking for Something ?
            </h5>
            <div className="shadow-sm rounded-5">
                <input
                    type="text"
                    className="p-4 border-3 bg-secondary-subtle text-dark border border-secondary rounded-5 form-control"
                    name="formId1"
                    id="search"
                    placeholder="Looking for Something?"
                />
            </div>
        </div>
    )
}

export default Search