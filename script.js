let completedTopics = 0;
let totalTopics = 6;
function generateRoadmap() {
    completedTopics = 0;

document.getElementById("badges-container").innerHTML = "";
document.getElementById("roadmapContainer").innerHTML = "";
     let career = document.getElementById("career").value;
    document.getElementById("dashboard")
.innerHTML = `

<div class="dashboard">

<div class="stat-card">
    <h4>🎯 Goal</h4>
    <h3>${career}</h3>
</div>

<div class="stat-card">
    <h4>📚 Topics</h4>
    <h3>6</h3>
</div>

<div class="stat-card">
    <h4>🏆 Badges</h4>
   <h3 id="badgeCount">${completedTopics}</h3>
</div>

</div>
`;
    document.getElementById("progressSection")
.innerHTML = `

<div class="progress-card">

<h3>📊 Career Progress</h3>

<p id="progressText">0% Completed</p>

<div class="progress-bar">
    <div class="progress-fill"
         id="progressFill">
    </div>
</div>

</div>

`;
let certificationList = document.getElementById("certification-list");

let certificationsToShow = [];

if(career.includes("Web Developer")){
    certificationsToShow = certifications["Web Developer"];
}
else if(career.includes("Java Developer")){
    certificationsToShow = certifications["Java Developer"];
}
else if(career.includes("Data Analyst")){
    certificationsToShow = certifications["Data Analyst"];
}
 else if(career.includes("AI")){
    certificationsToShow = certifications["AI / ML Engineer"];
}
else if(career.includes("Cyber")){
    certificationsToShow = certifications["Cyber Security Analyst"];
}

certificationList.innerHTML = "";

certificationsToShow.forEach(cert => {
    certificationList.innerHTML += `<li>${cert}</li>`;
});
let projectList = document.getElementById("project-list");

let projectsToShow = [];

if(career.includes("Web Developer")){
    projectsToShow = projects["Web Developer"];
}
else if(career.includes("Java Developer")){
    projectsToShow = projects["Java Developer"];
}
else if(career.includes("Data Analyst")){
    projectsToShow = projects["Data Analyst"];
}
else if(career.includes("AI")){
    projectsToShow = projects["AI / ML Engineer"];
}
else if(career.includes("Cyber")){
    projectsToShow = projects["Cyber Security Analyst"];
}

projectList.innerHTML = "";

projectsToShow.forEach(project => {
    projectList.innerHTML += `<li>🚀 ${project}</li>`;
});
let tip = "";

if(career.includes("Web Developer")){
    tip = careerTips["Web Developer"];
}
else if(career.includes("Java Developer")){
    tip = careerTips["Java Developer"];
}
else if(career.includes("Data Analyst")){
    tip = careerTips["Data Analyst"];
}
else if(career.includes("AI")){
    tip = careerTips["AI / ML Engineer"];
}
else if(career.includes("Cyber")){
    tip = careerTips["Cyber Security Analyst"];
}

document.getElementById("career-tip").innerHTML = tip;
let resourceList = document.getElementById("resource-list");

let resourcesToShow = [];

if(career.includes("Web Developer")){
    resourcesToShow = resources["Web Developer"];
}
else if(career.includes("Java Developer")){
    resourcesToShow = resources["Java Developer"];
}
else if(career.includes("Data Analyst")){
    resourcesToShow = resources["Data Analyst"];
}
else if(career.includes("AI")){
    resourcesToShow = resources["AI / ML Engineer"];
}
else if(career.includes("Cyber")){
    resourcesToShow = resources["Cyber Security Analyst"];
}

resourceList.innerHTML = "";

resourcesToShow.forEach(resource => {

    resourceList.innerHTML += `
    <li>
        <a href="${resource.link}" target="_blank">
            📖 ${resource.name}
        </a>
    </li>
    `;
});

    if(career === ""){
        alert("Please select a career path!");
        return;
    }


    let roadmap = "";

    if(career.includes("Java Developer")){

        roadmap = `
        <div class="topic-card">
            <h3>☕ Java Basics</h3>
            <p>Learn variables, data types, loops, conditions and methods. This is the foundation of Java programming.</p>
            <button onclick="markComplete(this)">
           Mark Complete
            </button>
</div>
        <div class="topic-card">
            <h3>📦 OOP Concepts</h3>
            <p>Understand Classes, Objects, Inheritance, Polymorphism, Abstraction and Encapsulation.</p>
             <button onclick="markComplete(this)">
           Mark Complete
            </button>
            </div>
    

        <div class="topic-card">
            <h3>📚 Collections Framework</h3>
            <p>Learn ArrayList, HashMap, LinkedList and data handling techniques.</p>
            <button onclick="markComplete(this)">
        Mark Complete
    </button>
</div> 
            
    

        <div class="topic-card">
            <h3>🔗 JDBC</h3>
            <p>Connect Java applications with databases and perform CRUD operations.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
</div>
          
   

        <div class="topic-card">
            <h3>🗄 MySQL</h3>
            <p>Learn database creation, queries, joins and data management.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
</div>
            

        <div class="topic-card">
            <h3>🚀 Spring Boot</h3>
            <p>Build real-world backend applications and REST APIs using Java.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
</div>
            
        `;
    }

    else if(career.includes("Web Developer")){

        roadmap = `
        <div class="topic-card">
            <h3>🌐 HTML</h3>
            <p>Create the structure of websites using headings, forms, tables and layouts.</p>
     <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🎨 CSS</h3>
            <p>Design attractive websites using colors, layouts, animations and responsive design.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>⚡ JavaScript</h3>
            <p>Add interactivity, DOM manipulation and dynamic functionality.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>⚛️ React</h3>
            <p>Build modern and reusable user interfaces with components.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🛠 Projects</h3>
            <p>Create portfolio websites, dashboards and real-world applications.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🚀 Portfolio</h3>
            <p>Showcase your skills and projects professionally online.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>
        `;
    }

    else if(career.includes("AI")){

        roadmap = `
        <div class="topic-card">
            <h3>🐍 Python</h3>
            <p>Learn Python fundamentals and programming logic.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🔢 NumPy</h3>
            <p>Work with numerical computing and arrays efficiently.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>📊 Pandas</h3>
            <p>Analyze and manipulate datasets easily.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🤖 Machine Learning</h3>
            <p>Build predictive models using algorithms and datasets.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🧠 Deep Learning</h3>
            <p>Work with neural networks and AI systems.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🚀 AI Projects</h3>
            <p>Develop recommendation systems, chatbots and prediction models.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>
        `;
    }

    else if(career.includes("Cyber")){

        roadmap = `
        <div class="topic-card">
            <h3>🌐 Networking</h3>
            <p>Understand how computers communicate over networks.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🐧 Linux</h3>
            <p>Learn commands, file systems and server management.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🔒 Security Basics</h3>
            <p>Understand threats, vulnerabilities and protection methods.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🛡 Ethical Hacking</h3>
            <p>Learn security testing techniques legally and ethically.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>💻 Penetration Testing</h3>
            <p>Find and test vulnerabilities in systems.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🚀 Security Projects</h3>
            <p>Build security tools and vulnerability assessment projects.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>
        `;
    }

    else {

        roadmap = `
        <div class="topic-card">
            <h3>📊 Excel</h3>
            <p>Learn spreadsheets, formulas and data cleaning.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🐍 Python</h3>
            <p>Use Python for data analysis and automation.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🗄 SQL</h3>
            <p>Store, retrieve and analyze data efficiently.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>📈 Power BI</h3>
            <p>Create interactive dashboards and reports.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>📉 Data Visualization</h3>
            <p>Present data using charts and graphs.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>

        <div class="topic-card">
            <h3>🚀 Analytics Projects</h3>
            <p>Build data-driven solutions and dashboards.</p>
             <button onclick="markComplete(this)">
        Mark Complete
    </button>
        </div>
        `;
    }

    document.getElementById("roadmapContainer").innerHTML = `
        <div class="roadmap-card">
            <h2>${career} Roadmap 🚀</h2>
           <div class="roadmap-grid">
    ${roadmap}
</div>
        </div>
    `;
    updateBadges();
}
function markComplete(button){

    let card = button.parentElement;

    if(card.classList.contains("completed")){
        return;
    }

    card.classList.add("completed");
    button.innerHTML = "✅ Completed";

    if(completedTopics < totalTopics){
        completedTopics++;
    }

    updateProgress();
}

