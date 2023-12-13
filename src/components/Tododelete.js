export const Tododelete = ({ index, onDelete }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return <button onClick={handleDelete}> 삭제 </button>;
};
