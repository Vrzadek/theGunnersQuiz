# The Gunners Quiz
A quiz about the greatest football team of all time - Arsenal FC.

![Responsive Mockup]()

[View The Gunners Quiz on live website](https://johanablomqvist.github.io/Blackbeard-s-Revenge-PP2/)

[View The Gunners Quiz on Github pages](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2)

Add an image of the finished site here. I like to use [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes, and amiresponsive allows you to click links on the page and scroll, so each device can show a different element of your site.

Add a link to the live site here, for Milestone 1 this will be the GitHub Pages Link from when you deployed the site.

If you want to add optional [shields.io](https://shields.io) badges to your README, I like to add them to this section.

---

# CONTENTS
* [User Experience](#user-experience-ux)
  * [User stories](#user-stories)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
* [Validator Testing](#validator-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)

# Existing Features

### Home section:
 
This is the first part of the quiz that the player will see when visiting. It is designed to allow the player to start playing the quiz with one click. The scores of the previous players can be seen from this window too. Two buttons are displayed here, "Play" and "High Scores" to keep it simple for the user. <br>
![HomePage](homepagepichere)

### Game section:
 
This section contains the quiz itself. The player is asked to answer 5 questions that are related to the football club Arsenal FC. Each question is randomised and the user can keep track of which question they're on and how many points they have. <br>
![Quiz Page](quizpagepichere)

Progress/Score bar <br>
![Progress and score bar]()

Wrong answer <br>
![Wrong question example image]()

### End section:
 
When the player finishes the quiz, a window displaying the total score will appear. After that the player gets to choose if they want to save their score, play another game or to go back to the home page. <br>
![End page image]()

### High Scores section:
 
In this page the user can see the scores of previous saved games alongside the name the player choosed. They can also return to the home page.

![Scores page image]()



# Features Left to Implement

- A timer function
- With more time, fix the layout a bit more.
- Adding more questions so that the Quiz will be more challenging.

# Validator Testing 

- HTML
  - Gives an error about a charset but I cant find the issue giving it. [W3C validator](https://validator.w3.org/nu/)
  
  ![HTML Check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/htmlchecker.png)
- CSS
  - No errors were found [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  
  ![CSS Check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/jigsawtest.png)

- Lighthouse

  ![Lighthouse check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/lighthouse%20test.png)

- JavaScript
  -  Got warning's about missing semicolon's and  using const saying:'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  No issues other then that.

## Full testing
To fully test my website I did the following tests using different browsers (Google chrome, Internet explorer) and devices (iPhone 12).
I went through each page using google chrome developer tools to ensure that they were responsive.


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