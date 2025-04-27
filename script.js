// script.js

function loadExperience() {
  const experienceSelect = document.getElementById('experienceSelect');
  const experienceDetails = document.getElementById('experienceDetails');

  const selectedValue = experienceSelect.value;

  if (selectedValue === "pm") {
    experienceDetails.innerHTML = `
      <h3>Product Manager | o9 Solutions (07/2023 – Present)</h3>
      <ul>
        <li>Collaborated with leading SRM solution providers in Korea to design and deliver innovative SRM solutions.</li>
        <li>Led workshops on product management best practices, enabling partners to adopt scalable platform modeling constructs.</li>
        <li>Built comprehensive paper models, data models, and prototypes tailored to partner SRM use cases.</li>
        <li>Identified 150+ enhancement requests and partnered with R&D to evolve the platform into a full transactional system.</li>
        <li>Released Forecast and Inventory Collaboration reference products.</li>
        <li>Automated procure-to-pay workflows using Python-based FSMs and JavaScript-IBPL actions.</li>
      </ul>
    `;
  } 
  else if (selectedValue === "qa") {
    experienceDetails.innerHTML = `
      <h3>QA Engineer | o9 Solutions (01/2023 – 07/2023)</h3>
      <ul>
        <li>Led PSR Testing at Toyota using JMeter, BlazeMeter, Fiddler, Kubernetes, and ELK Stack.</li>
        <li>Optimized BOM parameters including Threadpool Count, WebAPIs, Redis, MongoDB, and vCPUs.</li>
        <li>Implemented partitioning strategies and optimized update queries to improve throughput.</li>
        <li>Compiled and reported PSR Testing Results, providing actionable insights to influence production system architecture.</li>
      </ul>
    `;
  } 
  else {
    experienceDetails.innerHTML = "";
  }
}

// Animation for content fade in
document.addEventListener("DOMContentLoaded", function() {
  const experienceDetails = document.getElementById('experienceDetails');
  if (experienceDetails) {
    experienceDetails.style.opacity = 0;
    experienceDetails.style.transition = "opacity 1s ease-in-out";
  }
});
