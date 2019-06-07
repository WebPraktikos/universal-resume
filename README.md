Universal Resume Template
---------

Resume website template that works on a monitor, paper, and phone.
Built with amazing [tailwindcss](https://tailwindcss.com/).

Letter Demo: https://universal-resume.netlify.com/  
A4 Demo: https://universal-resume-a4.netlify.com/  
Mobile Demo: https://www.responsinator.com/?url=https%3A%2F%2Funiversal-resume.netlify.com%2F/  

**How to print or save it as a pdf?**  
Right-click -> Print.

**Does it support A4 and Letter paper sizes?**  
Yes, replace all *-letter classes with *-a4, uncomment specific media query, and theme screens config.

**What font does it use?**  
Per [Butterick’s](https://practicaltypography.com/) free fonts recommendations, I’ve chosen IBM Plex.

**Why it’s made?**  
I couldn’t find any formal and professional resume (CV) website with good typography, that is optimized for print, pdf, and mobile. Also, researching what recruiters want, my priorities were fast scanning time and all content to fit on one page. 

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

Starting Point
---------

`public/index.html` is the file where the content goes. By copy-pasting html, add new content — pages, sections, sub-sections, paragraphs, and lists.

`npm run public` will make **public** directory ready for drag-n-drop to, for example, https://app.netlify.com/drop (registration required beforehand).

Classical CSS Variant
---------



Tailwind CSS
---------

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It has great [documentation](https://tailwindcss.com/docs/installation).

Custom CSS
---------

Code from `tailwind.config.js` and `tailwind.css` is compiled to `public/style.css`. Default tailwind CSS is overwritten or extended with `tailwind.config.js`.

Here is the default tailwind config: [defaultConfig.stub.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js), and here’s the additional information from tailwind documentation: [theme](https://tailwindcss.com/docs/theme/#app).

Need to quickly change the style — just add a class to the html element and write CSS inside the `tailwind.css` file.

Columns
---------

The `column-count` CSS property breaks an element's content into the specified number of columns. 

The `column-fill` CSS property controls how an element's contents are balanced when broken into columns.

`<div>` beneath the `<!-- Column -->` comment controls columns display. Removing `col-fill` will make both columns equally tall.

`<article>` next to the comment that is shown below is the last element in the column. Its margin-bottom is 0 (mb-0) in order to preserve page padding (margin).
```
<!-- mb-4 when it wasn’t the last in the column -->
```

A4 Size Variant
---------

In order to change the default size (letter) to A4, follow these 3 steps:

**1.** Inside `public/index.html`, replace every `-letter` with `-a4`.

**2.** Inside `tailwind.config.js`, uncomment the code block below `/* For A4 size */`, then comment the code block below `/* For Letter size */`

**3.** Inside `tailwind.css`, uncomment the code below `/* For A4 size */`, then comment the code below `/* For Letter size */`

Blocking Search Engines
---------

Disable search engine indexing by uncommenting the following code:

```
<!-- <meta name="robots" content="noindex"> -->
```

Customer Support
---------

Contact me at https://themeforest.net/user/webpraktikos or hi@webpraktikos.com

If you have any question, comment, or get stuck, feel free to message me. Always happy to hear from you.  

Updates
---------

I will work on Universal Resume almost daily, indefinitely. Every 7 days is the new release.

Changelog
---------
