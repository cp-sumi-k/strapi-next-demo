"use server";

import STRAPI_URL from "../const";

export async function getServices() {
    try {
        const res = await fetch(STRAPI_URL + "/api/services?populate=*");
        const data = await res.json();
        return data;
    } catch (error: any) {
        return { error: error.message };
    }
}