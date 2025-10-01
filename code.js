// Header
const header_content = `
    <div class="logo">
            <img src="images/logo_genai_color_transparentbg.png" alt="logo">
    </div>
    <ul>
        <li class="underline"><a href="index.html">Home</a></li>
        <li class="underline"><a href="services.html">Services</a></li>
        <li class="cur-page"><a href="code.html">Everyone can code! ✨</a></li> 
        <li class="underline"><a href="#">Courses</a></li>
        <li class="underline"><a href="#">The AGI Book 📗</a></li>
        <li class="underline"><a href="#">Newsletter</a></li>
        <li class="underline"><a href="about.html">About</a></li>
    </ul>
    <div class="login underline"><a href="#">Login</a></div>
`;
document.getElementById("header").innerHTML = header_content;


// scroll
const scroll_container = `
    <div class="scroll-content">
        <span class="scroll-text"> Join the Updated Course on Building with AI in 2025 〰️ </span>
        <span class="scroll-text"> Join the Updated Course on Building with AI in 2025 〰️ </span>
        <span class="scroll-text"> Join the Updated Course on Building with AI in 2025 〰️ </span>
    </div>
`;
document.getElementById("scroll-container").innerHTML = scroll_container;


// software builder
const software_builders = `
    <div class="image">
        <img src="images/GenAI_coding_3.png" alt="image">
    </div>
    <div class="content">
        <span>Learn how to build any software with AI</span>
        <div class="heading">Join the 1st Batch of AI Software Builders</div>
        <div class="text1">Everyone can Code! ✨ Re-Launch!</div>
        <div class="price">₹119.00</div>
        <div class="text2">One time</div>
        <div class="text3">The Updated 1st batch of the world’s most enabling course on AI. Learn how to build anything with AI.</div>
        <button>GET THE COURSE</button>
        <ul>
            <li>✓ Comprehensive Video Lessons + Frameworks</li>
            <li>✓ Office Hours w/ Martin (+ optional private sessions)</li>
            <li>✓ Unlimited Lifetime Access</li>
        </ul>
    </div>
`;
document.getElementById("software-builders").innerHTML = software_builders;


// offer
const offer = `
    <div class="heading">What the course will offer</div>
    <div class="content">
        <div class="slidings">
            <div class="box">
                <div class="que">
                    Project Preparation
                    <span class="icon"></span>
                </div>
                <div class="ans">You will be introduced to the course overview and also establish all the preparations needed for all the projects ahead of us.</div>
            </div>
                
            <div class="box">
                <div class="que">
                    Frontend Development (via AI)
                    <span class="icon"></span>
                </div>
                <div class="ans">We will go over the process on how to let AI develop your frontend, as you describe it. This part can be applied to Web Application, Mobile Application, Chrome Extensions, etc.</div>
            </div>
                
            <div class="box">
                <div class="que">
                    Web App
                    <span class="icon"></span>
                </div>
                <div class="ans">In this lesson, we will learn how to make Web Applications using AI. Follow along as I make my own web application game "Space Invaders".</div>
            </div>
                
            <div class="box">
                <div class="que">
                    Mobile App
                    <span class="icon"></span>
                </div>
                <div class="ans">Here, we let AI guide us in building a mobile app with core phone functionalities. Follow along as I make my own mobile application "Task Chaser".</div>
            </div>
                
            <div class="box">
                <div class="que">
                    Browser Extensions
                    <span class="icon"></span>
                </div>
                <div class="ans">Build browser extensions via AI. We build an extension that uses cutting-edge LLMs to perform certain tasks on your behalf. The example for this lesson will be a Google Chrome extension named "Idea Bomb Me". <br><br>Basically, we use AI to build an AI product.</div>
            </div>
                
            <div class="box">
                <div class="que">
                    AI Applications
                    <span class="icon"></span>
                </div>
                <div class="ans">AI will guide us (non-techies) to develop AI solutions. From calling AI services, to secure, on-prem Small Language Models, to fully-fledged RAG solutions. <br><br> RAG - Retrieval Augmented Generation</div>
            </div>

            <div class="box" style="border-bottom: 1px solid grey;">
                <div class="que">
                   Where are things going next?
                    <span class="icon"></span>
                </div>
                <div class="ans">Next developments on the AI front are foreseeable. Let's stay on top of upcoming evolutions in our Discord server.</div>
            </div>
        </div>

        <div class="para">
            <div class="para1">
                <div class="head">Comprehensive Video Lessons</div>
                <div class="text">Detailed video tutorials covering step-by-step concepts, practical applications,
                    and our proven frameworks for building software via AI. #Claude 3.1 #GPT-4o #Llama 3.5</div>
            </div>
            <div class="para2">
                <div class="head">Personal support from the coach (Martin)</div>
                <div class="text">You'll get direct access to me through office hours. I'll help you apply what
                    you've learned to your projects. There will be multiple touchpoints for the first batch.</div>
            </div>
            <div class="para3">
                <div class="head">Community Access:</div>
                <div class="text">A supportive online community where learners can interact, share insights, and
                    collaborate on projects.</div>
            </div>
        </div>
    </div>
`;
document.getElementById("offer").innerHTML = offer;


