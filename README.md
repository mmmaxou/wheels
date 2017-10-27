# Wheels

Create a wheel of choices for a your application

## Status: development

## Example

* Using http + javascript

```--- HTTP --- 
  <div class="wheel-container"> 
     <div class="wheel-overlay"> 
       <div class="wheel" data-multiplier=2.5> 
         <div class="wheel-center"> 
           <div class="question">Qui est patrick sebastien?</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Quelqu'un</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Oui</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Non</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">42</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Obiwan Kenobi</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Le grand frère de Donald Trump</div> 
         </div> 
         <div class="wheel-outer"> 
           <div class="content">Le grand frère de Donald Trump le président des Etats unis</div> 
         </div> 
       </div> 
     </div> 
   </div> 
--- JAVASCRIPT --- 
 CircleCreator.init()
 ```

* Using Javascript only
```
 CircleCreator.init({ 
   multiplier: 3, 
   selector: ".wheel-container", 
   customDom: true, 
   question: "Use the <question> property to add your question", 
   answers: [ 
     "Life", "Is", "A", "Beautiful", "Thing", "Made", "For", "Us" 
   ] 
 })
```

* Screenshot of the render
![Image of the Wheel](https://mmmaxou.github.com/wheels/exemple/wheel-screenshot.png)

## Installation

```
npm install voice-interaction
```

* Link the library to your app
<link rel="/docs/wheels.css" />
<script src="/docs/wheels.js"></script>