"use client";

import { Button } from "@/components/ui/button";
import { CornerUpLeft } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-lg text-gray-600 font-sans">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Button
                className="mt-6 flex items-center gap-2"
                onClick={() => {
                    window.history.back(); // Navigate back in history
                }}
            >
                <CornerUpLeft size={18} /> Retour
            </Button>
        </div>
    );
}