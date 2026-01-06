import { Metadata } from "next";
import { CardDeckContent } from "./CardDeckContent";

export const metadata: Metadata = {
  title: "Reframing Relationships Card Deck | Design Therapy",
  description: "A two-player card game for couples and families to explore potential conflicts safely through counterfactual scenarios. Based on evidence-based marriage and family therapy approaches.",
};

export default function CardDeckPage() {
  return <CardDeckContent />;
}
