
export async function GET(request, { params }) {
    try {
      const { id } = params;
      console.log(id, "==> ini ID yang di API");


      const dataUser = [
        {
          "id": 1,
          "title": "Tech Conference 2024",
          "description": "An insightful conference discussing the latest trends in technology.",
          "category": "Technology",
          "date": "2024-12-01",
          "location": "Jakarta",
          "image": "/images/tech-conference.jpg"
        },
        {
          "id": 2,
          "title": "Music Festival 2024",
          "description": "A grand festival featuring live performances from top artists.",
          "category": "Music",
          "date": "2024-11-20",
          "location": "Bandung",
          "image": "/images/music-festival.jpg"
        }
      ]

    //   const user = dataUser.find((user) => user.id === parseInt(id));

    //   if (user) {
    //     return new Response(
    //       JSON.stringify({ user }),
    //       { status: 200, headers: { "Content-Type": "application/json" } }
    //     );
    //   } else {
    //     return new Response(
    //       JSON.stringify({ error: "User not found" }),
    //       { status: 404, headers: { "Content-Type": "application/json" } }
    //     );
    //   }
      
    } catch (error) {
      return new Response(
        JSON.stringify({ status: "error", message: "Failed to fetch users" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
}