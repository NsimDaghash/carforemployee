import React from 'react';
import {useEffect , useState} from 'react';
import "./style.css"

const URL="https://6177fd1a9c328300175f5cde.mockapi.io/clients";

const SearchBar =() =>{

    const [name,setName] = useState([]);
    const [filtered,setFiltered] = useState([]);
    
    useEffect(() => {
        const myData = async () => {
            const result = await ((await fetch(URL)).json());
            console.log('on mount we get=',result)
            setName(result)
        }
        myData()
    },[]) //ComponentDidMount

    useEffect(() => {
      console.log('because name updated, filtered is now=',name);
      setFiltered(name)
    },[name]) //if state of name changed

  const handleChange = (e) => {
    console.log(e.target.value)
    if(e.target.value !== ""){
      let searchBar = [...name].filter((nm) => {
        console.log(nm)
        return nm.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      console.log(searchBar);
      setFiltered([...searchBar])
    }
    else{
      setFiltered(name)
    }
  }

    return (
      <div className="searchName" key="searchName">
            <div className="allWorkera"  key="searchName1"> All the workers </div>
            <div className="findByName" key="searchName2">find by name: </div>
            <input key="searchName3" className="searchBar" type='text' name="searchbar" onChange={(e) => handleChange(e)} />
            <ul className="listItem" key="searchName4">
                {filtered.map((nm) => (
                    <li className="listItemSun" >
                        <a className="listedIten" key="listedIten" name="mhmod" href="#" >{nm.name}</a>
                    </li>
                ))}
            </ul>
      </div>
    )
}


export default  SearchBar