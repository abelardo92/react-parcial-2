import React, { ChangeEventHandler } from 'react';

interface IRolesMenu {
  role: number,
  handleChange: ChangeEventHandler<HTMLInputElement>,
};

function RolesMenu({role, handleChange}: IRolesMenu) {
  return (
    <p>
    Radio buttons:
    <label>
      <input
        type="radio"
        name="role"
        value={1}
        checked={role == 1}
        onChange={handleChange}
      />
      Role 1
    </label>
    <label>
      <input
        type="radio"
        name="role"
        value={2}
        checked={role == 2}
        onChange={handleChange}
      />
      Role 2
    </label>
    <label>
      <input
        type="radio"
        name="role"
        value={3}
        checked={role == 3}
        onChange={handleChange}
      />
      Role 3
    </label>
    
    </p>
  );
}

export default RolesMenu;