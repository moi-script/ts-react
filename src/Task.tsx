

// Quick Props


// interface TagsProps {
//     tags : ["new", "sale"]
// }
// interface ProductProps extends TagsProps {
//     title? : string,
//     price?: number,
//     isAvailable? : boolean,
// }
// function ShowTags({tags} : TagsProps) {
//     return (<>
//     <p> Tags: 
//           {(typeof tags === "object" && tags.length > 0) && tags.map((item, key) => (
//             <span key={key} style={{ marginRight: '5px' }}>
//             {item}
//           </span>
//           ) )}

//     </p>
//     </>)
// }
// function ShowProducts({title, price, isAvailable, tags} : ProductProps) {
//     return (
//         <>
//         <h1>Title : {title}</h1>
//         <h1>Price : {price}</h1>

//         {isAvailable && <button>Buy Now</button>}
//         <ShowTags tags={tags}/>
//         </>
//     )
// }




// State and events 