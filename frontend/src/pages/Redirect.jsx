import axios from "axios";
import { useEffect } from "react";
import { useParams,  useNavigate } from "react-router-dom";
const Redirect = () => {
  const { id } = useParams();
  console.log(id)
   
  const navigate = useNavigate();
  const RedirectPage = async () => {
   
      try {
        // const api = `http://localhost:5050/v1/${id}`;
        const api = `https://url-shortener-z695.onrender.com/v1/${id}`;

        const response = await axios.get(api);
        if (response.data.status == "OK") {
          const link = response.data.site;
          console.log(link)
          // navigate(`link`)
          if(link.startsWith('https://' || 'http://')){

            return window.location.replace(link) 
          } else{
            window.location.replace(`https://${link}`)
          }
        } 
        else{
          navigate('/')
        }
      } catch (err) {
        console.error(err);
      }
   
  };
 useEffect(() => { 
   RedirectPage();
  }, [])
 

  return (<div>Redirecting...</div>);
};

export default Redirect;
