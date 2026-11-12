import { z } from "zod";

export const bonsaiCareLevelSchema = z.enum([
	"INICIANTE",
	"INTERMEDIARIO",
	"AVANCADO",
]);
export type BonsaiCareLevel = z.infer<typeof bonsaiCareLevelSchema>;

export const bonsaiSunExposureSchema = z.enum([
	"SOL_PLENO",
	"MEIA_SOMBRA",
	"SOMBRA",
]);
export type BonsaiSunExposure = z.infer<typeof bonsaiSunExposureSchema>;

export const bonsaiStyleSchema = z.enum([
	"CHOKKAN", // Formal vertical
	"MOYOGI", // Informal vertical
	"SHAKAN", // Inclinado
	"KENGAI", // Cascata
	"HAN_KENGAI", // Semi-cascata
	"FUKINAGASHI", // Varrido pelo vento
	"BUNJIN", // Literati
]);
export type BonsaiStyle = z.infer<typeof bonsaiStyleSchema>;

export const productVariantSchema = z.object({
	id: z.string().optional(),
	size: z.string().min(1, "Porte é obrigatório (ex: Mini, Pequeno, Médio)"),
	pot: z
		.string()
		.min(1, "Tipo de vaso é obrigatório (ex: Cerâmica Esmaltada, Grés)"),
	price: z.number().positive("O preço deve ser maior que zero"),
	stockQuantity: z.number().int().nonnegative("Estoque não pode ser negativo"),
	sku: z.string().min(3, "SKU obrigatório"),
});
export type ProductVariant = z.infer<typeof productVariantSchema>;

export const productSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(2, "Nome do produto é obrigatório"),
	slug: z.string().min(2, "Slug é obrigatório"),
	description: z.string().min(10, "Descrição detalhada é obrigatória"),
	species: z
		.string()
		.min(2, "Espécie botânica é obrigatória (ex: Juniperus procumbens)"),
	estimatedAge: z.number().int().positive("Idade estimada em anos"),
	style: bonsaiStyleSchema,
	careLevel: bonsaiCareLevelSchema,
	sunExposure: bonsaiSunExposureSchema,
	active: z.boolean().default(true),
	variants: z.array(productVariantSchema).default([]),
});
export type Product = z.infer<typeof productSchema>;
