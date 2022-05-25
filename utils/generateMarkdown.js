function renderLicenseBadge(license) {
  let res = "";
  if (license === "MIT")
    res =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]";
  else if (license === "ISC")
    res =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  else if (license === "GPLv2")
    res =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  else if (license === "GPLv3")
    res =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  else res = "";
  res = res + `(${renderLicenseLink(license)})`;
  return res;
}

function renderLicenseLink(license) {
  if (license === "MIT") return "https://opensource.org/licenses/MIT";
  else if (license === "ISC") return "https://opensource.org/licenses/ISC";
  else if (license === "GPLv2")
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  else if (license === "GPLv3") return "https://www.gnu.org/licenses/gpl-3.0";
  else return "";
}

function renderLicenseSection(license) {
  return `## License
  This application is distributed under the [${license}](${renderLicenseLink(
    license
  )})`;
}

function renderQuestionSection(username, email) {
  return `## Questions
${username ? "[Github profile](https://github.com/" + username + ")" : ""}<br>
${email ? "Contact me on " + email + " for additional questions" : ""}`;
}

function renderTableOfContents(data) {
  let index = 1;
  let res = `## Table of Contents\n`;
  if (data.installation) {
    res += `${index}. [Installation](#installation)\n`;
    index += 1;
  }
  if (data.usage) {
    res += `${index}. [Usage](#usage)\n`;
    index += 1;
  }
  if (data.contriubtion) {
    res += `${index}. [Contributing](#contributing)\n`;
    index += 1;
  }
  if (data.test) {
    res += `${index}. [Tests](#tests)\n`;
    index += 1;
  }
  if (data.license) {
    res += `${index}. [License](#license)\n`;
    index += 1;
  }
  if (data.username || data.email) {
    res += `${index}. [Questions](#questions)\n`;
    index += 1;
  }
  return res;
}

function renderDescriptionSection(data) {
  return `## Description
${data}`;
}

function renderInstallationSection(data) {
  return `## Installation
${data}`;
}

function renderUsageSection(data) {
  return `## Usage
${data}`;
}

function renderContributingSection(data) {
  return `## Contributing
${data}`;
}

function renderTestsSection(data) {
  return `## Tests
${data}`;
}

function generateMarkdown(data) {
  return `
# ${data.projectTitle}
${renderLicenseBadge(data.license)}
${data.description ? renderDescriptionSection(data.description) : ""}
${renderTableOfContents(data)}
${data.installation ? renderInstallationSection(data.installation) : ""}
${data.usage ? renderUsageSection(data.usage) : ""}
${data.contriubtion ? renderContributingSection(data.contriubtion) : ""}
${data.test ? renderTestsSection(data.test) : ""}
${renderLicenseSection(data.license)}
${
  data.username || data.email
    ? renderQuestionSection(data.username, data.email)
    : ""
}`;
}

module.exports = generateMarkdown;
