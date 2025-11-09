function loadContent(section) {
  const content = document.getElementById("content");

  const sections = {
    about: `
        <h3>About Me</h3>
        <p>
            Hi there! I am Lohith. <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;I'm currently a Final Year Computer Science undergraduate student at <a   href="https://www.psgtech.edu/" target="_blank">PSG College of Technology</a> with a deep interest in applied artificial 
            intelligence in specialized domains. My current work focuses on building privacy-preserving AI pipelines, particularly 
            how we can train and deploy models on sensitive data while ensuring confidentiality, reliability, and trust. I'm 
            especially excited about areas like homomorphic encryption, federated learning, and real-vs-synthetic signal analysis, 
            where theory meets practical, real-world constraints.
        </p>
        
        <h3>Experience</h3>

            <div class="exp-card">
            <img class="exp-logo" src="samsung.png" alt="Blue River Logo">
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
            <img class="exp-logo" src="fidelity-investments-logo-3.png" alt="Blue River Logo">
            <div class="exp-body">
            <div class="exp-header">
                <div class="exp-title">Fidelity Investments</div>
                <div class="exp-dates">May 2025 - July 2025</div>
            </div>
            <div class="exp-role">Software Development Engineer Intern</div>
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

window.onload = () => loadContent('about');


