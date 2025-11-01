"use client";

import {CreateTrackStepWrapper} from "@/features/musics";
import {Button} from "@heroui/react";
import {useState} from "react";

export default function UploadTrackPage() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div>
            <CreateTrackStepWrapper activeStep={activeStep}>
                <div>
                    {activeStep === 0 && (
                        <h3>Step 1</h3>
                    )}

                    {activeStep === 1 && (
                        <h3>Step 2</h3>
                    )}

                    {activeStep === 2 && (
                        <h3>Step 3</h3>
                    )}
                </div>
            </CreateTrackStepWrapper>
            <div className='w-full flex items-center justify-between'>
                <Button disabled={activeStep === 0} variant={'flat'} color={'primary'} onPress={() => setActiveStep(prev => prev - 1)}>
                    Prev step
                </Button>
                <Button disabled={activeStep > 2} variant={'flat'} color={'primary'} onPress={() => setActiveStep(prev => prev + 1)}>
                    Next step
                </Button>
            </div>
        </div>
    );
}
