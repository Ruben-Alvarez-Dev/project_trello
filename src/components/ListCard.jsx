import React from 'react'
import { TaskCard } from './TaskCard'
import { Draggable } from 'react-beautiful-dnd'

export const ListCard = ({id, index}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(draggableProvided) => (
        <div
          className="listCard"
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      )}      
    </Draggable>
  )
}