// offer slidings
var items = document.getElementsByClassName("box");

for (var i = 0; i < items.length; i++) {
  items[i].querySelector(".que").addEventListener("click", function () {
    var parent = this.parentNode;

    // Close all first
    for (var j = 0; j < items.length; j++) {
      items[j].className = "box";
    }

    // If clicked item was not open, open it
    if (parent.className === "box") {
      parent.className = "box active";
    }
  });
}



// start today
const today = `
    <div class="content">
        <div class="heading">Start Today!</div>
        <div class="text1">Everyone can Code! ✨ Re-Launch!</div>
        <div class="price">₹119.00</div>
        <div class="text2">One time</div>
        <div class="text3">The Updated 1st batch of the world’s most enabling course on AI. Learn how to build
            anything with AI.</div>
        <button>GET THE COURSE</button>
        <ul>
            <li>✓ Comprehensive Video Lessons + Frameworks</li>
            <li>✓ Office Hours w/ Martin (+ optional private sessions)</li>
            <li>✓ Unlimited Lifetime Access</li>
        </ul>
    </div>
    <div class="image">
        <img src="images/Facebook+post+-+56.png" alt="image">
    </div>
`;
document.getElementById("today").innerHTML = today;


// framework
const framework = `
    <div class="content">
        <div class="heading">Utilise our reliable frameworks</div>
        <p>Not one but a set of our proven frameworks on building software with AI:</p>
        <ul>
            <li>one framework for <b>evaluating</b> if your idea can be developed via AI and human guidance,</li>
            <li>one for <b>framing the statement</b> right,</li>
            <li>one for collaboratively (the human at the helm and AI as the developer) <b>building the solution</b>,</li>
            <li>one for <b>professionalizing and iterating</b> the solution.</li>
        </ul>
        <button>GET THE COURSE</button>
    </div>
    <div class="image">
        <img src="images/wonderblu_The_illustration_style_in_the_image_features_a_soft_0d72129a-b0dc-466d-af9c-9840bc823766_0.png" alt="">
    </div>
`;
document.getElementById("framework").innerHTML = framework;


// software professional
const professional = `
    <div class="image">
        <img src="images/wonderblu_The_illustration_style_in_the_image_features_a_soft_f32e02e0-d038-4ef9-a0a8-5b2b2e27e019_1.png" alt="">
    </div>
    <div class="content">
        <div class="heading">Become a software professional</div>
        <p>We cover web apps, mobile apps, backend only, and, crucially, AI and other API integration.</p>
        <p>Further, it covers DevOps practices like version control (git), virtual environments, code quality, and more.</p>
        <p><b>PoC is relatively easy</b> → <a href="https://www.youtube.com/watch?v=vYKg7cXE1fk">see the video on how I built Pong</a>, but this needs to be done right.</p>
        <p><b>MVP is feasible</b> → our frameworks are necessary for that.</p>
        <p><b>MVP is feasible</b> → our frameworks are necessary for that.</p>
        <button>GET THE COURSE</button>
     </div>
`;
document.getElementById("professional").innerHTML = professional;


