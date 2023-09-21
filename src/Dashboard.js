// import React, { useState } from 'react';
// import { DndContext, closestCenter } from '@dnd-kit/core';
// import {
//   arrayMove,
//   SortableContext,
//   verticalListSortingStrategy,
//   useSortable,
// } from '@dnd-kit/sortable';
// import './styles.css'; // Import the CSS file

// function App() {
//   const photoPaths = [
//     'images/p1.jpg',
//     'images/p2.jpg',
//     'images/p3.jpg',
//     'images/p4.jpg',
//     'images/p5.jpg',
//     'images/p6.jpg',
//     'images/p7.jpg',
//     'images/p8.jpg',
//   ];

//   const [photos, setPhotos] = useState(
//     photoPaths.map((path, index) => ({ id: `photo${index + 1}`, src: path }))
//   );

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       setPhotos((items) => {
//         const activeIndex = items.findIndex((photo) => photo.id === active.id);
//         const overIndex = items.findIndex((photo) => photo.id === over.id);

//         // Swap the positions of the dragged and dropped photos
//         const newItems = [...items];
//         const temp = newItems[activeIndex];
//         newItems[activeIndex] = newItems[overIndex];
//         newItems[overIndex] = temp;

//         return newItems;
//       });
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <div className="photo-gallery">
//         <SortableContext
//           items={photos.map((photo) => photo.id)}
//           strategy={verticalListSortingStrategy}
//         >
//           {photos.map((photo) => (
//             <SortablePhotoItem key={photo.id} {...photo} />
//           ))}
//         </SortableContext>
//       </div>
//     </DndContext>
//   );
// }

// function SortablePhotoItem({ id, src }) {
//   const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({
//     id,
//   });

//   const style = {
//     transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
//     zIndex: isDragging ? 1 : 'auto',
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       className="photo-item"
//       style={style}
//     >
//       <img src={src} alt={`Photo ${id}`} draggable="false" />
//     </div>
//   );
// }

// export default App;


















import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import './styles.css'; // Import the CSS file

function Dashboard() {
  const photoPaths = [
    'images/p1.jpg',
    'images/p2.jpg',
    'images/p3.jpg',
    'images/p4.jpg',
    'images/p5.jpg',
    'images/p6.jpg',
    'images/p7.jpg',
    'images/p8.jpg',
  ];

  const [photos, setPhotos] = useState(
    photoPaths.map((path, index) => ({ id: `photo${index + 1}`, src: path }))
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setPhotos((items) => {
        const activeIndex = items.findIndex((photo) => photo.id === active.id);
        const overIndex = items.findIndex((photo) => photo.id === over.id);

        // Swap the positions of the dragged and dropped photos
        const newItems = [...items];
        const temp = newItems[activeIndex];
        newItems[activeIndex] = newItems[overIndex];
        newItems[overIndex] = temp;

        return newItems;
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="photo-gallery">
        <SortableContext
          items={photos.map((photo) => photo.id)}
          strategy={verticalListSortingStrategy}
        >
          {photos.map((photo) => (
            <SortablePhotoItem key={photo.id} {...photo} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

function SortablePhotoItem({ id, src }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
    zIndex: isDragging ? 1 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="photo-item"
      style={style}
    >
      <img src={src} alt={`Photo ${id}`} draggable="false" />
    </div>
  );
}

export default Dashboard;

