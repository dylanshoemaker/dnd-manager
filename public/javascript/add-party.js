async function signupFormHandler(event) {
    event.preventDefault();
  
    const party_name = document.getElementById("party_name").value;
  
    if (party_name) {
      const response = await fetch("/api/party", {
        method: "post",
        body: JSON.stringify({
          party_name
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        console.log('you done goofed');
      }
    }
  }
  
  document.querySelector("#add-party").addEventListener("submit", signupFormHandler);