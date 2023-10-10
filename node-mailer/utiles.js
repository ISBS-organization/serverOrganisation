const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// Read the HTML file
exports.getHtmlFile = (user, link, fileName) =>{
  const {email, firstName, lastName} = user
  const templatePath = path.join("node-mailer", "EmailsTemplates", fileName);
  const template = fs.readFileSync(templatePath, "utf-8");
  const compiledTemplate = handlebars.compile(template);
  const html = compiledTemplate({link, firstName, lastName, email});
  return html
}