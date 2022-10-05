import "./style.css"

const Index = () => {


    return (
        <div class="background">
            <p class="attribution">Image by <a href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword">Freepik</a></p>
        <div class="card-container">
            <div class="top-card">   
                <img class="photo" src={require("./IMG_1711.jpg")} alt="me"/>
            </div>
            <div class="name-card">
                <h1>Samuel Wright</h1>
            </div>
            <div class="profession">
                <p>Software Engineer</p>
            </div>
            <div class="aboutme">
                <h1>About Me</h1>
                <p>Hi! I'm Sam. I went to the CodingDojo bootcamp and achieved Red Belts in the JavaScript and Python stack and an Orange belt in MERN stack. I aspire to be a successful software engineer and am looking for the next amazing opportunity.
             I am switching careers from the healthcare field where I worked as a Medical Laboratory Technician in Sterling, CO. I learned through the years about being efficient, multi-tasking, attention to detail, and maintaining a positive attitude.
              I work hard and have a burning passion to code and be apart of something greater. I look at every day like a new learning opportunity. Thank you for visiting my page, you can reach me on my LinkedIn page, or email, which is linked below.</p>
            </div>
            <div class="links-card">
                <a href="https://www.linkedin.com/in/samuelwright96/"><img class="icons" src={require("./linkedin-icon.png")} alt="linked in icon" /></a>
                <a href="https://github.com/Swright96"><img class="icons" src={require("./github-icon.png")} alt="github icon" /></a>
                <a href = "mailto: swright96@live.com"><img class="icons" src={require("./email-icon.png")} alt="email icon"/></a>
            </div>
        </div>
    </div>
    )
}

export default Index;