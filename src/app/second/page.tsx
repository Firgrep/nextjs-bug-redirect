import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>
                If you now refresh this page and then click the button to go to
                root, the bug should appear.
            </h1>
            <Link href="/">
                <button>Click to return to the home page</button>
            </Link>
        </main>
    );
}
