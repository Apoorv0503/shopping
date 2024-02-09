// AssignedAgent.js
import React from 'react';

const AssignedAgent = ({ agent }) => {
  return (
    <div>
      <h2>Assigned Agent</h2>
      <p>
        <strong>Name:</strong> {agent.name}
      </p>
      <p>
        <strong>Email:</strong> {agent.email}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default AssignedAgent;
