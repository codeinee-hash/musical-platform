"use client";

import {Button} from "@heroui/react";
import {MessageCircle} from "lucide-react";
import {IComment} from "@/shared/lib/types";

export function CommentList({ comments }: { comments: IComment[] }) {
    return (
        <div className="space-y-6">
            {comments.map((comment) => (
                <div key={comment._id} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
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
                    <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                        <Button variant="light" size="sm" isIconOnly>
                            <MessageCircle size={16} />
                        </Button>
                        <Button variant="light" size="sm" isIconOnly>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
