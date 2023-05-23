

function IdCard(props) {
    const birthDate = props.birth.toDateString()

  return (
    <div>IdCard
    <li>First Name: {props.name}</li>
    <li>Last Name: {props.lastName}</li>
    <li>Gender: {props.gender}</li>
    <li>Height: {props.height}</li>
    <li>Birth: {birthDate}</li>
    <div>
    Picture: <br />
    <img src={props.picture} width={200} height={200} alt=""/>
    </div>
    
    
    </div>
  )
}

export default IdCard