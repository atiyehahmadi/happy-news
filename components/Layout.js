
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <div className=''>
                <Meta />
                <Nav />
                <div className="container mx-auto my-3.5">

                    <main className="">
                        <Header />
                        {children}
                    </main>
                </div></div>

        </>

    )
}

export default Layout