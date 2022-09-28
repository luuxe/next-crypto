import Link from "next/link";

const PageNotFound = () => {
    return (
        <div>
            <h1>404: Page Not Found!</h1>
            <h3>oooopsies!</h3>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default PageNotFound;