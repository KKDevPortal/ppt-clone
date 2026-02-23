# 📚 SlideForge – Interactive Presentation & Preparation Helper

## Overview

**SlideForge** is a simple yet powerful **React-based application** designed to help you **prepare for interviews, learn topics, or create interactive presentations**.

With this tool, you can **turn structured JSON data into a fully navigable slide deck**, accessible in **presentation mode**, without manually building each slide in PowerPoint or Google Slides.

---

## 🎯 Purpose

* **Learning & Interview Prep:** Organize topics like React, SQL, or any subject into slides for quick revision.
* **Presentation:** Convert your JSON data into an interactive, fullscreen slide deck.
* **Easy Setup:** No complex CMS or slide software required. Just add your content in `db.json` and it’s ready to go.
* **Reusable & Extensible:** Works for multiple projects, topics, or courses. Each topic becomes a new “project” with slides.

---

## 📝 How It Works

1. **Add Your Data:**
   Define your slides in the `db.json` file with the following structure:

```json
{
  "projects": [
    {
      "id": 1,
      "name": "React Level 1",
      "slides": [
        {
          "slideIndex": 0,
          "slideTitle": "Introduction to React",
          "slideDescription": "Overview of React fundamentals",
          "slidePoints": [
            "React is a JavaScript library",
            "Component-based architecture",
            "Virtual DOM improves performance"
          ]
        }
      ]
    }
  ]
}
```

2. **Start JSON Server:**

```bash
npx json-server --watch db.json --port 5000
```

3. **Run the React App:**

```bash
npm install
npm start
```

4. **Navigate:**

* Dashboard shows all your projects as cards
* Click **Start** → Fullscreen presentation mode
* Navigate slides with **Previous / Next** buttons

---

## 💡 Features

* **Dynamic Slide Loading:** Data-driven slides using JSON
* **Fullscreen Presentation Mode** with carousel navigation
* **Randomized slide colors** for better UX
* **Reusable Slide Cards** on the dashboard
* **Blendable Navbar** with modern glass-morphism design
* **Supports multiple topics/projects**

---

## ⚡ Tech Stack

* **Frontend:** React.js + Tailwind CSS
* **Routing:** React Router v6
* **Data:** JSON Server (`db.json`)
* **Icons:** Lucide React

---

## 🚀 Benefits

* Perfect for **self-study, topic review, and interview prep**
* Convert any structured data into **presentation-ready slides**
* No PowerPoint or Google Slides required
* Lightweight, responsive, and customizable

---

## 🔧 Next Steps / Ideas

* Add **themes** for slides
* Enable **export to PDF / PPT**
* Add **animations for points**
* Add **quiz mode** for interactive learning

---

**SlideForge – Turn your JSON data into interactive slides in seconds!**

## Screenshot
<img width="1910" height="901" alt="image" src="https://github.com/user-attachments/assets/ce7b3aa8-8a93-4535-b95c-16594c9827f2" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5f257b6f-4988-489e-9348-695d2ab24e6a" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4258c2c1-58e7-4502-a2e8-9659778a828b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/28a522a6-7633-46b6-a3b5-3b02ba790ea8" />


---

## run webapp
npm install
npm run dev

## run server
npm run server



