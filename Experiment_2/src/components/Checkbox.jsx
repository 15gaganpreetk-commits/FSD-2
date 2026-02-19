import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import './Checkbox.css';

export default function CheckboxComponent() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup className="checkbox-container">
      <h3>Checkbox Example</h3>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="option"
            color="primary"
            size="medium"
          />
        }
        label="I agree to the terms and conditions"
        className="checkbox-label"
      />
      <p className="checkbox-status">
        {checked ? 'Checkbox is checked ✓' : 'Checkbox is unchecked'}
      </p>
    </FormGroup>
  );
}