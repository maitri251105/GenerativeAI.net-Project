// Header
const header_content = `
    <div class="logo">
            <img src="images/logo_genai_color_transparentbg.png" alt="logo">
    </div>
    <ul>
        <li class="cur-page"><a href="index.html">Home</a></li>
        <li class="underline"><a href="services.html">Services</a></li>
        <li class="underline"><a href="code.html">Everyone can code! ✨</a></li> 
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


// AI Agents
const AI_agents = `
    <div class="heading">
        <p>What is Generative AI?</p>
        <p>What are LLMs and SLMs?</p>
        <p>What is a RAG?</p>
        <p>What are AI Agents?</p>
     </div>
     <div class="content">
        <p><b>Generative AI</b> creates new content, like text or images, based on patterns in data. <b>Large Language Models (LLMs)</b> are a powerful form of this AI, generating human-like text, while <b>Small Language Models (SLMs)</b> focus on specialized tasks with less data. <b>Retrieval-Augmented Generation (RAG)</b> enhances these models by pulling in external information for more accurate results. </p><br>
        <p><b>AI Agents</b> use generative AI to autonomously perform tasks such as writing or research. Together, they represent cutting-edge advancements in automation and creativity.</p><br>
        <p>Learn it all on <b>generativeai.net.</b></p>
    </div>
`;
document.getElementById("AI-agents").innerHTML = AI_agents;


// Quote
const quote = `
    <div class="text">“AI can not only boost our analytic and decision-making abilities but also heighten creativity.”</div>
    <div class="author">— Harvard Business Review</div>
`;
document.getElementById("quote").innerHTML = quote;


// power
const power = `
    <div class="heading">The Power of Generative AI</div>
    <div class="text">
        <p>Generative AI is revolutionizing communication, work, and innovation.</p><br>
        <p>With tools like ChatGPT, Gemini, and ClaudeAI reaching millions of users, its impact is undeniable.</p><br>
        <p>Its widespread use on GitHub shows its transformative power. Already reshaping industries, its influence will only expand. </p><br>
        <p>Let’s explore some key applications:</p>
    </div>
`;
document.getElementById("power").innerHTML = power;


// keys
const keys = `
    <div class="block1 blocks">
        <div class="content">
            <div class="heading">Text Generation</div>
            <div class="text">
                <p>Text Generation involves using machine learning models to generate new text based on patterns learned from existing text data. The models used for text generation can be <b>Markov Chains, Recurrent Neural Networks</b> (RNNs), and more recently, <b>Transformers</b>, which have revolutionized the field due to their extended attention span. Text generation has numerous applications in the realm of natural language processing, chatbots, and content creation.</p><br>
                <p>🪄 Application: <a href="ChatGPT">ChatGPT</a>, developed by OpenAI, is a successful platform that uses Text Generation to generate human-like responses in chat conversations. </p>
            </div>
        </div>
        <div class="image">
            <img src="images/thumbnail.webp" alt="image">
            <p>Example of ChatGPT in use</p>
        </div>
    </div>
    <div class="block2 blocks">
        <div class="image">
            <img src="images/ImageGeneration.png" alt="">
            <p>Image generated with MidJourney</p>
        </div>
        <div class="content">
            <div class="heading">Image Generation</div>
            <div class="text">
                <p>Image Generation is a process of using deep learning algorithms such as <b>VAEs, GANs,</b> and more recently <b>Stable Diffusion,</b> to create new images that are visually similar to real-world images. Image Generation can be used for data augmentation to improve the performance of machine learning models, as well as in creating art, generating product images, and more.</p><br>
                <p>🪄 Application: Very successful platforms such as <a href="https://www.midjourney.com/home">MidJourney</a> and <a href="https://openai.com/index/dall-e-2/">DALL-E</a> have become a popular choice for anyone seeking to generate realistic images through Image Generation techniques.</p>
            </div>
        </div>
    </div>
    <div class="block3 blocks">
        <div class="content">
            <div class="heading">Video and speech Generation</div>
            <div class="text">
                <p>Video Generation involves deep learning methods such as <b>GANs</b> and <b>Video Diffusion</b> to generate new videos by predicting frames based on previous frames. Video Generation can be used in various fields, such as entertainment, sports analysis, and autonomous driving. Video Generation can be often seen in use with Speech Generation. The models used for speech generation can be powered by <b>Transformers</b>. Speech Generation can be used in text-to-speech conversion, virtual assistants, and voice cloning. </p><br>
                <p>🪄 Application: Platforms such as <a href="https://www.aistudios.com/">DeepBrain</a> and <a href="">Synthesia</a> utilize Video and Speech Generation to create realistic video content, that appears as if a human was speaking on camera.</p>
            </div>
        </div>
        <div class="image">
            <img src="images/thumbnail (1).webp" alt="">
            <p>Video fully generated (including the human avatar) with <a href="https://www.aistudios.com/">DeepBrain AI Studio.</a> Prompt given: “How to prepare for a spaceship adventure as a cat”.  </p>
        </div>
    </div>
    <div class="block4 blocks">
        <div class="image">
            <img src="images/dataaugumentation.png" alt="image">
            <p></p>
        </div>
        <div class="content">
            <div class="heading">Data Augumentation</div>
            <div class="text">
                <p>Data augumentation is a process of generating new training data by applying various image transformations such as flipping, cropping, rotating, and color jittering. The goal is to increase the diversity of training data and avoid overfitting, which can lead to better performance of machine learning models.</p><br>
                <p>🪄 Application: <a href="https://synthesis.ai/">Synthesis AI</a> simplifies the process of building and optimizing machine learning models by providing a platform for creating AI models using automated machine learning techniques.</p>
            </div>
        </div>
    </div>
    <div class="block5 blocks">
        <div class="content">
            <div class="heading">…And much more</div>
            <div class="text">
                <p><b>Generative AI</b> has a diverse range of applications that go beyond text, video, image, speech generation, and data augmentation. For instance, it can be used for <b>music generation, game development, healthcare,</b> and more. In healthcare, generative AI can help <b>generate synthetic medical data to train machine learning models, develop new drug candidates, and design clinical trials.</b> These are just some examples of the many possibilities for generative AI, and as the technology advances, we can expect to see more applications emerge.</p><br>
                <p>It's an exciting time to dive into Generative AI! With this field in its early stages, those who gain the necessary skills and knowledge have the opportunity to shape its future. Get ready for an exciting journey!</p>
            </div>
        </div>
        <div class="image">
            <img src="images/Healthcare.png" alt="image">
            <p>Source: <a href="https://arxiv.org/pdf/2210.04133">Adapting Pretrained Vision-Language Foundational Models to Medical Imaging Domains.</a></p>
        </div>
    </div>
`;
document.getElementById("keys").innerHTML = keys;


// learn more
const learn_more = `
    <div class="heading">Want to learn more about Generative AI?</div>
    <div class="content">
        <span>Get the Course</span>
        <p>Join our comprehensive online course and learn the fundamentals of this cutting-edge topic area. Whether you're a beginner or an experienced professional, this course will equip you with the knowledge you need to succeed. Enroll now!</p>
        <button><a href="https://generativeai.net/course">LEARN MORE</a></button>
    </div>
`;
document.getElementById("learn-more").innerHTML = learn_more;


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