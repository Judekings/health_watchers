import { useTranslations } from "next-intl";
import EncountersClient from "./EncountersClient";

export default function EncountersPage() {
  const t = useTranslations("encounters");
  return (
    <EncountersClient
      labels={{
        title: t("title"),
        loading: t("loading"),
        empty: t("empty"),
        id: t("id"),
        patient: t("patient"),
        date: t("date"),
        notes: t("notes"),
      }}
    />
  );
}
