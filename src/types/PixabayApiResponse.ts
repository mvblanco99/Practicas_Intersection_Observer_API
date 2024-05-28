import * as z from "zod";

export const TypeSchema = z.enum([
    "photo",
]);
export type Type = z.infer<typeof TypeSchema>;

export const HitSchema = z.object({
    "id": z.number(),
    "pageURL": z.string(),
    "type": TypeSchema,
    "tags": z.string(),
    "previewURL": z.string(),
    "previewWidth": z.number(),
    "previewHeight": z.number(),
    "webformatURL": z.string(),
    "webformatWidth": z.number(),
    "webformatHeight": z.number(),
    "largeImageURL": z.string(),
    "imageWidth": z.number(),
    "imageHeight": z.number(),
    "imageSize": z.number(),
    "views": z.number(),
    "downloads": z.number(),
    "collections": z.number(),
    "likes": z.number(),
    "comments": z.number(),
    "user_id": z.number(),
    "user": z.string(),
    "userImageURL": z.string(),
});
export type Hit = z.infer<typeof HitSchema>;

export const PixabayApiResponseSchema = z.object({
    "total": z.number(),
    "totalHits": z.number(),
    "hits": z.array(HitSchema),
});
export type PixabayApiResponse = z.infer<typeof PixabayApiResponseSchema>;
