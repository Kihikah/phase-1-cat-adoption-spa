# Cat Adoption SPA
## Project Overview
- This is a Single Page Application (SPA) for adopting cats. Users can browse a list of adorable cats available for adoption, view their details, and adopt them. Upon adoption, the cat is removed from the list. 
- In the future, the web app should seamlessly allow the addition of new cats, whether they are born within the SPA, rescued as strays from the streets, or donated by well-wishers.
The "Adopt" button functions as a selling action, removing the selected cat from the list and redirecting the user to a page where they can enter their adoption details and complete the required payment for the cat.


## Features
- Fetches cat data dynamically from a public API.  
- Displays cat images, names, and adoption statuses.  
  - Includes additional details like health condition, age, etc.(future to be added features)  
- Users can adopt a cat by clicking a button, which removes it from the list.(should take the user to adoptors page to input their details and pay required fee to adopt the cat)
- A polished and responsive UI using HTML, CSS, and JavaScript.  
- Uses asynchronous API requests to fetch and update cat data.
 
 ## Live Demos


 ## Technologies Used
- **HTML5** – Structure of the web page  
- **CSS** – Styling and layout  
- **JavaScript (ES6+)** – Logic, API interaction, and event handling  
- **JSON Server / Public API** – Fetching cat data  
- **Git & GitHub** – Version control and hosting

## Project Setup Instructions
Follow these steps to set up and run the project locally:

Clone the repository

```sh
git clone https://github.com/Kihikah/phase-1-cat-adoption-spa.git
cd phase-1-cat-adoption-spa
```
Open the project
```sh
code . 
```
Start a simple server
If using a JSON file, start a local server:
```sh
json-server --watch db.json
```

Open index.html in a browser
```sh
xdg-open index.html  # On Linux
start index.html      # On Windows
open index.html       # On macOS
```

## Project Requirements Checklist
- ✅ Well-documented README  
- ✅ Polished, portfolio-quality design  
- ✅ Fully functional SPA with adoption feature  
- ✅ Uses a public API to fetch cat data  
- ✅ Includes at least 3 event listeners  
- ✅ Hosted on GitHub Pages 

## Author
- 👤 Kariuki Kihikah🔗 https://github.com/Kihikah
- 📧 Contact: kariukikihikah@gmail.com