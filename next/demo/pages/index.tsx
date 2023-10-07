import Link from 'next/link'
import Button from '../components/Button'
import addHeader from '../utils/addHeader'
import Script from 'next/script'

const Home = addHeader(({ value }: { value: string }) => {
  function handleClick() {
    console.log(process.env.NEXT_PUBLIC_DB_HOST);
  }

  return (
    <>
      <div>index</div>
      <div>{process.env.API_KEY}</div>
      <Link href='/posts/home'>{value}</Link>
      <Link href='/ssr'>进入SSR模式</Link>
      <Script strategy="beforeInteractive" src='./test.js'></Script>
      {/* <Script>
        {`
          // 这是自定义的JavaScript代码
          alert('Hello, world!');
        `}
      </Script> */}
      <Button value={'点击'} onClickFunc={handleClick}></Button>
    </>
  )
})

export default Home

export async function getStaticProps(context: any) {
  return {
    props: {
      value: 'aaa'
    }
  }
}