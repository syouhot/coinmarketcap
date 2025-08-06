import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_PUBLIC_CAP_KET}`,
        {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Accept": "*/*"
            }
        }
    )
    const data = await response.json()
    return NextResponse.json({ data })

}

// export default function getTopTenHandler(res,req){
//     const getData = async ()=>{
//         const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_PUBLIC_CAP_KET}`,
//             {
//                 method:"GET",
//                 headers:{
//                     Accept:"*/*"
//                 }
//             }
//         )
//         const data = await response.json()
//         console.log("data:",data);
        
//         res.status(200).json({data})
//     }
//     getData()
// }