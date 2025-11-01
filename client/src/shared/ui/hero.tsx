"use client";

export function HeroBlock({ title, subtitle, actions }: { title?: string; subtitle?: string; actions?: React.ReactNode }) {
    return (
        <div className='border border-slate-100 bg-white rounded-2xl shadow-xl p-7 flex gap-4 justify-between'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                {subtitle && <h3 className='font-medium text-gray-400'>{subtitle}</h3>}
            </div>
            <div className='flex-shrink-0'>
                {actions && actions}
            </div>
        </div>
    );
}