function updateProgress(){

    let percentage =
    Math.round((completedTopics / totalTopics) * 100);

    if(percentage > 100){
        percentage = 100;
    }

    document.getElementById("progressText").innerHTML =
    percentage + "% Completed";

    document.getElementById("progressFill").style.width =
    percentage + "%";

    updateBadges();
}
function updateBadges() {
let badges = "<p>🚀 Complete topics to unlock badges!</p>";

    if(completedTopics >= 1){
    badges = "";
    badges += "<p>🥉 Beginner Explorer</p>";
}

    if(completedTopics >= 3){
        badges += "<p>🥈 Consistent Learner</p>";
    }

    if(completedTopics >= 6){
        badges += "<p>🥇 Career Ready</p>";
    }

    document.getElementById("badges-container").innerHTML = badges;
    let badgeCount = 0;

if(completedTopics >= 1) badgeCount++;
if(completedTopics >= 3) badgeCount++;
if(completedTopics >= 6) badgeCount++;

document.getElementById("badgeCount").innerHTML = badgeCount;
}
const certifications = {

    "Web Developer":[
        "Responsive Web Design - freeCodeCamp",
        "JavaScript Algorithms - freeCodeCamp",
        "Frontend Developer Certification"
    ],

    "Java Developer":[
        "Oracle Java Foundations",
        "NPTEL Java Programming",
        "HackerRank Java"
    ],

    "Data Analyst":[
        "Google Data Analytics",
        "SQL Certification",
        "Power BI Certification"
    ],
     "AI / ML Engineer":[
        "Machine Learning Specialization",
        "Deep Learning Specialization",
        "Python for Data Science"
    ],

    "Cyber Security Analyst":[
        "Google Cybersecurity Certificate",
        "CompTIA Security+",
        "Certified Ethical Hacker (CEH)"
    ]
};
const projects = {

    "Web Developer":[
        "Portfolio Website",
        "Weather App",
        "To-Do List App"
    ],

    "Java Developer":[
        "Student Management System",
        "Library Management System",
        "Banking System"
    ],

    "Data Analyst":[
        "Sales Dashboard",
        "Student Performance Analysis",
        "Power BI Dashboard"
    ],

    "AI / ML Engineer":[
        "Movie Recommendation System",
        "Chatbot",
        "House Price Predictor"
    ],

    "Cyber Security Analyst":[
        "Password Strength Checker",
        "Port Scanner",
        "Network Monitoring Tool"
    ]
};
const careerTips = {

    "Web Developer":
    "Build a portfolio website and deploy it online. Practice JavaScript daily and create at least 3 projects.",

    "Java Developer":
    "Master OOP concepts before learning Spring Boot. Build at least 2 Java projects before applying for internships.",

    "Data Analyst":
    "Focus on Excel, SQL and Power BI. Learn how to clean and visualize real-world datasets.",

    "AI / ML Engineer":
    "Strengthen Python, Mathematics and Statistics before diving into Machine Learning and Deep Learning.",

    "Cyber Security Analyst":
    "Learn Networking and Linux thoroughly before moving to Ethical Hacking and Penetration Testing."
};
function downloadProgress() {

    let career = document.getElementById("career").value;

    let data = `
Career Goal: ${career}
Completed Topics: ${completedTopics}
`;

    let blob = new Blob([data], {type: "text/plain"});

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "SkillMap_Progress.txt";

    link.click();
}


