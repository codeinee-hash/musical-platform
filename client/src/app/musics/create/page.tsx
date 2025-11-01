"use client";

import {useState} from "react";
import {Button, Input, Textarea} from "@heroui/react";
import {Music, UploadIcon, User} from "lucide-react";
import {CreateTrackStepWrapper} from "@/features/musics";
import {FileUpload} from "@/shared/ui/file-upload";

export default function UploadTrackPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    return (
        <div className="pb-10">
            <CreateTrackStepWrapper activeStep={activeStep}>
                <div className="min-h-[284px] p-6">
                    {activeStep === 0 && (
                        <div className="max-w-4xl mx-auto flex flex-col gap-4">
                            <Input
                                placeholder="Track name"
                                className="lg:col-span-1"
                                startContent={<Music size={18} />}
                            />
                            <Input
                                placeholder="Artist name"
                                className="lg:col-span-1"
                                startContent={<User size={18} />}
                            />
                            <Textarea
                                placeholder="Text about this track..."
                                className="lg:col-span-2 resize-none"
                                rows={4}
                            />
                        </div>
                    )}

                    {activeStep === 1 && (
                        <>
                            <FileUpload setFile={setPicture} accept={'image/*'}>
                                <div className="rounded-lg bg-primary-50 flex items-center gap-2 px-4 py-2 cursor-pointer active:bg-primary-100 transition font-semibold">
                                    Upload image
                                    <UploadIcon size={18}/>
                                </div>
                            </FileUpload>
                        </>
                    )}

                    {activeStep === 2 && (
                        <FileUpload setFile={setAudio} accept={'audio/*'}>
                            <div className="rounded-lg bg-primary-50 flex items-center gap-2 px-4 py-2 cursor-pointer active:bg-primary-100 transition font-semibold">
                                Upload track
                                <UploadIcon size={18}/>
                            </div>
                        </FileUpload>
                    )}
                </div>
            </CreateTrackStepWrapper>

            <div className='max-w-4xl mx-auto px-6 flex items-center justify-between'>
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
