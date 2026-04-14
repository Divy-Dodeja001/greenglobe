"use client";

import { useSearchParams } from "next/navigation";
import ServicesShowcase from "./ServicesShowcase";

export default function ServicesWrapper({ services }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return <ServicesShowcase services={services} active={name} />;
}