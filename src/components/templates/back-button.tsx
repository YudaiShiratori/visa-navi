"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

type BackButtonProps = {
  onClick?: () => void;
  className?: string;
};

export function BackButton({ onClick, className }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <Button className={className} onClick={handleClick} variant="ghost">
      <ArrowLeft className="size-4" />
      <span className="sr-only">戻る</span>
    </Button>
  );
}
