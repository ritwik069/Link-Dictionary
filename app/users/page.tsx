import prisma from "@/lib/prisma"

const ViewUser = async () => {
    const users = await prisma.user.findMany()
    debugger
    return <div>
        <h1>View User</h1>
        {users.map((i, inx) => {
            return <div key={inx}>
                <h1>{i.name}</h1>
                <h1>{i.email}</h1>
            </div>

        })}
    </div>
}

export default ViewUser;