"use client";

import { ReactNode, useEffect, useState, Children } from "react";
import { Card, CardBody } from "@heroui/card";
import { CheckCircle } from "lucide-react";

export function Step({ completed = false, children }: { completed?: boolean; children: ReactNode }) {
    return <div className="flex items-center">{children}</div>;
}

export function StepLabel({ children }: { children: ReactNode }) {
    return <span className="ml-2 text-sm font-medium">{children}</span>;
}

export function Stepper({ activeStep, children }: { activeStep: number; children: ReactNode }) {
    const [stepsCount, setStepsCount] = useState(0);

    useEffect(() => {
        const count = Children.count(children);
        setStepsCount(count);
    }, [children]);

    return (
        <Card className="w-full mb-6">
            <CardBody className="p-6">
                <div className="flex items-center justify-between gap-4">
                    {Children.map(children, (child, index) => {
                        const isActive = index === activeStep;
                        const isCompleted = index < activeStep;
                        const isLast = index === stepsCount - 1;

                        return (
                            <div key={index} className={`${!isLast ? 'flex-1' : ''} flex items-center`}>
                                <div
                                    className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                                        isCompleted
                                            ? "bg-green-500 text-white"
                                            : isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-gray-100 text-muted-foreground"
                                    }`}
                                >
                                    {isCompleted ? <CheckCircle size={16} /> : index + 1}
                                </div>

                                <span className='whitespace-nowrap'>{child}</span>

                                {!isLast && (
                                    <div className={
                                        `top-5 left-full w-full h-1 transition-all duration-300 ml-4 rounded 
                                            ${isCompleted 
                                                ? "bg-green-500" 
                                                : isActive 
                                                    ? "bg-primary" 
                                                    : "bg-gray-100"
                                            }`
                                        }
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
}
