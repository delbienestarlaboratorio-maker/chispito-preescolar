// Root page for chispito-preescolar micro-frontend
// Redirects to kinder as the default grade
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/kinder");
}
