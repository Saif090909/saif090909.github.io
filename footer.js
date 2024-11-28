// Get the footer container element where the content will be inserted
const footerContainer = document.getElementById('footer-container');

// Create the elements for the footer content
const footerDiv = document.createElement('div');
footerDiv.className = 'footer';
footerDiv.style.backgroundColor = "#FFEB3B"; // Yellow background
footerDiv.style.padding = "20px";
footerDiv.style.borderRadius = "10px";
footerDiv.style.textAlign = "center";

// Create the h2 element
const h2 = document.createElement('h2');
h2.textContent = "Get in touch with my cubing academy!";
h2.style.color = "#0F67B1";
h2.style.marginLeft = "10px"; // Add 10px left margin

// Create the p element
const p = document.createElement('p');
p.textContent = "If you are interested in how to solve a Rubik's cube.";
p.style.fontSize = "large";
p.style.marginLeft = "10px"; // Add 10px left margin

// Add the copyright text
const copyright = document.createElement('p');
copyright.textContent = "@2024 - Saif Ismael Alkhezani";
copyright.style.color = "black";
copyright.style.fontSize = "small";
copyright.style.marginTop = "10px";

// Social media links with Bootstrap icons
const socialMediaLinks = [
    { href: "https://rubiks.ae/", iconClass: "bi bi-globe", altText: "Website" },
    { href: "https://www.youtube.com/channel/UC2FVreqW1Mv0BAP81d5Plkg", iconClass: "bi bi-youtube", altText: "YouTube" },
    { href: "https://www.instagram.com/rubiks_dubai/", iconClass: "bi bi-instagram", altText: "Instagram" },
    { href: "https://www.tiktok.com/@gd.crit", iconClass: "bi bi-tiktok", altText: "TikTok" },
    { href: "https://www.linkedin.com/in/saif-ismael-8398b82a5/", iconClass: "bi bi-linkedin", altText: "LinkedIn" }
];

// Loop through the links to create the icons
socialMediaLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.target = "_blank"; // Open link in a new tab
    anchor.rel = "noopener noreferrer";
    anchor.style.margin = "0 10px"; // Add spacing between icons
    anchor.style.transition = "color 0.3s ease, filter 0.3s ease"; // Smooth hover effects
    anchor.setAttribute('aria-label', link.altText); // Accessibility label
    anchor.style.marginTop = '10px';

    // Create the icon
    const icon = document.createElement('i');
    icon.className = link.iconClass;
    icon.style.fontSize = "1.5rem";
    icon.style.color = "#000"; // Icon color (black by default)
    icon.style.transition = "filter 0.3s ease"; // Smooth hover effect

    
    // Add hover effect dynamically
    anchor.addEventListener("mouseover", () => {
        icon.style.filter = "invert(1)"; // Invert icon colors
    });
    anchor.addEventListener("mouseout", () => {
        icon.style.filter = "invert(0)"; // Revert to original colors
    });

    // Append the icon to the anchor
    anchor.appendChild(icon);

    // Append the anchor to the footer div
    footerDiv.appendChild(anchor);
});

// Append the h2, p, and copyright to the footerDiv
footerDiv.appendChild(h2);
footerDiv.appendChild(p);
footerDiv.appendChild(copyright);

// Append the footerDiv to the footer container
footerContainer.appendChild(footerDiv);