function resetProgress() {

    completedTopics = 0;

    document.getElementById("badges-container").innerHTML = "";

    document.getElementById("progressText").innerHTML =
    "0% Completed";

    document.getElementById("progressFill").style.width =
    "0%";

    updateBadges();

    generateRoadmap();
}
const resources = {

    "Web Developer":[
        {name:"HTML - MDN",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},
        {name:"CSS - MDN",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
        {name:"JavaScript - MDN",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
    ],

    "Java Developer":[
        {name:"Java Tutorials",link:"https://docs.oracle.com/javase/tutorial/"},
        {name:"OOP Concepts",link:"https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"},
        {name:"Spring Boot",link:"https://spring.io/guides"}
    ],

    "Data Analyst":[
        {name:"SQL Tutorial",link:"https://www.w3schools.com/sql/"},
        {name:"Power BI Learning",link:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi/"},
        {name:"Excel Basics",link:"https://support.microsoft.com/excel"}
    ],

    "AI / ML Engineer":[
        {name:"Python for AI",link:"https://www.freecodecamp.org/learn"},
        {name:"Machine Learning",link:"https://www.coursera.org/learn/machine-learning"},
        {name:"Deep Learning",link:"https://www.deeplearning.ai"}
    ],

    "Cyber Security Analyst":[
        {name:"Networking Basics",link:"https://www.cisco.com/c/en/us/training-events/training-certifications.html"},
        {name:"Linux Commands",link:"https://linuxjourney.com"},
        {name:"Ethical Hacking",link:"https://www.hackthebox.com"}
    ]
};
