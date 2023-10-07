import Link from 'next/link'
import { requestRandomData } from '../utils/apis'

export default function Home({ data }: { data: string }) {
    return (
        <>
            <div>SSR页面</div>
            <div>随机数据{data}</div>
            <Link href='/'>go back</Link>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const data = await requestRandomData(5000)
        return {
            props: {
                data
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }


}

