function CreatePost() {
    return (
        <>
            <h1 className="text-center display-5 mb-3">Post to the Network</h1>
            <hr/>
            <div className="shadow-sm border-2 bg-light text-dark border border-secondary rounded-2 p-4 m-3">
                <h5 className="mb-3">What's on your Mind Today? </h5>
                <div className="mb-3">
                    <textarea
                        type="text"
                        rows={5}
                        className="border border-1 border-dark rounded-2 bg-secondary-subtle form-control"
                        name=""
                        id="newContent"
                        placeholder=""
                        defaultValue={""}
                    />
                </div>
                <button type="button" className="btn-success btn ms-auto">
                    Create Post
                </button>
            </div>
        </>
    )
}

export default CreatePost