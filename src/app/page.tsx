import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
    const path = headers().get("x-next-current-path");

    if (path === "/home") {
        return (
            <div>
                <h1>hello home</h1>
                <h3>
                    If you come here from the second page, the redirect to /home
                    may not have kicked off.
                </h3>
                <br />
                <Link href="/second">go to second</Link>
            </div>
        );
    }

    redirect("/home");
}
