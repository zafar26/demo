export default function Succes(props) {

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>{props.query.message}</p>
        </div>
    )
}


Succes.getInitialProps = async (props) => {
    return props
}