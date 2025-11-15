import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Accueil 🏠</h1>
      <p>
        <Link href="/students">Aller à la page Étudiants</Link>
      </p>
      <p>
        <Link href="/contact">Aller à la page Contact</Link>
      </p>
      <p>
        <Link href="/teachers">Aller à la page Enseignants 👨‍🏫👩‍🏫</Link>
      </p>
    </main>
  );
}
