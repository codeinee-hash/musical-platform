"use client";

import {Button, Input, Textarea} from "@heroui/react";
import {User} from "lucide-react";

export function AddCommentForm() {
    return (
        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Input
                    placeholder="Your name"
                    className="lg:col-span-1"
                    startContent={<User size={18} />}
                />
                <Textarea
                    placeholder="Share your thoughts about this track..."
                    className="lg:col-span-2 resize-none"
                    rows={4}
                />
                <Button
                    size="lg"
                    className="lg:col-span-3 lg:justify-self-end"
                    color="primary"
                >
                    Post Comment
                </Button>
            </div>
        </div>
    );
}
