import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <header className="flex bg-black text-white py-6">
                <div className="flex justify-between w-full max-w-screen-sm mx-auto px-6">
                    <Link href="/">Mikael Sjövind</Link>
                    <ul className="flex space-x-6">
                        <li><Link href="/posts">Posts</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navbar;