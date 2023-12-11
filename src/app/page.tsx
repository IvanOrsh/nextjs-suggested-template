import CatCard from "@/components/cards/cat/CatCard";
import { mockCatCardProps } from "@/components/cards/cat/CatCard.mocks";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-64px)] bg-white">
      <section className="p-[2rem]">
        <CatCard {...mockCatCardProps.base} />
      </section>
    </main>
  );
}
