import React from 'react'

const Service = () => {


  const [title, setTitle] = React.useState("")
  const testRef = React.useRef();


   const add = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify({
                title: title,
            })
        })

        // .then( res => res.json)
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
    }



    React.useEffect(() => {
      testRef.current.focus()
    }, [])
   


  return (
    <div>

      <div className='form-group w-25'>
          <label>Title</label>
          <input 
            ref={testRef}
            onChange={(e) => setTitle(e.target.value)} 
            className='form-control jbjhb'/>
          <button className='btn btn-primary w-100 mt-2' onClick={add}>Add</button>
      </div>

    </div>
  )
}

export default Service