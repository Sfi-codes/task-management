const FormButton = (props) => {
    const style = {
        height: '40px',
        flexGrow: '1',
        fontSize: '15px',
        backgroundColor: 'white',
        borderRadius: '15px',
        border: '0.1px solid lightgrey'

    }
    const highlight = (event) => {
        event.preventDefault()
        event.target.style.backgroundColor === 'white' ? event.target.style.backgroundColor = 'lightgreen' : event.target.style.backgroundColor = 'white'
    }

    return <button style={style} onClick={highlight}>{props.text}</button>

}

export default FormButton