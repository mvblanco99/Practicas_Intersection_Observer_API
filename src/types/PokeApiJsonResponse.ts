import * as z from "zod";

export const ResultSchema = z.object({
    "name": z.string(),
    "url": z.string(),
});

export type Result = z.infer<typeof ResultSchema>;

export const WelcomeSchema = z.object({
    "count": z.number(),
    "next": z.string(),
    "previous": z.string(),
    "results": z.array(ResultSchema),
});

export type Welcome = z.infer<typeof WelcomeSchema>;
