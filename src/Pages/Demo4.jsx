import React from "react";

const Demo4 = () => {
  const cars = [
    {
      id: 1,
      tag: "TECHNOLOGY",
      name: "Tesla Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
    {
      id: 2,
      tag: "TECH",
      name: "Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
    {
      id: 3,
      tag: "LOGIC",
      name: "Tesla truck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },

    {
      id: 4,
      tag: "PRODUCT",
      name: "Tesla ",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },

    {
      id: 5,
      tag: "ITEMS",
      name: "Tesla Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
    {
      id: 6,
      tag: "ITEMS",
      name: "Tesla Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
    {
      id: 7,
      tag: "ITEMS",
      name: "Tesla Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
    {
      id: 8,
      tag: "ITEMS",
      name: "Tesla Cybertruck",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An exploration into the truck's polarising design.",
      avatarimage:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarName: "Carrie Brewer",
      avatarTime: "2h ago",
    },
  ];

  console.log(cars);
  return (
    <div className="container3">
      {cars.map((car, index) => (
        <div key={index} className="card ">
          <img src={car.image} alt="Card Image"></img>
          <div className="content">
            <div className="tag"> {car.tag}</div>
            <div className="title">{car.title}</div>
            <div className="description">{car.description}</div>
            <div className="avatar">
              <img src={car.avatarimage} alt="Carrie Brewer" />
              <div className="avatar-info">
                <div className="name">{car.avatarName}</div>
                <div className="time">{car.avatarTime}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    //   {cars.map((car, id) => (
    //     <div key={id} className="card ">
    //       <img src={car.image} alt="Card Image"></img>
    //       <div className="content">
    //         <div className="tag"> {car.tag}</div>
    //         <div className="title">{car.title}</div>
    //         <div className="description">{car.description}</div>
    //         <div className="avatar">
    //           <img src={car.avatarimage} alt="Carrie Brewer" />
    //           <div className="avatar-info">
    //             <div className="name">{car.avatarName}</div>
    //             <div className="time">{car.avatarTime}</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
  );
};

export default Demo4;

//     <div className="card">
//   <img
//     src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     alt="Card Image"
//   ></img>
//   <div className="content">
//     <div className="tag">TECHNOLOGY</div>
//     <div className="title">
//       Why is the Tesla Cybertruck designed the way it is?
//     </div>
//     <div className="description">
//       An exploration into the truck's polarising design.
//     </div>
//     <div className="avatar">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Carrie Brewer"
//       />
//       <div className="avatar-info">
//         <div className="name">Carrie Brewer</div>
//         <div className="time">2h ago</div>
//       </div>
//     </div>
//   </div>
// </div>

//  <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <img
//           src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Card Image"
//         ></img>
//         <div className="content">
//           <div className="tag">TECHNOLOGY</div>
//           <div className="title">
//             Why is the Tesla Cybertruck designed the way it is?
//           </div>
//           <div className="description">
//             An exploration into the truck's polarising design.
//           </div>
//           <div className="avatar">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Carrie Brewer"
//             />
//             <div className="avatar-info">
//               <div className="name">Carrie Brewer</div>
//               <div className="time">2h ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
