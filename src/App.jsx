import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export const App = () => {
  const [lists, setLists] = useState([
    { id: 'list1', cards: ['card1', 'card2', 'card3'] },
    { id: 'list2', cards: ['card4', 'card5', 'card6'] },
    { id: 'list3', cards: ['card7', 'card8', 'card9'] },
  ]);
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (result.type === 'list') {
      // Reordenar listas
      const newLists = Array.from(lists);
      const [reorderedList] = newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, reorderedList);

      setLists(newLists);
    } else if (result.type === 'card') {
      // Mover carta dentro de la misma lista o entre listas diferentes
      const sourceListId = source.droppableId;
      const destinationListId = destination.droppableId;
      const sourceList = lists.find((list) => list.id === sourceListId);
      const destinationList = lists.find((list) => list.id === destinationListId);
      const sourceCards = Array.from(sourceList.cards);
      const destinationCards = Array.from(destinationList.cards);
      const [movedCard] = sourceCards.splice(source.index, 1);
      destinationCards.splice(destination.index, 0, movedCard);

      const newLists = lists.map((list) =>
        list.id === sourceListId
          ? { ...list, cards: sourceCards }
          : list.id === destinationListId
          ? { ...list, cards: destinationCards }
          : list
      );

      setLists(newLists);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" direction="horizontal" type="list">
        {(provided) => (
          <div className="app" ref={provided.innerRef} {...provided.droppableProps}>
            {lists.map((list, index) => (
              <Draggable key={list.id} draggableId={list.id} index={index}>
                {(provided) => (
                  <div
                    className="list"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Droppable droppableId={list.id} type="card">
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                          {list.cards.map((card, index) => (
                            <Draggable key={card} draggableId={card} index={index}>
                              {(provided) => (
                                <div
                                  className="card"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {card}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
};