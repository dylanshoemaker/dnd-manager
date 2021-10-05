async function partySelectHandler(event) {
    event.preventDefault();

    const partyName = document.getElementById('party-select').innerHTML.trim();
    
    const response = await fetch('/api/' + partyName);

    if (response.ok) {
        document.location.replace('/party/' + partyName);
      } else {
        alert(response.statusText);
      }

}

document.querySelector('#party-select').addEventListener('click', partySelectHandler);