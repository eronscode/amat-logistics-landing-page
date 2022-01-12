export const API_URL = "https://api.manuelsnr.design/api/v1/";

export const origin = process.env.NEXT_PUBLIC_BASE_URL;
export const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
export const host = `${origin}` as const;
