import Image from 'next/image'
import logo from '../assets/images/logo.JPG'


export default function NotFount({ value }: { value: string }) {
    return (
        <>
            <Image
                src={logo}
                alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
            <div>{value}</div>
        </>
    )
}

export async function getStaticProps(context: any) {
    return {
        props: {
            value: '404 NOT FOUND'
        }
    }
}