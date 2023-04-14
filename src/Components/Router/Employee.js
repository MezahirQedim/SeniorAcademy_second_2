import React from 'react'

const Employee = () => {

    const [employee, setEmployee] = React.useState([])


    // React.useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //          .then(res =>
    //          res.json()    
    //         )
    //         .then(emp => 
    //             setEmployee(emp)
    //             // console.log(employee)

    //         )
    //         .catch(err => console.log(err))
    // }, [])


    const requestEmpolyee = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(res)
        if (res.ok && res.status === 200){
            const data = await res.json()
            setEmployee(data)

        }else{
            alert("asas")
        }
    }


    React.useEffect(() => {
        requestEmpolyee()
    }, [])


  return (
    <div>
        {employee?.map((item, key) => (
            <div key={key}>{item.address.street}</div>
        ))}
    </div>
  )
}

export default Employee;