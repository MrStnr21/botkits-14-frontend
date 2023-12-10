import React, { useState } from 'react';

/**
 * кастомный худ для добавления drag-поведения
 * @param onDrop React.DragEventHandler<Element>
 * @returns
 */
const useDrag = (onDrop: React.DragEventHandler<Element>) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleDragOver = (e: React.DragEvent<Element>) => e.preventDefault();
  const handleDrop = (e: React.DragEvent<Element>) => {
    onDrop(e);
    setIsDragging(false);
  };

  return {
    isDragging,
    isHovered,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useDrag;
