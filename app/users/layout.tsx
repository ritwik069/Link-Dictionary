import Link from 'next/Link'
export default function SignoutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-screen justify-between relative">

            <div className="flex-1">{children}</div>
            <div className="absolute right-0 top-0">
                <Link href={'/api/auth/signout'}>
                    SIGN OUT
                </Link>
                </div>
        </div>


    )
}
