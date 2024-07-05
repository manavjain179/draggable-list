import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialItems = [
  { id: '1', content: 'Scotland Island', location: 'Sydney, Australia', image: '/images/scotland-island.jpg' },
  { id: '2', content: 'The Charles Grand Brasserie & Bar', location: 'Lorem ipsum, Dolor', image: '/images/charles-grand-brasserie.jpg' },
  { id: '3', content: 'Bridge Climb', location: 'Dolor, Sit amet', image: '/images/bridge-climb.jpg' },
  { id: '4', content: 'Clam Bar', location: 'Etcetera veni, Vidi vici', image: '/images/clam-bar.jpg' },
  { id: '5', content: 'Vivid Festival', location: 'Sydney, Australia', image: '/images/vivid-festival.jpg' },
];

function DraggableList() {
  const [items, setItems] = React.useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-gray-100 p-4 rounded-lg w-full max-w-md mx-auto"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`bg-white p-4 mb-2 rounded-lg shadow-md flex items-center ${snapshot.isDragging ? 'bg-blue-50' : ''}`}
                  >
                    <img src={item.image} alt={item.content} className="w-16 h-16 mr-4 rounded-md" />
                    <div>
                      <h4 className="font-semibold">{item.content}</h4>
                      <p className="text-gray-500">{item.location}</p>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableList;

// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import Head from 'next/head';

// const initialItems = [
//   { id: '1', content: 'Scotland Island', location: 'Sydney, Australia', image: '/images/scotland-island.jpg' },
//   { id: '2', content: 'The Charles Grand Brasserie & Bar', location: 'Lorem ipsum, Dolor', image: '/images/charles-grand-brasserie.jpg' },
//   { id: '3', content: 'Bridge Climb', location: 'Dolor, Sit amet', image: '/images/bridge-climb.jpg' },
//   { id: '4', content: 'Clam Bar', location: 'Etcetera veni, Vidi vici', image: '/images/clam-bar.jpg' },
//   { id: '5', content: 'Vivid Festival', location: 'Sydney, Australia', image: '/images/vivid-festival.jpg' },
// ];

// const getItemStyle = (isDragging, draggableStyle) => ({
//   userSelect: 'none',
//   padding: '16px',
//   margin: `0 0 8px 0`,
//   background: isDragging ? '#e0f7fa' : '#ffffff',
//   boxShadow: isDragging ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
//   borderRadius: '8px',
//   transform: isDragging ? 'scale(0.95)' : 'scale(1)',
//   transition: 'transform 0.2s',
//   ...draggableStyle,
// });

// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? '#e3f2fd' : '#f4f4f4',
//   padding: '8px',
//   borderRadius: '8px',
//   width: '400px',
//   margin: '0 auto',
// });

// function DraggableList() {
//   const [items, setItems] = React.useState(initialItems);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const reorderedItems = Array.from(items);
//     const [removed] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, removed);
//     setItems(reorderedItems);
//   };

//   return (
//     <>
//       <Head>
//         <title>Draggable List</title>
//       </Head>
//       <div className="container mx-auto p-4">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(provided, snapshot) => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 style={getListStyle(snapshot.isDraggingOver)}
//               >
//                 {items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided, snapshot) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         style={getItemStyle(
//                           snapshot.isDragging,
//                           provided.draggableProps.style
//                         )}
//                       >
//                         <img src={item.image} alt={item.content} className="w-16 h-16 mr-4 rounded-md" />
//                         <div>
//                           <h4 className="font-semibold">{item.content}</h4>
//                           <p className="text-gray-500">{item.location}</p>
//                         </div>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     </>
//   );
// }

// export default DraggableList;

