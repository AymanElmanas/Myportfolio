import profiles from './images/profiles-svg.svg'
import about from './images/abouts.svg'
import work from './images/intern-img.jpg'
import './App.css';

function App() {
  return (
    <>
    <body className="bg-image">
      <div className="d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-4">
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                <a className="nav-link active" href="#about">About</a>
                <a className="nav-link active" href="#portfolio">Portfolio</a>
                <a className="nav-link active" href="#internship">Internship</a>
                <a className="nav-link active" href="#profiles">Profiles</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <section id="home" className="home py-2">
          <div className="d-flex justify-content-center">
            <img src="./dp.jpg" className="dp-pic" alt="dp" />
          </div>
          <br/>
          <h1 className="text-center text-light fw-bold">
            Hi! I'm Ayman Almanassra
          </h1>
          <br />
          <h4 className="text-center text-light">
            I'm a AWS solution Architect and a Competitive DevOps
          </h4>
          <br />
          <br />
          <br />
        </section>
      </div>
      <section id="about" className="about bg-light">
        <img src={about} style={{float: "right", maxWidth: "100%", width: "450px", marginTop: "50px"}} alt="purple-img" />
        <div className="container-fluid">
          <h2 className="text-dark py-5 p-4 fw-bold">
            About Me
          </h2>
          <p className="text-dark fs-5 p-4 py-0" style={{marginTop: '-35px'}}>
            I am fAWS Solution Architect  from Palestine, who also likes to do competitive DevOps.
          </p>
          <p className="text-dark fs-5 py-0 p-4">
            I also successful experience in Cloud Computing,
Implementation, and Security. An outstanding performer in building high-quality solution that is scalable and highly available and fault tolerant tailored towards an enterprise goal. </p>
          <br />
          <h2 className="text-dark fw-bold py-0 p-4">
            Skills
          </h2>
          <br />
          <p className="text-dark fs-5 py-0 p-4" style={{marginTop: '-5px'}}>
          <li>AWS Services: Ec2, Elastic Beanstalk, EFS, VPC, RDS, S3, Glacier, IAM, Kinesis, Cloud Front, Cloud Watch,
Cloud Trail, Cloud Formation, DynamoDB, Lambda, Route53, SNS, SQS, API, Gateway, Code Pipeline, Code
Build, Elastic Search, Docker, Code Deploy.</li>
<li>ACI/CD: GitLab, GitHub, Jenkins, docker, codeCommit, codeBuild, codeDeploy, ECS, and EKS,</li>  
<li>Information security (Advanced -Level): Network security, Cloud computing security, Software safety and
security, Database security, physical security and Cybersecurity Analyst.</li>
<li>Network security: Firewalls, IDS/IPS, DLP, SIEM, vulnerability-scanning, Web gateway, proxy appliances and
antivirus tool.</li>
<li>APenetration Testing: NMAP/ZenMap, Xray, Wireshark, Hashcat, Hydra, Aircrack-ng, Burp Suite, Metasploit,
sqlmap, Resource Hacker, IDA and Radare.</li> 
  <li>Penetration Testing: NMAP/ZenMap, Xray, Wireshark, Hashcat, Hydra, Aircrack-ng, Burp Suite, Metasploit,
sqlmap, Resource Hacker, IDA and Radare.</li>  
 <li>Front-end (Junior-Level): CSS, HTML, JavaScript, React.Js, jQuery and Bootstrap.</li>  
  <li>Back-end (Mid-Level): Node.js, Express.Js, WebSocket, Socket.io and web3.</li>
  <li>Database (Mid-Level): SQL: MySQL, PostgreSQL, SQLite, Amazon Aurora and RDS. NoSQL: Amazon
DynamoDB ,MongoDB.</li>
<li>Blockchain (Entry-Level): Solidity, web3.js, ether.js, Remix-Ethereum IDE, Truffle, Hardhat, Ganache CLI, and
MetaMask.</li>
          </p>
          <br />
          <br />
          <ul class="about-profiles-ul">
          <li><a href="https://www.linkedin.com/in/ayman94/" className="text-dark"><i className="fa fa-linkedin text-dark"></i></a></li>
          <li><a href="https://github.com/AymanElmanas" className="text-dark"><i className="fa fa-github text-dark"></i></a></li>
          <li><a href="ayye94222@gmail.com" className="text-dark"><i className="fa fa-envelope text-dark"></i></a></li>
          </ul>
          <br />
          <br />
        </div>
      </section>
      <section id="portfolio" className="portfolio bg-dark">
        <div className="container-fluid">
          <h2 className="fw-bold text-center text-light py-5">
            Projects
          </h2>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row row-1" style={{marginTop: '-30px'}}>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/AymanElmanas/aymanelmanas" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                  AymanElmanas.github.io
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Ayman Almanassra's Personal Portfolio Website. Built with HTML CSS Boostrap CSS and JS, and ❤️
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/Icones-Plus/Vote-chain" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                Vote-chain
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Election app for the specific country. Like everyone over the legal age for election can get to the site and vote for voters. All our ideas are about making an integrity election and no one can change the votes. We will do that by using blockchain.
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
                <a href="https://github.com/RAYA-PLUS/News-wep" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                News-wep
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Amazing README.md Profile for my Github Profile + Hello World program in 8 Languages
                </h5>
              </div>
            </div>
          </div>
          <div className="row row-1" style={{marginTop: '20px'}}>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/CatAdoption/cats_adoption" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                cats_adoption
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                iTodo, To do list Web Application, Built with Flask, Database, HTML, Bootstrap, and Jinja
                </h5>
              </div>
            </div>
          
          </div>
          <br />
          <br />
          </div>
      </section>
      <section id="internship" className="internship bg-light">
        <div className="container-fluid py-5">
          <img src={work} className="intern-img" alt="office" style={{marginTop: '-45px'}} />
          <h2 className="py-2 p-5 fw-bold">
            Internship
          </h2>
          <h5 className="py-2 p-5" style={{maxWidth: '100%', width: '700px', lineHeight: '34px'}}>
            Here is a list of all the Internships, I have done between the year 2020 - 2021
          </h5>
          <h3 className="py-2 p-5 fw-bold">
            Crediometer
          </h3>
          <h5 className="text-muted py-0 p-5" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
            Crediometer is a Startup Company in Nigeria. I'm working for Crediometer from 18 Septmeber and this Internship
            will end at 18 December
          </h5>
        </div>
      <br/>
      </section>
      <section id="profiles" className="profiles bg-dark">
        <div className="profiles-img-d">
          <img src={profiles} className="profiles-img" alt="profiles-img" />
        </div>
        <h2 class="text-light py-4 p-5 fw-bold" style={{position: 'relative', top: '10px'}}>
          Profiles
        </h2>
        <h5 className="text-muted py-0 p-5" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          Here are all my Open Source Profiles, i.e. GitHub, Linkedin, Competitive Programming Websites Profiles, like AtCoder, CodeChef, and many more.
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          CodeChef - mrbluebird2
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          CodeChef is a competitive programming website, CodeChef Holds 3 Programming Contest every moth, Long Challenge, Cook off, and Lunch Time
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          AtCoder - mrbluebird2
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          AtCoder is a programming contest website based in Japan. There are three types of official contests in AtCoder: AtCoder Grand Contest (AGC), AtCoder Beginner Contest (ABC), and one more.
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          GitHub - mrbluebird2
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          Linkedin - Badri Vishal Mani Tripathi
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          Codeforces - Mr_BlueBird
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov.
        </h5>
        <br/>
      </section>
    </body>
    </>
  );
}

export default App;
