import {ReactNode} from "react";
import {Stepper, Step, StepLabel} from "@/shared/ui/stepper";

export function CreateTrackStepWrapper({ activeStep, children }: { activeStep: number; children: ReactNode }) {
    const steps = ["Track info", "Upload image", "Upload track"];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Stepper activeStep={activeStep}>
                {steps.map((step, i) => (
                    <Step key={i} completed={activeStep > i}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="bg-card rounded-2xl p-6 shadow-lg border">{children}</div>
        </div>
    );
}