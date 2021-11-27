export default function Fetch(url, opts) {
    return (Component, anchor) => {
        if (typeof url === 'function') {
            url = url(anchor)
        }

        return () => {
            return (
                <Component url={url} opts={opts} />
            )
        }
    }
}