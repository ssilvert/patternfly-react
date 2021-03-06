import React from 'react';
import { ExclamationCircleIcon } from '@patternfly-safe/react-icons';

export const PropsTable = ({ caption, propList }) => (
  <table className="pf-c-table pf-m-compact pf-m-grid-md" role="grid" aria-label="Properties for a component">
    <caption>{caption}</caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th className="pf-c-table__icon" scope="col">Required</th>
        <th scope="col">Default</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      {propList && propList.map(prop =>
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type
            ? prop.type.name
            : prop.tsType ? prop.tsType.name : ''}</td>
          <td className="pf-c-table__icon">{prop.required && <ExclamationCircleIcon />}</td>
          <td>{prop.defaultValue && prop.defaultValue.value}</td>
          <td>{'' + prop.description}</td>
        </tr>
      )}
    </tbody>
  </table>
);
