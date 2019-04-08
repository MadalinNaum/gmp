function Targets(selector, sourceFile) {
    this.selector = document.querySelector(selector);
    this.sourceFile = sourceFile;
}

Targets.prototype.loadFile = function() {
    $(this.selector).load(this.sourceFile); // jquery load method
}

// View all projects cta button
const viewAllProjects = new Targets('#all-projects','view-all.html'); 

 
// Contact Us navigation button
const contactPage = new Targets('main','contact-us.html');