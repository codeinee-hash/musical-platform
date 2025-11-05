"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { User } from "lucide-react";
import { Card } from "@heroui/card";
import { addCommentAction } from "@/features/musics";
import { toast } from "sonner";
import Form from "next/form";

export function AddCommentForm({ trackId }: { trackId: string }) {
  async function handleSubmit(formData: FormData) {
    const result = await addCommentAction(formData);

    if (result.error) toast.error(result.error);
    else toast.success("Comment added successfully");
  }

  return (
    <Card className="rounded-2xl p-8">
      <Form
        action={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <Input
          name="username"
          placeholder="Your name"
          className="lg:col-span-1"
          startContent={<User size={18} />}
        />
        <Textarea
          name={"text"}
          placeholder="Share your thoughts about this track..."
          className="lg:col-span-2 resize-none"
          rows={4}
        />
        <input type="hidden" name="trackId" value={trackId} />
        <Button
          type="submit"
          size="lg"
          className="lg:col-span-3 lg:justify-self-end"
          color="primary"
          variant="flat"
        >
          Post Comment
        </Button>
      </Form>
    </Card>
  );
}
