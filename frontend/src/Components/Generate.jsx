import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Generate = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setshortenUrl] = useState("");
  const handleBtnClick = (e) =>{
    e.preventDefault();
    const hostname = "http://bliink.vercel.app";
    // const hostname = "http://localhost:5173";
    if (url == "" || undefined) {
      toast.error('Please Enter a valid URL');
      setshortenUrl('')
      return;
    }
   console.log(url)
    const postData = async () => {
      try {
        // const api = "http://localhost:5050/v1/generate";
         const api = "https://url-shortener-z695.onrender.com/v1/generate";
        const body = {
          url,
          hostname,
        };
        const response = await axios.post(api, body);
        if (response.data.status == "OK") {
          const link = response.data.messsage;
          setshortenUrl(link);
          toast.success("URL generated succesfully")
        } else {
          toast.error('Url Shortening failed')
          setshortenUrl('')
        }
      } catch (err) {
        toast.error("Error occured while generating URL");
        setshortenUrl('')
        console.error(err);
      }
    };
    postData();
    
  }
  return (
    <div className="generator">
        <h3 className="heading">Generate Your Short URL</h3>
        <form onSubmit={handleBtnClick} className="generator-wrapper">
            <input onChange={(e)=>setUrl(e.target.value)} type="text" name="" placeholder="Enter URL here..." id="input" />
            <button onClick={handleBtnClick} type="button" id="btn-generate">Shorten</button>
        </form>
            <Link id="generated-link" to={shortenUrl}>{shortenUrl}</Link>
    </div>
  )
}

export default Generate