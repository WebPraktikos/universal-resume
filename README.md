Universal Resume Template
---------

Resume website template for print, PDF, mobile, and desktop. Built with amazing [tailwindcss](https://tailwindcss.com/).

Letter Size Demo: https://universal-resume.netlify.com/  
A4 Size Demo: https://universal-resume-a4.netlify.com/  
Multiple Pages Demo: https://universal-resume-pages.netlify.com/  
Mobile Demo: https://www.responsinator.com/?url=https%3A%2F%2Funiversal-resume-pages.netlify.com%2F  

**How to print or save it as PDF?**  
Right-click -> Print.

**Does it support A4 and Letter paper sizes?**  
Yes, replace all *-letter classes with *-a4, and uncomment some specificified code blocks.

**What font does it use?**  
Per [Butterick’s](https://practicaltypography.com/) free fonts recommendations, I’ve chosen IBM Plex.

**Why it’s made?**  
I couldn’t find any formal or professional resume (CV) website with good typography, that is optimized for print, pdf, and mobile. Also, researching what recruiters want, my priorities were fast scanning time and all content to fit on one page. 

How to run it
---------

Navigate to the base directory:

```
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

For the CSS optimizations, just run:

```
npm run public
```

Starting Point
---------

`public/index.html` is the file where the content goes. By copy-pasting html, add new content — pages, sections, sub-sections, paragraphs, and lists.

`npm run public` will make **public** directory ready for drag-n-drop to, for example, https://app.netlify.com/drop (registration required beforehand).

Tailwind CSS
---------

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It has great [documentation](https://tailwindcss.com/docs/installation). 

Basically, you rarely need to do anything outside the index.html. Use together a bunch of pre-made utility classes that reflect a certain design system. There’s no cascade and selector specificity. The result is faster, and much more pleasurable workflow — especially long-term.

Custom CSS
---------

Code from `tailwind.config.js` and `tailwind.css` is compiled to `public/style.css`. Default tailwind CSS is overwritten or extended with `tailwind.config.js`.

Here is the default tailwind config: [defaultConfig.stub.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js), and here’s the additional information from tailwind documentation: [theme](https://tailwindcss.com/docs/theme/#app).

Need to quickly change CSS — just add a class to the html element and write CSS inside the `tailwind.css` file. You don’t need to follow the tailwindcss way.

Columns
---------

Beneath `<!-- Column -->`, removing `col-fill` class will make both columns equally tall.

A4 Size Variant
---------

**Important:** Page will break in form of additional columns if there is too much content for one page.

In order to change the default size (letter) to A4, follow these 3 steps:

**1.** Inside `public/index.html`, replace every `-letter` with `-a4`.

**2.** Inside `tailwind.config.js`, uncomment code block below `/* For A4 size */`, then comment code block below `/* For Letter size */`

**3.** Inside `tailwind.css`, uncomment code below `/* For A4 size */`, then comment code below `/* For Letter size */`

Printing
---------

### Chrome

Right-click -> Print.  
Also, choose the **Save as PDF** option if needed.  

By expanding **More Settings**, change **Page Size** to A4 or Letter.

### Firefor

File -> Print.  

Choose A4 or Letter size by navigating to **Properties -> Advanced -> Paper Size**.

### Adobe Acrobat Reader

File -> Print.  

Click on the **Page Setup** button and choose A4 or Letter size.

Blocking Search Engines
---------

Disable search engine indexing by adding the following code to the docoument’s `<head>`:

```
<meta name="robots" content="noindex">
```

Customer Support
---------

Contact me through https://themeforest.net/user/webpraktikos or hi@webpraktikos.com

If you have any questions or comments, feel free to message me. Always happy to hear from you. I’d love to chat.  
P.S. Stupid questions don’t exist for this one.

Updates
---------

I will work on Universal Resume almost daily, indefinitely. Every 5 days is the new release.

Changelog
---------


