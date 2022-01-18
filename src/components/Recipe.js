//to create a React component, use a JS funstion that return
function Recipe({
    //to get access to attributes, put {attribute_name} in the arguement of the function
    ingredients,
    title,
    prep_time,
}){

    /*
    <li>ingredient 1</li>
    <li>ingredient 2</li>
    */
    
    return (
        <div>
         <h2>
             {title}
         </h2>
         <p>
             {prep_time}
         </p>
        <ol>
           {ingredients.map(
               //.map is a built in function of arrays that allow you to process them one at a time.

               //remember when uusing .map that you need to provide a *unique* key attribute for each item
               (ingredient) => {
               return <li key={ingredient}>{ingredient}</li>;
           })} 
        </ol>
        </div>
    );
}
//this lets other components / JS files use this file
export default Recipe; //this means that another JS file outside of this one will be using the component