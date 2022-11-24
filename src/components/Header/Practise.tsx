import React from 'react'



interface Props {
    name: string;
    setName:React.Dispatch<React.SetStateAction<string>>
}


const Practise: React.FC<Props> = ({name,setName})=>{
    

    return (
        <div>
            This is the Header and my name is {name}<br/>
            <button onClick={()=>{setName("Mn ne Khud ko badla")}}>Change Name</button>
        </div>
    )
}

export default Practise

