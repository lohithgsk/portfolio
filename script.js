function loadContent(section) {
  const content = document.getElementById("content");

  const sections = {
    about: `
        <h3>About Me</h3>
        <p>
            Hi there! I'm Lohith, a Master's student at <a href="https://www.ncsu.edu/" target="_blank">North Carolina State University</a>. 
            I enjoy building things with AI and, more importantly, understanding how they work when they are put into the real world. Before starting my Master's, 
            I interned at <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a> and <a href="https://www.fidelity.com/" target="_blank">Samsung R&D India</a>, where I got to work on real-world engineering and AI problems. Those experiences made me appreciate the 
            difference between getting something to work in a prototype and building something that is actually useful, reliable, and practical.
            <br><br>
            I'm especially interested in problems where AI meets systems, security, and privacy. I like digging into how things work, experimenting with different ideas, 
            and figuring out how to turn them into something useful. 

        </p>

        <h3>Research Interests</h3>
            My research interests lie at the intersection of deep learning, systems, and cybersecurity. I'm particularly interested in using deep learning to solve scientific
            and engineering problems, including Physics-Informed Neural Networks (PINNs). I developed <a href="https://github.com/Aeroscience-Computations-Analysis-Lab/underPINN" target="_blank">underPINN</a>, a framework for 
            building and training PINNs, which sparked my 
            interest in scientific machine learning and the intersection of neural networks with numerical methods. 
            <br><br>

            I'm also interested in building secure and privacy-preserving AI systems, particularly for sensitive data. This includes exploring homomorphic encryption, 
            federated learning, and confidential machine learning.
        `,

        cv: `
        <h2>Experience</h2>
            <div class="exp-card">
            <img class="exp-logo logo-light" src="pictures/fidelity-investments-logo.png" alt="Fidelity Investments Logo">
            <img class="exp-logo logo-dark" src="pictures/fidelity-investments-logo-dark.png" alt="Fidelity Investments Logo">
            <div class="exp-body">
            <div class="exp-header">
                <div class="exp-title">Fidelity Investments</div>
                <div class="exp-dates">Jan 2026 - June 2026</div>
            </div>
            <div class="exp-role">Software Development Engineer Intern</div>
            <ul class="exp-details">
                <li>Built an Agentic AI system to trace logs across complex data pipelines, identify failure points, and accelerate root cause analysis. 
                Also developed an AI-powered pull request review framework using specialized agents for triage, logic validation, and security analysis of GitHub code changes.</li>
                <li>Automated EC2 rehydration workflows to improve recovery efficiency and reduce manual intervention. Additionally, developed a Snowflake-based SLA monitoring dashboard 
                providing real-time visibility into transmission workflows, enabling performance tracking and proactive operational decision-making</li>
            </ul>
            </div>
            </div>

            <div class="exp-card">
            <img class="exp-logo logo-light" src="pictures/iitk.png" alt="IITK Logo">
            <img class="exp-logo logo-dark" src="pictures/iitk-dark.png" alt="IITK Logo">
            <div class="exp-body">
            <div class="exp-header">
                <div class="exp-title">Indian Institute of Technology, Kanpur</div>
                <div class="exp-dates">December 2025</div>
            </div>
            <div class="exp-role">Research Intern</div>
            <ul class="exp-details">
                <li> Worked with <a href="https://scholar.google.com/citations?user=98htjP4AAAAJ&hl=en" target="_blank">Prof. Rajesh Ranjan</a> in developing underPINN. 
                A modular JAX-based framework for data-driven modeling and analysis of complex turbulent flows,
                enabling scalable Physics-Informed Neural Networks (PINNs) with support for PDE-constrained learning, domain decomposition, attention mechanisms, 
                and performance-optimized training. </li>
            </ul>
            </div>
            </div>

            <div class="exp-card">
            <img class="exp-logo logo-light" src="pictures/samsung-logo.png" alt="Samsung Logo">
            <img class="exp-logo logo-dark" src="pictures/samsung-logo-dark.png" alt="Samsung Logo">
            <div class="exp-body">
            <div class="exp-header">
                <div class="exp-title">Samsung R&D Institute India-Bangalore</div>
                <div class="exp-dates">Oct 2024 - May 2025</div>
            </div>
            <div class="exp-role">Research Intern</div>
            <ul class="exp-details">
                <li>Developed a machine learning-based voice authentication system capable of distinguishing between real, 
                recorded, and AI-generated audio, including non-speech sounds.</li>
                <li>Integrated the model into a mobile-first architecture with real-time inference, user feedback, and secure audio processing for enhanced voice-based security applications.</li>
            </ul>
            </div>
            </div>

            <div class="exp-card">
            <img class="exp-logo logo-light" src="pictures/fidelity-investments-logo.png" alt="Fidelity Investments Logo">
            <img class="exp-logo logo-dark" src="pictures/fidelity-investments-logo-dark.png" alt="Fidelity Investments Logo">
            <div class="exp-body">
            <div class="exp-header">
                <div class="exp-title">Fidelity Investments</div>
                <div class="exp-dates">May 2025 - July 2025</div>
            </div>
            <div class="exp-role">Software Development Engineer Intern<br>Summer 2025
            </div>
            
            <ul class="exp-details">
                <li>Involved in developing a proof of concept that integrates optimized Large Language Models (LLMs) with a 
                Retrieval-Augmented Generation (RAG) pipeline to extract actionable insights from unstructured data.</li>
            </ul>
            </div>
        </div>
        `,

        publications: `
        <h2>Publications</h2>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">Conference</div>
            <div class="pub-year">2024</div>
            </div>
            <div class="pub-content">
            <strong>Enhancing the Resilience of Privacy-Preserving Machine Learning using Adversarial Techniques</strong><br>
            <div>Aaditya Rengarajan; <u>Lohith Senthilkumar</u>; Amitha Lakshmi Raj; Arun U S</div>
            <div><em>International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSCNC 2024)</em></div>
            <div><b>DOI:</b> <a href="https://doi.org/10.1109/icdscnc62492.2024.10939481" target="_blank">10.1109/icdscnc62492.2024.10939481</a></div>
            </div>
        </div>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">Conference</div>
            <div class="pub-year">2024</div>
            </div>
            <div class="pub-content">
            <strong>FLARE: Federated Learning And Resilient Encryption for Firewalls</strong><br>
            <div><u>Lohith Senthilkumar</u>; Aaditya Rengarajan</div>
            <div><em>IEEE Pune Section International Conference (PuneCon 2024)</em></div>
            <div><b>DOI:</b> <a href="https://doi.org/10.1109/PuneCon63413.2024.10895282" target="_blank">10.1109/PuneCon63413.2024.10895282</a></div>
            </div>
        </div>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">Conference</div>
            <div class="pub-year">2024</div>
            </div>
            <div class="pub-content">
            <strong>SHADOW: A Framework for Systematic Heuristic Analysis and Detection of Observations on the Web</strong><br>
            <div>Aaditya Rengarajan; <u>Lohith Senthilkumar</u>; Neelesh Padmanabh; Akhil Ramalingam</div>
            <div><em>International Conference on Artificial Intelligence, Metaverse and Cybersecurity (ICAMAC 2024)</em></div>
            <div><b>DOI:</b> <a href="https://doi.org/10.1109/ICAMAC62387.2024.10828750" target="_blank">10.1109/ICAMAC62387.2024.10828750</a></div>
            </div>
        </div>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">Conference</div>
            <div class="pub-year">2025</div>
            </div>
            <div class="pub-content">
            <strong>Exploratory Acoustic Feature Analysis for Detecting Bonafide and Replayed Speech</strong><br>
            <div><u>Lohith Senthilkumar</u>; 
                    Saminathan C; 
                    Bragadeesh V; 
                    Manojkumar K; 
                    <a class="author-link" href="https://scholar.google.com/citations?user=SnAAhuAAAAAJ&hl=en" target="_blank">Dr. K Sathiyapriya</a>;
                    <a class="author-link" href="https://scholar.google.co.in/citations?user=JUw98xcAAAAJ&hl=en" target="_blank">Dr. V Santhi</a>; 
                    <a class="author-link" href="https://scholar.google.com/citations?user=eudDgK8AAAAJ&hl=en" target="_blank">Sourabh Tiwari</a>;
                    Rajat Sharma
            </div>
            <div><em>International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)</em></div>
            <div><b>Status:</b> Presented</div>
            </div>
        </div>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">In Progress</div>
            <div class="pub-year"></div>
            </div>
            <div class="pub-content">
            <strong>An Integrated Framework for Automated Debugging, Intelligent Test Generation, and Code Reusability Analysis</strong><br>
            <div>
                <u>Lohith Senthilkumar</u>; 
                Saminathan C; 
                Inniya R G; 
                Prasheetha J; 
                <a class="author-link" href="https://scholar.google.com/citations?user=SnAAhuAAAAAJ&hl=en" target="_blank">Dr. K Sathiyapriya</a></div>
            </div>
        </div>

        <div class="pub-card">
            <div class="pub-tag">
            <div class="pub-type">In Progress</div>
            <div class="pub-year"></div>
            </div>
            <div class="pub-content">
            <strong>Secure Processing of Encrypted Audio for Recognition </strong><br>
            <div>
                <u>Lohith Senthilkumar</u>; 
                Saminathan C; 
                Mehul Dinesh; 
                <a class="author-link" href="https://scholar.google.com/citations?user=8x3AVVwAAAAJ&hl=en" target="_blank">Dr. G R Karpagam Manavalan</a></div>
            </div>
        </div>
        `
  };

  content.innerHTML = sections[section];
}

/* THEME HANDLING */
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const checkbox = document.getElementById('theme-checkbox');
  if (checkbox) checkbox.checked = !isDark;
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  // Dark mode is the default unless the user has explicitly chosen light.
  const isDark = saved ? saved === 'dark' : true;
  document.body.classList.toggle('dark', isDark);
  const checkbox = document.getElementById('theme-checkbox');
  if (checkbox) checkbox.checked = !isDark;
}

window.onload = () => {
  initTheme();
  loadContent('about');
};