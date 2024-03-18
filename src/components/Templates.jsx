import React, { useState, useEffect } from "react";

const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch("https://my-json-server.typicode.com/<username>/<repo>/templates");
        const data = await response.json();
        setTemplates(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTemplates();
  }, []);

  return (
    <div>
      {templates.map((template) => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <p>{template.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Templates;
