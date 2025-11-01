"use client";

export function TrackProgress({ left, right, onChange }: {
    left: number; right: number; onChange: (e: any) => void;
}) {
    return (
        <div className='w-full flex items-center gap-4'>
            <input type="range" min={left} max={right} onChange={onChange} value={left} className='flex-1' />
            <span className='font-semibold'>{left} / {right}</span>
        </div>
    );
}
