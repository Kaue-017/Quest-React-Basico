const Button = ({label="Clique Aqui"}) => {

    function messageLabel(label) {
    alert(`O label desse botão é: ${label}`)
    }

    return (
        <button onClick={() => messageLabel(label)}>{label}</button>
    )
}

export default Button;