const input = document.getElementById("input");
const button = document.getElementById("btn-generate");
const generated_link = document.getElementById("generated-link");
const success = document.getElementById("success");
const error = document.getElementById("error");
// const error = document.getElementsByClassName("error");
const return_url = document.getElementsByClassName("success");
const generate = document.getElementsByClassName("generator-wrapper");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const url = input.value;
  const hostname = "http://bliink.vercel.app";

  if (url == "" || undefined) {
    generated_link.innerHTML = "";
    generated_link.href = "";
    success.innerHTML = "";
    return (error.innerHTML = "Please provide a valid URL");
  }
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
        error.innerHTML = "";
        generated_link.innerHTML = link;
        generated_link.href = link;
        success.innerHTML = "URL generated succesfully";
      } else {
        error.innerHTML = "Url shortening failed";
        generated_link.innerHTML = "";
        generated_link.href = "";
        success.innerHTML = "";
        //Set the innerText for erroe
      }
      // const result = await response.status
    } catch (err) {
      error.innerHTML = "Error occured while generating URL";
      generated_link.innerHTML = "";
      generated_link.href = "";
      success.innerHTML = "";
      console.error(err);
    }
  };
  postData();
});
