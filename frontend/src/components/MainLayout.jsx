import { Outlet, Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import Search from './Search'

function LeftSideBar({ loggedIn, setLoggedIn }) {


    return (
        <>
            <div className="w-100">
                <center>
                    <img
                        className="side-pfp d-block rounded-circle my-3"
                        src="https://yt3.ggpht.com/iuMKrvsaCdBn2yF43L9Dmen0LSQHryoRT2b5EIpJz6au10HqrtBeRaGtIuMg0M8DN8GAHta49A=s900-c-k-c0x00ffffff-no-rj"
                        alt="Profile Picture"
                    />
                    <h1 className="mb-4 lead text-white text-center fw-medium">
                        <Link className='nav-link' to="/profile">Username</Link>
                    </h1>
                    <hr className="border-light border-1" />
                </center>
            </div>
            <div className="">
                <div className="w-100 p-3">

                    <button
                        type="button"
                        className="mb-2 btn btn-outline-secondary text-white border-0 fw-medium w-100 rounded-2 p-2"
                    >
                        <Link className='nav-link' to="/search">Search</Link>
                    </button>
                    <button
                        type="button"
                        className="mb-2 btn btn-outline-success text-white border-0 fw-medium w-100 rounded-2 p-2"
                    >
                        <Link className='nav-link' to="/create">Create Post</Link>
                    </button>
                    <button
                        type="button"
                        className="mb-2 btn btn-outline-light border-0 fw-medium w-100 rounded-2 p-2"
                    >
                        <Link className='nav-link' to="/posts/all">All Posts</Link>
                    </button>
                    <button
                        type="button"
                        className="mb-2 btn btn-outline-light border-0 w-100 fw-medium rounded-2 p-2"
                    >
                        <Link className='nav-link' to="/posts/following">Following</Link>
                    </button>
                    <button
                        type="button"
                        className="mb-2 btn btn-outline-light border-0 w-100 fw-medium rounded-2 p-2"
                    >
                        <Link className='nav-link' to="/register">Register</Link>
                    </button>
                    {/* <button type="button" class="my-btns">
                      Profile
                  </button>
                  <button type="button" class="my-btns">
                      All Posts
                  </button> */}
                </div>
            </div>
            <div className="w-100 p-3 bottom-0 position-absolute footer">
                <center>
                    {
                        loggedIn
                            ? (
                                <button
                                    type="button"
                                    onClick={() => setLoggedIn(!loggedIn)}
                                    className="w-100 mb-3 border-0 fw-medium btn btn-outline-danger rounded-2 p-2"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <Link
                                    to='/login'
                                    className="w-100 mb-3 border-0 fw-medium btn btn-light rounded-2 p-2"
                                >
                                    Log In
                                </Link>
                            )
                    }
                    <p className="text-secondary text-center mt-2">
                        All Rights Reserved by Saad-Byte-Star
                    </p>
                </center>
            </div>
        </>
    )
}


function MainLayout({ loggedIn, setLoggedIn }) {

    return (
        <>


            <div className="vh-100 container-fluid">
                <div className="row h-100">
                    <div className="bg-dark position-relative p-0 col-2">
                        <LeftSideBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                    </div>
                    <div className="col h-100 overflow-y-scroll bg-light">
                        {/* <Search />
                        <hr className="border-2 border-dark mx-3 " /> */}
                        {/* <CreatePost />
                        <hr className="border-4 border-dark mx-3 " /> */}
                        <div className='m-3'>
                            <Outlet />
                        </div>
                    </div>
                    <div className="col-3 bg-dark">Suggestions Here , Friends here</div>
                </div>
            </div>




            {/* Main Layout
            <div>
                <Outlet/>
            </div> */}
        </>
    )
}

export default MainLayout