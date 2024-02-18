const url = document.getElementById("input");
const button = document.getElementById("submit");
const error = document.getElementsByClassName("error");
const return_url = document.getElementsByClassName("return_url");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const postData = async () => {
    try {
      const api = "http://localhost:8080/generate";
      const headers = {
        "Content-Type": "application/json",
      };
      const body = {
        url,
      };
      const response = await axios.post(api, headers, body);
      const result = await response.status
      console.log(result)
    } catch (error) {
      console.error(error);
    }
  };
  console.log(url.value);
});
