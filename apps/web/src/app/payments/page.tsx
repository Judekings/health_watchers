import { useTranslations } from "next-intl";
import PaymentsClient from "./PaymentsClient";

export default function PaymentsPage() {
  const t = useTranslations("payments");
  return (
    <PaymentsClient
      labels={{
        title: t("title"),
        loading: t("loading"),
        empty: t("empty"),
        id: t("id"),
        patient: t("patient"),
        amount: t("amount"),
        status: t("status"),
        view: t("view"),
      }}
    />
  );
}
