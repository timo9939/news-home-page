# News Homepage

This is a exercise illustrating how to make a news home page.

## Table of contents


- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Built with](#Built-with)





## The challenge

Users should be able to:

- Using grid and flexbox to design the layout of a landing page


### Screenshot

![](./design/desktop-design.jpg)



### Built with

- Semantic HTML5 markup
- CSS Reset
- CSS variable
- Flexbox
- CSS Grid
- Mobile and Desktop Responsive Design




### What I learned
#### Defineing CSS Variable
```css
:root{
    --Soft-orange: hsl(35, 77%, 62%);
    --Soft-red: hsl(5, 85%, 63%);
    
    --Off-white: hsl(36, 100%, 99%);
    --Grayish-blue: hsl(233, 8%, 79%);
    --Dark-grayish-blue: hsl(236, 13%, 42%);
    --Very-dark-blue: hsl(240, 100%, 5%);
}
```
#### Import Google Font Text
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

```

#### Responsive design for Desktop Version (Media Queries)  
```css
@media(min-width:620px){
  article{grid-template-columns: 1fr 1fr;
    min-width: 600px;
    max-width: 600px;
    
    position: absolute;
    top: 10%;
  } 
  }
```



