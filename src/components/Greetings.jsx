

function Greetings(props) {
   let greeting = ""

     if (props.lang === "de"){
        greeting = "Hallo"
     }
     else if (props.lang === "fr")
     {
        greeting = "Bonjour"
     }
     else if (props.lang === "es"){
        greeting = "Hola"
     }
     else 
     {
        greeting = "Hello"
     }

    return (
        <div>
      
<p>{greeting}</p>

        </div>
    )
}

export default Greetings