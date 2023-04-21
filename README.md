# The Gunners Quiz



A quiz about the greatest football team of all time - Arsenal FC.

Add an image of the finished site here. I like to use [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes, and amiresponsive allows you to click links on the page and scroll, so each device can show a different element of your site.

Add a link to the live site here, for Milestone 1 this will be the GitHub Pages Link from when you deployed the site.

If you want to add optional [shields.io](https://shields.io) badges to your README, I like to add them to this section.

---

# CONTENTS
* [User Experience](#user-experience-ux)
  * [User stories](#user-stories)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
* [Testing and Bugs](#testing-and-bugs)
* [Validator Testing](#validator-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)

# Validator Testing 

- HTML
  - Warns about empty heading that serves as a placer for text later. [W3C validator](https://validator.w3.org/nu/)
  
  ![HTML Check](https://github.com/Vrzadek/theGunnersQuiz/blob/main/assets/images/htmlchecker.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  
  ![CSS Check]()

- Lighthouse

  ![Lighthouse check]()

- JavaScript
  -  Got warning's about missing semicolon's and  using const saying:'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  No issues other then that.

## Full testing
To fully test my website I did the following tests using different browsers (google chrome, mozilla firefox) and devices (Samsung s21pro).
I went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

Links
- Tested my social links on index.html, clicking popped out a new tab with the requested site as expected , both on mobile, mozilla, firefox, chrome and opera.
Game
- Tried completing the game on above said browsers and it did work like intended, clicked all the buttons and they also work like intended. 
- Ship drag does work for mobile, did not have time to implement mobile viability into the game after squishing out bugs for a minimal working product.
- Found a problem where you can click the start game button many times enabling the computer so shoot as many times as you clicked after each turn.
so I made the button hide until ships are placed on the board and disappear again after being clicked. 


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