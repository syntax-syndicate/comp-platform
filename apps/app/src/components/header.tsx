import { UserMenu } from "@/components/user-menu";
import { getOrganizations } from "@/data/getOrganizations";
import { auth } from "@/utils/auth";
import { Inbox } from "lucide-react";
import { db } from "@comp/db";
import { buttonVariants } from "@comp/ui/button";
import { Icons } from "@comp/ui/icons";
import { Skeleton } from "@comp/ui/skeleton";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { AssistantButton } from "./ai/chat-button";
import { MobileMenu } from "./mobile-menu";

export async function Header() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	const currentOrganizationId = session?.session.activeOrganizationId;

	if (!currentOrganizationId) {
		redirect("/");
	}

	const { organizations } = await getOrganizations();

	const frameworks = await db.frameworkEditorFramework.findMany({
		select: {
			id: true,
			name: true,
			description: true,
			version: true,
			visible: true,
		},
	});

	return (
		<header className="flex justify-between items-center py-2 top-0 z-10 px-4 sticky backdrop-blur-sm border-b border-border/40">
			<MobileMenu
				organizationId={currentOrganizationId}
				organizations={organizations}
				frameworks={frameworks}
			/>

			<AssistantButton />

			<div className="flex space-x-2 ml-auto">
				<div className="hidden md:flex gap-2">
					<Link
						className={buttonVariants({
							variant: "ghost",
							size: "sm",
						})}
						href="https://roadmap.trycomp.ai"
						target="_blank"
					>
						<Inbox className="h-4 w-4" />
						Feedback
					</Link>
					<Link
						className={buttonVariants({
							variant: "ghost",
							size: "sm",
						})}
						href="https://discord.gg/compai"
						target="_blank"
					>
						<Icons.Discord className="h-4 w-4" />
						{"Ask in our Discord"}
					</Link>
				</div>

				<Suspense
					fallback={<Skeleton className="h-8 w-8 rounded-full" />}
				>
					<UserMenu />
				</Suspense>
			</div>
		</header>
	);
}
