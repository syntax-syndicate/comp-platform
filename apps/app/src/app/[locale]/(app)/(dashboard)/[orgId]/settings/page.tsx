import { DeleteOrganization } from "@/components/forms/organization/delete-organization";
import { UpdateOrganizationName } from "@/components/forms/organization/update-organization-name";
import { UpdateOrganizationWebsite } from "@/components/forms/organization/update-organization-website";
import { getI18n } from "@/locales/server";
import { auth } from "@/utils/auth";
import { db } from "@comp/db";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { headers } from "next/headers";
import { cache } from "react";

export default async function OrganizationSettings({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setStaticParamsLocale(locale);

	const organization = await organizationDetails();

	return (
		<div className="space-y-4">
			<UpdateOrganizationName
				organizationName={organization?.name ?? ""}
			/>
			<UpdateOrganizationWebsite
				organizationWebsite={organization?.website ?? ""}
			/>
			<DeleteOrganization organizationId={organization?.id ?? ""} />
		</div>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	setStaticParamsLocale(locale);
	const t = await getI18n();

	return {
		title: t("sidebar.settings"),
	};
}

const organizationDetails = cache(async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.session.activeOrganizationId) {
		return null;
	}

	const organization = await db.organization.findUnique({
		where: { id: session?.session.activeOrganizationId },
		select: {
			name: true,
			id: true,
			website: true,
		},
	});

	return organization;
});
