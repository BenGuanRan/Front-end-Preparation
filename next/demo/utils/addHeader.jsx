export default function addHeader(Component) {
    return () => (
        <div>
            <h1>Header</h1>
            <Component />
        </div>
    )
}