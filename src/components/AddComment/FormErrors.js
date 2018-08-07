import React from 'react';

export const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map(
      (fieldName, i) =>
        formErrors[fieldName].length > 0 && (
          <p key={i}>
            {fieldName} {formErrors[fieldName]}
          </p>
        )
    )}
  </div>
);
