import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

export async function GET(request: NextRequest) {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_PUBLIC_CAP_KEY}`,
        {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Accept": "*/*"
            },
            next:{revalidate:3600*5}
        },
    )
    const data = await response.json()
    return NextResponse.json({ data })

}