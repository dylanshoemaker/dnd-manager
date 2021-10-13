async function addPartyFormHandler(event) {
    event.preventDefault();
  
    const party_name = document.querySelector('input[name="party-name"]').value;
    console.log(party_name);
    if (party_name) {
      const response = await fetch("/api/party", {
        method: "POST",
        body: JSON.stringify({
          party_name
        }),
        headers: { "Content-Type": "application/json" },
        
      });
      console.log(response);
      if (response.ok) {
        document.location.replace("/");
      } else {
        console.log('you done goofed');
      }
    }
  }
  
  document.querySelector("#add-party").addEventListener("submit", addPartyFormHandler);