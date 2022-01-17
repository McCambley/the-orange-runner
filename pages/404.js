import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>404</h1>
      <h2>That page cannot be found</h2>
      <Link href="/">
        <a>Head back home</a>
      </Link>
    </div>
  );
}
