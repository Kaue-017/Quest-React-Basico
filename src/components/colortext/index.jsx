const text = "Texto colorido".toUpperCase()

const ColoredText = ({color="red"}) => {return <p style={{color: color}} >{text}</p>}


export default ColoredText
