

export async function GET(request, { params }) {

    try {
        const {id} = params

        const origin = new URL(request.url).origin;
        console.log(origin, "==> INI HTTP NYA YAA");
        
        const allData = await fetch(`${origin}/api/event-data`)
        const result2 = await allData.json()

        const resultData = result2.data.find(el => el.id == id)

        return new Response(
            JSON.stringify({
                data: resultData
            }),
            {status: 200}
        )
        
    } catch (error) {
        console.log(error, "==> INI 1");
        return new Response(
            JSON.stringify({
                message: error
            }),
            {status: 500}
        )
    }
}