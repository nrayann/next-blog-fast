import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Página inicial</h1>
      <Link href="/contact">
        Página de contato
      </Link>
      <br />
      <Link href="/blog/posts">
        Blog
      </Link>
    </>
  );
}