// FAQ
const FAQ=`
    <div class="heading">FAQs</div>
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question">
                    Who is this course for?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">This course is designed for non-technical and technical individuals who are interested in learning how to build software using AI. Not just the completion of a coding line, but building parts of a software solution and building full-fledged projects. <br><br>It's ideal for entrepreneurs, business professionals, hobbyists, and anyone looking to gain new skills without prior coding experience. condition.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    Do I need any prior coding knowledge to take this course?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    How long will it take to complete the course?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">The course is self-paced, so you can progress at your own speed. However, we estimate that most participants will complete it within 3-5 weeks, depending on their availability.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    What kind of support is available if I get stuck?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">We offer live video calls for personalized support, specifically Martin will host the sessions, where you can ask questions and get guidance. Additionally, you'll have access to an online community and a comprehensive resource library. This will be Discord most likely.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    What makes this course different from other coding bootcamps or online courses?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">Unlike traditional coding bootcamps, this course focuses on using AI to simplify the software development process, making it accessible to non-technical users. Our approach is practical, with a strong emphasis on real-world applications and personal mentorship. <br>And, frankly, this is the way product-/ software development will happen in the future. It will be clearly outlining the requirements utilizing our proven frameworks, as well as iterating over the solutions.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    How will this course benefit my career or personal projects?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">By learning to leverage AI for software development, you'll acquire a valuable skill set that is increasingly in demand. This can open up new career opportunities (imagine you have an idea in the morning and can demo it in the afternoon), enhance your current role, or help you develop personal projects more effectively. You identify a need, build the solution!</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    What if I don't have any specific software ideas yet?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">The course doesn’t include an explicit brainstorming sessions, but we’ll discuss many project ideas to help you identify opportunities in your personal or professional life where a software solution could be beneficial. By having community access through the Discord channel, you can interact and team up with peers or like-minded people.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    Is this course relevant for business applications?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">Absolutely. The skills taught in this course are applicable in various business contexts, from automating processes to developing customer-facing applications. We cover both theoretical and practical aspects, ensuring you're prepared to implement solutions in a business environment.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    How can I be sure that learning to use AI for developing software is worthwhile?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">AI is transforming industries by making complex tasks more accessible. As an early mover, you'll gain a competitive advantage in a rapidly evolving landscape, positioning yourself as a forward-thinking innovator. You’ll be in a position to act on the top ideas you have, solving problems in your professional and personal part of life.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    How long does shipping take?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer"></div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    What if I don't have a lot of time to dedicate to the course?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">The course is designed to be flexible, allowing you to learn at your own pace. You can access the materials at any time (BUT MAKE SURE YOU ARE PART OF THE FIRST BATCH), fitting the learning process into your schedule as needed.</div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    What happens after I finish the course?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">Upon completion, you'll have a solid foundation in using AI for software development, along with a portfolio of projects that demonstrate your skills. You'll also remain part of our community, with continued access to resources and potential networking opportunities.</div>
            </div>

            <div class="faq-item" style="border-bottom: 1px solid #ccc;">
                <div class="faq-question">
                    Will I get a completion certificate?
                    <i class="fa-solid fa-angle-down icon"></i>
                </div>
                <div class="faq-answer">You actually don’t need a certificate. With the skills you have acquired this truely doesn’t matter anymore, because you can let your actions speak! <br>That said, upon your request for that, we can give you your individual completion certificate.</div>
            </div>
        </div>
`;
document.getElementById("FAQ").innerHTML=FAQ;


// FAQ slidings
var items = document.getElementsByClassName("faq-item");
for (var i = 0; i < items.length; i++) {
    items[i].querySelector(".faq-question").addEventListener("click", function () {
        var parent = this.parentNode;
        if (parent.className.includes("open")) {
            parent.className = "faq-item";
        } else {
            parent.className = "faq-item open";
        }
    });
}


// join batch
const join=`
    <div class="heading">Join the first batch of AI Software Builders</div>
    <div class="price">₹119.00</div>
    <div class="text">One time</div>
    <p>The Updated 1st batch of the world’s most enabling course on AI. Learn how to build anything with AI.</p>
    <button>GET THE COURSE</button>
    <ul>
        <li>✓ Comprehensive Video Lessons + Frameworks</li>
        <li>✓ Office Hours w/ Martin (+ optional private sessions)</li>
        <li>✓ Unlimited Lifetime Access</li>
    </ul>
`;
document.getElementById("join").innerHTML=join;


// get in touch
const contact=`
    <div class="heading">Get in touch.</div>
    <p>Do you want a group training (10+ people)? Feel free to contact us!</p>
    <button>CONTACT US</button>
`;
document.getElementById("contact").innerHTML=contact;


// footer
const footer = `
    <div class="list1">
        <ul>
            <li>GenerativeAI.net</li>
            <li>Nymphenburger Strasse</li>
            <li>München, BY,</li>
            <li>Germany</li>
            <li>generativeai.net@gmail.com</li>
        </ul>
    </div>
    <div class="list2">
        <ul>
            <li><a href="https://www.linkedin.com/company/generative-ai/" target="_blank">LinkedIn</a></li>
            <li><a href="http://instagram.com/squarespace/" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/squarespace" target="_blank">Facebook</a></li>
            <li><a href="https://x.com/squarespace" target="_blank">Twitter</a></li>
        </ul>
    </div>
    <div class="terms"><a href="https://generativeai.net/terms-conditions">Terms and conditions</a></div>
`;
document.getElementById("footer").innerHTML = footer;