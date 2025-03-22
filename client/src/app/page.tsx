
import Image from "next/image";
import Landing from "./(dashboard)/landing/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  );
}
