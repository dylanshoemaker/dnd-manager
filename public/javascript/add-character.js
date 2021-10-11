async function submitFormHandler(event) {
    event.preventDefault();

    const character_name = document.getElementById('character_name').value;
    const player_race = document.getElementById('player_race').value;
    const player_class = document.getElementById('player_class').value;
    const level = document.getElementById('level').value;
    const armor_class = document.getElementById('armor_class').value;
    const health = document.getElementById('health').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const constitution = document.getElementById('constitution').value;
    const wisdom = document.getElementById('wisdom').value;
    const intelligence = document.getElementById('intelligence').value;
    const charisma = document.getElementById('charisma').value;
    const pp = document.getElementById('pp').value;
    const party_name = document.getElementById('party_name').value;

    if (character_name && player_race) {
        const response = await fetch('/api/player', {
            method: 'post',
            body: JSON.stringify({
                character_name,
                player_race,
                player_class,
                level,
                armor_class,
                health,
                strength,
                dexterity,
                constitution,
                wisdom,
                intelligence,
                charisma,
                pp,
                party_name
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/party/' + party_name)
        } else {
            console.log('you done goofed');
        }
    }
}

document.querySelector('#add-character').addEventListener('submit', submitFormHandler)