// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // Navbar Toggle Functionality
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Close navbar when a nav link is clicked (for mobile view)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        // Check if it's mobile
        navbarToggler.click(); // Simulate button click to close the menu
      }
    });
  });

  // Theme Toggle Functionality
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Function to set theme
  function setTheme(theme) {
    body.classList.toggle("dark-mode", theme === "dark");
    icon.classList.toggle("fa-moon", theme === "dark");
    icon.classList.toggle("fa-sun", theme === "light");
  }

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Toggle theme and save to localStorage
  themeToggle.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  });
});

// Hero Section:
// Typing Text Animations (Using Typed.js)
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typing", {
    strings: [
      "Graphic Designer",
      "Video Editor",
      "Digital Marketer",
      "Content Writer",
      "Social Media Marketer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// About:
// Animation on scroll
function revealOnScroll() {
  const aboutSection = document.querySelector(".about-section");
  const aboutImage = document.querySelector(".about-image");
  const aboutContent = document.querySelector(".about-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation styles only when the section is in view
          aboutImage.style.animation = "fadeInLeft 1s ease forwards";
          aboutContent.style.animation = "fadeInRight 1s ease forwards";
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );

  observer.observe(aboutSection); // Start observing the about section
}

// Initialize animations when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", revealOnScroll);

// Skills:
// Animate progress bars when they come into view
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.getAttribute("data-width");
          if (progressBar.style.width !== width + "%") {
            progressBar.style.width = width + "%";
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  progressBars.forEach((bar) => observer.observe(bar));
};

// Animate skill cards when they come into view
const animateSkillCards = () => {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          entry.target.style.animation = `fadeInUp 0.6s ease forwards ${
            index * 0.2
          }s`;
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
};

// Add animation keyframes (No need to insert empty head tag)
const addAnimationKeyframes = () => {
  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
  document.head.appendChild(style);
};

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  addAnimationKeyframes(); // Ensure keyframes are added before animations
  animateProgressBars();
  animateSkillCards();
});

// Experience Section:
// Animate timeline items when they come into view
const animateTimeline = () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target); // Stop observing once item is in view
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    observer.observe(item);
  });
};

// Initialize animations
document.addEventListener("DOMContentLoaded", animateTimeline);

// Additional animations and interactions for new experience entries
const enhanceNewExperienceEntries = () => {

  // Smooth reveal for achievements
  const achievements = document.querySelectorAll(".achievements li");
  achievements.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            }, index * 100);
            observer.unobserve(entry.target); // Stop observing once item is in view
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(item);
  });
};

// Initialize enhancements
document.addEventListener("DOMContentLoaded", () => {
  enhanceNewExperienceEntries();
});

// Animate education cards when they come into view
const animateEducationCards = () => {
  const cards = document.querySelectorAll(".education-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeInUp 0.6s ease forwards ${
            index * 0.2
          }s`;
          observer.unobserve(entry.target); // Stop observing once item is in view
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
};

// Initialize animations
document.addEventListener("DOMContentLoaded", animateEducationCards);


// Contact Section: 
// Real-time form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const submitButton = form.querySelector("button");

  // Initialize EmailJS with your own user ID
  emailjs.init("F0eTCd7n9anPr67P4");

  // Form Validation Functions
  function validateInput(inputElement, regex, errorMessageText) {
    const inputValue = inputElement.value.trim();
    const errorElement = inputElement.nextElementSibling;
    if (inputValue === "" || (regex && !regex.test(inputValue))) {
      errorElement.textContent = errorMessageText;
      errorElement.style.display = "block";
      return false;
    }
    errorElement.style.display = "none";
    return true;
  }

  // Real-time Validation for each field
  [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(
    (input) => {
      input.addEventListener("input", function () {
        switch (input.id) {
          case "name":
            validateInput(nameInput, null, "Full Name can't be blank");
            break;
          case "email":
            validateInput(
              emailInput,
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              "Please enter a valid email address"
            );
            break;
          case "phone":
            validateInput(
              phoneInput,
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              "Please enter a valid phone number"
            );
            break;
          case "subject":
            validateInput(subjectInput, null, "Subject can't be blank");
            break;
          case "message":
            validateInput(messageInput, null, "Message can't be blank");
            break;
        }
      });
    }
  );

  // Form Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateInput(
      nameInput,
      null,
      "Full Name can't be blank"
    );
    const isEmailValid = validateInput(
      emailInput,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    );
    const isPhoneValid = validateInput(
      phoneInput,
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Please enter a valid phone number"
    );
    const isSubjectValid = validateInput(
      subjectInput,
      null,
      "Subject can't be blank"
    );
    const isMessageValid = validateInput(
      messageInput,
      null,
      "Message can't be blank"
    );

    // If any validation fails, stop submission
    if (
      !isNameValid ||
      !isEmailValid ||
      !isPhoneValid ||
      !isSubjectValid ||
      !isMessageValid
    ) {
      return;
    }

    // Disable submit button and show loading state
    submitButton.classList.add("loading");
    submitButton.disabled = true;

    // Clear previous messages
    successMessage.textContent = "";
    errorMessage.textContent = "";

    // Prepare email parameters
    const templateParams = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      phone_number: phoneInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_9ktvkr4", "template_4qa43we", templateParams)
      .then(
        function (response) {
          successMessage.textContent = "Message sent successfully!";
          form.reset(); // Clear form
        },
        function (error) {
          errorMessage.textContent =
            "Failed to send message. Please try again.";
          console.error("Email send error:", error);
        }
      )
      .finally(function () {
        // Restore submit button
        submitButton.classList.remove("loading");
        submitButton.disabled = false;
      });
  });
});


// Footer Section:
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for all navigation links
  document.querySelectorAll(".footer-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
