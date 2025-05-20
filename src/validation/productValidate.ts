import { z } from "zod";

export const productValidate = z.object({
    product_name: z.string().min(2, "Name to short"),
    product_desctiption: z.string().min(5, "Description to short"),
    price: z.coerce.number().min(1, "Price to low"),
    product_image: z.string().min(2, "Need adres to img").optional(),
    quatity: z.coerce.number().min(0, "Need a number"),
    category: z.string().min(1, "Need the category")
})

export type PrdocutFormData = z.infer<typeof productValidate>