"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { title } from "process";

interface CardComponentProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function EventCard({ imageUrl, title, description }: CardComponentProps) {
  return (
    <div className="">
      <div className="w-64 rounded-md bg-slate-900">
      <div className="w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={256}
          height={12}
          className="rounded"
        />
      </div>
      </div>
    </div>
  )
}
