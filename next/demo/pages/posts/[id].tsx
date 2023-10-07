export default function Page({ name }: { name: string }) {
    return <div>这是一篇有关{name}的文章</div>
}

export async function getStaticPaths() {
    const posts = ['html', 'css', 'js']
    const paths = posts.map((post) => ({
        params: { id: post },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
    return { props: { name: params.id } }
}