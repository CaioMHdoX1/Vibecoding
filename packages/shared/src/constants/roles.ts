export const ROLES = {
	CUSTOMER: "CUSTOMER",
	MANAGER: "MANAGER",
	ADMIN: "ADMIN",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ORDER_STATUS = {
	PENDING: "PENDING",
	PAID: "PAID",
	PREPARING: "PREPARING",
	SHIPPED: "SHIPPED",
	DELIVERED: "DELIVERED",
	CANCELED: "CANCELED",
} as const;

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export const PAYMENT_METHOD = {
	PIX: "PIX",
	CARD: "CARD",
	BOLETO: "BOLETO",
} as const;

export type PaymentMethod =
	(typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

export const PAYMENT_STATUS = {
	PENDING: "PENDING",
	APPROVED: "APPROVED",
	DECLINED: "DECLINED",
} as const;

export type PaymentStatus =
	(typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS];
