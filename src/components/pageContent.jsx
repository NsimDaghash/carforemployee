import React, {useEffect , useState} from 'react';
import Cars from './car';
import axios from 'axios';
import "./style.css";

/*Main function */
export const Users = () =>{
    /* setting variables and fetching database */
    const [userData,setUserData]= useState([]);
    const [name,setName] = useState(null);
    const [isGold,setIsGold] = useState("");
    // const [isSenior,setIsSenior] = useState("");
    // const [updateId, setUpdateId] = useState(-1);



    useEffect( ()=>{
        const res = axios.get('https://6177fd1a9c328300175f5cde.mockapi.io/clients')
            .then((res) => {
                console.log(" Employees : ",res.data)
                setUserData(res.data)
            })
        // const resCar = axios.get('https://6177fd1a9c328300175f5cde.mockapi.io/cars')
        //     .then((resCar) => {
        //         console.log("cars: ",resCar.data)
        //         setCarData(resCar.data)
        //     })
//            console.log("try : ",carData[0].avatar);
    },[])
    /* handle the input of the user */
    const userHandler = (e) => {
        if (e.target.getAttribute("data-key") === "name")
            setName(e.target.value);
            console.log(e.target.value);
          
      };

        /* add new user to the database */
        const addUserHandler = async () => {
            let request = {
                name: name,
//                age: age,
            }

            const res = await axios.post('https://6177fd1a9c328300175f5cde.mockapi.io/clients', request);
            console.log("post :", res)
            let newData = res.request
            const usersList = [...userData];
            usersList.push(newData)            
            setUserData(usersList)

        }

    /* delet a user from the database */
    const deleteHandler = async (id) => {
        console.log(id);
        const deleteRes = await axios.delete('https://6177fd1a9c328300175f5cde.mockapi.io/clients'+id)
        if (deleteRes.status === 200) {
            const usersList = [...userData];
            let resultOfNonDeleted = usersList.filter((n) => {
                return n.id !== id
            })
            console.log(resultOfNonDeleted);
            setUserData(resultOfNonDeleted)

        }
    }
    
    /* show the information on the browser */
    return <div className="wrapper">   
        <p className="ActiveWorker"> The Active company workers</p> 
        <div className="container">                    
            {
                userData ? userData.map((n,index) => {
                    if (n.isActive){
                    return <div className="identityCard" id={index}>
                        <img className="employeeImg" src={n.avatar} />
                        <div className="showName">name : {n.name}</div>
                        <div className="showName"> isActive : {n.isActive? "true":"false"}</div>
                        <div className="showName"> id: {n.id}</div>
                        <div className="showName"> <Cars className="carsname" id={n.id}></Cars></div>
                        <input className="btn" type={'button'} value={'delete'} onClick={() => {deleteHandler(n.id)}} />
                    </div>}
                    // {n.filter(isActive => n.isActive('true')).map(filteredName => (
                    //     <li>
                    //       {filteredName}
                    //     </li>
                    //   ))}
                }) : "loading . . ."
            }
        </div>
    </div>

}
export default Users

