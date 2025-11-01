"use client";

import {IComment} from "@/shared/lib/types";
import {Card} from "@heroui/card";

export function CommentList({ comments }: { comments: IComment[] }) {
    return (
        <div className="space-y-6">
            {comments.map((comment) => (
                <Card key={comment._id} className="rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm text-primary-foreground">
                      {comment.username.slice(0, 1).toUpperCase()}
                    </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-lg truncate">{comment.username}</h4>
                                <span className="text-xs text-muted-foreground">2 hours ago</span>
                            </div>
                            <p className="text-foreground leading-relaxed">{comment.text}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
