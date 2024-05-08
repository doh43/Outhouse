"use client";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { signOut, useSession } from "next-auth/react";
import Map from "@/components/Map";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Map />

      <Gallery />
    </main>
  );
}
