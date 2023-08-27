import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflow: 'hidden',
    background: 'transparent',
  },
  overlay: {
    backgroundColor: '#23272f',
  },
};

Modal.setAppElement('#root');

export const RecipeModal = ({ isOpen, onRequestClose, recipe }) => {
  if (!recipe) return null;
  const { title, preview } = recipe;
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button type="button" onClick={onRequestClose}>
        Close
      </button>
      <h2>{title}</h2>
      <img src={preview} alt={title} />
    </Modal>
  );
};
