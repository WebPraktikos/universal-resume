Universal Résumé Template
---------

Minimal and formal résumé (CV) website template for print, mobile, and desktop. The proportions are the same on the screen and paper. Built with amazing [Tailwind CSS](https://tailwindcss.com/).

[Letter Size Demo](https://universal-resume.netlify.com/) | [A4 Size Demo](https://universal-resume-a4.netlify.com/) | [Multiple Pages Demo](https://universal-resume-pages.netlify.com/) | [Mobile Demo](https://www.responsinator.com/?url=https%3A%2F%2Funiversal-resume-pages.netlify.com%2F)

**How to print or save it as PDF?**  
In Chrome, Right-click → Print. In Firefox, File → Print. More info [here](#printing).

**Does it support A4 and Letter paper sizes?**  
Yes, replace all `-letter` classes with `-a4`, and uncomment specified code blocks. More info [here](#a4-size-variant).

**What font does it use?**  
Per [Butterick’s](https://practicaltypography.com/) free font recommendations, I’ve chosen IBM Plex.

**Why it’s made?**  
I couldn’t find any formal or professional résumé (CV) website with good typography that is optimized for the Web, print, PDF, and mobile. Also, researching what recruiters want, my priorities were fast scanning time and all content to fit on one page.

**Donate?**  
If you find this project useful, please consider supporting me via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W6QE6CNA55WPA&source=url).

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

Only generate CSS that is used (which results in much smaller file size):

```
npm run public
```

Starting Point
---------

`public/index.html` is the location where content is inserted. By copy-pasting HTML, add pages, sections, subsection, etc.

`npm run public` will make **public** directory ready for drag-n-drop to for example https://app.netlify.com/drop (registration required beforehand).

Tailwind CSS
---------

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It has great [documentation](https://tailwindcss.com/docs/installation).

You rarely need to do anything outside the `index.html`. Compose together a bunch of pre-made utility classes that reflect a certain design system. There’s no cascade or selector specificity. This results in faster and much more pleasurable workflow, especially long-term.

Custom CSS
---------

Code from `tailwind.config.js` and `tailwind.css` transpiles to `public/style.css`. Default tailwind CSS is overwritten or extended with `tailwind.config.js`.

Here is the default tailwind config: [defaultConfig.stub.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js), and here’s the additional information from the tailwind documentation: [theme](https://tailwindcss.com/docs/theme/#app).

If you need to change CSS in the usual way, add a class to the HTML element and write CSS inside the `tailwind.css` file.

Balanced Columns
---------

Removing `col-fill` class will make both columns equally tall. Moreover, removing `md:h-letter` and `md:h-letter-col` classes will eliminate fixed proportions of the letter or A4 page — thereby removing unnecessary vertical space when displaying short columns.

A4 Size Variant
---------

Change the default size (letter) to A4:

**1.** Inside `public/index.html`, replace every `-letter` with `-a4`.

**2.** Inside `tailwind.config.js`, uncomment code block below `/* For A4 size */` and then comment code block below `/* For Letter size */`

**3.** Inside `tailwind.css`, uncomment code below `/* For A4 size */` and then comment code below `/* For Letter size */`

**Important:** Too much content for one page will break it in form of additional columns.

Printing
---------

### Chrome

Right-click → Print.  
Also, choose the **Save as PDF** option if needed.

By expanding **More Settings**, change **Page Size** to A4 or Letter.

### Firefox

File → Print.

Choose A4 or Letter size by navigating to **Properties → Advanced → Paper Size**.

### Adobe Acrobat Reader

File → Print.

By clicking on the **Page Setup** button, you are taken to the window to choose A4 or Letter size.

Blocking Search Engines
---------

Disable search engine indexing by adding the following code to the document `<head>`:

```
<meta name="robots" content="noindex">
```

Contact Me / Hire Me
---------

If you have any question, comment, or issue, please don’t hesitate to contact me at:
- hi@webpraktikos.com
- https://twitter.com/webpraktikos
- or open an issue on GitHub (Issues → New issue)

Also, you can hire me to do good affordable work ($20/h). I’m focused on Tailwind CSS, React JS, Gatsby JS, and Gutenberg Editor.

Always happy to hear from you!

License
---------

NonCommercial-ShareAlike 1.0 Generic (CC NC-SA 1.0)  
https://creativecommons.org/licenses/nc-sa/1.0/

### You are free to:

Share — copy and redistribute the material in any medium or format  

Adapt — remix, transform, and build upon the material

### Under the following terms:

NonCommercial — You may not use the material for commercial purposes.

ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
