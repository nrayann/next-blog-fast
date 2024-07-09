import ContactNumber from "@/components/ContactNumber";
import Link from "next/link";

export default function Contact() {
  return <>
    <h1>Página de contato</h1>
    <ContactNumber />
    <Link href="/">Home</Link>
  </>
}