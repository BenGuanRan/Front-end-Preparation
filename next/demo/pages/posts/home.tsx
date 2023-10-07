import Link from 'next/link'
import { requestRandomData } from '../../utils/apis'

export default function Home({ data }: { data: string }) {
    return (
        <>
            <div>Home</div>
            <div>{data}</div>
            <Link href='/'>xxx</Link>
        </>
    )
}

export async function getStaticProps() {
    try {
        const data = await requestRandomData(500)
        return {
            props: {
                data
            },
            revalidate: 10,
        }
    } catch (error) {
        return { notFound: true }
    }


}

