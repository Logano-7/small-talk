<h1 align="center">
  <br>
  <img src='./client/src/assets/images/chat-icon.png' alt="Chat Icon" width="200">
  <br>
  SmallTalk
  <br>
</h1>

<h4 align="center">A full-stack Chat app built with the MERN stack.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#code-highlights">Code Highlights</a> •
  <a href="#credits">Credits</a>
</p>

<div align="center">
<img src='./client/src/assets/images/AppScreenshot .png' alt="Hangman Loss the word was Round" width="500" >
</div>

## Key Features

- A signup page where a user can create an account.
- The website used Context to tell if the user has already signed in in which case with will skip the sign in page and jump straight to the chat page.
- A back-end that handles all the POSTs and GETs and timestamps messages.
- A seach bar to search through the different chats the user has.
> **Note**
> I plan to in the future implament something like socket.io so that I can do things like put in sound for a notification, or set active users to have a "online" icon.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:Logano-7/small-talk.git

# Go into the repository
$ cd small-talk

# Go into Front-End
$ cd client

# Install dependencies
$ npm install

# Run the app
$ npm run dev

# Then in another Terminal

# Navigate back into the Cloned Repository once there enter "pwd". The result should end with .../small-talk
$ pwd

# Install dependencies
$ npm install

# Run the api
$ npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Code Highlights

```bash
export const login = async (req, res) => {
  try {
    // Validate the user data
    const { username, password } = req.body;
    // Find the user
    const user = await User.findOne({ username });
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
```

```bash
// Find the conversation with the search term
const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
```

```bash
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  })

  res.cookie("jwt", token,{
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // to prevent XSS attacks
    sameSite: "strict", // to prevent CSRF attacks
    secure: process.env.NODE_ENV !== "development", // to only send the cookie over HTTPS in production
  })
};
```

## Credits

This software uses the following open source packages:

- M [MongoDB](https://www.mongodb.com)
- E [Express](https://expressjs.com)
- R [React](https://react.dev)
- N [Node.js](https://nodejs.org/)

## You may also like...

- [Gericht](https://github.com/Logano-7/gerichtResturantDesign) - A Modern Figma Resturant Deisgn

- [Hangman](https://github.com/Logano-7/hangmanTS) - A Hangman Game built with React in Typescript

- (WIP) [Logan's Logs](https://github.com/Logano-7/logsblogs) - A Full-Stack Blog with working authentication using Cookies. Displays Blog posts taken from a SQL Database.

---

> GitHub [@Logano-7](https://github.com/Logano-7) &nbsp;&middot;&nbsp;
> Codewars [@Logano-7](https://www.codewars.com/users/Logano-7) &nbsp;&middot;&nbsp;
> LinkedIn [@Logan Martin](https://www.linkedin.com/in/logan-martin-7-js/)
