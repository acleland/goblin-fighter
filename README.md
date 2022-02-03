## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Requirements: 

- On load, see the HP and names of at least two default goblins
- On submitting the 'challenge goblin' form, add a new goblin object (with 3 HP and a name) to state and display it to the DOM
  - get goblinsDiv element from the Dom
  - define a new goblin object
  - append the new gobling to the goblins array
  - append
  - dynamically add even listener to the goblin's button;
  - run displayGoblins()
- On clicking a goblin, it should tell the user whether they hit the goblin or not, then update state and DOM appropriately with new HP
- On clicking a goblin, it should tell the user whether the goblin hit the player or not, then update state and DOM appropriately with new HP
- The number of vanquished goblins should be visible when state changes.
- Render dead goblins differently, and disable clicking on them
- When the user's HP is 0, launch a game over message

## Making a plan

- HTML Elements needed:
  - challenge goblin form
  - "you have defeated x goblins" div
  - Your HP Div
  - Divs or buttons for each goblin. Initially 2 goblins
  - Player image div

- State info to keep track of
  - HP for each goblin
  - Player HP

- Events
  - Challenge Goblin event
    - create a new goblin object
    - Give it an ID
    - initialize its HP to 3
    - Set its name to player's input
    - Create a new display div
    - Add an event listener to the div
    - Run displayGoblins()
        - for each goblin, create new div
        - add new event listener? 
    
  - Attack goblin event
    - attackGoblin(goblin )
    - Generate a random number, if the number > threshold, attacker scores a hit. Do this for both player and goblin
    - if a hit occurs, deduct 1 HP
    - notify player with an alert of outcome of each attack
    - if HP goes to zero, trigger death event

  - Goblin defeated event
    - Show that it is dead in some way (example used emojis)
    - remove the event listener for the dead goblin so that it is no longer clickable

  - Player defeated event
    - Alert the player that the game is over
    - Turn player div to side (activate dead class or something)

- Goblin = {
  - name
  - HP
  - Div object
    - Displays, name emoji, and HP
  - eventListener for Div object unless player is dead
}

- Player = {
  - HP
  - Div showing the adventurer 
  - Maybe add name and other stuff later
}
  
