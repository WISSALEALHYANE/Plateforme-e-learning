import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Page non trouvée</p>
        <Link href="/" className="text-primary underline">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
