# The Gunners Quiz
A quiz about the greatest football team of all time - Arsenal FC.

![Responsive Mockup](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/mockuppic.png)

[View The Gunners Quiz on live website](https://vrzadek.github.io/theGunnersQuiz)

[View The Gunners Quiz on Github pages](https://github.com/Vrzadek/theGunnersQuiz)
# CONTENTS
* [User Experience](#user-experience-ux)
  * [User stories](#user-stories)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
* [Validator Testing](#validator-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)

# User Experience (UX)

- The Gunners Quiz is the very first project Viktor has made in JavaScript, made a simple nice looking quiz about my favorite team - Arsenal FC. For other Arsenal/football/sports fans to enjoy as much as myself.

## User Stories

### First time visitor goals
- I hope they find it fun and entertaining do complete the quiz.
- Easy looking simple but yet addicting quiz.

### Returning visitor goals
- People coming back as I make improvements such as adding a timer, more questions and so on.
- The visitors looking in to my other projects.
- Maybe getting job offerings from it.

# Existing Features

### Home section:
 
This is the first part of the quiz that the player will see when visiting. It is designed to allow the player to start playing the quiz with one click. The scores of the previous players can be seen from this window too. Two buttons are displayed here, "Play" and "High Scores" to keep it simple for the user. <br>
![HomePage](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/homepage.png)

### Game section:
 
This section contains the quiz itself. The player is asked to answer 5 questions that are related to the football club Arsenal FC. Each question is randomised and the user can keep track of which question they're on and how many points they have. <br>
![Quiz Page](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/gamepage.png)

Progress/Score bar <br>
![Progress and score bar](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/progressbar.png)

Wrong answer <br>
![Wrong question example image](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/wronganswer.png)

### End section:
 
When the player finishes the quiz, a window displaying the total score will appear. After that the player gets to choose if they want to save their score, play another game or to go back to the home page. <br>
![End page image](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/quizEND.png)

### High Scores section:
 
In this page the user can see the scores of previous saved games alongside the name the player choosed. They can also return to the home page.

![Scores page image](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/highscores.png)


# Features Left to Implement

- A timer function
- With more time, fix the layout a bit more.
- Adding more questions so that the Quiz will be more challenging.

# Validator Testing 

- HTML
  - No errors were found. [W3C validator](https://validator.w3.org/nu/)
  
  ![HTML Check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/htmlchecker1.png)
- CSS
  - No errors were found [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  
  ![CSS Check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/jigsawtest.png)

- Lighthouse

  ![Lighthouse check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/lighthouse%20test.png)

- JavaScript
  -  Got warning's about missing semicolon's and  using const saying:'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  No issues other then that.

# Full testing
To fully test my website I did the following tests using different browsers (Google chrome, Internet explorer) and devices (iPhone 12).
I went through each page using google chrome developer tools to ensure that they were responsive.

## Manual Testing
|  Feature | Expectation | Action | Result|
|-------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------------------|
| **Play Button** | Game page will open when clicked | Click Play Icon | Game page opened when clicked |
| **Answer Button** | The button of the answer selected will turn black for incorrect or green for correct when clicked | Click Answer Button | The answer will turn out the respective color and next question will open when clicked |
| **Enter your name field** | If the text box is left blank, the user can't save the score | Incomplete form | The text does not submit and is the score is not saved|
| **Save button** | The save submit button can be clicked if the user entered their name | Name and score saved | Name and score saved in Players Scores
| **Play Again Button** | Game page will open when clicked | Click Play Again Icon | Game page opened when clicked |
| **High Scores Button** | The High Scores will open when clicked | Click High Scores button | Taken to High Scores page |
| **Go Home Button** | To go to Home page | Click on Home icon | Home page opens up when clicked|

<br>

## Testing User Stories
Results: 
- As a user, the interactive buttons will be highlighted when my cursor is above them.
- As a user, the selection of questions introduce me to football and Arsenal as a club.
- As a user, the linear and consistent webpage is easy to navigate. 
- As a user, there is an aspect of competition through the games score and leaderboard system.
- As a user, I can see the visible colour changes that indicate correct or incorrect answers. 
- As a user, I am free to type whatever I choose in the text box to save my score.
- As a user, I can click the highscores button to view the leaderboard.


# Technologies Used
## Languages Used
- HTML, CSS and JavaScript were used to create this website.

## Frameworks, Media, Libraries & Programs Used

- CodeAnywhere - For version control.
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website.
- [Am I Responsive?](https://ui.dev/amiresponsive) - Used to make the mockup picture for the Readme.


# Deployment
Github Pages was used to deploy the live website. The instructions to achieve this are below:

- Log in (or sign up) to Github.
- Find the repository for this project, theGunnersQuiz.
- Click on the Settings link.
- Click on the Pages link in the left hand side navigation bar.
- In the Source section, choose main from the drop down select branch menu. Select Root - From the drop down select folder menu.
- Click Save. Your live Github Pages site is now deployed at the URL shown.

## Local Development
### How to Fork
To fork the  design repository:

- Log in (or sign up) to Github.
- Go to the repository for this project, Vrzadek/theGunnersQuiz.
- Click the Fork button in the top right corner..

### How to Clone
To clone the  design repository:

- Log in (or sign up) to GitHub.
- Go to the repository for this project, Vrzadek/theGunnersQuiz.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# Credits

## Code Used
- The entire PP2 has been a nightmare for me considering a lot of things happened in my personal life as well as all students changing from gitpod to CodeAnywhere. The change to CodeAnywhere has come with A lot of struggles, issues, and errors. This, unfortunately, led me into missing out on much of the JavaScript essentials due to lack of time, but I'm gonna catch up with it as I go on. 
The links listed below were each and every one of them very important for me to be able to complete this project and for that I'm forever grateful.

- [Web Dev simplified](https://youtu.be/riDzcEQbX6k)
- [Disabling elements](https://alvarotrigo.com/blog/disable-button-javascript/#:~:text=To%20disable%20a%20button%20using,disabled%20JavaScript%20property%20to%20false%20)
- [Build a Quiz App](https://youtu.be/DFhmNLKwwGw)
- [JavaScript user input](https://youtu.be/w9GNyw8AvlM)
- [How to Make a Quiz App](https://youtu.be/f4fB9Xg2JEY)
- [Create a Multiple Choice Quiz App](https://youtu.be/49pYIMygIcU)
- [Box shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp)
- [Grammarly](https://app.grammarly.com/)
- [W3schools](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s)
- Readme help from [Kera Cudmore](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md).

## Content
- All the written content is done by me, Viktor Rzadek.

##  Media
- [Background image from Pexels](https://www.pexels.com/photo/view-of-emirates-stadium-9251066/)
- [Fonts from Google fonts](https://fonts.google.com/specimen/Roboto+Slab?query=roboto)
  
##  Acknowledgments
- My big brother Markus who works as a developer, helped me A lot thru all of this.
- Love Maths Walkthru project, which gave me help with how to think when implementing JS into a project.
- My mentor Antonio Rodriguez for all the help and tips along the way!
- Kera Cudmore, for all your help regarding this Readme file.
- Youtube/Stack overflow for helping with everything while stuck somewhere during the process.