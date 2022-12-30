function AuthPagesSSR(props) {
    return (
        <div>
            <h1>
                Auth Page Static server side render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
}

export default AuthPagesSSR;