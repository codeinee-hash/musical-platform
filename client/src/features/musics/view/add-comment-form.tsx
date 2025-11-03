"use client";

import {Button, Input, Textarea} from "@heroui/react";
import {User} from "lucide-react";
import {Card} from "@heroui/card";
import {useInput} from "@/shared/hooks/use-input";
import {trackService, useTracks} from "@/features/musics";

export function AddCommentForm({ trackId }: { trackId: string }) {
    const username = useInput('');
    const text = useInput('');

    const { setComment } = useTracks();

    const handleAddComment = async () => {
        const newComment = await trackService.addComment({
            username: username.value,
            text: text.value,
            trackId,
        });

        setComment(newComment);

        username.setValue('');
        text.setValue('');
    }

    return (
        <Card className="rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Input
                    {...username}
                    placeholder="Your name"
                    className="lg:col-span-1"
                    startContent={<User size={18} />}
                />
                <Textarea
                    {...text}
                    placeholder="Share your thoughts about this track..."
                    className="lg:col-span-2 resize-none"
                    rows={4}
                />
                <Button
                    size="lg"
                    className="lg:col-span-3 lg:justify-self-end"
                    color="primary"
                    variant="flat"
                    onPress={handleAddComment}
                >
                    Post Comment
                </Button>
            </div>
        </Card>
    );
}
