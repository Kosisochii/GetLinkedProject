import { useEffect, useState } from 'react';
import './App.css';
import {FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaLocationArrow } from "react-icons/fa";

function App() {
  let earth = require("./images/starry.png");
  let idea = require("./images/theBgIdea.png");
  let chairGirl = require("./images/chairGirl.png");
  let analyst = require("./images/analyst.png");
  let thinkingMan = require("./images/thinkingMan.png");
  let winnerCup = require("./images/cup.png");
  let medal = require("./images/medal.png");
  let partners = require("./images/Partner and sponsors section.png");
  let keyMan = require("./images/lock.png");

  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = document.querySelector(".textShow").textContent;
    const totalCharacters = text.length;

    const interval = setInterval(() => {
      if (index < totalCharacters) {
        setDisplayText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [index]);










  
  const [isVisble, setVisible] = useState(false);


  function toggleNav(){
    setVisible(prevState => !prevState);
  }

  return (
    <div>
      <header>
        <div>
          <p className='logo'>get<span>linked</span></p>
        </div>

        <nav>

          <div className='desktopNav'>
          <ul>
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='hamburger' onClick={toggleNav}>
          </div>
          <div className='navMobile' 
            style={{
              display: isVisble ? 'block' : 'none',}}
          >
            <div className='cancelContainer'>
              <span id='cancel' onClick={toggleNav}>✖</span>
            </div>
            <ul>
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>

            <button id='navBtn'>Register</button>
          </div>
        </nav>
      </header>

      <main>
        <div id='igniting'>
          <p className='textShow'>Igniting a Revolution in 
            <span >HR Innovation
          <small className='blink'></small>
          </span>
          </p>
        </div>

        <section className='headerSection '>
          <div className='h1Container flexItem'>
            <div id='h1Container'>
              <h1>getlinked Tech <br/> Hackathon <span>1.0</span></h1>

              <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
            </div>

            

            <button>Register</button>

            <ol id='count'>
              <li>00<small>H</small></li>
              <li>00<small>M</small></li>
              <li>00<small>S</small></li>
            </ol>
          </div>


          <div className='boyImg flexItem'>
            <img src={earth} alt='EarthImg' id='earthImg'
            />
          </div>
        </section>

        <section className='section'>
          <div className='imgContainer flexItem'>
            <img src={idea} className='img' alt="The Big idea"/>
          </div>

          <div className='flexItem intro'>
            <h2>Introduction to getlinked</h2>
            <h3>tech Hackathon 1.0</h3>

            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
          </div>
        </section>


        <section className='section girl'>
            <div className='imgContainer flexItem'>
              <img src={chairGirl} alt='chairGirl'
              className='img'/>
            </div>

            <div className='flexItem'>
              <h2>Rules and</h2>
              <h3>Guidelines</h3>
              <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </section>




        <section className='section'>
            <div className='imgContainer flexItem'>
              <img src={analyst} alt='analyst'
              className='img'/>
            </div>

            <div className='flexItem'>
              <h2>Judging Criteria</h2>
              <h3>Key attributes</h3>

              <ol className='analystInfoContainer'>
                <li className='analystInfo'>
                  <span>Innovation and Creativity:</span>
                  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </li>

                <li className='analystInfo'>
                  <span>Functionality:</span>
                  Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </li>

                <li className='analystInfo'>
                  <span>Impact and Relevance:</span>
                Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </li>

                <li className='analystInfo'>
                  <span>Technical Complexity:</span>
                  Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </li>

                <li className='analystInfo'>
                  <span>Adherence to Hackathon Rules:</span>
                  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </li>

                <button>Register</button>
              </ol>
            </div>
        </section>



        <section className='section question'>
            <div className='flexItem'>
              <h2>Frequently Asked</h2>
              <h3>Questions</h3>

              <p>We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span>
              </p>

              <div>
              <details>
                <summary>
                  <div>
                  Can I work on a project I started before the hackathon?
                  </div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                  Can I work on a project I started before the hackathon? Can I work on a project I started before the hackathon.
                </p>
				  	 </details>

             <details>
                <summary>
                  <div>
                    What happens if I need help during the hackathon?
                  </div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                  What happens if I need help during the hackathon? What happens if I need help during the hackathon?
                </p>
				  	 </details>

             <details>
                <summary>
                  <div>
                  What happens if I don't have an idea for a project?
                  </div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                What happens if I don't have an idea for a project? Can I work on a project I started before the hackathon
                </p>
				  	 </details>

             <details>
                <summary>
                  <div>
                  Can I join a team or do I have to come with one?
                  </div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                  Can I join a team or do I have to come with one? What happens if I need help during the hackathon?
                </p>
				  	 </details>

             <details>
                <summary>
                  <div>
                  What happens after the hackathon end
                  </div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                  What happens after the hackathon ends What happens if I need help during the hackathon?
                </p>
				  	 </details>


             <details>
                <summary>
                  <div>
                    Can I work on a project I started before the hackathon?</div>
                  <div className='plus'>+</div>
                </summary>
                <p>
                 Can I work on a project I started before the hackathon? What happens if I need help during the hackathon?
                </p>
				  	 </details>
              </div>
            </div>


              <div className='imgContainer flexItem' id='thinkingContainer'>
                <img src={thinkingMan} alt="Thinking Man" className='img'/>
              </div>
        </section>


        <section className='section timeline'>
            <h2>Timeline</h2>
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
              
              <div className='timelineInfo'>
                <div className='timelineContainer flexItem'>
                <h3>Hackathon Annnouncement</h3>
                <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>

                <div className='lineContainer flexItem'>
                  <span className='num'>1</span>
                  <h3 className='date'>November 18, 2023</h3>
              </div>

              </div>

              <div className='timelineInfo'>
                <div className='timelineContainer flexItem' id='secondList'>
                <h3>Teams Registration begins
                </h3>
                <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>

                <div className='lineContainer flexItem'>
                <span className='num'>2</span>
                <h3 className='date'>November 18, 2023</h3>
              </div>
                
              </div>

              <div className='timelineInfo'>
                <div className='timelineContainer flexItem'>
                <h3>Teams Registration ends
                </h3>
                <p>Interested Participants are no longer Allowed to register</p>
                </div>

                <div className='lineContainer flexItem'>
                <span className='num'>3</span>
                <h3 className='date'>November 18, 2023</h3>
              </div>
            </div>


              <div className='timelineInfo'>
                <div className='timelineContainer flexItem'>
                <h3>Annnouncement of the accepted teams and ideas
                </h3>
                <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>

                <div className='lineContainer flexItem'>
                <span className='num'>4</span>
                <h3 className='date'>November 18, 2023</h3>
              </div>
              </div>

              <div className='timelineInfo'>
                <div className='timelineContainer flexItem'>
                <h3>Getlinked Hackathon 1.0 Offically Begins
                </h3>
                <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>

                <div className='lineContainer flexItem'>
                <span className='num'>5</span>
                <h3 className='date'>November 18, 2023</h3>
              </div>
              </div>

              <div className='timelineInfo'>
                <div className='timelineContainer flexItem'>
                  <h3>Demo Day
                  </h3>
                  <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>

                <div className='lineContainer flexItem'>
                  <span className='num'>6</span>
                  <h3 className='date'>November 18, 2023</h3>
              </div>
              </div>
        </section>



        <section className='section'>
            <div>
              <h2>Prizes and</h2>
              <h3>Rewards</h3>
              <p>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>


            <div className='imgContainer'>
              <img src={winnerCup} alt='Winner Cup'
              className='img'/>
            </div>

            <div className='imgContainer'>
              <img className='img' src={medal} alt='Winners Medal'/>
            </div>
        </section>


        <section className='section partners'>
            <div className='flexItem'>
              <h2>Partners and Sponsors</h2>
              <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>


            <div className='imgContainer flexItem'>
              <img src={partners} alt='Partners'
              className='img'/>
            </div>
        </section>


        <section className='section'>
            <div className='flexItem'>
              <h2>Privacy Policy and</h2>
              <h3>Terms</h3>
              <small>Last updated on September 12, 2023</small>

              <p>Below are our privacy & policy, which outline a lot of goodies.it’s our aim to always take of our participant</p>


              <div className='privacyInfoContainer'>
                <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                
                <h3>Licensing Policy</h3>
                <ul>
                  <h4>Here are terms of our Standart Licence :</h4>
                  <li>
                    <span>♻</span>
                    The Standard Licence grants you a non-exclusive right to navigate and register for our event.
                  </li>

                  <li>
                    <span>♻</span>
                    You are licenced to use the item available at any free source sites, for your project development.
                  </li>
                </ul>

                <div className='readBtnContainer'>
                   <button className='readBtn'>Read More</button>
                </div>
              </div>
            </div>


            <div className='flexItem'>
            <div className='imgContainer lock'>
              <img className='img' src={keyMan} alt='Winners Medal'/>
            </div>
            </div>
        </section>
      </main>

      <footer>
        <section className='flexItem'>
          <div>
            <p className='logo'>get<span>linked</span></p>
            <p className='footerPara'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          </div>

          <div className='termsContainer'>
            <p>Terms of Use <span>|</span> Privacy Policy</p>
          </div>
        </section>

        <section className='flexItem'>
          <ul>
            <h3>Useful Links</h3>

            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>

          <div className='socialContainer socials'>
            <ul>
            <p>Follow us</p>
              <li><FaInstagram color='white' className='icon'/></li>
              <li><FaTwitter color='white' className='icon'/></li>
              <li><FaFacebook color='white'  className='icon'/></li>
              <li><FaLinkedin color='white'  className='icon'/></li>
            </ul>
          </div>
        </section>


        <section className='flexItem'>
          <ul>
            <h3>Contact Us</h3>

            <li className='socialContainer'>
              <span>📞</span>
              <li>+2349063556204</li>
              </li>
            <li className='socialContainer'>
              <FaLocationArrow color='red'  className='icon'/>
              <li>27, Alara Street Yaba 100012 Lagos State</li>
            </li>
          </ul>
        </section>
      </footer>

      <div  id="footerReserved">
      <p><small>All rights reserved. © getlinked Ltd.</small></p>
      </div>
    </div>
  );
}

export default App;