export default async function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Non Trouvée</h1>
            <a href="/" className="mt-6 text-blue-500 hover:underline">
                Retour à l'accueil
            </a>
        </div>
    );
}