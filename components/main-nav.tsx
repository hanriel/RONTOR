import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    HomeIcon,
    FileTextIcon,
    BackpackIcon,
    ArchiveIcon,
} from "@radix-ui/react-icons";

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >

            <Link
                href="/"
                className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            ><HomeIcon className="mr-1"/>
                Главная
            </Link>

            <Link
                href="/scheme"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            ><FileTextIcon className="mr-1"/>
                Карта
            </Link>
        </nav>
    );
}
