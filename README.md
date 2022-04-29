## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**

-I will need a <div class=" "> element
-I will need a <div id= " "> element
-I will need a <p id= " "> element
-I will need a <label></label> element
I will need a <select id= " "></select> element

1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
-Dropdowns that when changed will update an image.
-Add button: the user can add slogans and see all previous slogans.
-Textbox: for the user to input the slogans.
-City images: to show the city the user has clicked.
-Text content: to display the grabbed DOM elements and shows how many times the user has changed that feature.

1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
I need the <div class=" "> element to group the related elements of my page.
I need the <div id= " "> element to identify each HTML element uniquely. Eg., the dropdowns.
I need the <p id= " "> element  to get the value of a 'grabbed' HTML form input tag
I need the <label></label> element to represent information of the associated control. 
I need the <select id= " "></select> element to create a drop-down lists.
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**

#HTML Elements
*City images
*Dropdown for each category of cities.
*Display Stats
*Display slogans
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**

#Events
-onClick of button
*allows the user to pick a slogan and displays to user

-onChange of dropdown List
*assigns sources to the controls parent.
*The number of times each dropdown has changed is displayed to the user

 

1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
