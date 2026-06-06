
export function ReusableComponent({key,name,email}){
    return(
        <div className="app-container">
            <h1 key={key}>{name}</h1>
            <p>{`Email : ${email}`}</p>
        </div>
    )
}