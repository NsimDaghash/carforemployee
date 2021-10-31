import {useState,useEffect} from "react";
import axios from "axios";
const Cars = ({id}) => {
   /*
        "name": "Mae Tremblay PhD",
        "avatar": "http://placeimg.com/640/480/transport",
        "isGold": true,
        "isAvailble": false,
        "isSenior": false,
        "rentDetails": {},
        "id": "9"
   */
    const [carImage, setCarImage] =  useState([]);
    const [carIsGold, setCarIsGold] =  useState();
    const [carIsAvilble,setCarIsAvilble] = useState();
    const [carIsSenior, setCarIsSenior] = useState();


    useEffect( ()=>{
    const resCar = axios.get(`https://6177fd1a9c328300175f5cde.mockapi.io/cars/`+id)
            .then((resCar) => {
                console.log("cars: ",resCar.data)
                setCarImage(resCar.data)
            })
    },[])
    //console.log({carImage});

    return <div className="contant">
        {carImage ? <div className="showCarImage"><img className="" src={carImage.avatar} width="120vw" /></div>
            : <div className="loading">loading....</div>}
         </div>
    {/*
            {carImage?carImage.map((car) => {
                if (carIsAvilble) {
                    <div className="showCarImage">
                        <img className="" src={carImage.avatar} width="120vw" />
                    </div>
                }
            }):"loadingg . . . "
        }*/

    }
}

export default Cars;