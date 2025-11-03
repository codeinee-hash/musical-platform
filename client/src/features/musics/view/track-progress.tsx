"use client";

import { formatTime } from "@/shared/lib/helpers";
import { ChangeEvent } from "react";

export function TrackProgress({
  left,
  right,
  onChange,
  isTime,
}: {
  left: number;
  right: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isTime?: boolean;
}) {
  return (
    <div className="w-full flex items-center gap-4">
      <input
        type="range"
        min={0}
        max={right}
        onChange={onChange}
        value={left}
        className="flex-1"
      />
      <span className="font-semibold">
        {isTime ? formatTime(left) : left} /{" "}
        {isTime ? formatTime(right) : right}
      </span>
    </div>
  );
}
