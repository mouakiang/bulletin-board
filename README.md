## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, To dos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

# HOME PAGE

# HTML

-Login Button
-Sign Up Button
-Empty div to inject bulletin posts to

# DATA MODEL

-Columns on the table and properties on the objects
-Posts need
-topic: string
-message: string
-contact: string

# EVENTS

-Load event listener
-If user is logged in change the login button to a logout button
-User clicks login button -> redirect to the auth/login page
-User clicks sign up button -> redirect to the auth/sign up page
-User clicks logout button -> redirect to the auth/sign in page

# AUTH PAGE

# HTML

-Sign in Form
-Sign up Form

# EVENTS

-On Load, check if the user is logged in, if so redirect them to the home page
-Submit the sign in form
-get the email and password from the form
-call the sign in auth function with the email and password
-redirect the user to the home page
-Submit the sign up form
-get the email and password from the form
-call the sign up in auth function with the email and password
-redirect the user to the home page

# CREATE PAGE

# HTML

-Bulletin form

# EVENTS

-On Load, check if the user is logged in, if so redirect them to the home page
-On the submit form
-get data from the form
-use the form data to create a post in supabase
-redirect the user to the home page
