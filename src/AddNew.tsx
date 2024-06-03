import React from 'react';

const AddNew: React.FC<{ addNewTile: () => void }> = ({ addNewTile }) => {
    return (
      <div className="add-new-tile" onClick={addNewTile}>
        <div className="plus-sign-y"></div>
        <div className="plus-sign-x"></div>
      </div>
    );
  };

export default AddNew;