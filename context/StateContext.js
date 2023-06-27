//2nd version (2nd of 2 below that is commented out) has comments throughout about process. I'm using 1st version bc I needed to make a few adjustments to fix some issues with local storage

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const savedTotalPrice = localStorage.getItem('totalPrice');
    const savedTotalQuantities = localStorage.getItem('totalQuantities');

    if (savedCartItems.length) {
      setCartItems(savedCartItems);
    }
    if (savedTotalPrice && savedTotalPrice !== 'undefined') {
      setTotalPrice(parseFloat(savedTotalPrice));
    }
    if (savedTotalQuantities && savedTotalQuantities !== 'undefined') {
      setTotalQuantities(parseInt(savedTotalQuantities));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem('cartItems');
    } else {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    localStorage.setItem('totalPrice', totalPrice.toString());
    localStorage.setItem('totalQuantities', totalQuantities.toString());
  }, [cartItems, totalPrice, totalQuantities]);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);

    toast.error(`${foundProduct.name} removed from the cart.`);
  };

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id); 
    const index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
  
    if (value === 'inc') {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: foundProduct.quantity + 1 };
          }
          return item;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
  
      setTotalPrice((prevTotalPrice) => {
        localStorage.setItem('totalPrice', prevTotalPrice + foundProduct.price);
        return prevTotalPrice + foundProduct.price;
      });
  
      setTotalQuantities((prevTotalQuantities) => {
        localStorage.setItem('totalQuantities', prevTotalQuantities + 1);
        return prevTotalQuantities + 1;
      });
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: foundProduct.quantity - 1 };
            }
            return item;
          });
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
          return updatedCartItems;
        });
  
        setTotalPrice((prevTotalPrice) => {
          localStorage.setItem('totalPrice', prevTotalPrice - foundProduct.price);
          return prevTotalPrice - foundProduct.price;
        });
  
        setTotalQuantities((prevTotalQuantities) => {
          localStorage.setItem('totalQuantities', prevTotalQuantities - 1);
          return prevTotalQuantities - 1;
        });
      }
    }
  };
  

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty -1 < 1) return 1; 
      return prevQty - 1
    })
  }

  return (
    <Context.Provider
      value={{ 
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)


// ************************END OF 1st VERSION**************************
// 2nd Version

// //Here, we're going to manage the entire state of our application.
// import React, { createContext, useContext, useState, useEffect } from 'react'
// import { toast } from 'react-hot-toast' //this is pop up notification whenever add something to cart, remove it, or finish an order

// const Context = createContext();

// //NOTE - if need to know how did all this before local storage, look at the previous tutorial ecommerce project you did

// export const StateContext = ({ children }) => { //children is an important prop that means whenver we call our state context like <State> {children} </State> , whatever we pass into it is considered children, and we can render it out
//   //below, there are going to be a lot of different states used in context
//   const [showCart, setShowCart] = useState(false) //we are not currently showing that cart to when we are
//   const [cartItems, setCartItems] = useState([]) //we always need to know what items we have in our cart. Going to use local storage as well for this
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [totalQuantities, setTotalQuantities] = useState(0)

//   const [qty, setQty] = useState(1) //to change quanity for each individual item
//   useEffect(() => {
//     // ****NOTE - Should these below be in separate useEffects or ok they're all in one? Can do savedTotalPrice and savedTotalQuantities either way below (commented out code). also, It's worth noting that localStorage only stores strings, so you need to use JSON.stringify() to store non-string values and JSON.parse() to retrieve them. Also, make sure to clear the local storage when the user logs out or when the cart is cleared -> DO I NEED TO DO THIS?. Also, is there are a way to change so when reload it doesn't go from cart showing 0 to say 4 if you have 4 items in cart, like can it show 4 right away
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || []
//     if (savedCartItems) {
//       setCartItems(savedCartItems);
//     }
//     // const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0
//     // if (savedTotalPrice) {
//     //   setTotalPrice(savedTotalPrice);
//     // }
//     const savedTotalPrice = localStorage.getItem("totalPrice");
//     if (savedTotalPrice && savedTotalPrice !== 'undefined') {
//       setTotalPrice(JSON.parse(savedTotalPrice));
//     }

//     // const savedTotalQuantities = JSON.parse(localStorage.getItem("totalQuantities")) || 0
//     // if (savedTotalQuantities) {
//     //   setTotalQuantities(savedTotalQuantities);
//     // }
//     const savedTotalQuantities = localStorage.getItem("totalQuantities");
//     if (savedTotalQuantities && savedTotalQuantities !== 'undefined') {
//       setTotalQuantities(JSON.parse(savedTotalQuantities));
//     }


//   }, []);

//   useEffect(() => {
//     if (totalQuantities === 0) {
//       localStorage.clear();
//     }
//   }, [totalQuantities])
  

//   let foundProduct;
//   let index;

//   const onAdd = (product, quantity) => {
//     console.log('cartItems',cartItems);
//     //check if product is already in cart
//     const checkProductInCart = cartItems.find((item) => item._id === product._id)

//     //Below is updating our state I think. Now need it to happen both inside of below if and else
//     // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
//     // localStorage.setItem("totalPrice", JSON.stringify((prevTotalPrice) => prevTotalPrice + product.price * quantity))
//     // Note - I think I can do both lines above like  the one line below as well
//     // setTotalPrice((prevTotalPrice) => {
//     //   localStorage.setItem("totalPrice", prevTotalPrice + product.price * quantity);
//     //   return prevTotalPrice + product.price * quantity
//     // });
//     // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
//     // localStorage.setItem("totalQuantities", JSON.stringify((prevTotalQuantities) => prevTotalQuantities + quantity))
//     //***Above, have no idea how we're getting prevTotalPrice or prevTotalQuantities - perhaps it's just a parameter and this is not calling the function, but we wiill do that later

//     setTotalPrice((prevTotalPrice) => {
//       localStorage.setItem("totalPrice", prevTotalPrice + product.price * quantity);
//       return prevTotalPrice + product.price * quantity
//     });

//     setTotalQuantities((prevTotalQuantities) => {
//       localStorage.setItem("totalQuantities", prevTotalQuantities + quantity);
//       return prevTotalQuantities + quantity
//     });
    
//     if (checkProductInCart) {

//       //update the actual items in cart
//       const updatedCartItems = cartItems.map((cartProduct) => { //udate if already exists in cart
//         if (cartProduct._id === product._id) return { //return new object
//           ...cartProduct, //spread cartProduct - *not sure what this is doing, is this just duplicating cartProduct? is cartProduct an array or object
//           quantity: cartProduct.quantity + quantity //update quantity
//         }
//       })

//       setCartItems(updatedCartItems)
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
//     } else {
//       product.quantity = quantity;

//       setCartItems([...cartItems, { ...product }])
//       localStorage.setItem("cartItems", JSON.stringify([...cartItems, { ...product }]))
//     }
//     // console.log('cartItems',cartItems);
//     toast.success(`${qty} ${product.name} added to the cart.`)
//   }

//   const onRemove = (product) => {
//     foundProduct = cartItems.find((item) => item._id === product._id)
//     const newCartItems = cartItems.filter((item) => item._id !== product._id) //this is almost same as below (just product._id instead of id bc don't have access to id here) in toggleCartItemQuantity function (even though we ended up not using it there) -> essentially, we're using filter to keep all items except the one we are currently looking for

//     // setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
//     // setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
//     // setCartItems(newCartItems);

//     setTotalPrice((prevTotalPrice) => {
//       localStorage.setItem("totalPrice", prevTotalPrice - foundProduct.price * foundProduct.quantity);
//       return prevTotalPrice - foundProduct.price * foundProduct.quantity
//     });

//     setTotalQuantities((prevTotalQuantities) => {
//       localStorage.setItem("totalQuantities", prevTotalQuantities - foundProduct.quantity);
//       return prevTotalQuantities - foundProduct.quantity
//     });
//     setCartItems(newCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(newCartItems));
//   }

//   //2:17 - supposedly there's an error around 2:31 - fixed error but go through vid again from 2:17 to 2:31 for better understanding

//   const toggleCartItemQuantity = (id, value) => {
//     foundProduct = cartItems.find((item) => item._id === id)
//     index = cartItems.findIndex((product) => product._id === id) //give us the index of the item in the cart item array
//     // const newCartItems = cartItems.splice(index, 1) //remove the item then spread it below to add to cartItems state
//     // Shouldn't use splice method bc it mutates state, so use filter below
//     const newCartItems = cartItems.filter((item) => item._id !== id) //use filter to keep all the items except the one we are currently looking for

//     //are we incrementing or decrementing quantity
//     if (value === 'inc') {
//       // foundProduct.quantity += 1;
//       // cartItems[index] = foundProduct;
//       //**Above, What is cartItems? It is an array and it is a state propert, and most important rule of react is to never mutate the state, which means you should never update the state with an equals sign like we did in commented out code above, but should always use the setter function like 'setCartItems();.
//       // below is proper way to do it
//       // let newCartItems = [...cartItems, { ...foundProduct, quantity: foundProduct.quanity + 1 }]
//       // setCartItems(newCartItems)
//       // OR, even simpler
//       // setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quanity + 1 }]) //*****IMPORTANT explanation***create new array by spreading current array of cartItems and add new product inside of it by creating new object, spread all of the properties of that object, and update the quantity of that object by adding 1 bc we are incrementing it. Had to change it to below though to be newCartItems - explanation around 2:27:00 in vid bc i'm kinda confused - maybe listen from around 2:17 through 2:35 to refresh understanding
//       // setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
//       // below fixes products rearranging order in cart when increase quantity
//       setCartItems(prevCartItems => {
//         const updatedCartItems = prevCartItems.map( item => {          
//             if (item._id === id){
//                 return {...item, quantity: foundProduct.quantity + 1}
//             }
//             return item
//         });
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         return updatedCartItems;
//     });
    


//       // setCartItems( prevCartItems => 
//       //   prevCartItems.map( item => {          
//       //       if (item._id === id){
//       //           return {...item, quantity: foundProduct.quantity + 1}
//       //       }
//       //       return item
//       //   })
//       // );
//       // setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
//       // setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
//       setTotalPrice((prevTotalPrice) => {
//         localStorage.setItem("totalPrice", prevTotalPrice + foundProduct.price);
//         return prevTotalPrice + foundProduct.price
//       });
  
//       setTotalQuantities((prevTotalQuantities) => {
//         localStorage.setItem("totalQuantities", prevTotalQuantities + 1);
//         return prevTotalQuantities + 1
//       });
//     } else if (value === 'dec') {
//       if (foundProduct.quantity > 1) { //this is only time we'll decrease, bc if quantity is 1, we'll just use the 'x' button to get rid of item
//         // setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
//         // below fixes products rearranging order in cart when decrease quantity
//         setCartItems( prevCartItems => {
//           const updatedCartItems = prevCartItems.map( item => {          
//               if (item._id === id){
//                   return {...item, quantity: foundProduct.quantity - 1}
//               }
//               return item
//           })
//           localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//           return updatedCartItems;
//         });
//         // setCartItems( prevCartItems => 
//         //   prevCartItems.map( item => {          
//         //       if (item._id === id){
//         //           return {...item, quantity: foundProduct.quantity - 1}
//         //       }
//         //       return item
//         //   })
//         // );
//         // setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
//         // setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
//         setTotalPrice((prevTotalPrice) => {
//           localStorage.setItem("totalPrice", prevTotalPrice - foundProduct.price);
//           return prevTotalPrice - foundProduct.price
//         });
    
//         setTotalQuantities((prevTotalQuantities) => {
//           localStorage.setItem("totalQuantities", prevTotalQuantities - 1);
//           return prevTotalQuantities - 1
//         });
//       }
//     }
//   }

//   const incQty = () => {
//     setQty((prevQty) => prevQty + 1)
//   }

//   const decQty = () => {
//     setQty((prevQty) => {
//       if(prevQty -1 < 1) return 1; //bc can't go lower than 1
//       return prevQty - 1
//     })
//   }

//   //create our context provide. Below means we are not rendering anything, we are just wrapping everything with our context provider, and we're going to pass some values to it
//   return (
//     <Context.Provider
//       value={{ //below pass values of all of our state fields. This makes it so we'll be able to access the values from these states in any one of our components. But to app that happen we will have to wrap entire app with state context in _app.js
//         showCart,
//         setShowCart,
//         cartItems,
//         setCartItems,
//         totalPrice,
//         setTotalPrice,
//         totalQuantities,
//         setTotalQuantities,
//         qty,
//         incQty,
//         decQty,
//         onAdd,
//         toggleCartItemQuantity,
//         onRemove
//       }}
//     >
//       {children}
//     </Context.Provider>
//   )
// }

// //below, special function that allows us to more easily grab the state, essentially being like a hook
// export const useStateContext = () => useContext(Context)