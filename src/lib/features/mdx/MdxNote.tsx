import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Notebook } from "lucide-react";

export type MdxNoteProps = {
    children: string;
};

export const MdxNote = ({ children }: MdxNoteProps) => {
    return (
        <Alert>
            <Notebook size={16} />
            <AlertTitle>Note !</AlertTitle>
            <AlertDescription>
                {children}
            </AlertDescription>
        </Alert>
    )
}
