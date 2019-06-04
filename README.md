Universal Resume Template
---------

Resume website template that works on a monitor, paper, and phone.
Built with amazing [tailwindcss](https://tailwindcss.com/).

Letter Demo: https://universal-resume.netlify.com/  
A4 Demo: https://universal-resume-a4.netlify.com  
Mobile Demo: https://www.responsinator.com/?url=https%3A%2F%2Funiversal-resume.netlify.com%2F

**How to print or save it as a pdf?**  
Right-click -> Print.

**Does it support A4 and Letter paper sizes?**  
Yes, replace all *-letter classes with *-a4, uncomment specific media query, and theme screens config.

**What font does it use?**  
Per [Butterick’s](https://practicaltypography.com/) free fonts recommendations, I’ve chosen IBM Plex.

**Why it’s made?**  
I couldn’t find any formal and professional resume (CV) website with good typography, that is optimized for print, pdf, and mobile. Also, researching what recruiters want, my priorities were fast scanning time and all content to fit on one page. 

**What’s the status of its development?**  
Now, it’s in alpha phase. I’ll continue working on it almost daily, indefinitely.

Hire me
---------

I will make you a resume in 1–2 days. Feel free to contact me on [Fiverr](https://www.fiverr.com/webpraktikos/create-a-basic-website-in-wordpress-or-just-html) or hi@webpraktikos.com

How to run it
---------

Clone the repository:

```
git clone https://github.com/webpraktikos/universal-resume.git universal-resume
cd universal-resume
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run serve
```

For the CSS optimizations, run:

```
npm run public
```

A4 Size
---------

In order to change the default size (letter) to A4, follow these 3 steps:

**1.** Inside the `public/index.html` file, replace every `-letter` with `-a4`.

**2.** Inside the `tailwind.config.js` file, uncomment the code block below `/* For A4 size */`, then comment the code block below `/* For Letter size */`

**3.** Inside the `tailwind.css` file, uncomment the code below `/* For A4 size */`, then comment the code below `/* For Letter size */`

Custom CSS
---------

Code from `tailwind.config.js` and `tailwind.css` is compiled to `public/style.css`. Default tailwind CSS is overwritten or extended with `tailwind.config.js`. Here is the default tailwind config [defaultConfig.stub.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js), and here’s the additional information from tailwind documentation: [theme](https://tailwindcss.com/docs/theme/#app). Ordinary CSS is added to the `tailwind.css` file.

Licence
---------

The GNU General Public License v3.0

Since 2019 — WebPraktikos <hi@webpraktikos.com> [@webpraktikos](https://twitter.com/webpraktikos).
